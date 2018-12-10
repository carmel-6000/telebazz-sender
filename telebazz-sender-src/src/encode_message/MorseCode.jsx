import React, { Component } from "react";
import char_to_morse from "./morse_code_dict.js";
// import { Tone } from "./Tone.min.js";

export class MorseCode extends Component {
  // The Morse Code tone to use, xHz sine wave
  // static osc = new Tone.Oscillator(8000, "sine").toMaster();

  constructor(props) {
    super(props);
    this.state = {
      _textMessageInput: "the users input", //need to change!!
      _codeMessageArray: [],
      _codeIsRunning: false, // Track whether morse code is running
      _initialDelay: 0.1, // Initial delay before starting morse code sequence

      //tone times
      _dotTime: 0.070,
      _spaceTime: 0.49, //_dotTime*7 
      _dashTime: 0.21,
      _interElemTime: 0.090,
    };
  }

  textMessageToMorse = () => {
    let message = this.state._textMessageInput;
    let messageUpper = message.toUpperCase();
    let codeMessageArray = this.state._codeMessageArray;
    console.log("messageUpper: ", messageUpper);

    for (let i = 0; i < messageUpper.length; i++) {
      codeMessageArray.push(char_to_morse[messageUpper[i]]);
    }

    console.log("codeMessageArray: ", codeMessageArray);
    this.setState({ _codeMessageArray: codeMessageArray });
  }

  tone_updateProgress = (time, pos, totalLength) => {
    var ratio = 100 * pos / totalLength; //position the text

    //TODO - change this line
    // document.querySelector('#p1').MaterialProgress.setProgress(ratio);
  }

  //TODO
  addMorseText = (morseText) => {
    console.log("addMorseText: ", morseText);
  }

  tone_word_space = () => {
    this.addMorseText('<br />');
  }

  tone_dot = (time, char) => {
    // this.osc.start(time);
    console.log("time dot", time);
    // osc.stop(time+dot_time);
    this.addMorseText('• ', char);
  }

  tone_dash = (time, char) => {
    // osc.start(time);
    console.log("time dash", time);
    // osc.stop(time + dash_time);
    this.addMorseText('▬ ', char);
  }

  tone_letter_space = (time) => {
    this.addMorseText(' ');
  }

  tone_fin = (time) => {
    this.setState({ _codeIsRunning: false });
  }

  generateSequence = () => {
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
        this.tone_word_space();
        initialDelay += this.state._space_time;
      } else {
        // We have a morse code codeChar
        if (typeof codeChar == 'undefined') {
          console.log("Skip", codeMessageArray[i]);
          continue;
        }
        for (let j = 0; j < codeChar.length; j++) {
          let char = codeChar[j]; // morse code character
          if (char === '.') {
            // Push a tone_dot
            seq.push({ "time": initialDelay, "func": this.tone_dot });
            this.tone_dot();
            initialDelay += this.state._dotTime;
          } else if (char === '-') {
            // Push tone_dash
            seq.push({ "time": initialDelay, "func": this.tone_dash });
            this.tone_dash();
            initialDelay += this.state._dashTime;
          } else {
            console.log('Unexpected character in morse code message:', char);
          }
          // Add inter element pause between characters
          initialDelay += this.state._interElemTime;
          pos += 1;
          // Add update to progress bar
          seq.push({
            "time": initialDelay,
            "func": this.tone_updateProgress,
            "msg_char": pos
          });
          this.tone_updateProgress();
          console.log("seq: ", seq);
        }
        // Add inter-letter space
        if (i < codeMessageArray.length - 1 && codeMessageArray[i + 1] !== ' ') {
          seq.push({ "time": initialDelay, "func": this.tone_letter_space });
          this.tone_letter_space();
          initialDelay += this.state.space_time;
        }
      }
    }
    seq.push({ "time": initialDelay, "func": this.tone_fin });
    // this.tone_fin();

    /*var part = new Tone.Part(function (time, obj) {
      if (typeof obj.msg_char != 'undefined') {
        obj.func(time, obj.msg_char);
        // console.log(time.toFixed(3), obj.func.name, obj.msg_char);
      } else {
        obj.func(time);
        // console.log(time.toFixed(3), obj.func.name);
      }
    }, seq).start();

    // Start sequence
    Tone.start();*/
  }

  playMorseSequence = () => {
    console.log("playMorseSequence");
    if (!this.state._codeIsRunning) {
      //TODO - stopMorse()

      this.setState({ _codeIsRunning: true });
      this.textMessageToMorse();

      let codeMessageArray = this.state._codeMessageArray;
      let totalLength = codeMessageArray.join('').length - 1;

      this.tone_updateProgress(totalLength);
      this.generateSequence();
    } else {
      console.log("morse code is running: ", this.state._codeIsRunning);
    }
  }

  clearCodeText = () => {
    this.setState({ _codeIsRunning: false, _codeMessageArray: [] });
  }

  render() {
    if (!this.state._codeIsRunning) {
      return (
        <div>
          <button onClick={this.playMorseSequence}>play morse sequence</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.clearCodeText}>clear morse</button>
          <p id="msg">{this.state._textMessageInput}</p>
          <div id="morse">{this.state._codeMessageArray}</div>
        </div>
      );
    }
  }
}

export default MorseCode;


