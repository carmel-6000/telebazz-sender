import React, { Component } from "react";

const char_to_morse = {
  "!":"-.-.--",
  '"':".-..-.",
  "$":"...-..-",
  "&":".-...",
  "'":".----.",
  '(':"-.--.",
  ')':"-.--.-",
  '+':".-.-.",
  ',':"--..--",
  '-':"-....-",
  '.':".-.-.-",
  '/':"-..-.",
  '0':"-----",
  '1':".----",
  '2':"..---",
  '3':"...--",
  '4':"....-",
  '5':".....",
  '6':"-....",
  '7':"--...",
  '8':"---..",
  '9':"----.",
  ':':"---...",
  ';':"-.-.-.",
  '=':"-...-",
  '?':"..--..",
  '@':".--.-.",
  '_':"..--.-",
  'A':".-",
  'B':"-...",
  'C':"-.-.",
  'D':"-..",
  'E':".",
  'F':"..-.",
  'G':"--.",
  'H':"....",
  'I':"..",
  'J':".---",
  'K':"-.-",
  'L':".-..",
  'M':"--",
  'N':"-.",
  'O':"---",
  'P':".--.",
  'Q':"--.-",
  'R':".-.",
  'S':"...",
  'T':"-",
  'U':"..-",
  'V':"...-",
  'W':".--",
  'X':"-..-",
  'Y':"-.--",
  'Z':"--..",
  ' ':" "
}

class Tone extends Component {
    constructor(props){
        super(props);
        this.state={
          morse: []
        };
      this.char_to_morse = char_to_morse ;
  
      this.getMorse = this.getMorse.bind(this);
      }

 
getMorse() {
  var message = "hi"
  var messageUpper = message.toUpperCase();
  console.log("message", message);
  console.log("messageUpper", messageUpper);
  console.log(this.char_to_morse);
  for (var i = 0; i < messageUpper.length; i++) {
    this.state.morse.push(this.char_to_morse[messageUpper[i]] );
  }
  console.log("morse",this.state.morse);
  return this.state.morse;
}

    render() {
      return(
        <div>
            <div>
                <label>Write message here...</label>
                <input type="text" id="input_msg"/>
                <br />
                <button id="play" onClick="play_morse_sequence();">Play Morse Sequence</button>
                <button onClick="longTone();">Tone</button>
                <br /> <br /> <p>Preprogrammed Messages</p>
                <button onClick="play_sos();">SOS</button>
                <button onClick="play_ilu();">I love you</button>
                <button onClick="play_hello();">Hello</button>
            </div>
            <br />
            <br />
            <button onClick={this.getMorse}>getMorse</button>
            <br /><br />
            <p id="msg"></p>
            <pre id="morse" style={{overflow: "auto"}}></pre>
            <br />
        </div>
      );
    }
}
export default Tone;


  