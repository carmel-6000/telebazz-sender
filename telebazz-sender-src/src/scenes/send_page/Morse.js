import React, { Component } from "react";
import char_to_morse from "./morse_code_dict";
import { setTimeout } from "timers";

import "./SendPage.css";

//morse times in seconds
let longerBy = 10;
let dotTime = 0.07 * longerBy;
let dashTime = dotTime * 3;
let interElemTime = 0.09 * longerBy;
let spaceTime = dotTime;

//initial delay before starting playing the morse code
let initialDelay = 0.1;
let codeArray = [];

export class Morse extends Component {
    // The Morse Code tone to use, xHz sine wave
    //static osc = new window.Tone.Oscillator(8000, "sine").toMaster();

    constructor(props) {
        super(props);
        this.state = {
            textInput: this.props.header,
            messageEnded: false
            // codeArray: [],
        }

        //toMaster - the master output of the device (ex. speakers)
        this.osc = new window.Tone.Oscillator(8000, "sine").toMaster();
        console.log("osc", this.osc);
        //console.log("tone",window.Tone.Transport);
    }

    endedSendingMessage = () => {
        console.log("endedSendingMessage");
        this.setState({ messageEnded: true });
        setTimeout(()=>{
            this.props.history.push('/');
        }, 2000);
    }

    toneChar = (time, char) => {
        let charTime;
        if (char === ".") {
            charTime = dotTime;
        } else if (char === "-") {
            charTime = dashTime;
        }
        this.osc.start(time);
        this.osc.stop(time + charTime);
        // window.Tone.Transport.start();
        // console.log("char", char, "time", time, "charTime", charTime);
    }

    stopMorse = () => {
        codeArray = [];
        // window.Tone.Transport.cancel();
    }

    textToMorse = () => {
        let message = this.state.textInput;
        let messageUpper = message.toUpperCase();
        // let codeArray = this.state.codeArray;
        console.log("messageUpper: ", messageUpper);

        for (let i = 0; i < messageUpper.length; i++) {
            // if (messageUpper[i] === " ") {
            //     codeArray.push(<br />);
            // } else {
            codeArray.push(char_to_morse[messageUpper[i]]);
            codeArray.push(" ");
            // }
        }
        console.log("codeArray: ", codeArray);

        // this.setState({ codeArray });
    }

    generateSequence = () => {
        let t = initialDelay; //the current time in the morse code sequence
        // let codeArray = this.state.codeArray;

        for (let i = 0; i < codeArray.length; i++) {
            let codeChar = codeArray[i]; //morse char (dash and dots)
            if (codeChar === " ") {
                t += spaceTime;
            } else {
                for (let j = 0; j < codeChar.length; j++) {
                    let char = codeChar[j];

                    switch (char) {
                        case ".":
                            this.toneChar(t, char);
                            t += dotTime;
                            break;
                        case "-":
                            this.toneChar(t, char);
                            t += dashTime;
                            break;
                        default:
                            console.log("Unexpected character in morse code message", char);
                    }
                    // Add inter element pause between characters
                    t += interElemTime;
                }
            }
        }
        setTimeout(this.endedSendingMessage, t * 1000);
    }

    playMorseSequence = () => {
        // clear previous
        this.stopMorse();

        this.textToMorse();

        //to update the progress bar
        // let codeArray = this.state.codeArray;
        //let totalLength = codeArray.join('').length - 1;

        this.generateSequence();
    }

    render() {
        this.playMorseSequence();

        return (
            <div>
                {this.state.messageEnded ?
                    <div>
                        <div className="loading-spinner">
                            <i className="fa fa-spinner" />
                        </div>
                        <p className="message-status">ההודעה נשלחה בהצלחה</p>
                    </div>
                    :
                    <div>
                        <div className="loading-spinner">
                            <i className="fa fa-spinner fa-spin" />
                        </div>
                        <p className="message-status">ההודעה בשליחה</p>
                    </div>
                }
            </div>
        );
    }
}

export default Morse;
