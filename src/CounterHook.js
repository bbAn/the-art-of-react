import React, { useState } from 'react';

const CounterHook = () => {
  // useState 함수 파라미터에는 상태의 기본값(0)을 넣어줌
  // 즉 카운터의 기본값(value)을 0으로 설정하겠다는 의미
  const [value, setValue] = useState(0);
  // 배열의 첫 번째는 원소의 상태값, 두 번째 원소는 상태 설정 함수

  return(
    <div>
      <p>
         현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}> +1</button>
      <button onClick={() => setValue(value - 1)}> -1</button>
    </div>
  );
};

export default CounterHook;
