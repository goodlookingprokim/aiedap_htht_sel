document.addEventListener('DOMContentLoaded', function() {
    // 전역 변수 선언
    let currentTab = 'intro';
    let currentProjectStep = 1;
    let currentEmotionScenario = 1;
    let currentSELCompetency = 'self-awareness';
    let aiChatHistory = [];

    // 초기화 함수
    function initialize() {
        // 탭 전환 이벤트 리스너 등록
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetTabId = this.getAttribute('data-target');
                switchTab(targetTabId);
            });
        });

        // 프로젝트 기획 마법사 버튼 이벤트 등록
        document.querySelectorAll('.project-next-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const nextStep = parseInt(this.getAttribute('data-next-step'));
                navigateProjectStep(nextStep);
            });
        });

        document.querySelectorAll('.project-prev-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const prevStep = parseInt(this.getAttribute('data-prev-step'));
                navigateProjectStep(prevStep);
            });
        });

        // 감정 인식 활동 버튼 이벤트 등록
        document.getElementById('next-emotion-btn').addEventListener('click', function() {
            navigateEmotionScenario(currentEmotionScenario + 1);
        });

        document.getElementById('prev-emotion-btn').addEventListener('click', function() {
            navigateEmotionScenario(currentEmotionScenario - 1);
        });

        // SEL 역량 탭 이벤트 등록
        document.querySelectorAll('.sel-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const competency = this.getAttribute('data-competency');
                switchSELCompetency(competency);
            });
        });

        // AI 채팅 이벤트 등록
        const aiChatForm = document.getElementById('ai-chat-form');
        if (aiChatForm) {
            aiChatForm.addEventListener('submit', function(e) {
                e.preventDefault();
                sendAIMessage();
            });
        }

        document.querySelectorAll('.recommended-question').forEach(question => {
            question.addEventListener('click', function() {
                document.getElementById('ai-message-input').value = this.textContent.trim();
            });
        });

        // 폼 입력값 저장 이벤트 등록
        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('change', function() {
                saveFormData();
            });
        });

        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                saveFormData();
            });
        });

        // 저장된 데이터 불러오기
        loadFormData();
    }

    // 탭 전환 함수
    function switchTab(tabId) {
        // 모든 탭 콘텐츠 숨기기
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });

        // 모든 탭 버튼 비활성화
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // 선택한 탭 콘텐츠 표시 및 버튼 활성화
        document.getElementById(tabId).classList.remove('hidden');
        document.querySelector(`.nav-item[data-target="${tabId}"]`).classList.add('active');

        currentTab = tabId;
        saveState();
    }

    // 프로젝트 단계 이동 함수
    function navigateProjectStep(step) {
        if (step < 1 || step > 5) return;

        document.querySelectorAll('.project-step').forEach(stepElement => {
            stepElement.classList.add('hidden');
        });

        document.getElementById(`project-step-${step}`).classList.remove('hidden');
        currentProjectStep = step;
        
        // 진행 상태 표시 업데이트
        updateProjectProgress(step);
        
        saveState();
    }

    // 프로젝트 진행 상태 표시 업데이트
    function updateProjectProgress(step) {
        document.querySelectorAll('.progress-step').forEach((progressStep, index) => {
            if (index + 1 < step) {
                progressStep.classList.add('completed');
                progressStep.classList.remove('active');
            } else if (index + 1 === step) {
                progressStep.classList.add('active');
                progressStep.classList.remove('completed');
            } else {
                progressStep.classList.remove('completed', 'active');
            }
        });
    }

    // 감정 인식 시나리오 이동 함수
    function navigateEmotionScenario(scenario) {
        const totalScenarios = 5;
        
        if (scenario < 1 || scenario > totalScenarios) return;
        
        document.querySelectorAll('.emotion-scenario').forEach(scenarioElement => {
            scenarioElement.classList.add('hidden');
        });
        
        document.getElementById(`emotion-scenario-${scenario}`).classList.remove('hidden');
        currentEmotionScenario = scenario;
        
        // 이전/다음 버튼 상태 업데이트
        document.getElementById('prev-emotion-btn').disabled = (scenario === 1);
        document.getElementById('next-emotion-btn').disabled = (scenario === totalScenarios);
        
        // 진행 상태 표시 업데이트
        document.getElementById('scenario-progress').textContent = `${scenario}/${totalScenarios}`;
        
        saveState();
    }

    // SEL 역량 전환 함수
    function switchSELCompetency(competency) {
        document.querySelectorAll('.sel-content').forEach(content => {
            content.classList.add('hidden');
        });
        
        document.querySelectorAll('.sel-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        document.getElementById(`sel-${competency}`).classList.remove('hidden');
        document.querySelector(`.sel-tab[data-competency="${competency}"]`).classList.add('active');
        
        currentSELCompetency = competency;
        saveState();
    }

    // AI 메시지 전송 함수
    function sendAIMessage() {
        const messageInput = document.getElementById('ai-message-input');
        const message = messageInput.value.trim();
        
        if (!message) return;
        
        // 사용자 메시지 추가
        addChatMessage('user', message);
        
        // AI 응답 생성 (실제로는 서버와 통신하겠지만, 여기서는 간단한 응답 생성)
        setTimeout(() => {
            const responses = {
                'AIDT란 무엇인가요?': 'AI Digital Textbook(AIDT)는 인공지능 기술이 적용된 디지털 교과서로, 학습자 개인의 수준과 특성에 맞춘 개별화 학습과 협력적 활동을 지원하는 디지털 교수학습 도구입니다.',
                'HTHT 모델이 무엇인가요?': 'HTHT(High-Tech High-Touch)는 기술과 인간의 만남을 통한 혁신적 교육 모델로, 기술을 통한 개별화 학습(High-Tech)과 교사의 정서적 지원(High-Touch)의 융합을 지향합니다.',
                'SEL의 5가지 역량은 무엇인가요?': 'SEL의 5가지 핵심 역량은 자기인식(Self-awareness), 자기관리(Self-management), 사회적 인식(Social awareness), 관계 기술(Relationship skills), 책임있는 의사결정(Responsible decision-making)입니다.',
                'HTHT와 SEL은 어떻게 연계되나요?': 'HTHT 모델에서 High-Tech 요소는 개인화된 학습과 데이터 기반 접근을 통해 자기인식과 자기관리 역량을 강화하고, High-Touch 요소는 교사와 또래 간 상호작용을 통해 사회적 인식, 관계 기술, 책임있는 의사결정 역량을 발달시키는 데 기여합니다.',
                '프로젝트 예시를 알려주세요': '대표적인 AIDT HTHT×SEL 프로젝트 예시로는 "감정 데이터 기반 학급 분위기 개선 프로젝트", "AI 협력적 디지털 스토리텔링", "환경 데이터 분석 기반 지역사회 문제해결 프로젝트" 등이 있습니다.'
            };
            
            let aiResponse = '죄송합니다만, 그 질문에 대한 답변을 준비하지 못했습니다. AIDT, HTHT 모델, SEL 역량에 관한 질문을 해보세요.';
            
            // 직접적인 매칭이 없으면 키워드 기반 검색
            if (!responses[message]) {
                const keywords = {
                    'AIDT': 'AI Digital Textbook(AIDT)는 인공지능 기술이 적용된 디지털 교과서로, 학습자 개인의 수준과 특성에 맞춘 개별화 학습과 협력적 활동을 지원하는 디지털 교수학습 도구입니다.',
                    'AI': 'AIDT에서 AI는 학습자의 수준과 특성을 분석하여 개인화된 학습 경로를 제공하고, 실시간 피드백과 상호작용을 지원하는 역할을 합니다.',
                    '디지털': 'AIDT는 디지털 환경에서 다양한 멀티미디어 요소와 상호작용 기능을 통해 풍부한 학습 경험을 제공합니다.',
                    'HTHT': 'HTHT(High-Tech High-Touch)는 기술과 인간의 만남을 통한 혁신적 교육 모델로, 기술을 통한 개별화 학습(High-Tech)과 교사의 정서적 지원(High-Touch)의 융합을 지향합니다.',
                    'High-Tech': 'High-Tech는 AI, 데이터 분석, 개인화된 학습 경로 등 첨단 기술을 활용한 교육 요소를 의미합니다.',
                    'High-Touch': 'High-Touch는 교사-학생 간 정서적 연결, 협력적 활동, 공감과 배려 등 인간적 요소를 강조한 교육적 접근을 의미합니다.',
                    'SEL': '사회정서학습(SEL)은 자신의 감정을 인식하고 관리하며 타인에 대한 공감과 책임있는 의사결정 능력을 기르는 학습입니다.',
                    '자기인식': '자기인식은 자신의 감정, 생각, 가치관을 정확하게 인식하고 이들이 행동에 미치는 영향을 이해하는 능력입니다.',
                    '자기관리': '자기관리는 다양한 상황에서 자신의 감정, 생각, 행동을 효과적으로 조절하는 능력입니다.',
                    '사회적': '사회적 인식은 다양한 배경과 문화를 가진 타인의 관점을 이해하고 공감하는 능력입니다.',
                    '관계': '관계 기술은 다양한 개인 및 그룹과 건강하고 지지적인 관계를 형성하고 유지하는 능력입니다.',
                    '의사결정': '책임 있는 의사결정은 개인 행동과 사회적 상호작용에 대해 윤리적이고 건설적인 선택을 하는 능력입니다.'
                };
                
                for (const keyword in keywords) {
                    if (message.includes(keyword)) {
                        aiResponse = keywords[keyword];
                        break;
                    }
                }
            } else {
                aiResponse = responses[message];
            }
            
            addChatMessage('ai', aiResponse);
        }, 600);
        
        messageInput.value = '';
    }

    // 채팅 메시지 추가 함수
    function addChatMessage(sender, message) {
        const chatContainer = document.getElementById('ai-chat-container');
        const messageElement = document.createElement('div');
        
        messageElement.className = sender === 'user' ? 'user-message' : 'ai-message';
        messageElement.innerHTML = `<p>${message}</p>`;
        
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // 채팅 기록 저장
        aiChatHistory.push({ sender, message });
        saveState();
    }

    // 폼 데이터 저장 함수
    function saveFormData() {
        const formData = {};
        
        // 텍스트 입력 필드, 텍스트 영역, 선택 상자
        document.querySelectorAll('input[type="text"], textarea, select').forEach(input => {
            formData[input.id] = input.value;
        });
        
        // 체크박스
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            formData[checkbox.id] = checkbox.checked;
        });
        
        // 라디오 버튼
        document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
            formData[radio.name] = radio.value;
        });
        
        localStorage.setItem('aidtFormData', JSON.stringify(formData));
    }

    // 폼 데이터 로드 함수
    function loadFormData() {
        const formData = JSON.parse(localStorage.getItem('aidtFormData') || '{}');
        
        // 텍스트 입력 필드, 텍스트 영역, 선택 상자
        for (const id in formData) {
            const element = document.getElementById(id);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = formData[id];
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                    element.value = formData[id];
                }
            }
        }
        
        // 라디오 버튼
        for (const name in formData) {
            const radios = document.querySelectorAll(`input[name="${name}"]`);
            if (radios.length > 0) {
                radios.forEach(radio => {
                    if (radio.value === formData[name]) {
                        radio.checked = true;
                    }
                });
            }
        }
    }

    // 상태 저장 함수
    function saveState() {
        const state = {
            currentTab,
            currentProjectStep,
            currentEmotionScenario,
            currentSELCompetency,
            aiChatHistory
        };
        
        localStorage.setItem('aidtAppState', JSON.stringify(state));
    }

    // 상태 로드 함수
    function loadState() {
        const state = JSON.parse(localStorage.getItem('aidtAppState') || '{}');
        
        if (state.currentTab) {
            currentTab = state.currentTab;
            switchTab(currentTab);
        }
        
        if (state.currentProjectStep) {
            currentProjectStep = state.currentProjectStep;
            navigateProjectStep(currentProjectStep);
        }
        
        if (state.currentEmotionScenario) {
            currentEmotionScenario = state.currentEmotionScenario;
            navigateEmotionScenario(currentEmotionScenario);
        }
        
        if (state.currentSELCompetency) {
            currentSELCompetency = state.currentSELCompetency;
            switchSELCompetency(currentSELCompetency);
        }
        
        if (state.aiChatHistory && state.aiChatHistory.length > 0) {
            aiChatHistory = state.aiChatHistory;
            aiChatHistory.forEach(chat => {
                addChatMessage(chat.sender, chat.message);
            });
        }
    }

    // 협업 공간 관련 함수
    function initCollaborationSpace() {
        // 프로젝트 보드 초기화
        updateProjectBoard();
        
        // 메시지 추가 이벤트
        const messageForm = document.getElementById('team-message-form');
        if (messageForm) {
            messageForm.addEventListener('submit', function(e) {
                e.preventDefault();
                addTeamMessage();
            });
        }
    }

    // 프로젝트 보드 업데이트
    function updateProjectBoard() {
        const boardData = JSON.parse(localStorage.getItem('projectBoardData') || '{}');
        
        const columns = ['todo', 'inprogress', 'done'];
        
        columns.forEach(column => {
            const columnElement = document.getElementById(`${column}-column`);
            if (!columnElement) return;
            
            // 기존 카드 제거
            while (columnElement.firstChild) {
                columnElement.removeChild(columnElement.firstChild);
            }
            
            // 새 카드 추가
            if (boardData[column] && boardData[column].length > 0) {
                boardData[column].forEach(card => {
                    const cardElement = createCardElement(card);
                    columnElement.appendChild(cardElement);
                });
            }
        });
    }

    // 카드 요소 생성
    function createCardElement(cardData) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-card-id', cardData.id);
        
        card.innerHTML = `
            <h4>${cardData.title}</h4>
            <p>담당: ${cardData.assignee}</p>
            <p>우선순위: ${cardData.priority}</p>
        `;
        
        // 드래그 앤 드롭 이벤트
        card.setAttribute('draggable', 'true');
        card.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', cardData.id);
        });
        
        return card;
    }

    // 팀 메시지 추가
    function addTeamMessage() {
        const messageInput = document.getElementById('team-message-input');
        const message = messageInput.value.trim();
        
        if (!message) return;
        
        const chatContainer = document.getElementById('team-chat-container');
        const messageElement = document.createElement('div');
        
        // 예시 사용자 정보 (실제로는 로그인 정보 사용)
        const userInitial = 'ME';
        const userName = '나';
        
        messageElement.className = 'team-message';
        messageElement.innerHTML = `
            <div class="message-header">
                <span class="user-initial">${userInitial}</span>
                <span class="user-name">${userName}</span>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
            <p>${message}</p>
        `;
        
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // 메시지 저장
        saveTeamMessage(message);
        
        messageInput.value = '';
    }

    // 팀 메시지 저장
    function saveTeamMessage(message) {
        const messages = JSON.parse(localStorage.getItem('teamMessages') || '[]');
        
        // 예시 사용자 정보 (실제로는 로그인 정보 사용)
        messages.push({
            user: '나',
            initial: 'ME',
            message,
            time: getCurrentTime(),
            timestamp: new Date().getTime()
        });
        
        localStorage.setItem('teamMessages', JSON.stringify(messages));
    }

    // 현재 시간 포맷팅
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        
        return `오늘 ${hours}:${minutes}`;
    }

    // 버튼 이벤트 추가 함수
    function addButtonEventListeners() {
        // 저장 버튼
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                saveFormData();
                alert('저장되었습니다!');
            });
        });
        
        // 감정 선택 버튼
        document.querySelectorAll('.emotion-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const emotionButtons = this.parentElement.querySelectorAll('.emotion-btn');
                emotionButtons.forEach(button => button.classList.remove('selected'));
                this.classList.add('selected');
                
                // 선택된 감정 저장
                const scenario = this.closest('.emotion-scenario').getAttribute('data-scenario');
                const emotion = this.getAttribute('data-emotion');
                
                const emotionSelections = JSON.parse(localStorage.getItem('emotionSelections') || '{}');
                emotionSelections[scenario] = emotion;
                localStorage.setItem('emotionSelections', JSON.stringify(emotionSelections));
            });
        });
    }

    // 초기화 실행
    initialize();
    loadState();
    initCollaborationSpace();
    addButtonEventListeners();
    
    // 페이지 종료 시 상태 저장
    window.addEventListener('beforeunload', function() {
        saveFormData();
        saveState();
    });
});
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDkmliYcyUEq4tWAGTtqvn7E1AzoTmgqVyTszMuzJ3cRYgecNzcJNz2EE6dHXhMeVPjXCqapyCpUTcsArEsW0244mUAX%2FE%2FGKi1Ak1ADlGmVhvY0VxYP0ZxBfBNYdVvl1hKJHAXpb174Q8YfIxbEgwEtG567SUGp6GYKJnaVpqkG1tGOG1y7oFq19QJl%2B1eSX0vBugsCvK7hoonsxODZH8Nf0np0%2Fo6DBsHuEGAdehq%2FrspHISaOyEeE%2F5h%2BT7x2YSeEuTbERQl%2BXVqbJ3%2BGHXvfLAYzJurBdg%2BPDnViECiiU3MP%2FmGRXAwzf0OWHWkmFeew1mrGhFpbmulbGe8HQRunlTsyLoTCKObyZP3nJNlWOSPUSTTAKcOk8PKRq%2Broe0LFUJpst7GR3f75GnvyqNAJtyN3VvdP%2F8AduKFkE8YaG2Gh7%2F7pqPGDgiGBFoq2JlhH28XUJDPbSAW%2FOue2zeSgMh%2ForMx7ZhGujYb%2B0gj6G";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDkmliYcyUEq4tWAGTtqvn7E1AzoTmgqVyTszMuzJ3cRYgecNzcJNz2EE6dHXhMeVPjXCqapyCpUTcsArEsW0244mUAX/E/GKi1Ak1ADlGmVhvY0VxYP0ZxBfBNYdVvl1hKJHAXpb174Q8YfIxbEgwEtG567SUGp6GYKJnaVpqkG1tGOG1y7oFq19QJl+1eSX0vBugsCvK7hoonsxODZH8Nf0np0/o6DBsHuEGAdehq/rspHISaOyEeE/5h+T7x2YSeEuTbERQl+XVqbJ3+GHXvfLAYzJurBdg+PDnViECiiU3MP/mGRXAwzf0OWHWkmFeew1mrGhFpbmulbGe8HQRunlTsyLoTCKObyZP3nJNlWOSPUSTTAKcOk8PKRq+roe0LFUJpst7GR3f75GnvyqNAJtyN3VvdP/8AduKFkE8YaG2Gh7/7pqPGDgiGBFoq2JlhH28XUJDPbSAW/Oue2zeSgMh/orMx7ZhGujYb+0gj6G";
    </script>
    
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
    