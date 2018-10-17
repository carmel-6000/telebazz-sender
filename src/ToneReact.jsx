import React, { Component } from "react";
//import {Newmessage} from 'newmessage.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { Newmessage } from './scenes/newmessage/newmessage.js';


export const char_to_morse = {
  "!": "-.-.--",
  '"': ".-..-.",
  "$": "...-..-",
  "&": ".-...",
  "'": ".----.",
  '(': "-.--.",
  ')': "-.--.-",
  '+': ".-.-.",
  ',': "--..--",
  '-': "-....-",
  '.': ".-.-.-",
  '/': "-..-.",
  '0': "-----",
  '1': ".----",
  '2': "..---",
  '3': "...--",
  '4': "....-",
  '5': ".....",
  '6': "-....",
  '7': "--...",
  '8': "---..",
  '9': "----.",
  ':': "---...",
  ';': "-.-.-.",
  '=': "-...-",
  '?': "..--..",
  '@': ".--.-.",
  '_': "..--.-",
  'A': ".-",
  'B': "-...",
  'C': "-.-.",
  'D': "-..",
  'E': ".",
  'F': "..-.",
  'G': "--.",
  'H': "....",
  'I': "..",
  'J': ".---",
  'K': "-.-",
  'L': ".-..",
  'M': "--",
  'N': "-.",
  'O': "---",
  'P': ".--.",
  'Q': "--.-",
  'R': ".-.",
  'S': "...",
  'T': "-",
  'U': "..-",
  'V': "...-",
  'W': ".--",
  'X': "-..-",
  'Y': "-.--",
  'Z': "--..",
  ' ': " "
}

export class Tone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      morse: [],
      //tone times
      dot_time: 0.070,
      dash_time: 0.21,
      inter_elem_time: 0.090,
      space_time: 0.49,
      // Initial delay before starting morse code sequence
      initial_delay: 0.1,
      // Track whether morse code is running
      running: false,
      inputvalue:''
     
    };

    this.char_to_morse = char_to_morse;

    this.getMorse = this.getMorse.bind(this);
  }
  updateInputValue(evt)
  {
      this.setState({inputvalue: evt.target.value});
  }
  getMorse() {
    var message = "hi"
    var messageUpper = message.toUpperCase();
    console.log("message", message);
    console.log("messageUpper", messageUpper);
    console.log(this.char_to_morse);
    for (var i = 0; i < messageUpper.length; i++) {
      this.state.morse.push(this.char_to_morse[messageUpper[i]]);
    }
    console.log("morse", this.state.morse);
    return this.state.morse;
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <br /> <br /> <p>Preprogrammed Messages</p>
            <button onClick="play_sos();">SOS</button> <br /> <br />
            <button onClick="play_ilu();">I love you</button> <br /> <br />
            <button onClick="play_hello();">Hello</button> <br /> <br />
          
          </div>
        </div>
        <br />

        <br />
        <button onClick={this.getMorse}>getMorse</button>
        <br /><br />
        <p id="msg"></p>
        <pre id="morse" style={{ overflow: "auto" }}></pre>
        <br />
      </div>
    );
  }
}
export default Tone;


