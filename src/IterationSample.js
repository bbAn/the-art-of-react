import React from "react";

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const namesList = names.map((name, index) => <li key={index}>{name}</li>); //currentValue: name, index: index
  // index를 key로 사용하면 배열이 변경될 때 효율적으로 렌더링 하지 못하기 때문에 고유한 값이 없을 때만 index 값을 key로 사용한다
 
  return <ul>{namesList}</ul>;
}

export default IterationSample;