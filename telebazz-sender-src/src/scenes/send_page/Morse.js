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

let toneCharCounter = 0;
let onEndedCounter = 0;

export class Morse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: this.props.header,
            messageEnded: false,
            messageError: false
            // codeArray: [],
        }

        //toMaster - the master output of the device (ex. speakers)
        // this.osc = new window.Tone.Oscillator(8000, "sine").toMaster();
        this.FREQUENCY = 440;
        // this.osc = null;
        console.log("ended?", this.state.messageEnded, codeArray);

        // console.log("osc", this.osc); //osc = null
    }

    componentWillMount() {
        // this.osc = new window.Tone.Oscillator(this.FREQUENCY, "sine").toMaster();
        // console.log("componentWillMount osc: ", this.osc); //osc = new .... 
        this.playMorseSequence();
    }

    endedSendingMessage = () => {
        console.log("endedSendingMessage");
        if (!this.state.messageError) {
            this.setState({ messageEnded: true });
        }

        codeArray = [];
        toneCharCounter = 0;
        onEndedCounter = 0;
        // clearTimeout(this.timeout);
        // this.osc = null;

        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }

    toneChar = (time, char) => {
        toneCharCounter++;
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
            osc.type = "sine"; //e.currentTarget.id;
            osc.frequency.value = this.FREQUENCY;

            //WHAT DOES gain DO ?!???! 
            // var gain = context.createGain();
            // gain.gain.value = 1;
            // gain.connect(osc.frequency);

            osc.connect(context.destination);

            osc.start(time);
            osc.stop(time + charTime);

            // console.log("osc", osc);//, "gain", gain, "context", context);

            osc.onended = () => {
                onEndedCounter++;
                if (onEndedCounter === toneCharCounter) {
                    this.endedSendingMessage();
                }
            }

        } catch (e) {
            alert('Web Audio API is not supported in this browser');
        }

        // this.osc.start(time);
        // this.osc.stop(time + charTime);
    }

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
        let t = 0;
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
        setTimeout(() => {
            if (!this.state.messageEnded) {
                this.setState({ messageError: true });
                this.endedSendingMessage();
                console.log("error sending message");
            }
        }, t * 1000);
    }

    playMorseSequence = () => {
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
                    (this.state.messageError ?
                        <div>
                            <div className="loading-times">
                                <i className="fa fa-times" />
                            </div>
                            <p className="message-status">ארעה תקלה בשליחת ההודעה, נסו שנית</p>
                        </div>
                        :
                        <div>
                            <div className="loading-spinner">
                                <i className="fa fa-spinner fa-spin" />
                            </div>
                            <p className="message-status">ההודעה בשליחה</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Morse;
