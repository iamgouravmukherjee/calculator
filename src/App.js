import React, { Component } from 'react';
import './App.css';

import Toggler from './components/toggler'

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
      </div>
    );
  }
}

export default App;
