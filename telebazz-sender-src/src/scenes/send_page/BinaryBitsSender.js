import React, { Component } from "react";
import char_to_binary from "./char_to_binary";
import { setTimeout } from "timers";
import Sound from "./Sound";
//css
import "./SendPage.css";

class BinaryBitsSender extends Component {

    static FREQUENCY_RATE = 440;
    static TIME_INTERVAL = 100;

    constructor(props) {
        super(props);

        this.textInput = this.props.header;
        this.codeString = "";
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    componentWillMount() {
        this.generateBinarySequence();
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
        if (currentChar == 1 || currentChar == "start") {
            let note = new Sound(this.audioContext);
            let now = this.audioContext.currentTime;
            console.log("Playing a 1 signal");
            note.play(BinaryBitsSender.FREQUENCY_RATE, now);
            note.onEnded(() => {
                console.log("note on ended is launched");
                setTimeout(() => {
                    if (cb) cb();
                }, BinaryBitsSender.TIME_INTERVAL); //according to miliseconds
            })
            return;
        }

        console.log("Playing a 0 signal");
        setTimeout(() => {
            cb();
        }, BinaryBitsSender.TIME_INTERVAL * 2); //according to miliseconds
    }

    playBinarySequence = () => {
        console.log("playBinarySequence is launched");
        let isDone = false;

        this.playBit("start");

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

    generateBinarySequence = () => {
        this.textToBinary();
        console.log("this.codeString (binary message)", this.codeString);
        this.playBinarySequence();
    }

    render() { return (<div />); }
}

export default BinaryBitsSender;
