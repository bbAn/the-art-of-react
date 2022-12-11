import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행 
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 변환
    return state;
  }
}

const CounterHook = () => {
  // useReducer의 첫 번쨰 파라미터에는 리듀서 함수, 두 번째 파라미터에는 해당 리듀서의 기본 값을 넣음
  // 이 훅은 state(현재 가리키고 있는 상태) 값과 dispatch(액션을 발생시키는 함수) 함수를 받아옴
  const [state, dispatch] = useReducer(reducer, {value: 0});  

  return(
    <div>
      <p>
         현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}> +1</button> {/* dispatch(action) 형태로 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출됨 */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}> -1</button>
    </div>
  );
};

export default CounterHook;
