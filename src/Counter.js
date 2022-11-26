import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) { //constructor: 컴포넌트의 생성자 메서드. super(props)를 반드시 호출
    super(props);

    //state의 초기 value 설정하기. 객체 형식이어야함 값이 여러개 있을 수 있음
    this.state = {
      number: 0
    };
  }

  render() {
    const { number } = this.state; //state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick를 통해 버튼이 클릭 되었을 때 호출할 함수를 지정함
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
        +1
        </button>
      </div>
    );
  }
}
export default Counter;