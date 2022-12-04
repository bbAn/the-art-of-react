import React from "react";

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>); // currentValue는 name. 새로 생성된 배열을 nameList에 담는다
  return <ul>{nameList}</ul>;
}

export default IterationSample;