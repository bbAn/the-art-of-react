import React from 'react';

function App() {
  const name = '리액트';

  return (
    // <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>
    // 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
    <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>
  );
}

export default App;
