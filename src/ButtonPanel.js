import React, { Component } from 'react';


class Button extends Component {

  btnClick() {
    this.props.handleButtonClick(this.props.buttonLabel);
  }

  render() {
    return (
      <button type="button" onClick={this.btnClick.bind(this)} className="btn btn-outline-danger w-25" style={{borderRadius: 0}}>
        {this.props.buttonLabel}
      </button>
    )
  }

}

class ButtonPanel extends Component {

  constructor(props) {
    super(props);
    this.genButtonPanel = this.genButtonPanel.bind(this);
  }

  genButtonPanel() {
    let buttonPanel = [];
    let dp = []
    let calcPad = [
      ['C', 'B', '_', '_'],
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '+'],
      ['0', '.', '=', '-'],
    ];
    let hndleBtnClk = this.props.handleButtonClick;
    calcPad.forEach(function(row, ri) {
      row.forEach(function(e, ei) {
        dp.push(<Button buttonLabel={e} handleButtonClick={hndleBtnClk}/>)
      });
      buttonPanel.push((
        <div key={ri} >
          {dp[0]}
          {dp[1]}
          {dp[2]}
          {dp[3]}
        </div>
      ))
      dp = [];
    });
    return buttonPanel;
  }

  render() {
    return (
      <div>
        {this.genButtonPanel()}
      </div>
    )
  }
}

export default ButtonPanel;
