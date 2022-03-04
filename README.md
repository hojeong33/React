# React 공부 기록
#####0 리액트 왜 쓰는가?

 - 프론트앤드 라이브러리로 DOM관리와 상태 변화 관리 최소화
- Component 단위 작성 -> 생산성과 유지 보수 용이 (재사용 기능)
- JSX(Javascript + xml)
- Virtual DOM -> 랜더링 과정이 필요 없기 때문에 연산 비용 절감

#### #1 리액트 설치 및 실행 및 파일 구조

npx create-react-app 프로젝트명 (리액트 셋팅 다 된 boilerplate/만들기 쉽게 도와주는 라이브러리)

npm start 코드 짠 걸 미리보기 띄우기

-node_modules: 라이브러리 모은 폴더

-App.js: 메인페이지에 들어갈 HTML 짜는 곳 

-public/index.html: 메인페이지

-public: static 파일 보관함

-src: 소스코드 보관함

-package.json: 설치한 라이브러리 목록

#### #2 리액트 JSX 사용법

