import React, { Component } from 'react';
import './App.css';

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
