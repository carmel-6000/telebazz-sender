import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MsgCtrlButtons } from "./MsgCtrlButtons";

export class Message extends Component {
    render() {
        return (
            <div className="list-group">
                <Link
                    to={`/SendPage/${this.props.itemID}`}
                    query={{ itemID: this.props.itemID }} //this is props passed to SendPage 
                    onClick={() => this.props.sendMessage(this.props.itemID)}
                >
                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <i style={{ color: this.props.color }} className={"fas fa-" + this.props.icon + " fa-3x"} />
                            <h4 className="mb-3 ">{this.props.header} </h4>
                            <MsgCtrlButtons
                                itemID={this.props.itemID}
                                deletemessage={this.props.deletemessage}
                                editmessage={this.props.editmessage}
                                isFav={this.props.isFav}
                                changelocation={this.props.changelocation}
                            />
                        </div>
                        <p className="mb-1"> {this.props.description} </p>
                    </div>
                </Link>
            </div>
        );
    }
}
