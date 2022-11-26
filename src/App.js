import React from 'react';
import MyComponent from './MyComponent';

const App = () =>{
  // name 값은 무조건 문자 형태로 전달되어야함 숫자인 3으로 전달할 경우 경고 메시지 출력
  // return <MyComponent name={3}>리액트</MyComponent>;
  return <MyComponent name="React">리액트</MyComponent>;

}

export default App;
