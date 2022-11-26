import React from 'react';

const MyComponent = props => {
  return (
    <div>My name is {props.name}. <br />
    children 값은 {props.children} 
    입니다.
    </div>
  )
};

MyComponent.defaultProps = {
  name: 'default name'
};

export default MyComponent;