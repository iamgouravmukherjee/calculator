import React, { Component } from 'react';
import './App.css';

import Toggler from './components/toggler';
import Aux from  './hoc/aux';
import Input from './components/inputValue';
import Result from './components/result';

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
          <Aux> 
            <Input>  <div>32 + 3 </div></Input>
            <Result> <div> 35 </div></Result>
          </Aux>
      </div>
    );
  }
}

export default App;
