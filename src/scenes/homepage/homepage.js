import React, { Component } from 'react';
// import logo from './logo.svg';
import {Tone , char_to_morse} from '../../ToneReact.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';


 export class Homepage extends Component {
  render() {
    return (
      <div>
          <p>
            Hey TeleBuzz
          </p>
          <Link to="/Newmessage">
              <button >write a new message</button>
            </Link>
      </div>
    );
  }
}


export class Morse extends Component {
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
