import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MsgCtrlButtons } from "./MsgCtrlButtons";
import './HomePage.css';

export class Message extends Component {
    render() {
        return (
            <div className="list-group">
                <Link
                    to={`/SendPage/${this.props.itemID}`}
                    onClick={() => this.props.sendMessage(this.props.itemID)}
                >
                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="message-container d-flex w-100 justify-content-between">
                            <i style={{ color: this.props.color }} className={"fas fa-" + this.props.icon + " fa-3x"} />
                            <h4 className="mb-3 message-text">{this.props.header} </h4>
                            <MsgCtrlButtons
                                itemID={this.props.itemID}
                                deletemessage={this.props.deletemessage}
                                editmessage={this.props.editmessage}
                                isFav={this.props.isFav}
                                changelocation={this.props.changelocation}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

