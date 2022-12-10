import React,  { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정
  useEffect(() => {
    console.log('마운트될 때만 실행');
  }, []); // 두 번째 파라미터로 비어 있는 배열을 넣어줌

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