import React from 'react';

// 클래스 컴포넌트
class ConfirmButton1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };
    // 바인드 하거나
    // this.handleConfirm = this.handleConfirm.bind(this);
  }

  // 화살표 함수 사용
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  //   handleConfirm() {
  //     this.setState((prevState) => ({
  //       isConfirmed: !prevState.isConfirmed,
  //     }));
  //   }

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? '확인됨' : '확인하기'}
      </button>
    );
  }
}

export default ConfirmButton1;
