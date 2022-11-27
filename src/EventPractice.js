import React, { Component } from 'react';

class EventPractice extends Component {
  
  state = {
    username: '', // 2. state 에 username 값 추가
    message: ''
  }

  handleChange = (e) => { // 3. handleChange 변경
    this.setState({
      [e.target.name]: e.target.value
      /*
      4. 객체 안에서 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨
      각 input 태그에 설정된 name="username", name="message"의 username, message가 키 값이 되어
      아래와 같은 형태로 되는 것임 
      {
       'username': e.target.value
      }
      */
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }
  
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() { // 1. name 값이 username인 input을 렌더링
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;