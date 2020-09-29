# REACT를 활용하여 todo-list 만들기:blush:
**벨로퍼트님의 블로그 내용을 습작**  
[벨로퍼트님 블로그 바로가기](https://velopert.com "벨로퍼트님 블로그")
<br />
 
___

[REACT 공식 사이트](https://ko.reactjs.org "리액트 공식 사이트")

## MVC패턴이란:question:
Model-View-Controller의 약자

## Props (읽기 전용)
부모 컴포넌트가 자식 컴포넌트에게 값을 넘겨줄 때 사용.
함수형 컴포넌트는 코드 상단에서 {Component} 안 불러도 됨.

## State
내부에서 변경 가능(setState 이용).
객체여야 함.

**화살표 함수는 자신의 this가 없음**

## LifeCycle API
컴포넌트가 나타날 때, 업데이트 될 때, 사라질 때의 과정에서 어떠한 작업을 하고 싶을 때 사용.

**Mounting : 컴포넌트가 브라우저에 나타날 때**
- constructor : 생성자 함수, 컴포넌트가 처음 브라우저에서 나타날 때 가장 먼저 실행되는 함수, 컴포넌트의 state 초기 설정 등.
- getDerivedStateFromProps : props의 받은 값을 state에 동결 시키고 싶을 때 (mount, update 시에), static 사용.
- render : 어떤 DOM을 만들 지~ 내부의 태그에 어떤 값을 줄 지 정의
- componentDidMount : 브라우저에 나타난 시점에 호출, 이벤트, 외부 라이브러리, Ajax, API 사용 시에 이 함수에서 처리 됨(ex) 특정 돔에 차트 그려주세요~)

**Updating : 컴포넌트의 props나 state가 바꼈을 때**
- shouldComponentUpdate❗ : 컴포넌트 업데이트 성능 최적화, 가상 DOM에 렌더링 할 지 말 지, T/F 반환 F면 렌더링 안 됨. 조건에 따라 업데이트를 막음.
- getSnapshotBeforeUpdate : 렌더링한 다음에 렌더링된 결과물이 반영되기 바로 직전 호출됨, DOM의 크기나 스크롤 위치등을 사전에 가져오고 싶을 때.
- componentDidUpdate : 컴포넌트가 업데이트 됐을 때 호출, ex) state 변경 됐다면 어떠한 작업을 하겠다.

**UnMounting : 컴포넌트가 브라우저에서 사라질 때**
- componentWillUnmount : 설정한 이벤트, 컴포넌트를 없앨 때.

- componentDidCatch : 에러 처리, 에러가 발생할 수 있는 컴포넌트의 부모 컴포넌트에서 사용.
