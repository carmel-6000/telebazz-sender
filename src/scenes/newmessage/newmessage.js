import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

 export class Newmessage extends Component {
     constructor(props)
     {
         super(props);
     }
    
  render() {
    
    return (
      <div className="newmess">
                <label>Write message here...</label>
                <input type="text" id="input_msg"/>
                <br />
                <button id="play" onClick="play_morse_sequence();">Play Morse Sequence</button>
                <button onClick="longTone();">Tone</button>
                <button>send</button>
      </div>
    );
  }
}

export default Newmessage;
