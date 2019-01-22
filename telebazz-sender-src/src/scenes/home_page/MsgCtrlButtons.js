import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export class MsgCtrlButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div>
                <button
                    id="msg-ctrl-btn"
                    onClick={this.showMenu}
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                />

                {this.state.showMenu
                    ?
                    <div className="dropdown-message-menu">
                        <Link to={`/EditMessage/${this.props.itemID}`}>
                            <button
                                onClick={() =>
                                    this.props.editmessage(this.props.itemID)}
                                className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                                ערוך/י
                            </button>
                        </Link>

                        <button
                            onClick={(e) =>
                                this.props.deletemessage(e, this.props.itemID, this.props.isFav)}
                            className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                            מחק/י
                        </button>
                        {this.props.isFav ?
                            <button
                                onClick={(e) =>
                                    this.props.changelocation(e, this.props.itemID, this.props.isFav)}
                                className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                                הסר/י ממועדפים
                            </button>
                            :
                            <button
                                onClick={(e) =>
                                    this.props.changelocation(e, this.props.itemID, this.props.isFav)}
                                className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                                הוסף/י למועדפים
                            </button>
                        }
                    </div>
                    : null
                }
            </div>
        );
    }
}

export default MsgCtrlButtons;