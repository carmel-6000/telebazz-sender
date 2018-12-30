import React, { Component } from 'react';
import { NavBar } from '../../NavBar.js';
// import { MorseCode } from '../../encode_message/MorseCode.jsx';
import { Morse } from './Morse.js';
import "./SendPage.css";

export class SendPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
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
                color: messageOB.color,
                icon: messageOB.icon || this.state.icon,
            });
        }
    }

    render() {
        return (
            <div>
                <NavBar pageName="SendPage" history={this.props.history} />

                <div className="message-info-container">
                    <i
                        style={{ color: this.state.color }}
                        className={"fas fa-" + this.state.icon + " fa-3x"}
                        id="message-icon"
                    />
                    <h4 className="mb-3" id="send-message-text">{this.state.header} </h4>
                </div>

                <div className="loading-spinner">
                    <i className="fa fa-spinner fa-spin" />
                </div>


                <Morse header={this.state.header} />
                {/* onFinish={()=>this.props.location.state.setCodeRunning(false)}/> */}



            </div>
        );
    }
}

export default SendPage;