import React, { Component } from 'react';
// import logo from './logo.svg';
 import './newmessage.css';

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
                <div id="color">
                      <p>choose color</p>
                    <button type="button" className="btn btn-primary">blue</button>
                    <button type="button" className="btn btn-secondary">grey</button>
                    <button type="button" className="btn btn-success">green</button>
                    <button type="button" className="btn btn-danger">red</button>
                    <button type="button" className="btn btn-warning">yellow</button>
                </div>

              <input type="color"/>

                <button id="play" onClick="play_morse_sequence();">Play Morse Sequence</button>
                <button onClick="longTone();">Tone</button>
                <button>send</button>
      </div>
    );
  }
}

export default Newmessage;
