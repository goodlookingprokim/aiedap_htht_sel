# AIDT HTHT×SEL 프로젝트

## AI Digital Textbook(AIDT)을 활용한 High-Tech High-Touch(HTHT) 교육 모델과 사회정서학습(SEL) 웹 애플리케이션

이 프로젝트는 고등학교 1-2학년 학생들을 대상으로 AI Digital Textbook(AIDT)의 혁신적 기술과 High-Tech × High-Touch(HTHT) 교육 모델을 통합하여 사회정서학습(SEL)을 촉진하는 교육 도구를 제공합니다.

### 주요 개념

* **AIDT(AI Digital Textbook)**: 인공지능 기술이 적용된 디지털 교과서로, 학습자 개인의 수준과 특성에 맞춘 개별화 학습과 협력적 활동을 지원하는 디지털 교수학습 도구
* **HTHT(High-Tech High-Touch)**: 기술을 통한 개별화 학습(High-Tech)과 교사의 정서적 지원(High-Touch)을 융합한 교육 모델
* **SEL(Social Emotional Learning)**: 자기인식, 자기관리, 사회적 인식, 관계 기술, 책임 있는 의사결정의 5가지 핵심 역량을 개발하는 사회정서학습

### 프로젝트 구조

```
aidt_htht_sel_github/
├── index.html                 # 메인 웹 애플리케이션
├── style.css                  # 메인 스타일시트
├── script.js                  # 메인 JavaScript 파일
├── instructor_manual.html     # 강사용 메뉴얼
├── project_guide.html         # 프로젝트 가이드
├── assets/                    # 정적 자원
│   ├── css/
│   │   └── common.css
│   ├── images/
│   └── js/
│       └── common.js
├── pages/                     # 개별 페이지 컴포넌트
│   ├── intro.html
│   ├── project-wizard.html
│   ├── emotion-recognition.html
│   ├── sel-competency.html
│   ├── ai-interaction.html
│   └── collaboration.html
├── instructor/                # 강사용 자료
│   └── manual.html
├── backup/                    # 백업 파일
├── resources/                 # 교육 자료
├── 강의교안.pdf              # 강의 교안 (PDF)
├── 강의교안.pptx             # 강의 교안 (PowerPoint)
└── README.md                  # 이 파일
```

## 🚀 시작하기

### 라이브 데모
👉 **[웹 애플리케이션 바로 가기](https://goodlookingprokim.github.io/aiedap_htht_sel/)**

### 로컬 환경에서 실행

1. 저장소를 클론합니다:
```bash
git clone https://github.com/goodlookingprokim/aiedap_htht_sel.git
```

2. 프로젝트 폴더로 이동합니다:
```bash
cd aiedap_htht_sel
```

3. 웹 브라우저에서 index.html 파일을 열거나 로컬 서버를 실행합니다:
```bash
# 간단한 HTTP 서버 실행 (Python)
python -m http.server 8000
# 또는 Node.js
npx http-server -p 8000
```

4. 브라우저에서 `http://localhost:8000`으로 접속합니다.

### GitHub Pages 배포 상태
이 프로젝트는 GitHub Pages를 통해 자동 배포되며, main 브랜치의 모든 변경사항이 실시간으로 반영됩니다.

## ✨ 주요 기능

### 📚 메인 애플리케이션 구성
1. **프로젝트 소개**: AIDT와 HTHT×SEL의 개념 설명
2. **프로젝트 기획 마법사**: 5단계 프로젝트 기획 도구
3. **감정 인식 활동**: 5가지 시나리오 기반 감정 인식 훈련
4. **SEL 역량 개발**: 사회정서학습 5대 역량별 맞춤 활동
5. **AI 상호작용 체험**: 모의 AI 환경에서의 학습 지원 경험
6. **협업 공간**: 팀 프로젝트 및 협력 학습 도구

### 🎯 특별 기능
- **교육 자료실**: GitHub 저장소 직접 연결로 실시간 자료 접근
- **강사용 매뉴얼**: 교육자를 위한 상세 가이드 제공
- **프로젝트 가이드**: 구현 방법론 및 실습 안내
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **데이터 지속성**: 로컬 스토리지를 통한 진행 상황 자동 저장

## 🛠 기술 스택

### 프론트엔드
- **HTML5**: 시맨틱 마크업 구조
- **CSS3**: 현대적 스타일링 및 애니메이션
- **JavaScript (ES6+)**: 인터랙티브 기능 구현
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **Font Awesome**: 아이콘 라이브러리
- **Google Fonts**: Noto Sans KR 한글 폰트

### 저장소 & 배포
- **GitHub**: 버전 관리 및 협업
- **GitHub Pages**: 정적 사이트 호스팅
- **Local Storage API**: 클라이언트 사이드 데이터 저장

### 개발 도구
- **Git**: 버전 관리
- **VS Code**: 권장 개발 환경
- **브라우저 개발자 도구**: 디버깅 및 테스트

## 🌐 브라우저 호환성

| 브라우저 | 지원 버전 | 권장도 |
|---------|----------|-------|
| Chrome | 90+ | ⭐⭐⭐ |
| Firefox | 88+ | ⭐⭐⭐ |
| Safari | 14+ | ⭐⭐ |
| Edge | 90+ | ⭐⭐⭐ |

## 📋 최근 업데이트

### v1.2.0 (2025-07-28)
- ✅ .gitignore 파일 추가 및 CLAUDE.md 보안 처리
- ✅ 교육 자료실 버튼을 GitHub 저장소로 직접 연결
- ✅ 프로젝트 구조 문서화 업데이트
- ✅ README.md 전면 개선

### v1.1.0 이전
- 기본 웹 애플리케이션 구현
- 6개 주요 섹션 개발 완료
- 반응형 디자인 적용
- 강사용 매뉴얼 및 가이드 추가

## 👥 개발팀

**AIEDAP수도권역** - AI 교육 개발 및 적용 프로젝트 팀

- 교육 설계: 고등학교 1-2학년 대상 SEL 커리큘럼
- 기술 구현: 웹 기반 인터랙티브 학습 플랫폼
- 연구 기반: AIDT, HTHT, SEL 교육 모델 통합

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

## 📞 지원 및 문의

프로젝트 관련 문의사항이나 개선 제안은 [GitHub Issues](https://github.com/goodlookingprokim/aiedap_htht_sel/issues)를 통해 제출해 주세요.

**🔗 유용한 링크**
- [라이브 데모](https://goodlookingprokim.github.io/aiedap_htht_sel/)
- [GitHub 저장소](https://github.com/goodlookingprokim/aiedap_htht_sel)
- [교육 자료실](https://github.com/goodlookingprokim/aiedap_htht_sel)
