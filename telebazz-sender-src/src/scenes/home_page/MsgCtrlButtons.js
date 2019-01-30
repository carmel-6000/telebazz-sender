import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

//mobx 
import { observer } from 'mobx-react';

const languages = require('./../Languages.json');

@observer(['Settings'])
class MsgCtrlButtons extends Component {

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
                >
                    {/* <i class="fas fa-ellipsis-v"></i> */}
                </button>

                {this.state.showMenu
                    ?
                    <div className="dropdown-message-menu">
                        <Link to={`/EditMessage/${this.props.itemID}`}>
                            <button
                                onClick={() =>
                                    this.props.editmessage(this.props.itemID)}
                                className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                                {languages[this.props.Settings.language].editMsgBtn}
                            </button>
                        </Link>

                        <button
                            onClick={(e) =>
                                this.props.deletemessage(e, this.props.itemID, this.props.isFav)}
                            className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                            {languages[this.props.Settings.language].deleteMsgBtn}
                        </button>
                        {this.props.isFav ?
                            <button
                                onClick={(e) =>
                                    this.props.changelocation(e, this.props.itemID, this.props.isFav)}
                                className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                                {languages[this.props.Settings.language].removeFavsBtn}
                            </button>
                            :
                            <button
                                onClick={(e) =>
                                    this.props.changelocation(e, this.props.itemID, this.props.isFav)}
                                className="dropdown-item btn btn-primary dropdown-msg-control-item" >
                                {languages[this.props.Settings.language].addFavsBtn}
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