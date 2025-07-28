document.addEventListener('DOMContentLoaded', function() {
    // 전역 변수 선언
    let currentTab = 'intro';
    let currentProjectStep = 1;
    let currentEmotionScenario = 1;
    let currentSELCompetency = 'self-awareness';
    let aiChatHistory = [];

    // 로컬 스토리지에서 저장된 데이터 불러오기
    loadUserData();

    // 초기화 함수
    function initialize() {
        // 탭 전환 이벤트 리스너 등록
        document.querySelectorAll('.nav-item, .tab-button').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetTabId = this.getAttribute('data-target');
                if (targetTabId) {
                    switchTab(targetTabId);
                }
            });
        });

        // 프로젝트 기획 마법사 버튼 이벤트 등록
        document.querySelectorAll('.project-next-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const nextStep = parseInt(this.getAttribute('data-next-step'));
                if (!isNaN(nextStep)) {
                    navigateProjectStep(nextStep);
                }
            });
        });

        document.querySelectorAll('.project-prev-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const prevStep = parseInt(this.getAttribute('data-prev-step'));
                if (!isNaN(prevStep)) {
                    navigateProjectStep(prevStep);
                }
            });
        });

        // 감정 시나리오 버튼 이벤트 등록
        document.querySelector('.emotion-next-btn')?.addEventListener('click', function() {
            navigateEmotionScenario(currentEmotionScenario + 1);
        });

        document.querySelector('.emotion-prev-btn')?.addEventListener('click', function() {
            navigateEmotionScenario(currentEmotionScenario - 1);
        });

        // SEL 역량 탭 이벤트 등록
        document.querySelectorAll('.sel-tab-btn').forEach(tab => {
            tab.addEventListener('click', function() {
                const competency = this.getAttribute('data-target');
                if (competency) {
                    switchSELCompetency(competency);
                }
            });
        });

        // AI 채팅 입력 이벤트 등록
        document.querySelector('#ai-chat-form')?.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = document.querySelector('#ai-chat-input');
            if (input && input.value.trim()) {
                sendAIMessage(input.value);
                input.value = '';
            }
        });

        // 추천 질문 클릭 이벤트 등록
        document.querySelectorAll('.suggested-question').forEach(question => {
            question.addEventListener('click', function() {
                const text = this.textContent;
                document.querySelector('#ai-chat-input').value = text;
            });
        });

        // 감정 버튼 클릭 이벤트 등록
        document.querySelectorAll('.emotion-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // 같은 그룹의 다른 버튼들에서 active 클래스 제거
                const scenario = this.closest('.scenario');
                scenario.querySelectorAll('.emotion-btn').forEach(b => b.classList.remove('active'));
                
                // 클릭한 버튼에 active 클래스 추가
                this.classList.add('active');
            });
        });

        // 폼 저장 버튼 이벤트 등록
        document.querySelectorAll('.save-form-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const formId = this.getAttribute('data-form-id');
                if (formId) {
                    saveFormData(formId);
                }
            });
        });

        // 프로젝트 예시 버튼 이벤트 등록
        document.querySelectorAll('.project-example').forEach(example => {
            example.addEventListener('click', function() {
                const exampleId = this.getAttribute('data-example');
                showProjectExample(exampleId);
            });
        });

        // 키보드 네비게이션 지원
        document.addEventListener('keydown', function(e) {
            // ESC 키로 모달 닫기 (해당하는 경우)
            if (e.key === 'Escape') {
                // 필요시 모달 닫기 로직 추가
            }
            
            // Tab 키 네비게이션은 브라우저 기본 동작 사용
            // 접근성을 위해 focus outline 보장
        });
    }

    // 탭 전환 함수
    function switchTab(tabId) {
        try {
            // 모든 탭 콘텐츠 숨기기
            document.querySelectorAll('.section-container').forEach(container => {
                container.classList.remove('active');
            });
            
            // 선택한 탭 콘텐츠 표시
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
                
                // 탭 버튼 스타일 업데이트
                document.querySelectorAll('.tab-button, .nav-item').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                document.querySelectorAll(`.tab-button[data-target="${tabId}"], .nav-item[data-target="${tabId}"]`).forEach(btn => {
                    btn.classList.add('active');
                });
                
                // 현재 탭 상태 저장
                currentTab = tabId;
                localStorage.setItem('currentTab', tabId);
            } else {
                console.error(`Tab with ID "${tabId}" not found`);
                // 기본 탭으로 폴백
                document.getElementById('intro')?.classList.add('active');
            }
        } catch (error) {
            console.error('Error switching tabs:', error);
        }
    }

    // 프로젝트 단계 이동 함수
    function navigateProjectStep(stepNumber) {
        try {
            // 유효성 검사
            if (stepNumber < 1 || stepNumber > 5) {
                console.error('Invalid step number:', stepNumber);
                return;
            }
            
            // 현재 단계 저장
            document.querySelectorAll('.project-step').forEach(step => {
                step.style.display = 'none';
            });
            
            // 선택한 단계 표시
            const targetStep = document.getElementById(`project-step-${stepNumber}`);
            if (targetStep) {
                targetStep.style.display = 'block';
                currentProjectStep = stepNumber;
                
                // 진행 상태 표시
                updateProjectProgress(stepNumber);
                
                // 현재 단계 저장
                localStorage.setItem('currentProjectStep', stepNumber);
                
                // 이전 단계 데이터 저장
                if (stepNumber > 1) {
                    saveProjectStepData(stepNumber - 1);
                }
            } else {
                console.error(`Project step ${stepNumber} not found`);
            }
        } catch (error) {
            console.error('Error navigating project step:', error);
        }
    }

    // 프로젝트 진행 상태 업데이트
    function updateProjectProgress(step) {
        const totalSteps = 5;
        const progressPercentage = (step / totalSteps) * 100;
        
        const progressBar = document.querySelector('#project-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progressPercentage}%`;
            progressBar.setAttribute('aria-valuenow', progressPercentage);
        }
        
        // 단계 표시기 업데이트
        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            if (index < step) {
                indicator.classList.add('completed');
                indicator.classList.remove('current');
            } else if (index === step - 1) {
                indicator.classList.add('current');
                indicator.classList.remove('completed');
            } else {
                indicator.classList.remove('completed');
                indicator.classList.remove('current');
            }
        });
    }

    // 프로젝트 단계 데이터 저장
    function saveProjectStepData(step) {
        const formData = {};
        
        // 각 단계별 필드 수집
        if (step === 1) {
            const topic = document.querySelector('#project-topic')?.value;
            const problem = document.querySelector('#project-problem')?.value;
            const goals = document.querySelector('#project-goals')?.value;
            
            formData.topic = topic;
            formData.problem = problem;
            formData.goals = goals;
        } else if (step === 2) {
            // 체크된 목표 항목 수집
            const checkedGoals = [];
            document.querySelectorAll('input[name="learning-goals"]:checked').forEach(checkbox => {
                checkedGoals.push(checkbox.value);
            });
            
            const measurableGoal = document.querySelector('#measurable-goal')?.value;
            const duration = document.querySelector('#project-duration')?.value;
            
            formData.checkedGoals = checkedGoals;
            formData.measurableGoal = measurableGoal;
            formData.duration = duration;
        }
        // 추가 단계도 필요에 따라 구현
        
        // 로컬 스토리지에 저장
        localStorage.setItem(`projectStep${step}`, JSON.stringify(formData));
    }

    // 감정 시나리오 탐색 함수
    function navigateEmotionScenario(scenarioNumber) {
        try {
            const totalScenarios = 5; // 총 시나리오 수
            
            // 유효성 검사
            if (scenarioNumber < 1 || scenarioNumber > totalScenarios) {
                return;
            }
            
            // 현재 시나리오 숨기기
            document.querySelectorAll('.emotion-scenario').forEach(scenario => {
                scenario.style.display = 'none';
            });
            
            // 선택한 시나리오 표시
            const targetScenario = document.querySelector(`.emotion-scenario[data-scenario="${scenarioNumber}"]`);
            if (targetScenario) {
                targetScenario.style.display = 'block';
                currentEmotionScenario = scenarioNumber;
                
                // 진행 표시기 업데이트
                document.querySelector('.emotion-progress').textContent = `${scenarioNumber}/${totalScenarios}`;
                
                // 이전/다음 버튼 활성화 상태 설정
                const prevBtn = document.querySelector('.emotion-prev-btn');
                const nextBtn = document.querySelector('.emotion-next-btn');
                
                if (prevBtn) prevBtn.disabled = scenarioNumber === 1;
                if (nextBtn) nextBtn.disabled = scenarioNumber === totalScenarios;
                
                // 현재 시나리오 저장
                localStorage.setItem('currentEmotionScenario', scenarioNumber);
            } else {
                console.error(`Emotion scenario ${scenarioNumber} not found`);
            }
        } catch (error) {
            console.error('Error navigating emotion scenario:', error);
        }
    }

    // SEL 역량 전환 함수
    function switchSELCompetency(competency) {
        try {
            // 모든 역량 컨텐츠 숨기기
            document.querySelectorAll('.sel-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // 선택한 역량 컨텐츠 표시
            const targetContent = document.querySelector(`#${competency}`);
            if (targetContent) {
                targetContent.classList.add('active');
                currentSELCompetency = competency;
                
                // 탭 스타일 업데이트
                document.querySelectorAll('.sel-tab-btn').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                document.querySelector(`.sel-tab-btn[data-target="${competency}"]`)?.classList.add('active');
                
                // 현재 역량 저장
                localStorage.setItem('currentSELCompetency', competency);
            } else {
                console.error(`SEL competency content for "${competency}" not found`);
            }
        } catch (error) {
            console.error('Error switching SEL competency:', error);
        }
    }

    // AI 메시지 전송 함수
    function sendAIMessage(message) {
        try {
            if (!message || !message.trim()) return;
            
            // 사용자 메시지 표시
            const userMessageHtml = `
                <div class="user-message mb-4 flex justify-end">
                    <div class="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                        ${escapeHtml(message)}
                    </div>
                </div>
            `;
            
            const chatContainer = document.querySelector('#ai-chat-container');
            if (chatContainer) {
                chatContainer.innerHTML += userMessageHtml;
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
            
            // 채팅 기록에 추가
            aiChatHistory.push({ role: 'user', content: message });
            
            // 로딩 표시
            const loadingHtml = `
                <div class="ai-message mb-4 flex ai-loading">
                    <div class="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 max-w-xs">
                        <div class="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            `;
            
            chatContainer.innerHTML += loadingHtml;
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            // 모의 AI 응답 생성 (실제 AI 연결 대신 사용)
            setTimeout(() => {
                // 로딩 표시 제거
                const loadingElement = document.querySelector('.ai-loading');
                if (loadingElement) loadingElement.remove();
                
                // AI 응답 생성
                let response = "죄송합니다. 아직 이해하지 못했습니다. 다른 질문을 해주시겠어요?";
                
                // 간단한 응답 규칙
                if (message.includes('안녕') || message.includes('반가워')) {
                    response = "안녕하세요! AIDT 학습 도우미입니다. 무엇을 도와드릴까요?";
                } else if (message.includes('AIDT') || message.includes('에이아이디티')) {
                    response = "AI Digital Textbook(AIDT)는 인공지능 기술이 적용된 디지털 교과서로, 학습자 개인의 수준과 특성에 맞춘 개별화 학습과 협력적 활동을 지원하는 디지털 교수학습 도구입니다.";
                } else if (message.includes('HTHT') || message.includes('하이테크')) {
                    response = "HTHT(High-Tech High-Touch)는 기술을 통한 개별화 학습(High-Tech)과 교사의 정서적 지원(High-Touch)을 융합한 교육 모델입니다.";
                } else if (message.includes('SEL') || message.includes('사회정서학습')) {
                    response = "사회정서학습(SEL)은 자기인식, 자기관리, 사회적 인식, 관계 기술, 책임 있는 의사결정의 5가지 핵심 역량을 개발하는 학습 과정입니다.";
                } else if (message.includes('자기인식')) {
                    response = "자기인식 역량은 자신의 감정, 생각, 가치관을 정확하게 인식하고 이들이 행동에 미치는 영향을 이해하는 능력입니다. AIDT를 통해 다양한 자기인식 활동을 체험해보세요.";
                } else if (message.includes('프로젝트')) {
                    response = "AIDT를 활용한 프로젝트 기획은 '프로젝트 기획' 탭에서 단계별로 진행할 수 있습니다. 문제 정의부터 SEL 역량 연계까지 체계적으로 설계해보세요.";
                }
                
                // AI 응답 표시
                const aiMessageHtml = `
                    <div class="ai-message mb-4 flex">
                        <div class="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 max-w-xs">
                            ${escapeHtml(response)}
                        </div>
                    </div>
                `;
                
                chatContainer.innerHTML += aiMessageHtml;
                chatContainer.scrollTop = chatContainer.scrollHeight;
                
                // 채팅 기록에 추가
                aiChatHistory.push({ role: 'assistant', content: response });
                
                // 채팅 기록 저장
                localStorage.setItem('aiChatHistory', JSON.stringify(aiChatHistory));
            }, 1000);
        } catch (error) {
            console.error('Error sending AI message:', error);
        }
    }

    // HTML 이스케이프 함수
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // 폼 데이터 저장 함수
    function saveFormData(formId) {
        try {
            const form = document.getElementById(formId);
            if (!form) {
                console.error(`Form with ID "${formId}" not found`);
                return;
            }
            
            const formData = {};
            
            // 입력 필드 데이터 수집
            form.querySelectorAll('input, textarea, select').forEach(field => {
                if (field.type === 'checkbox' || field.type === 'radio') {
                    formData[field.name] = field.checked;
                } else {
                    formData[field.name] = field.value;
                }
            });
            
            // 로컬 스토리지에 저장
            localStorage.setItem(`form_${formId}`, JSON.stringify(formData));
            
            // 저장 완료 알림
            showNotification('데이터가 저장되었습니다.');
        } catch (error) {
            console.error('Error saving form data:', error);
            showNotification('데이터 저장 중 오류가 발생했습니다.', 'error');
        }
    }

    // 알림 표시 함수
    function showNotification(message, type = 'success') {
        try {
            // 기존 알림 제거
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // 새 알림 생성
            const notification = document.createElement('div');
            notification.className = `notification fixed top-4 right-4 py-2 px-4 rounded shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // 3초 후 알림 제거
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);
        } catch (error) {
            console.error('Error showing notification:', error);
        }
    }

    // 프로젝트 예시 표시 함수
    function showProjectExample(exampleId) {
        try {
            // 모든 예시 숨기기
            document.querySelectorAll('.project-example-content').forEach(example => {
                example.style.display = 'none';
            });
            
            // 선택한 예시 표시
            const targetExample = document.querySelector(`.project-example-content[data-example="${exampleId}"]`);
            if (targetExample) {
                targetExample.style.display = 'block';
                
                // 버튼 스타일 업데이트
                document.querySelectorAll('.project-example').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                document.querySelector(`.project-example[data-example="${exampleId}"]`)?.classList.add('active');
            } else {
                console.error(`Project example "${exampleId}" not found`);
            }
        } catch (error) {
            console.error('Error showing project example:', error);
        }
    }

    // 로컬 스토리지에서 사용자 데이터 불러오기
    function loadUserData() {
        try {
            // 현재 탭 상태 불러오기
            const savedTab = localStorage.getItem('currentTab');
            if (savedTab) {
                currentTab = savedTab;
            }
            
            // 현재 프로젝트 단계 불러오기
            const savedProjectStep = localStorage.getItem('currentProjectStep');
            if (savedProjectStep) {
                currentProjectStep = parseInt(savedProjectStep);
            }
            
            // 현재 감정 시나리오 불러오기
            const savedEmotionScenario = localStorage.getItem('currentEmotionScenario');
            if (savedEmotionScenario) {
                currentEmotionScenario = parseInt(savedEmotionScenario);
            }
            
            // 현재 SEL 역량 불러오기
            const savedSELCompetency = localStorage.getItem('currentSELCompetency');
            if (savedSELCompetency) {
                currentSELCompetency = savedSELCompetency;
            }
            
            // AI 채팅 기록 불러오기
            const savedChatHistory = localStorage.getItem('aiChatHistory');
            if (savedChatHistory) {
                aiChatHistory = JSON.parse(savedChatHistory);
            }
            
            // 폼 데이터 불러오기 (예: 프로젝트 단계 데이터)
            for (let i = 1; i <= 5; i++) {
                const savedStepData = localStorage.getItem(`projectStep${i}`);
                if (savedStepData) {
                    const formData = JSON.parse(savedStepData);
                    
                    // 단계별로 필드에 데이터 적용
                    if (i === 1) {
                        document.querySelector('#project-topic')?.setAttribute('value', formData.topic || '');
                        document.querySelector('#project-problem')?.setAttribute('value', formData.problem || '');
                        document.querySelector('#project-goals')?.setAttribute('value', formData.goals || '');
                    } else if (i === 2) {
                        // 체크박스 설정
                        if (formData.checkedGoals) {
                            formData.checkedGoals.forEach(goal => {
                                const checkbox = document.querySelector(`input[name="learning-goals"][value="${goal}"]`);
                                if (checkbox) checkbox.checked = true;
                            });
                        }
                        
                        document.querySelector('#measurable-goal')?.setAttribute('value', formData.measurableGoal || '');
                        document.querySelector('#project-duration')?.setAttribute('value', formData.duration || '');
                    }
                    // 추가 단계 데이터도 필요에 따라 구현
                }
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }

    // 초기화 실행
    initialize();
    
    // 초기 상태 설정
    switchTab(currentTab);
    navigateProjectStep(currentProjectStep);
    navigateEmotionScenario(currentEmotionScenario);
    switchSELCompetency(currentSELCompetency);
    
    // AI 채팅 기록 복원
    if (aiChatHistory.length > 0) {
        const chatContainer = document.querySelector('#ai-chat-container');
        if (chatContainer) {
            aiChatHistory.forEach(msg => {
                if (msg.role === 'user') {
                    chatContainer.innerHTML += `
                        <div class="user-message mb-4 flex justify-end">
                            <div class="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                                ${escapeHtml(msg.content)}
                            </div>
                        </div>
                    `;
                } else {
                    chatContainer.innerHTML += `
                        <div class="ai-message mb-4 flex">
                            <div class="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 max-w-xs">
                                ${escapeHtml(msg.content)}
                            </div>
                        </div>
                    `;
                }
            });
            
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }
});
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDkOKbencckR7ohASyn9E2oCMNUfZ45r9lKQ1mQSWWBgcaqmWmlGi6up5bcqaV%2FtT%2B49DvO7wEUlD3YcWj%2FLeCQlABVUegZIxC1%2FnsgikU4bdVDDmUM0obo0aIDXLxuZBwI8BWLAC1geQMmqzwICYT%2Bm%2BmTiDhOYEnf4XssgzpP%2BKaWstDvS3aliFQDebCXkWXLjg73DNRtBPeAw9RBrKZkmtdPsQ4HXuUT1COMjmCXY1BoZI3P%2BKGMsN2SOKSNzblfHLeSLLtxnKcGMHFzQDMRUx0QrtUxkVd7XthL9MaJEQLeHybJAapPMjU9UyDA8G%2Bvx87ZXblIXNow7o3sdIChhbw7llS3l2d6ic9tWUaDlRf6EgTVGm7L%2BHBVP%2FVxjkGExkOb7sEze15vRAw6pCwEPJtD197DZpQzhHDXq2iJDavL%2FmnyM7lXO7UQVY3y%2FeXxELtpXqKcV%2FVOs8P46t6AioUzZVLfzMVCyfG%2F8oK7vW";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDkOKbencckR7ohASyn9E2oCMNUfZ45r9lKQ1mQSWWBgcaqmWmlGi6up5bcqaV/tT+49DvO7wEUlD3YcWj/LeCQlABVUegZIxC1/nsgikU4bdVDDmUM0obo0aIDXLxuZBwI8BWLAC1geQMmqzwICYT+m+mTiDhOYEnf4XssgzpP+KaWstDvS3aliFQDebCXkWXLjg73DNRtBPeAw9RBrKZkmtdPsQ4HXuUT1COMjmCXY1BoZI3P+KGMsN2SOKSNzblfHLeSLLtxnKcGMHFzQDMRUx0QrtUxkVd7XthL9MaJEQLeHybJAapPMjU9UyDA8G+vx87ZXblIXNow7o3sdIChhbw7llS3l2d6ic9tWUaDlRf6EgTVGm7L+HBVP/VxjkGExkOb7sEze15vRAw6pCwEPJtD197DZpQzhHDXq2iJDavL/mnyM7lXO7UQVY3y/eXxELtpXqKcV/VOs8P46t6AioUzZVLfzMVCyfG/8oK7vW";
    </script>
    
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
    