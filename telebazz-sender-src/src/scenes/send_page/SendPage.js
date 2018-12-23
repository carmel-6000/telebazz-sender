import React, { Component } from 'react';
import { NavBar } from '../message_page/NavBar.js';
// import { MorseCode } from '../../encode_message/MorseCode.jsx';
import { Morse } from './Morse.js';

export class SendPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            description: '',
            color: 'null',
            icon: 'ghost'
        }
    }

    componentWillMount() {
        let key = '';
        if (this.props.match.params.id) {
            key = "SendMessage";
        } else {
            return;
        }

        let messageST = localStorage.getItem(key);
        if (messageST) {
            let messageOB = JSON.parse(messageST);
            this.setState({
                header: messageOB.header,
                description: messageOB.description,
                color: messageOB.color,
                icon: messageOB.icon || this.state.icon,
            });
        }
    }

    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                <i style={{ color: this.state.color }} className={"fas fa-" + this.state.icon + " fa-3x"} />
                <h4 className="mb-3 ">{this.state.header} </h4>
                <p className="mb-1"> {this.state.description} </p>

                <div dir="ltr">
                    <Morse header={this.state.header} />
                </div>
            </div>
        );
    }
}

export default SendPage;