import React, { Component } from 'react';
import logo from './logo.svg';
import Tone from './ToneReact.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Hey TeleBuzz
          </p>
          <h1>Morse Code Generator </h1>
          <Tone/>
      </div>
    );
  }
}

export default App;
