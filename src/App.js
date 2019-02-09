import React, { Component } from 'react';
import './App.css';

import Toggler from './components/toggler';
import Aux from './hoc/aux';
import Input from './components/inputValue';
import Result from './components/result';
import Operator from './components/operators';
import Operand from './components/operand';

class App extends Component {

  state = {
    displayMode: 'night',
    operatorAdded: false,
    expression: '',
    result: 0
  }

  addInput = (value) => {
    console.log(`${value} was clicked`);
    if (!this.state.operatorAdded) {
      this.setState(state => ({
        ...state,
        expression: state.expression + value
      }));
    } else {
      const newExpression = this.state.expression + value;
      const result = eval(newExpression);
      this.setState(state => ({
        ...state,
        expression: newExpression,
        result: parseFloat(JSON.stringify(result)).toFixed(2)
      }));
    }
  }

  addOperator = (operator) => {
    console.log(`${operator} was clicked`);
    switch (operator) {
      case 'C':
        this.setState(state => ({
          ...state,
          expression: '',
          operatorAdded: false
        }));
        return null;

      case "=":
        if (this.state.result) {
          const res = this.state.result;
          this.setState(state => ({
            ...state,
            expression: res,
            operatorAdded: false
          }));
        }
        break;

      case "%":
        if (!this.state.operatorAdded) {
          const exp = this.state.expression;
          const res = parseFloat(exp) / 100;
          this.setState(state => ({
            ...state,
            result: JSON.stringify(res)
          }));
        }
        break;

      case "+/-":
        if (this.state.result) {
          let result = this.state.result;
          result = result.includes("-") ? result.split("-")[1] : '-' + result
          console.log(result);
          this.setState(state => ({
            ...state,
            result: result !== "-0" ? result : "0"
          }));
        }
        break;

      default:
        const operators = { "+": "+", "-": "-", "/": "/", "x": "*" };
        const finalOperator = operators[operator];
        if (!this.state.operatorAdded) {
          this.setState(state => ({
            ...state,
            operatorAdded: true,
            expression: state.expression + finalOperator
          }));
        }
    }

  }

  toggleDayNight = () => {
    console.log('I was clicked');
    this.setState((state) => ({
      displayMode: (state.displayMode === "day") ? 'night' : 'day'
    })
    );
  }


  render() {
    return (
      <div className={`App ${this.state.displayMode}`}>
        <Toggler
          clicked={this.toggleDayNight}
          class="toggler"
          value={this.state.displayMode}>
        </Toggler>
        <Aux classes="inputWrapper">
          <Input><div> {this.state.expression} </div></Input>
          <Result><div> {this.state.result} </div></Result>
        </Aux>

        <Aux classes="controlWrapper">
          <Aux classes="grid-container mb-1">
            <Operator classes="grid-item operators" clicked={this.addOperator}>C</Operator>
            <Operator classes="grid-item operators plusMinus" clicked={this.addOperator}>+/-</Operator>
            <Operator classes="grid-item operators" clicked={this.addOperator}>%</Operator>
            <Operator classes="grid-item operators" clicked={this.addOperator}>/</Operator>
          </Aux>

          <Aux classes="grid-container mb-1">
            <Operand classes="grid-item operand" clicked={this.addInput}>7</Operand>
            <Operand classes="grid-item operand" clicked={this.addInput}>8</Operand>
            <Operand classes="grid-item operand" clicked={this.addInput}>9</Operand>
            <Operator classes="grid-item operators" clicked={this.addOperator}>x</Operator>
          </Aux>

          <Aux classes="grid-container mb-1">
            <Operand classes="grid-item operand" clicked={this.addInput}>4</Operand>
            <Operand classes="grid-item operand" clicked={this.addInput}>5</Operand>
            <Operand classes="grid-item operand" clicked={this.addInput}>6</Operand>
            <Operator classes="grid-item operators" clicked={this.addOperator}>-</Operator>
          </Aux>

          <Aux classes="grid-container mb-1">
            <Operand classes="grid-item operand" clicked={this.addInput}>1</Operand>
            <Operand classes="grid-item operand" clicked={this.addInput}>2</Operand>
            <Operand classes="grid-item operand" clicked={this.addInput}>3</Operand>
            <Operator classes="grid-item operators" clicked={this.addOperator}>+</Operator>
          </Aux>

          <Aux classes="grid-container">
            <Operand classes="grid-item operand" clicked={this.addInput}>0</Operand>
            <Operand classes="grid-item operand dot">.</Operand>
            <Operator classes="grid-item operators equalTo" clicked={this.addOperator}>=</Operator>
          </Aux>
        </Aux>
      </div>
    );
  }
}

export default App;
