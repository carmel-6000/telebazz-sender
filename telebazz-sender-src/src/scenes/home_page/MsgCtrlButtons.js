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
                    onClick={this.showMenu}
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMessageCtrl"
                />

                {this.state.showMenu
                    ?
                    <div className="dropdown-message-menu">
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
                    : null
                }
            </div>
        );
    }
}
    // render() {
    //     return (
    //         <div>
    //             <div className="dropdown-ctrl-message">
    //                 <button
    //                     className="btn btn-secondary dropdown-toggle"
    //                     type="button"
    //                     id="dropdownMenuButton"
    //                     data-toggle="dropdown"
    //                     aria-haspopup="true"
    //                     aria-expanded="false"
    //                 />

    //                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //                     <Link to={`/EditMessage/${this.props.itemID}`}>
    //                         <button onClick={() => this.props.editmessage(this.props.itemID)} className="dropdown-item btn btn-primary" >ערוך/י</button>
    //                     </Link>

    //                     <button onClick={(e) => this.props.deletemessage(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >מחק/י</button>
    //                     {this.props.isFav ?
    //                         <button onClick={(e) => this.props.changelocation(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >הסר/י ממועדפים</button>
    //                         :
    //                         <button onClick={(e) => this.props.changelocation(e, this.props.itemID, this.props.isFav)} className="dropdown-item btn btn-primary" >הוסף/י למועדפים</button>
    //                     }
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }