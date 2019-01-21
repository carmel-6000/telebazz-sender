import React, { Component } from "react";
import char_to_binary from "./char_to_binary";
import { setTimeout } from "timers";

//css
import "./SendPage.css";

class Morse extends Component {

    static FREQUENCY_RATE = 700;
    static TIME_INTERVAL = 100;

    constructor(props) {
        super(props);
    
        this.textInput = this.props.header;
        this.codeString = "";
    }

    componentWillMount() {
        this.generateMorseSequence();
    }

    textToBinary = () => {
        let message = this.textInput;
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

            //context.close(); - works with 'npm start' but NOT with cordova!!!!

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
                    this.props.doneSendingMessage();
                    isDone = true;
                }

            });
        }

        if (!isDone) {
            iterateChars();
        }
    }

    generateMorseSequence = () => {
        this.textToBinary();
        console.log("this.codeString (binary message)", this.codeString);
        this.playMorseSequence();
    }

    render() {
        return (
            <div/>
        );
    }
}

export default Morse;
