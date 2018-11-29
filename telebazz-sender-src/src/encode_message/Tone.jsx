import React, { Component } from "react";
import char_to_morse from "./morse_code_dict.js";

export class Tone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _textMessageInput: " ", //need to change!!
      _codeMessageArray: [],
      _codeIsRunning: false, // Track whether morse code is running
      _initialDelay: 0.1, // Initial delay before starting morse code sequence

      //tone times
      _dotTime: 0.070,
      _spaceTime: 0.49 //_dotTime*7 
      // dash_time: 0.21,
      // inter_elem_time: 0.090,
    };

    this.codeMsgRef = React.createRef();
  }

  textMessageToMorse = () => {
    console.log("textMessageToMorse");
    let message = this.state._textMessageInput;
    let messageUpper = message.toUpperCase();
    console.log("message: ", message);
    console.log("messageUpper: ", messageUpper);

    for (var i = 0; i < messageUpper.length; i++) {
      this.state._codeMessageArray.push(char_to_morse[messageUpper[i]]);
    }

    console.log("_codeMessageArray: ", this.state._codeMessageArray);
  }

  /*tone_updateProgress = (time, pos, totalLength) => {
    var ratio = 100 * pos / totalLength;//position the text
    document.querySelector('#p1').MaterialProgress.setProgress(ratio);
  }*/

  addMorseText = (morseText) => {
    console.log("addMorseText");
    document.getElementById("morse").innerHTML += morseText;
  }

  tone_word_space = () => {
    console.log("tone_word_space");
    this.addMorseText('<br />');
  }

  generateSequence = () => {
    console.log("generateSequence");
    let codeMessageArray = this.state._codeMessageArray;
    let seq = [];
    let initialDelay = this.state._initialDelay; // Our current time in the morse code sequence
    let pos = 0;

    for (let i = 0; i < codeMessageArray.length; i++) {
      let codeChar = codeMessageArray[i]; // morse code codeChar dash and dots

      // If the codeChar is just a space, handle differently
      if (codeChar === ' ') {
        // Push codeChar space
        seq.push({ "time": initialDelay, "func": this.tone_word_space });
        console.log("seq: ", seq);
        this.tone_word_space();
        initialDelay += this.state._space_time;
      }
    }
  }

  playMorseSequence = () => {
    console.log("playMorseSequence");
    if (!this.state._codeIsRunning) {

      //TODO - stopMorse()

      // the state isnt updated on time - the console.log prints false
      this.setState({ _codeIsRunning: true },
        console.log("this.state._codeIsRunning: ", this.state._codeIsRunning));

      this.textMessageToMorse();

      // let totalLength = this.codeMsgRef.current.join('').length - 1;
      
      //TODO - change the getElementById to ref
      let totalLength = document.getElementById("morse"); 
      // this.tone_updateProgress(totalLength);

      this.generateSequence();

    } else {
      console.log("morse code is running: ", this.state._codeIsRunning);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.playMorseSequence}>play morse sequence</button>
        {/* <button onClick={this.textMessageToMorse}>text to morse</button>
        <br /><br />*/}
        <p id="msg"></p>
        <pre ref={this.codeMsgRef} id="morse" style={{ overflow: "auto" }}></pre>
        <br />
      </div>
    );
  }
}
export default Tone;


