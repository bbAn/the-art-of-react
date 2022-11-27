import React, { Component } from 'react';

class EventPractice extends Component {
  
  state = {
    message: ""
  }

  constructor(props) {
    super(props);
    // this가 컴포넌트 자신으로 제대로 가르키기 위해서 메서드를 this와 바인딩해야함
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };
  
  // 임의 메서드
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick() {
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
          onChange={this.handleChange} // 임의 메서드 등록
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;