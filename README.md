# AIDT HTHT×SEL 프로젝트

**AI Digital Textbook(AIDT)을 활용한 High-Tech High-Touch(HTHT) 교육 모델과 사회정서학습(SEL)을 접목한 체험형 웹 애플리케이션**

## 프로젝트 개요

이 프로젝트는 고등학교 1-2학년 학생들을 대상으로 AI Digital Textbook(AIDT)의 혁신적 기술과 High-Tech × High-Touch(HTHT) 교육 모델을 통합하여 사회정서학습(SEL)을 촉진하는 교육 도구를 제공합니다. 웹 애플리케이션과 강사용 메뉴얼을 통해 학생들이 기술을 활용하면서도 인간적 상호작용의 가치를 배울 수 있는 교육 경험을 설계하였습니다.

## 주요 개념

- **AIDT(AI Digital Textbook)**: 인공지능 기술이 적용된 디지털 교과서로, 학습자 개인의 수준과 특성에 맞춘 개별화 학습과 협력적 활동을 지원하는 디지털 교수학습 도구
- **HTHT(High-Tech High-Touch)**: 기술을 통한 개별화 학습(High-Tech)과 교사의 정서적 지원(High-Touch)을 융합한 교육 모델
- **SEL(Social Emotional Learning)**: 자기인식, 자기관리, 사회적 인식, 관계 기술, 책임 있는 의사결정의 5가지 핵심 역량을 개발하는 사회정서학습

## 파일 구조

본 프로젝트는 두 가지 방식으로 구성 및 배포가 가능합니다:

### 1. 분리 파일 방식 (권장)
```
aidt_htht_sel_web_app/
├── index.html        # 웹 애플리케이션 HTML 구조
├── style.css         # 웹 애플리케이션 스타일
├── script.js         # 웹 애플리케이션 기능
└── instructor_manual_improved.html  # 개선된 강사용 메뉴얼
```

### 2. 단일 파일 방식
```
aidt_htht_sel_web_app/
├── web_application_functional.html  # 모든 기능이 포함된 웹 애플리케이션(HTML+CSS+JS)
└── instructor_manual_improved.html  # 개선된 강사용 메뉴얼
```

## 설치 방법

### 로컬 환경에서 실행
```bash
# 1. 저장소 클론
git clone https://github.com/username/aidt-htht-sel.git

# 2. 프로젝트 폴더로 이동
cd aidt-htht-sel

# 3. 웹 브라우저에서 index.html 또는 web_application_functional.html 열기
```

### GitHub Pages 배포

1. GitHub 저장소를 생성합니다.
2. 프로젝트 파일을 저장소에 업로드합니다:
   - 분리 파일 방식: `index.html`, `style.css`, `script.js`, `instructor_manual_improved.html`
   - 단일 파일 방식: `web_application_functional.html`(index.html로 이름 변경), `instructor_manual_improved.html`
3. 저장소 설정(Settings)에서 Pages 메뉴로 이동합니다.
4. Source 섹션에서 Branch를 main으로, 폴더를 /(root)로 설정하고 Save를 클릭합니다.
5. 몇 분 후 GitHub Pages URL이 생성됩니다.

## 주요 기능

### 1. 체험형 웹 애플리케이션
- **HTHT×SEL 프로젝트 기획 마법사**: 단계별로 AIDT와 HTHT×SEL을 접목한 교육 프로젝트 기획
- **감정 인식 활동**: 다양한 상황에서의 감정을 인식하고 공감하는 체험형 활동
- **SEL 역량 개발**: 5가지 SEL 역량을 개발하는 다양한 활동과 성찰 도구
- **AI 상호작용**: 모의 AI 환경에서 질문, 피드백, 학습 지원 체험
- **협업 공간**: 팀 프로젝트를 위한 협업 도구와 토론 공간

### 2. 강사용 메뉴얼
- **핵심 개념 해설**: AIDT, HTHT, SEL의 이론적 배경과 교육적 가치 설명
- **수업 진행 가이드**: 단계별 상세 수업 진행 방법과 시간 배분 안내
- **사례 분석**: 다양한 교과에 적용 가능한 HTHT×SEL 수업 사례 분석
- **활동 워크시트**: 수업에 활용할 수 있는 상세 활동지 및 평가 루브릭
- **FAQ 및 문제해결**: 발생 가능한 문제 상황과 대응 전략 안내

## 기술 스택
- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage API
- Responsive Design

## 사용 방법

### 교사용
1. 강사용 메뉴얼(instructor_manual_improved.html)을 통해 AIDT, HTHT, SEL의 개념과 수업 적용 방법을 학습합니다.
2. 웹 애플리케이션을 직접 체험해보고 학생들에게 적용할 활동을 선택합니다.
3. 메뉴얼에 제공된 수업 계획과 활동지를 참고하여 수업을 준비합니다.
4. 학생들에게 웹 애플리케이션 URL을 공유하고 활동을 안내합니다.

### 학생용
1. 웹 브라우저로 제공된 URL에 접속합니다.
2. 소개 페이지에서 AIDT, HTHT, SEL의 개념을 이해합니다.
3. 관심 있는 활동(프로젝트 기획, 감정 인식, SEL 역량 개발 등)을 선택하여 참여합니다.
4. 결과물을 저장하거나 교사/동료와 공유합니다.

## 데이터 저장

이 웹 애플리케이션은 브라우저의 Local Storage를 활용하여 사용자 활동 데이터를 저장합니다. 따라서 같은 브라우저를 사용하는 한 페이지 새로고침 후에도 입력한 데이터가 유지됩니다. 장기 보관이 필요한 경우 결과를 별도로 저장하거나 공유하는 것을 권장합니다.

## 호환성

이 애플리케이션은 다음 브라우저의 최신 버전에서 테스트되었습니다:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## 개선 및 기여

프로젝트 개선을 위한 제안이나 기여를 환영합니다. 문제점 발견 시 Issues를 통해 보고해주시거나, Pull Request를 통해 개선 사항을 제안해주세요.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

## 개발자

AIEDAP수도권역 - AI 교육 개발 및 적용 프로젝트 팀

## 연락처

프로젝트에 대한 문의사항은 GitHub Issues 또는 이메일(aiedap@example.com)을 통해 연락 주시기 바랍니다.
