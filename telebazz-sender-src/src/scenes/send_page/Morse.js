import React, { Component } from "react";
import char_to_binary from "./char_to_binary";
import { setTimeout } from "timers";

import "./SendPage.css";

export class Morse extends Component {

    static FREQUENCY_RATE = 700;
    static TIME_INTERVAL = 100;

    constructor(props) {
        super(props);
        this.state = {
            textInput: this.props.header,
            messageEnded: false,
            messageError: false
        }

        this.codeString = "";
    }

    componentWillMount() {
        this.generateMorseSequence();
    }

    textToMorse = () => {
        let message = this.state.textInput;
        let messageUpper = message.toUpperCase();
        console.log("messageUpper: ", messageUpper);

        for (let i = 0; i < messageUpper.length; i++) {
            this.codeString += char_to_binary[messageUpper[i]] + "~";
        }
    }

    playBit = (currentChar, cb) => {
        console.log("Playing bit:%s", currentChar);
        if (currentChar == 1) {
            var context = new AudioContext();
            var osc = context.createOscillator();
            osc.type = "sine";
            osc.frequency.value = Morse.FREQUENCY_RATE;
            osc.connect(context.destination);
            osc.start(0);
            osc.stop(Morse.TIME_INTERVAL / 1000);
            osc.onended = () => {
                //console.log("on ended is launched");
                setTimeout(() => {
                    cb();
                }, Morse.TIME_INTERVAL);

            }
            return;
        }

        setTimeout(() => {
            cb();

        }, Morse.TIME_INTERVAL * 2);
    }

    fetchNextBit = (currentChar) => {
        if (currentChar.length != 0) {

        } else {
            currentChar = this.charsArr.shift();
            this.bitIndex = 0;

        }

        this.bitIndex++;
    }
    playMorseSequence = () => {
        console.log("playMorseSequence is launched");
        let isDone = false;

        let i = 0;
        let currentBit = this.codeString[0];


        let iterateChars = () => {

            currentBit = this.codeString[i];
            this.playBit(currentBit, () => {

                if (this.codeString[i + 1]) {
                    i++;
                    return iterateChars();
                } else {
                    console.log("Done playing message");
                    isDone = true;
                }

            });
        }

        if (!isDone) {
            iterateChars();
        }
    }

    generateMorseSequence = () => {
        ///HERE
        this.textToMorse();
        console.log("this.codeString (binary message)", this.codeString);
        this.playMorseSequence();
    }

    render() {
        return (
            <div>
                {this.state.messageEnded ?
                    <div>
                        <div className="loading-check">
                            <i className="fa fa-check" />
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
