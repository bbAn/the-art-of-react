import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor')
  }

  // 컴포넌트가 최초 마운트될 때와 업데이트될 때 redder 호출 전에 호출     
  // 부모에게서 받은 color 값을 state에 동기화
  static getDerivedStateFromProps(nextProps, prevState) { 
    console.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행 
  componentDidMount() {
    console.log('componentDidMount');
  }

  // props나 state를 변경했을 때 리렌더링을 시작할지 여부를 지정   
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !==4; // 숫자의 마지막 자리가 4면 리렌더링하지 않음
  }

  // 컴포넌트가 DOM에서 제거되기 직전에 실행함
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  // 컴포넌트의 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
  // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot값으로 반환해서 componentDidUpdate 에서 조회할 수 있게 함
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드 최초 렌더링에서는 호출되지 않음
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if(snapShot) {
      console.log('업데이트되기 직전 색상: ', snapShot);
    }
  }

  // render(): 
  render() {
    console.log('render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
          더하기
        </button>
      </div>
    )
  }
}

export default LifeCycleSample;