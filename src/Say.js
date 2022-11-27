import React, {useState} from 'react';

const Say = () => {
  // useState 함수 인자에는 상태의 초기 value
  // 함수를 호출하면 배열이 반환됨
  // 첫번째(message)는 현재 상태 두번째(setMessage)는 상태를 바꾸어 주는 함수. 세터(Setter)
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}> 
       RED
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
       Green
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
       Blue
      </button>
    </div>
  );
};

export default Say;