import React, { Component } from 'react';
import './App.css';
import { Step1, Step2, Step3, Step4, Step5 } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
        </form>
      </div>
    );
  }
}

export default App;
