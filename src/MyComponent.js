import React from 'react';

const MyComponent = props => {
  const { name, children } = props; //비구조화 할당 문법
  return (
    <div>
      My name is {name}. <br /> {/* props.을 제외하고 사용할 수 있음 */}
      children value is {children}.
    </div>
  )
};

// 함수의 파라미터 부분에도 사용할 수 있으며
// 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용할 수 있음
// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       My name is {name}. //props.을 제외하고 사용할 수 있음
//       children value is {children}.
//     </div>
//   )
// };
//

MyComponent.defaultProps = {
  name: 'default name'
};

export default MyComponent;