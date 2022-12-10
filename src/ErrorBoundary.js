import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  // 에러가 발생하면 componentDidCatch 호출
  componentDidCatch(error, info) {
    this.setState({
      error: true 
    });
    console.log({ error, info });
  }

  // render 함수는 this.state.error 값이 true일 때 에러 발생 문구를 보여줌
  render() {
    if (this.state.error) return <div>에러가 발생했습니다.</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;