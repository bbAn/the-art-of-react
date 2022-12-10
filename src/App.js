import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

// 랜덤 색상을 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color:'#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        {/* 버튼을 클릭할 때 마다 handleClick 호출 */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        {/* color값을 props로 설정 */}
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;