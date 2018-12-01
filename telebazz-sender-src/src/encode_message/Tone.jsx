import React, { Component } from "react";
import char_to_morse from "./morse_code_dict.js";

export class Tone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _textMessageInput: "bskjcabsj", //need to change!!
      _codeMessageArray: [],
      _codeIsRunning: false, // Track whether morse code is running
      _initialDelay: 0.1, // Initial delay before starting morse code sequence

      //tone times
      _dotTime: 0.070,
      _spaceTime: 0.49, //_dotTime*7 
      _dashTime: 0.21,
      _interElemTime: 0.090,
    };

    // this.codeMsgRef = React.createRef();
  }

  textMessageToMorse = () => {
    console.log("textMessageToMorse");
    let message = this.state._textMessageInput;
    let messageUpper = message.toUpperCase();
    let codeMessageArray = this.state._codeMessageArray;
    console.log("message: ", message);
    console.log("messageUpper: ", messageUpper);

    for (var i = 0; i < messageUpper.length; i++) {
      codeMessageArray.push(char_to_morse[messageUpper[i]]);
    }

    this.setState({ _codeMessageArray: codeMessageArray },
      console.log("_codeMessageArray: ", this.state._codeMessageArray)
    );
  }

  /*tone_updateProgress = (time, pos, totalLength) => {
    var ratio = 100 * pos / totalLength;//position the text
    document.querySelector('#p1').MaterialProgress.setProgress(ratio);
  }*/

  addMorseText = (morseText) => {
    console.log("addMorseText");

    //TODO - change this line!!
    document.getElementById("morse").innerHTML += morseText;
  }

  tone_word_space = () => {
    console.log("tone_word_space");
    this.addMorseText('<br />');
  }

  tone_dot = (time, char) => {
    console.log("tone_dot");
    // osc.start(time);
    console.log("time dot",time);
    // osc.stop(time+dot_time);
    // addMorseText('• ', char);
  }

  generateSequence = () => {
    console.log("generateSequence");
    let codeMessageArray = this.state._codeMessageArray;
    let seq = [];
    //let t = initialDelay
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
            initialDelay += this.state._dotTime;
          } /*else if (char === '-') {
            // Push tone_dash
            seq.push({ "time": initialDelay, "func": tone_dash });
            initialDelay += this.state._dashTime;
          } else {
            console.log('Unexpected character in morse code message:', char);
          }
          // Add inter element pause between characters
          initialDelay += this.state._interElemTime;
          pos += 1;
          // Add update to progress bar
          seq.push({ "time": initialDelay, "func": tone_updateProgress, "msg_char": pos });*/
        }
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

      let codeMessageArray = this.state._codeMessageArray;

      //why is it length-1 ??????? 
      let totalLength = codeMessageArray.join('').length - 1;

      console.log("totalLength: ", totalLength);
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
        <div>
          <p id="msg">msg</p>
          <div id="morse">morse</div>
        </div>
        {/* <pre ref={this.codeMsgRef} id="morse" style={{ overflow: "auto" }}></pre> */}
        <br />
      </div>
    );
  }
}
export default Tone;


