<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AIDT HTHT×SEL 프로젝트 README</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <style>
        .bg-edu-blue {
            background-color: #3b82f6;
        }
        .bg-edu-light {
            background-color: #f0f9ff;
        }
        .text-edu-dark {
            color: #1e3a8a;
        }
        body {
            font-family: 'Noto Sans KR', sans-serif;
        }
        .file-card {
            transition: all 0.3s ease;
        }
        .file-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
    </style>
</head>
<body class="bg-gray-50">
    <header class="bg-edu-blue text-white py-8 px-4 shadow-lg">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div>
                <h1 class="text-4xl font-bold mb-2">AIDT HTHT×SEL 프로젝트</h1>
                <p class="text-xl">AI Digital Textbook 기반 사회정서학습 체험</p>
            </div>
            <div class="mt-4 md:mt-0">
                <span class="bg-white text-edu-blue px-4 py-2 rounded-lg font-bold">v1.0.0</span>
            </div>
        </div>
    </header>

    <main class="container mx-auto py-8 px-4">
        <section class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-3xl font-bold text-edu-dark mb-4">프로젝트 개요</h2>
            <p class="text-lg mb-4">
                이 프로젝트는 고등학교 1-2학년 학생들을 대상으로 한 AI Digital Textbook(AIDT)과 HTHT×SEL(High-Tech High-Touch × Social Emotional Learning) 교육 모델에 관한 자료를 제공합니다. 학생들이 AI 기술과 정서적 학습의 균형을 체험하고, 교사들이 이를 효과적으로 가르칠 수 있도록 지원합니다.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i class="fas fa-info-circle text-blue-500 text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-blue-700">
                            본 프로젝트는 AIEDAP수도권역이 주관하며, 교육 현장에서 AI 기술과 사회정서학습의 효과적인 통합을 지원하기 위해 개발되었습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-3xl font-bold text-edu-dark mb-4">포함된 파일</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <!-- 웹 애플리케이션 파일 -->
                <div class="file-card bg-edu-light rounded-lg p-5 border border-blue-200">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-file-code text-blue-500 text-2xl mr-3"></i>
                        <h3 class="text-xl font-bold">index.html</h3>
                    </div>
                    <p class="text-gray-700 mb-2">웹 애플리케이션의 HTML 구조 파일입니다.</p>
                    <p class="text-sm text-gray-500">107.4 KB</p>
                </div>

                <div class="file-card bg-edu-light rounded-lg p-5 border border-blue-200">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-file-code text-green-500 text-2xl mr-3"></i>
                        <h3 class="text-xl font-bold">style.css</h3>
                    </div>
                    <p class="text-gray-700 mb-2">웹 애플리케이션의 스타일시트입니다.</p>
                    <p class="text-sm text-gray-500">21.9 KB</p>
                </div>

                <div class="file-card bg-edu-light rounded-lg p-5 border border-blue-200">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-file-code text-yellow-500 text-2xl mr-3"></i>
                        <h3 class="text-xl font-bold">script.js</h3>
                    </div>
                    <p class="text-gray-700 mb-2">웹 애플리케이션의 JavaScript 코드입니다.</p>
                    <p class="text-sm text-gray-500">21.9 KB</p>
                </div>

                <div class="file-card bg-edu-light rounded-lg p-5 border border-blue-200">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-file-alt text-indigo-500 text-2xl mr-3"></i>
                        <h3 class="text-xl font-bold">web_application_functional.html</h3>
                    </div>
                    <p class="text-gray-700 mb-2">모든 기능이 통합된 단일 HTML 파일 버전입니다.</p>
                    <p class="text-sm text-gray-500">113.6 KB</p>
                </div>

                <!-- 강사용 메뉴얼 파일 -->
                <div class="file-card bg-edu-light rounded-lg p-5 border border-blue-200">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-book text-red-500 text-2xl mr-3"></i>
                        <h3 class="text-xl font-bold">instructor_manual.html</h3>
                    </div>
                    <p class="text-gray-700 mb-2">기본 강사용 메뉴얼입니다.</p>
                    <p class="text-sm text-gray-500">72.8 KB</p>
                </div>

                <div class="file-card bg-edu-light rounded-lg p-5 border border-blue-200">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-book-open text-red-500 text-2xl mr-3"></i>
                        <h3 class="text-xl font-bold">instructor_manual_improved.html</h3>
                    </div>
                    <p class="text-gray-700 mb-2">개선된 버전의 강사용 메뉴얼입니다.</p>
                    <p class="text-sm text-gray-500">96.1 KB</p>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-3xl font-bold text-edu-dark mb-4">설치 및 사용 방법</h2>
            
            <h3 class="text-2xl font-bold mt-6 mb-3">1. 로컬에서 실행하기</h3>
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
                <ol class="list-decimal pl-6 space-y-2">
                    <li>모든 파일을 같은 폴더에 저장합니다.</li>
                    <li>웹 브라우저에서 <code class="bg-gray-200 px-2 py-1 rounded">index.html</code> 파일을 엽니다.</li>
                    <li>또는 단일 파일 버전인 <code class="bg-gray-200 px-2 py-1 rounded">web_application_functional.html</code>을 직접 열어도 됩니다.</li>
                </ol>
            </div>

            <h3 class="text-2xl font-bold mt-6 mb-3">2. GitHub Pages로 배포하기</h3>
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
                <ol class="list-decimal pl-6 space-y-2">
                    <li>GitHub 계정에 로그인합니다.</li>
                    <li>새 저장소(repository)를 생성합니다.</li>
                    <li>모든 파일을 저장소에 업로드합니다.</li>
                    <li>저장소 설정에서 GitHub Pages를 활성화합니다 (Settings > Pages).</li>
                    <li>Source를 'main' 브랜치로 설정하고 저장합니다.</li>
                    <li>GitHub Pages URL을 통해 웹사이트에 접근할 수 있습니다.</li>
                </ol>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i class="fas fa-lightbulb text-yellow-500 text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-yellow-700">
                            단일 파일 버전을 사용할 경우, <code class="bg-yellow-100 px-2 py-1 rounded">web_application_functional.html</code>을 <code class="bg-yellow-100 px-2 py-1 rounded">index.html</code>로 이름을 바꾸어 업로드하면 GitHub Pages의 기본 페이지로 표시됩니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-3xl font-bold text-edu-dark mb-4">웹 애플리케이션 사용 가이드</h2>
            
            <div class="mb-6">
                <h3 class="text-2xl font-semibold mb-3">주요 기능</h3>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <i class="fas fa-project-diagram text-blue-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">프로젝트 기획 마법사</p>
                            <p class="text-gray-700">AIDT와 HTHT×SEL을 접목한 교육 프로젝트를 단계별로 기획할 수 있습니다.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-heartbeat text-red-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">감정 인식 활동</p>
                            <p class="text-gray-700">다양한 상황에서의 감정을 인식하고 공감하는 체험형 활동에 참여할 수 있습니다.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-brain text-purple-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">SEL 역량 개발</p>
                            <p class="text-gray-700">5가지 SEL 역량을 개발하는 다양한 활동과 성찰 도구를 경험할 수 있습니다.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-robot text-green-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">AI 상호작용</p>
                            <p class="text-gray-700">모의 AI 환경에서 질문, 피드백, 학습 지원을 경험할 수 있습니다.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-users text-yellow-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">협업 공간</p>
                            <p class="text-gray-700">팀원들과 함께 프로젝트를 기획하고 아이디어를 공유할 수 있는 공간이 있습니다.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i class="fas fa-check-circle text-green-500 text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-green-700">
                            웹 애플리케이션은 로컬 스토리지를 활용하여 사용자의 입력 데이터를 자동으로 저장합니다. 브라우저를 닫았다가 다시 열어도 이전 작업 내용이 유지됩니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-3xl font-bold text-edu-dark mb-4">강사용 메뉴얼 활용 가이드</h2>
            
            <div class="mb-6">
                <h3 class="text-2xl font-semibold mb-3">주요 내용</h3>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <i class="fas fa-book-reader text-indigo-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">강의 개요</p>
                            <p class="text-gray-700">강의 목표, 구성, 소요시간 및 준비사항에 관한 상세 안내</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-lightbulb text-yellow-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">핵심 개념 해설</p>
                            <p class="text-gray-700">AIDT, HTHT, SEL의 개념과 이론적 배경에 대한 심화 설명</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-chalkboard-teacher text-red-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">수업 진행 가이드</p>
                            <p class="text-gray-700">단계별 상세 진행 방법과 교수 전략 제안</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-clipboard-list text-green-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">사례 분석 및 활동 가이드</p>
                            <p class="text-gray-700">실제 수업 사례와 활동 진행을 위한 상세 안내</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-question-circle text-blue-500 mt-1 mr-3"></i>
                        <div>
                            <p class="font-bold">FAQ 및 문제해결 가이드</p>
                            <p class="text-gray-700">수업 중 발생할 수 있는 다양한 상황에 대한 대응책</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-4">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <i class="fas fa-info-circle text-indigo-500 text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <p class="text-indigo-700">
                            개선된 버전의 강사용 메뉴얼(<code class="bg-indigo-100 px-2 py-1 rounded">instructor_manual_improved.html</code>)에는 평가 루브릭, 문제 상황 대응 가이드, 추가 참고 자료 등이 보강되어 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-3xl font-bold text-edu-dark mb-4">문제 해결</h2>
            
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold flex items-center">
                        <i class="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
                        웹 애플리케이션 버튼이 작동하지 않을 경우
                    </h3>
                    <div class="pl-7 mt-2 text-gray-700">
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>최신 버전의 웹 브라우저를 사용하고 있는지 확인하세요.</li>
                            <li>JavaScript가 브라우저에서 활성화되어 있는지 확인하세요.</li>
                            <li>단일 파일 버전(<code class="bg-gray-200 px-2 py-1 rounded">web_application_functional.html</code>)을 사용해보세요.</li>
                            <li>개별 파일 사용 시, 세 파일(HTML, CSS, JS)이 같은 폴더에 위치하는지 확인하세요.</li>
                        </ol>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold flex items-center">
                        <i class="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
                        데이터가 저장되지 않을 경우
                    </h3>
                    <div class="pl-7 mt-2 text-gray-700">
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>브라우저의 로컬 스토리지 설정을 확인하세요.</li>
                            <li>브라우저의 개인정보 보호 모드나 시크릿 모드에서는 데이터가 저장되지 않을 수 있습니다.</li>
                            <li>브라우저 쿠키 및 사이트 데이터 설정을 확인하세요.</li>
                        </ol>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold flex items-center">
                        <i class="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
                        스타일이 제대로 적용되지 않을 경우
                    </h3>
                    <div class="pl-7 mt-2 text-gray-700">
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>인터넷 연결을 확인하세요 (Tailwind CSS 등 외부 리소스 로딩 필요).</li>
                            <li>브라우저 캐시를 삭제한 후 페이지를 다시 로드해보세요.</li>
                            <li>CSS 파일 경로가 올바른지 확인하세요.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-3xl font-bold text-edu-dark mb-4">관련 자료 및 참고 링크</h2>
            
            <ul class="space-y-4">
                <li class="flex items-start">
                    <i class="fas fa-external-link-alt text-blue-500 mt-1 mr-3"></i>
                    <div>
                        <p class="font-bold"><a href="https://casel.org/" class="text-blue-600 hover:underline" target="_blank">CASEL (Collaborative for Academic, Social, and Emotional Learning)</a></p>
                        <p class="text-gray-700">SEL 역량 및 프레임워크에 대한 전문 자료</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <i class="fas fa-external-link-alt text-blue-500 mt-1 mr-3"></i>
                    <div>
                        <p class="font-bold"><a href="https://www.edutopia.org/" class="text-blue-600 hover:underline" target="_blank">Edutopia</a></p>
                        <p class="text-gray-700">혁신적 교육 방법론 및 SEL 적용 사례</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <i class="fas fa-external-link-alt text-blue-500 mt-1 mr-3"></i>
                    <div>
                        <p class="font-bold"><a href="https://www.keris.or.kr/" class="text-blue-600 hover:underline" target="_blank">한국교육학술정보원(KERIS)</a></p>
                        <p class="text-gray-700">국내 디지털 교과서 및 에듀테크 정보</p>
                    </div>
                </li>
            </ul>
        </section>
    </main>

    <footer class="bg-gray-800 text-white py-8 px-4">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl font-bold">AIDT HTHT×SEL 프로젝트</h3>
                    <p class="text-gray-400">© 2025 AIEDAP수도권역. All rights reserved.</p>
                </div>
                <div class="flex space-x-4">
                    <a href="#" class="hover:text-blue-400">
                        <i class="fab fa-github text-2xl"></i>
                    </a>
                    <a href="#" class="hover:text-blue-400">
                        <i class="fab fa-youtube text-2xl"></i>
                    </a>
                    <a href="#" class="hover:text-blue-400">
                        <i class="fas fa-envelope text-2xl"></i>
                    </a>
                </div>
            </div>
            <div class="mt-6 text-center text-gray-400 text-sm">
                <p>본 프로젝트는 교육 목적으로 제작되었으며, 실제 교육 현장에서 활용하실 수 있습니다.</p>
            </div>
        </div>
    </footer>
</body>
</html>
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDgcbjeOfT8NhNeCyzQUAVoFy2PYkSTlArqDbcOdfMj8%2FmbPJJpJhGAZi%2BlAKBEhehfI1BVRxWsYlUXfeyOWpxKEDpfRiT8%2FoX7NGUYEydE3nYn2rHIGrMnVE6q2i0K6%2B%2FC4KVcq3OtyQUBbu1kIPk%2FvYNW03BJ9FtNDVPYSqYwHeG%2Btdmga37gftPuvQbGThMuPL%2Fz8qmv%2BNXsr4GVpkBGl4zhoTFzXqf%2Fwvgd7IPUHYVG3kwefI%2B%2BVs1NCXLoG0AwIlLQvp8B04eB%2BKZjgpvatbdX9cVATDexWAuy%2FBdIRsFPlttGqbDqisnQVmYSvlM51Km3CTb658o9U10PfVBGlF%2F5scaAV5KxuNdfsr0You8P444iS3wPxMuLGAsEyiJUBlEnw7uJixwjeN9m%2FkQ5UYYacP1PcFoNdQn9QBEpufwLUV9cEMWbcka7gyDNZRD3pvylowShgf4n7%2Bz2PwRt717mlk8IKOy6fgsQTc1jBA";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDgcbjeOfT8NhNeCyzQUAVoFy2PYkSTlArqDbcOdfMj8/mbPJJpJhGAZi+lAKBEhehfI1BVRxWsYlUXfeyOWpxKEDpfRiT8/oX7NGUYEydE3nYn2rHIGrMnVE6q2i0K6+/C4KVcq3OtyQUBbu1kIPk/vYNW03BJ9FtNDVPYSqYwHeG+tdmga37gftPuvQbGThMuPL/z8qmv+NXsr4GVpkBGl4zhoTFzXqf/wvgd7IPUHYVG3kwefI++Vs1NCXLoG0AwIlLQvp8B04eB+KZjgpvatbdX9cVATDexWAuy/BdIRsFPlttGqbDqisnQVmYSvlM51Km3CTb658o9U10PfVBGlF/5scaAV5KxuNdfsr0You8P444iS3wPxMuLGAsEyiJUBlEnw7uJixwjeN9m/kQ5UYYacP1PcFoNdQn9QBEpufwLUV9cEMWbcka7gyDNZRD3pvylowShgf4n7+z2PwRt717mlk8IKOy6fgsQTc1jBA";
    </script>
    
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
    