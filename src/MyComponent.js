import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      My name is {name}. <br />
      children value is {children}. <br />
      My favorite number is {favoriteNumber}.
    </div>
  )
};

MyComponent.defaultProps = {
  name: 'default name'
};

// props의 타입 지정 
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;