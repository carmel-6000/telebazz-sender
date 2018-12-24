import React, { Component } from "react";
import char_to_morse from "./morse_code_dict";

export class Morse extends Component {
    // The Morse Code tone to use, xHz sine wave
    //static osc = new window.Tone.Oscillator(8000, "sine").toMaster();

    constructor(props) {
        super(props);
        this.state = {
            textInput: this.props.header,
            codeArray: [],
            showCode: false
        }

        let osc= new window.Tone.Oscillator(8000,"sine").toMaster();
        console.log("osc",osc);
    }

    textToMorse = () => {
        let message = this.state.textInput;
        let messageUpper = message.toUpperCase();
        let codeArray = this.state.codeArray;
        console.log("messageUpper: ", messageUpper);

        for (let i = 0; i < messageUpper.length; i++) {
            if (messageUpper[i] === " ") {
                codeArray.push(<br />);
            } else {
                codeArray.push(char_to_morse[messageUpper[i]] + " ");
            }
        }

        console.log("codeArray: ", codeArray);
        this.setState({ codeArray: codeArray });
    }

    playMorseSequence = () => {
        if (this.state.showCode) {
            return;
        }
        this.setState({ showCode: true });
        this.textToMorse();

        // let codeArray = this.state.codeArray;
        // let totalLength = codeArray.join('').length - 1;

        // this.tone_updateProgress(totalLength);
        // this.generateSequence();
    }

    render() {
        return (
            <div>
                {this.playMorseSequence()}
                <br />
                <h1>{this.state.showCode ? this.state.codeArray : ""}</h1>
            </div>
        );
    }
}

export default Morse;
