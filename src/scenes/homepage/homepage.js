import React, { Component } from 'react';
// import logo from './logo.svg';
import {Tone , char_to_morse} from '/home/ayelet/projects/telebazz-sender/src/ToneReact.jsx';
// import './App.css';


 export class Homepage extends Component {
  render() {
    return (
      <div>
          <p>
            Hey TeleBuzz
          </p>
          <h1>Morse Code Generator </h1>
          <Tone/>
      </div>
    );
  }
}

export default Homepage;
