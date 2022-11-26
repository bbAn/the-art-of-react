import React from 'react';

function App() {
  // const name = undefined;
  // return name || '값이 undefined입니다.';
  
  // name 값이 undefined일때 보여 주고 싶은 문구가 있다면
  const name = undefined;
  return <div> {name || '보여 주고 싶은 문구내용'}</div>;
}

export default App;
