import React, { Component } from "react";
import char_to_morse from "./morse_code_dict";
import { setTimeout } from "timers";

import "./SendPage.css";

//morse times in seconds
const longerBy = 10;
const dotTime = 0.07 * longerBy;
const dashTime = dotTime * 3;
const interElemTime = 0.09 * longerBy;
const spaceTime = dotTime;
const startTime = dotTime * 5;
const initialDelay = 0.1; //initial delay before starting playing the morse code
let codeArray = [];
// let t = 0;

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
        // this.osc = new window.Tone.Oscillator(8000, "sine").toMaster();
        this.FREQUENCY = 200;
        // this.osc = null;
        console.log("ended?", this.state.messageEnded, codeArray);

        // this.timeout = null;
        // console.log("osc", this.osc); //osc = null
        //console.log("tone",window.Tone.Transport);
    }

    componentWillMount() {
        // this.osc = new window.Tone.Oscillator(this.FREQUENCY, "sine").toMaster();
        // console.log("componentWillMount osc: ", this.osc); //osc = new .... 
        this.playMorseSequence();
        // console.log("componentWillMount osc timeline", this.osc._state._timeline);
    }

    endedSendingMessage = (time) => {
        this.setState({ messageEnded: true });
        // console.log("endedSendingMessage osc timeline", this.osc._state._timeline);
        console.log("time t: ", time);
        // console.log("osc timeout: ", this.osc._oscillator._timeout);
        // this.osc._oscillator._timeout = 0; //isnt changed to 0
        codeArray = [];
        // this.osc.disconnect();
        // console.log("endedsendingmessage osc disconnect: ", this.osc);
        // clearTimeout(this.timeout);
        // this.osc._state._timeline = [];
        // console.log("osc timeline endddd", this.osc._state._timeline);
        // this.osc = null;

        // console.log("ended sending t ", t);
        // t=0;
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }

    toneChar = (time, char) => {
        let charTime;
        console.log("toneChar: time ", time, "char ", char);

        switch (char) {
            case ".":
                charTime = dotTime;
                break;
            case "-":
                charTime = dashTime;
                break;
            case "s":
                charTime = startTime;
                break;
            default:
                return;
        }

        try {
            var AudioContext = window.AudioContext || window.webkitAudioContext;

            var context = new AudioContext();

            var osc = context.createOscillator();
            // osc.type = e.currentTarget.id;
            osc.frequency.value = 440;

            //WHAT DOES gain DO ?!???!
            var gain = context.createGain();
            gain.gain.value = 1;
            gain.connect(osc.frequency);

            osc.connect(context.destination);
            osc.start(time);
            console.log("osc", osc, "gain", gain);
            osc.stop(time + charTime);
        } catch (e) {
            alert('Web Audio API is not supported in this browser');
        }

        // var osc2 = context.createOscillator();
        // osc2.frequency.value = 1;
        // osc2.connect(gain);
        // osc2.start(0);

        // this.osc.start(time);
        // this.osc.stop(time + charTime);
    }

    // stopMorse = () => {
    //     console.log("stop morse");
    //     codeArray = [];
    //     // window.Tone.Transport.cancel();
    // }

    textToMorse = () => {
        let message = this.state.textInput;
        let messageUpper = message.toUpperCase();
        // let codeArray = this.state.codeArray;
        console.log("messageUpper: ", messageUpper);

        for (let i = 0; i < messageUpper.length; i++) {
            codeArray.push(char_to_morse[messageUpper[i]]);
            codeArray.push(" ");
        }

        console.log("codeArray: ", codeArray);

        // this.setState({ codeArray });
    }

    generateHeader = () => {
        let time = initialDelay;
        this.toneChar(time, "s");
        time += (startTime + spaceTime);
        return time;
    }


    generateSequence = () => {
        //when t is global the time doesnt start from 0
        //the time starts from the last t 
        //global t is NOT a solution
        let t = 0;
        // console.log("generate sequence t: ", t);
        t += initialDelay; //the current time in the morse code sequence
        // let codeArray = this.state.codeArray;

        t += this.generateHeader();

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

        // this.osc._oscillator.onended(console.log("onended")); //doesnt work
        setTimeout(this.endedSendingMessage, t * 1000, t);
    }

    playMorseSequence = () => {
        // this.stopMorse();
        this.textToMorse();
        this.generateSequence();
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
