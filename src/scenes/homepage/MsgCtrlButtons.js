import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MsgCtrlButtons extends Component {
    render() {

        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to={`/Editmessage/${ this.props.itemID }`}>
                            <button onClick={() => this.props.editmessage(this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >Edit</button>
                        </Link>

                        <button onClick={(e) => this.props.deletemessage(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >Delete</button>
                        <button onClick={(e) => this.props.changelocation(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >add to isFav</button>

                    </div>
                </div>

            </div>
        );
    }
}