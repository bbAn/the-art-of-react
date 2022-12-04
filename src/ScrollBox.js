import React, { Component } from "react";

class ScrollBox extends Component {

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
    비구조화 할당 문법 사용했고 아래와 같은 의미
    const scrollHeight = this.box.scrollHeight;
    const clientHeight = this.box.clientHeight; 
    */
   this.box.scrollTop = scrollHeight - clientHeight;
  }
  // scrollToBottom 메서드는 부모 컴포넌트인 APP 컴포넌트에서 ScrollBox에 ref를 달면 사용할 수 있음
  
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innnerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      <div
        style={style}
        ref={(ref) => {this.box=ref}}>
        <div style={innnerStyle} />
      </div>
    );
  }
}

export default ScrollBox;