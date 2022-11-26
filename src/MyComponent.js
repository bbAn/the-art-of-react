import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      My name is {name}. <br />
      children value is {children}.
    </div>
  )
};

MyComponent.defaultProps = {
  name: 'default name'
};

// props의 타입 지정 
MyComponent.propTypes = {
  name: PropTypes.string
}

export default MyComponent;