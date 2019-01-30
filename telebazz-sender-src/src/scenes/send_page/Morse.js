import React, { Component } from "react";
import char_to_binary from "./char_to_binary";
import { setTimeout } from "timers";

//css
import "./SendPage.css";


class Sound {

    constructor(context) {
      this.context = context;
    }
  
    init() {

      this.oscillator = this.context.createOscillator();
      this.gainNode = this.context.createGain();
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.oscillator.type = 'sine';
    }
  
    onEnded(cb){
        
        this.oscillator.onended = () => {
            cb();
        }
        
    }
    play(value, time) {
      
      this.init();
      this.oscillator.frequency.value = value;
      //this.gainNode.gain.setValueAtTime(1, this.context.currentTime);        
      this.oscillator.start(time);
      this.stop(time);
  
    }
  
    stop(time) {
      //this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + 1);
      this.oscillator.stop(time + Morse.TIME_INTERVAL/1000);
    }
  
  }


class Morse extends Component {

    static FREQUENCY_RATE = 18000;
    static TIME_INTERVAL = 1000;

    constructor(props) {
        super(props);

        this.textInput = this.props.header;
        this.codeString = "";
        //this.audioContext = new AudioContext();
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
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
        if (currentChar == 1 || currentChar == "start") {
            
            let note = new Sound(this.audioContext);
            let now = this.audioContext.currentTime;
            console.log("Playing a 1 signal");
            note.play(Morse.FREQUENCY_RATE, now);
            note.onEnded(()=>{
                console.log("note on ended is launched"); 
                setTimeout(() => {
                    if (cb) cb();
                }, Morse.TIME_INTERVAL); //according to miliseconds
            })
            return;
            
        
        }

        console.log("Playing a 0 signal");
        setTimeout(() => {
            cb();
        }, Morse.TIME_INTERVAL * 2); //according to miliseconds
    }
    xplayBit = (currentChar, cb) => {
        
        if (currentChar == 1 || currentChar == "start") {
            
            var osc = this.audioContext.createOscillator();
            let note=new Sound(this.audioContext);
            osc.type = "sine";
            osc.frequency.value = Morse.FREQUENCY_RATE;
            console.log("osc.connect");
            osc.connect(this.audioContext.destination);
            console.log("Playing bit:%s", currentChar);
            osc.start(0);
            osc.stop(Morse.TIME_INTERVAL / 1000); //according to seconds

            osc.onended = () => {
                 console.log("on ended is launched");
                // context.close(); //works with 'npm start' but NOT with cordova!!!!
                // osc.disconnect(); //gets stuck
                
                setTimeout(() => {
                    if (cb) cb();
                }, Morse.TIME_INTERVAL); //according to miliseconds
            }
            return;
        }

        setTimeout(() => {
            cb();
        }, Morse.TIME_INTERVAL * 2); //according to miliseconds
    }

    xplayMorseSequence=()=>{
        let context = new (window.AudioContext || window.webkitAudioContext)();
        let note = new Sound(context);
        let now = context.currentTime;
        note.play(440, now);
        note.play(440, now + 2);
        note.play(440, now + 4);
        
        this.props.doneSendingMessage();
    }
    playMorseSequence = () => {
        console.log("playMorseSequence is launched");
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

    generateMorseSequence = () => {
        this.textToBinary();
        console.log("this.codeString (binary message)", this.codeString);
        this.playMorseSequence();
    }

    render() {
        return (<div />);
    }
}

export default Morse;
