import React, { Component } from 'react';
import math from 'mathjs';
import ButtonPanel from './ButtonPanel';
import ScreenPanel from './ScreenPanel';

//class="d-flex w-100 h-100 justify-content-center position-absolute align-items-center align-content-center"

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "0", digits: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      operators: ['(', ')', '/', '*', '+', '-'], dot: ".",
      operands: [], exp: "", op1: "", fract: false, result: "", clear: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.calculatorLogic = this.calculatorLogic.bind(this);
  }

  handleButtonClick(btnText) {
    this.calculatorLogic(btnText);
  }

  calculatorLogic(btnText) {
    let op1 = this.state.op1, fract = this.state.fract, exp=this.state.exp;
    let result="", clear=this.state.clear;

    if(btnText === "C" || clear===true)
    {
      op1 = ""; fract= false; exp = ""; result = ""; clear=false;
      this.setState({operands: []});
    }
    else if( this.state.digits.includes(btnText) || btnText === ".")
    {
      if(btnText === "." && !fract)
      {
        fract = true;
        op1 += btnText;
      }
      if(!fract)
      {
        if(op1 === "" && btnText === "0")
          op1 = "0";
        else if(op1 === "0")
          op1 = btnText
        else
          op1 += btnText;
      }
      else if(fract && btnText !== ".")
        op1 += btnText;
    }
    else if(this.state.operators.includes(btnText) && op1 && !op1.endsWith("."))
    {
      this.state.operands.push(op1);
      this.state.operands.push(btnText);
      exp += (op1 + btnText);
      op1 = "";
      if(fract) fract = false;
    }
    else if(btnText === "=" && exp && op1 && !op1.endsWith("."))
    {
      this.state.operands.push(op1);
      result = math.eval(this.state.operands.join("")).toString();
      exp += op1;
      op1 = ""; fract= false; clear=true;
      this.setState({operands: []});
    }
    else if(btnText === "B")
    {
      if(op1.endsWith("."))
        fract= false;
      op1= this.state.op1.slice(0,-1);
    }

    if(exp + op1)
      this.setState({text: exp + op1, result: result});
    else
      this.setState({text: "0", result: ""});

    this.setState({op1: op1, fract: fract, exp: exp, clear: clear});
  }

  render() {
      return(
        <div className="">
          <ScreenPanel text={this.state.text} result={this.state.result}/>
          <ButtonPanel handleButtonClick={this.handleButtonClick} />
        </div>
      )
  }
}

export default Calculator;
