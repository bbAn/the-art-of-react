import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  
  // 클래스 내부에서 defaultProps, propTypes 지정 할 수 있음
  static defaultProps = {
    name: 'default name'
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  }

  render() {
    const{ name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        My name is {name}. <br />
        children value is {children}. <br />
        My favorite number is {favoriteNumber}.
      </div>
    )
  }
}

// MyComponent.defaultProps = {
//   name: 'default name'
// };

// props의 타입 지정 
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// }

export default MyComponent;