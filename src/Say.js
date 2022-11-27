import React, {useState} from 'react';

const Say = () => {
  // useState 함수 인자에는 상태의 초기 value
  // 함수를 호출하면 배열이 반환됨
  // 첫번째(message)는 현재 상태 두번째(setMessage)는 상태를 바꾸어 주는 함수. 세터(Setter)
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;