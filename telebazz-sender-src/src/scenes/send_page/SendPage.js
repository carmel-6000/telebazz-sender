import React, { Component } from 'react';
import { NavBar } from '../NavBar.js';
// import { MorseCode } from '../../encode_message/MorseCode.jsx';
import Morse from './Morse.js';
import "./SendPage.css";

//mobx
import { observer } from 'mobx-react';

@observer(['MessageSending'])
class SendPage extends Component {
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

    doneSendingMessage = () => {
        //if the user in the 
        if(window.location.href.indexOf("SendPage") != -1){
            setTimeout(()=>{
                this.props.history.push('/');
            }, 2000);
        }

        this.props.MessageSending.messageSending = false;
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

                {!this.props.MessageSending.messageSending ?
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

                <Morse
                    header={this.state.header}
                    // history={this.props.history}
                    doneSendingMessage={this.doneSendingMessage}
                />
                
            </div>
        );
    }
}

export default SendPage;