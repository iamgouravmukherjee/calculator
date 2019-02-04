import React, { Component } from 'react';
import './App.css';

import Toggler from './components/toggler'

class App extends Component {
  render() {
    return (
      <div className="App">
          Basic calculator
          <Toggler toggler="Toggler"></Toggler>
      </div>
    );
  }
}

export default App;
