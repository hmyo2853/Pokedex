# Pukimon Go

<img src="" width="100%" alt="coverImg"/>

Pukimon Go! : 나만의 푸키몬을 잡아보자! 푸키몬 고!

## 토이 프로젝트 진행 목적

- `React` `Typescript` 컴포넌트 모듈화
- `CSS` 전처리기 `SASS` 사용
- `React-Query`로 비동기 프로그래밍
- `vite create` 및 `vercel` 배포
- `Recoil`로 state 관리
- mobile, tablet, pc 버전을 고려한 반응형 UI 디자인

<br>

## 최종 구현 화면

- vercel - ["/"]("")

<img src="#" width="100%" alt="coverImg"/>

<br>

## 구현 요구 사항 목록

- [ ] 랜덤 포켓몬 데이터 가져오기 (매일 다른 포켓몬), 포켓몬이 없는 날도 설정
- [ ] 랜덤 확률로 포켓몬 포획 성공시 마이 데이터에 잡은 포켓몬 저장
- [ ] 잡은 포켓몬 속성, 데이터 확인 UI 구현
- [ ] 메인 - 랜덤 포켓몬 포획창 UI 표시 / 서브 - 포켓몬 도감 페이지 구현 / 마이페이지 - 내가 잡은 포켓몬 데이터 확인
- [ ] 24시간 이내에만 유효한 오늘의 포켓몬 데이터 설정? (24시간 이후에 갱신) 표준 시간(GMT) 중심
- [ ] `recoil`로 모든 데이터 fetch 및 관리
- [ ] `strapi`로 모든 데이터 저장 및 수정 관리
- [ ] 실제 게임을 하는 것 같은 UI 구현하기

<br>

## 사용한 프레임워크 및 라이브러리 설명

- React: 컴포넌트 기반의 화면구성, Virtual DOM으로 인한 속도 향상, SPA(싱글 페이지 애플리케이션)
- TypeScript: 초기 데이터와 컴포넌트 사이에 전달되는 데이터의 컴파일 오류를 방지하기 위해 사용
- React-Query: API 데이터 패칭시 로딩, 에러 state 관리를 쉽게 하기 위해 사용
- SASS/SCSS: 변수로 css 유지보수가 용이하기 위해 사용
- Vite: build 속도를 빠르게 하기 위해 사용
- Recoil: React에서 컴포넌트별 전역 상태를 쉽게 관리하기 위해 사용
