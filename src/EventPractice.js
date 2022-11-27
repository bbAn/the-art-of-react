import React, { Component } from 'react';

class EventPractice extends Component {
  
  state = {
    message: ""
  }
  
  //constructor 삭제
  
  
  handleChange = (e) => { // 화살표 함수 형식으로 간단하게 변경
    this.setState({
      message: e.target.value
    });
  }

  handleClick = () => { // 화살표 함수 형식으로 간단하게 변경
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;