import React, { Component } from 'react';

class Counter extends Component {

  state = {
    number: 0,
    fixedNumber: 0
  }

  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: { fixedNumber }</h2>
        <button
          // onClick를 통해 버튼이 클릭 되었을 때 호출할 함수를 지정함
          onClick={() => {
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });

            // 위 코드와 아래코드는 완전히 동일한 기능을 함
            // 아래코드는 함수에서 바로 객체를 반환 한다는 의미 {}를 생략함
            this.setState(prevState => ({
              number: prevState.number + 1
            }));
          }}
        >
        +1
        </button>
      </div>
    );
  }
}
export default Counter;