import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MsgCtrlButtons extends Component {
    render() {
        return (
            <div>
                <div className="dropdown-ctrl-message">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    />

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to={`/EditMessage/${this.props.itemID}`}>
                            <button onClick={() => this.props.editmessage(this.props.itemID)} className="dropdown-item btn btn-primary" >ערוך/י</button>
                        </Link>

                        <button onClick={(e) => this.props.deletemessage(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >מחק/י</button>
                        {this.props.isFav ?
                            <button onClick={(e) => this.props.changelocation(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >הסר/י ממועדפים</button>
                            :
                            <button onClick={(e) => this.props.changelocation(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >הוסף/י למועדפים</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}