import React, { Component } from 'react';
import './NewMessage.css';
import { Link } from 'react-router-dom';
import { NavBar } from "./NavBar";
import { Colors } from "./Colors";
import { FavoriteButton } from "./FavoriteButton";

export class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            color: 'null',
            isFav: false,
            description: '',
            icon: 'anchor',
            favatfirst: false,
            itemID: Date.now(),
            key: ""
        };
    }

    componentWillMount() {
        let key = "NewMessage";
        if (this.props.match.params.id) {
            key = "EditMessage";
        }

        let messageST = localStorage.getItem(key);
        if (messageST) {
            let messageOB = JSON.parse(messageST);
            this.setState({
                description: messageOB.description,
                header: messageOB.header,
                color: messageOB.color,
                isFav: messageOB.isFav || this.state.isFav,
                icon: messageOB.icon || this.state.icon,
                favatfirst: messageOB.isFav,
                itemID: this.props.match.params.id ? this.props.match.params.id : Date.now(),
                key: key
            });
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.updateLocalStorage);
    }

    componentWillUnmount() {
        this.updateLocalStorage();
        window.removeEventListener('beforeunload', this.updateLocalStorage);
    }

    updateLocalStorage = () => {
        let messageOBJ = {
            description: this.state.description,
            header: this.state.header,
            color: this.state.color,
            isFav: this.state.isFav,
            icon: this.state.icon,
            itemID: this.state.itemID
        };

        console.log("messageOB: ", messageOBJ);
        localStorage.setItem(this.state.key, JSON.stringify(messageOBJ));
    }

    updateInfo = (key, event) => {
        this.setState({ [key]: event.target.value });
    }

    updateInfoValue = (key, value) => {
        this.setState({ [key]: value });
    }

    addtofavorite = () => {
        this.setState({ isFav: !this.state.isFav });
    }

    savedata = () => {
        let key = "messages";
        let msg = {
          header: this.state.header,
          description: this.state.description,
          isFav: this.state.isFav,
          itemID: this.state.itemID,
          icon: this.state.icon,
          color: this.state.color
        }
        let messagesArr = [];
        let tempmessage = [];
        let messageST = localStorage.getItem(key);
    
        if (messageST) {
          let messagesOB = JSON.parse(messageST);
          messagesArr = Object.keys(messagesOB).map(obj => messagesOB[obj]);
        }
    
        if (this.props.match.params.id) {
          messagesArr.map(currmsg => {
            if (currmsg.itemID == this.props.match.params.id) {
              tempmessage.push(msg);
            } else {
              tempmessage.push(currmsg);
            }
          });
          localStorage.setItem(key, JSON.stringify(tempmessage));
        } else {
          messagesArr.push(msg);
          localStorage.setItem(key, JSON.stringify(messagesArr));
        }
      }

    render() {
        return (

            <div>
                <NavBar history={this.props.history} />

                <div className="container">

                    <div className="form-signin">
                        <label for="exampleInputEmail1 text-right">כותרת ההודעה:</label>
                        <input
                            type="text"
                            onChange={(event) => this.updateInfo("header", event)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="הכנס/י כותרת להודעה"
                            value={this.state.header}
                        />
                        <small id="emailHelp" className="form-text text-muted">על הכותרת להיות קצרה ותמציתית.</small>
                    </div>
                    <br />

                    <div>
                        <label for="exampleInputPassword1">תוכן ההודעה:</label>
                        <input
                            type="text"
                            onChange={(event) => this.updateInfo("description", event)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="תוכן ההודעה"
                            value={this.state.description}
                        />
                    </div>

                    <br />
                    <br />

                    <div class="row">
                        <div class="col-11 text-center">
                            <i style={{ color: this.state.color }} class={"fas fa-" + this.state.icon + " fa-5x pull-left"} /> <br />
                            <br />
                            <Link to={`/${this.state.key}/IconPage${this.state.key === "EditMessage" ? "/"+this.state.itemID : ""}`}>
                                <button
                                    type="button"
                                    class="btn btn-info ">
                                    <i class="fas fa-pencil-alt"></i>
                                    שנה/י אייקון
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* the color picker */}
                    <input
                        type="color"
                        className="btn-circle"
                        rgba
                        value={this.state.color}
                        onChange={(event) => this.updateInfo("color", event)}
                    />

                    <div className="form-group">
                        <br />
                        <Colors updatecolor={(color) => this.updateInfoValue("color", color)} />
                        <small id="emailHelp" className="form-text text-muted text-center ">ביכולתך לבחור בצבע מוכן מראש או לחילופין לבחור צבע מותאם אישית.</small>
                    </div>

                    <FavoriteButton favbutt={this.state.isFav} onChange={this.addtofavorite} />

                </div>

                <Link to="/">
                    <button
                        type="submit"
                        class="btn btn-secondary btn-lg btn-block"
                        onClick={this.savedata}>
                        {this.state.key === "NewMessage" ? "הוסף/י" : "עדכן/י"}
                    </button>
                </Link>

            </div>

        );
    }
}

export default Message;