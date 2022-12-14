import React, { useState } from "react";

const IterationSample = () => {
  // useState에서 지정한 값은 [1, 2] 1에 들어감
  const [names, setNames] = useState([
    {id: 1, text: '눈사람'}, // 객체 형태의 배열 useState의 names가 됨
    {id: 2, text: '얼음'},
    {id: 3, text: '눈'},
    {id: 4, text: '바람'}
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({ // concat은 새로운 배열을 만들어줌. push는 기존 배열 자체를 변경함
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트 한다.
    setInputText(''); // inputText를 비운다.
  }
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  const namesList = names.map(name => ( // 추가 할 땐 없던 괄호가 생겼다.. 단순 코드 구분 때문인가.. 괄호가 없어도 실행은 된다
    <li key={name.id} 
    	onDoubleClick={() => onRemove(name.id)}
    >
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  ); 
};

export default IterationSample;