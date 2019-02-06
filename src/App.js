import React, { Component } from 'react';
import './App.css';

import Toggler from './components/toggler';
import Aux from  './hoc/aux';
import Input from './components/inputValue';
import Result from './components/result';
import Operator from './components/operators';
import Operand from './components/operand';

class App extends Component {

  state = {
    displayMode: 'day'
  }

  handleOnclick = () => {
    console.log('I was clicked');
    this.setState((state) => ({
        displayMode: (state.displayMode === "day") ? 'night' : 'day'
      })
    );
  }
  render() {
    return (
      <div className="App">
          <Toggler 
            clicked={this.handleOnclick}
            class="toggler"
            value={this.state.displayMode}>
          </Toggler>
          <Aux classes="inputWrapper"> 
            <Input>  <div>32 + 3 </div></Input>
            <Result> <div> 35 </div></Result>
          </Aux>

          <Aux classes = "row mb-4">
            <Operator classes="col-3 operators">C</Operator>
            <Operator classes="col-3 operators">+/-</Operator>
            <Operator classes="col-3 operators">%</Operator>
            <Operator classes="col-3 operators"><i className="fas fa-divide"></i></Operator>
          </Aux>

          <Aux classes = "row mb-4">
            <Operand classes="col-3 operand">7</Operand>
            <Operand classes="col-3 operand">8</Operand>
            <Operand classes="col-3 operand">9</Operand>
            <Operator classes="col-3 operators">x</Operator>
          </Aux>

          <Aux classes = "row mb-4">
            <Operand classes="col-3 operand">4</Operand>
            <Operand classes="col-3 operand">5</Operand>
            <Operand classes="col-3 operand">6</Operand>
            <Operator classes="col-3 operators">-</Operator>
          </Aux>

          <Aux classes = "row mb-4">
            <Operand classes="col-3 operand">1</Operand>
            <Operand classes="col-3 operand">2</Operand>
            <Operand classes="col-3 operand">3</Operand>
            <Operator classes="col-3 operators">+</Operator>
          </Aux>

          <Aux classes = "row">
            <Operand classes="col-6 operand">0</Operand>
            <Operand classes="col-3 operand">.</Operand>
            <Operator classes="col-3 operators">=</Operator>
          </Aux>
      </div>
    );
  }
}

export default App;
