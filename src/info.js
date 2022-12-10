import React,  { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정
  useEffect(() => {
    console.log('effect');
    console.log(name);

    // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면   
    // useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야함 
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }); // 언마운트 때만 뒷정리 함수를 호출하고 싶다면 두 번째 파라미터에 빈 배열을 넣음

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return(
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  )
} 

export default Info;