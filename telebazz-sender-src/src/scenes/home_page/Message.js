import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MsgCtrlButtons from "./MsgCtrlButtons";
import './HomePage.css';

//mobx 
import { observer } from 'mobx-react';

@observer(['MessageSending'])
class Message extends Component {
    render() {
        return (
            <div className="list-group">
                {this.props.MessageSending.messageSending ?
                    //if message is sending - the user connot send another message at the same time
                    <div className="list-group">
                        <div className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="message-container d-flex w-100 justify-content-between">
                                <i style={{ color: this.props.color }} className={"fas fa-" + this.props.icon + " fa-3x"} />
                                <h4 className="mb-3 message-text">{this.props.header} </h4>
                            </div>
                        </div>
                    </div>
                    :
                    // if message not sending - use link to send the message
                    <Link
                        to={`/SendPage/${this.props.itemID}`}
                        onClick={() => {
                            this.props.MessageSending.messageSending = true;
                            this.props.sendMessage(this.props.itemID);
                        }}
                    >
                        <div className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="message-container d-flex w-100 justify-content-between">
                                <i style={{ color: this.props.color }} className={"fas fa-" + this.props.icon + " fa-3x"} />
                                <h4 className="mb-3 message-text">{this.props.header} </h4>
                            </div>
                        </div>
                    </Link>
                }

                <MsgCtrlButtons
                    itemID={this.props.itemID}
                    deletemessage={this.props.deletemessage}
                    editmessage={this.props.editmessage}
                    isFav={this.props.isFav}
                    changelocation={this.props.changelocation}
                />
            </div>
        );
    }
}

export default Message;