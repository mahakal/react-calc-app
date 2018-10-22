import React, { Component } from 'react';
import './ButtonPanel.css';

class Button extends Component {

  btnClick() {
    this.props.hndleBtnClk(this.props.label);
  }

  render() {
    return (
      <button className="calc-btn flex-fill" type="button" onClick={this.btnClick.bind(this)}>
        {this.props.label}
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
    const calcPad = [
      [  'C'   ,   'B'   ],
      ['7', '8', '9', '÷'],
      ['4', '5', '6', '×'],
      ['1', '2', '3', '+'],
      ['0', '.', '=', '-'],
    ];

    return calcPad.map((calcRow, calcRowIndex) =>
      <div key={calcRowIndex} className="calc-btn-row d-flex">
        {calcRow.map((calcElement, calcElementIndex) => <Button key={calcElementIndex} label={calcElement} hndleBtnClk={this.props.hndleBtnClk}/>)}
      </div>
    );
  }

  render() {
    return (
      <div className="d-flex flex-column">
        {this.genButtonPanel()}
      </div>
    )
  }
}

export default ButtonPanel;
