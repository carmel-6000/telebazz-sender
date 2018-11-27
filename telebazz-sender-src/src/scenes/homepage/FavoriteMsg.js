import React, { Component } from 'react';
import { MsgCtrlButtons } from "./MsgCtrlButtons";

export class FavoriteMsg extends Component {
    render() {
        return (
            <div className="list-group">
                <a href="./newpage/newpage.js">
                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">

                            <MsgCtrlButtons itemID={this.props.itemID} deletemessage={this.props.deletemessage} editmessage={this.props.editmessage} isFav={this.props.isFav} changelocation={this.props.changelocation} />

                            <h4 className="mb-3 ">{this.props.header} </h4>
                            <i style={{ color: this.props.color }} className={"fas fa-" + this.props.icon + " fa-3x"} />
                        </div>
                        <p className="mb-1"> {this.props.description} </p>
                    </div>
                </a>
            </div>

        );
    }
}
