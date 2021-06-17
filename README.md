# 📅 Momentum-Calendar App

**🎤 Intro**

클론코딩으로 만들었던 바닐라 자바스크립트 기반의 크롭 웹 어플리케이션 [Momentum](https://github.com/cdcoc0/momentum-react)과, 라이브러리 없이 Date 객체로 구현한 [Calendar](https://github.com/cdcoc0/calendar-react-datejs)를 연결시켜 완성한 첫 번째 리액트 프로젝트입니다. 효율적이고 잘 짜여진 코드라고는 할 수 없지만, 지금까지 공부한 내용을 복습하면서 state, props, redux 등 리액트의 기본적인 기능을 익힐 수 있었습니다. 단순히 책이나 영상을 보고 따라하기보다는, 스스로 고민하며 문제를 해결하고 코딩할 수 있는 경험이었습니다.
<br />

My first React project consist of previous [Vanilla JS clone project](https://github.com/cdcoc0/momentum-react) and [calendar app](https://github.com/cdcoc0/calendar-react-datejs). It is hard to say that this project has such an efficient and well-structured codes, but I could review basic react functions I've studied such as state, props, and redux while developing the project. It was such an experience I could actually think by my self to solve the problems and to code, not just following youtube videos or books, and I could be progressed during the experience.
<br /><br />


## 🔨 Stack
- CRA(Create React-App)
- Firebase
<br /><br />


## 📸 Screenshots
<div>
  <img width="800" height="400" src="https://user-images.githubusercontent.com/61813428/122351928-9a3b9f80-cf89-11eb-851a-9924c0c8a051.png">
</div>
<div>
  <img width="800" height="400" src="https://user-images.githubusercontent.com/61813428/122351948-9e67bd00-cf89-11eb-8177-b93df390121e.png">
</div>
<div>
  <img width="800" height="400" src="https://user-images.githubusercontent.com/61813428/122351983-a4f63480-cf89-11eb-807f-ba3e16bd24c7.png">
</div>
<br /><br />


## 🌎 URL
<https://moment-cal-kirri.web.app/> <br />
[CLICK HERE🙋‍♀️](https://moment-cal-kirri.web.app/)
<br /><br />

**testID:** welcometokirri@naver.com<br />
**testPW:** 189674340^^
<br /><br />


## 🔌 Functions
### - Authentication
- Firebase authentication으로 간편하게 구현
- 이메일, 비밀번호 인증 방식
<br />

### - Animation
- 라우터 변경 시 슬라이드 애니메이션 구현
<br />

### - Momentum
- 일정 등록, 업데이트 및 삭제
- 오늘 날짜의 일정 정보 제공
- 프로필 수정
- 현재 시간, 날씨 정보 제공
<br />

### - Calendar
- 일정 등록, 업데이트 및 삭제
<br /><br />


## 📂 APIs / Libs
### - Redux, React-Redux
- 전역 상태 관리
- Momentum과 Calendar 페이지에서 동일한 날짜 상태 공유해 일정 관리 및 업데이트
- Todo 상태 업데이트 함수 공유
<br />

### - Router Transition Group
- 페이지 간 이동 시, 슬라이드 애니메이션 구현
<br />

### - React Router Dom
- Momentum과 캘린더 간 이동을 Router로 관리
 <br />
 
### - Unsplash API
- 배경에 사용할 사진을 랜덤으로 제공받음
<br />

### - Date
- 날짜 정보를 제공하는 기본 함수로 구현
- day.js로 출력 형식 지정
<br />

### - Axios
- 날씨 정보 API를 가져오는 데 사용
<br />

### - SCSS
- 컴포넌트 스타일링
- 라이브러리 없이 모달 구현
<br /><br />


## 🎓 What I've learned
### - Firebase
- Firebase의 사용은 이번이 처음으로, 기본적인 기능을 익혔습니다.
- NoSQL 데이터베이스의 구조(Collection, Doc, Field)와 작동 매커니즘을 배웠습니다.
<br />

### - React Transition Group
- 이 프로젝트를 구상할 때부터 페이지 전환을 슬라이드로 구현하고 싶다고 생각했습니다. Router를 사용했기 때문에 Slick과 같은 캐러셀 슬라이더 라이브러리 보다는 Router에 animation을 적용하는 React Router Group을 사용했습니다.
- classNames에서 s를 빼먹어 한참을 해메기도 하고, 양방향 슬라이드를 구현하는 과정에서 방향을 전환할 때 슬라이드가 제대로 작동하지 않아 애를 먹는 등, 많은 실수를 통해 해당 라이브러리 사용 방법과 더불어 그 원리를 배울 수 있었습니다.
- Router 주소별 각각 다른 애니메이션을 적용하는 법을 배웠습니다.
<br />

### - Global State Management
- 날짜와 일정 정보 등 프로젝트 전역에 걸쳐 사용되는 상태를 중앙집중적으로 관리하는 전역 상태 관리의 편리함과 그 필요성을 절실히 느꼈습니다.
<br />

### - Rendering
- 조금이나마 효율적인 앱을 만들기 위해 useCallback 등의 hook을 사용해 렌더링을 관리하는 과정에서 렌더링이라는 개념에 조금 더 가까워졌습니다. 라이프사이클 메서드나 hook 등, 복잡하게만 보이던 기능들을 왜 사용하는지 이해할 수 있었고, 그 사용 방법에 대해서 고민하고 공부할 수 있었습니다.
<br /><br />


## 🔧 What needs to be improved
### - Create a specific plan inside the boundary I can reach
- 단순히 Momentum에 달력을 추가하면 좋을 것 같다는 생각에서 시작한 프로젝트였는데, 기능을 하나씩 구현할 때마다 이것도 더하고 싶고 저것도 추가했으면 좋을 것 같다는 욕심이 생겨 갈팡질팡하면서 점점 늘어져버렸습니다. 
- 프로젝트를 통해 구현하려는 기술, 보여주고 싶은 스킬이 무엇인지를 내가 실현할 수 있는 범위 내에서 가능한 구체적으로 정한 뒤 마감 기한을 정하고 프로젝트를 시작하는 게 좋을 것 같다고 느꼈습니다.
<br />

### - NoSQL
- NoSQL 데이터베이스 사용은 이번이 처음이라 SQL DB의 테이블처럼 사용해보려다 한참을 해메는 등, 시행착오을 많이 겪었습니다. 사용하다 보니 무척 편리하다고는 느꼈지만 아직 부족함을 많이 느껴, 더 많은 공부가 필요하다고 생각합니다.
<br />

### - SCSS
- SCSS의 이점을 별로 살리지 못해 일반 CSS와 다를 바가 없다는 점이 아쉽습니다. 추후 리팩토링을 통해 코드 중복을 줄이는 등 더 공부하면서 이러한 문제점을 개선해나갈 예정입니다.
<br/>

### - Responsive Web
- 모바일로도 접근 가능하도록 반응형 웹으로 수정하려 합니다.
