import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from "./Message";
import { NavBar } from '../NavBar.js';
import InternalStorage from "../InternalStorage.js";
import "./HomePage.css";

//mobx 
import { observer } from 'mobx-react';

@observer(['MessageSending'])
class HomePage extends Component {

  static SETTINGS_FILE = "UserData.json"

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      MessageSending: this.props.MessageSending.messageSending //true or false
    }

    this.deletemessage = this.deletemessage.bind(this);
    this.editmessage = this.editmessage.bind(this);
    this.changelocation = this.changelocation.bind(this);
  }

  initializeUserData = () => {
    return {
      Messages: []
    };
  }

  saveMessagesToInternalStorage = (updatemessages) => {
    InternalStorage.saveFile({ Messages: updatemessages }, HomePage.SETTINGS_FILE);
  }

  initializeInternalStorage = () => {

    InternalStorage.readFile(HomePage.SETTINGS_FILE, (userData) => {
      if (userData == "") {
        console.log("saving info to UserData.json");
        userData = this.initializeUserData();
        InternalStorage.saveFile(userData, HomePage.SETTINGS_FILE);
      } else {
        userData = JSON.parse(userData);
        this.setState({ messages: userData.Messages });
      }
    });

    // localStorage.setItem("EditMessage", JSON.stringify(""));
    // localStorage.setItem("NewMessage", JSON.stringify(""));
    // localStorage.setItem("SendMessage", JSON.stringify(""));
  }

  componentWillMount() {

    // this.initializeInternalStorage();

    this.setState({
      messages:
        [{ header: "a", isFav: false, itemID: 1546962908635111, icon: "ghost" },
        { header: "foo foo foo", isFav: false, itemID: 1546962908635, icon: "ghost" }]
    });
  }

  componentDidMount(){
    localStorage.setItem("EditMessage", JSON.stringify(""));
    localStorage.setItem("NewMessage", JSON.stringify(""));
    localStorage.setItem("SendMessage", JSON.stringify(""));
  }

  deletemessage(event, itemID, isFav) {
    event.preventDefault();

    let messages = this.state.messages;
    let updatemessages = [];

    messages.map(msg => {
      if (msg.itemID !== itemID) {
        updatemessages.push(msg);
      }
    });

    this.saveMessagesToInternalStorage(updatemessages);
    this.setState({ messages: updatemessages });
  }

  editmessage(itemID) {
    let key = "EditMessage";
    let editMsg = {};

    this.state.messages.map(currMsg => {
      if (currMsg.itemID === itemID) {
        editMsg = Object.assign({}, currMsg);
      }
    });

    localStorage.setItem(key, JSON.stringify(editMsg));
  }


  //this function changes between favorite messages and regular messages
  changelocation(event, Itemid, isFav) {
    event.preventDefault();

    let messages = this.state.messages;
    let updatemessages = [];

    messages.map(msg => {
      updatemessages.push(msg);
      if (msg.itemID === Itemid) {
        updatemessages[updatemessages.length - 1].isFav = !isFav;
      }
    });

    this.saveMessagesToInternalStorage(updatemessages);
    this.setState({ messages: updatemessages });
  }

  sendMessage = (itemID) => {
    console.log("is send message launched?!", itemID);
    let key = "SendMessage";
    let sendMsg = {};

    this.state.messages.map(currMsg => {
      if (currMsg.itemID === itemID) {
        sendMsg = Object.assign({}, currMsg);
      }
    });

    localStorage.setItem(key, JSON.stringify(sendMsg));
  }

  render() {
    let favmessages = [];
    let regmessages = [];
    let msgkeys = Object.keys(this.state.messages)

    msgkeys.forEach(key => {
      let message = this.state.messages[key];

      let getMessage = (
        <Message
          key={key}
          isFav={message.isFav}
          itemID={message.itemID}
          header={message.header}
          icon={message.icon}
          color={message.color}
          deletemessage={this.deletemessage}
          editmessage={this.editmessage}
          changelocation={this.changelocation}
          sendMessage={this.sendMessage}
        />);

      if (message.isFav) {
        favmessages.push(getMessage);
      } else {
        regmessages.push(getMessage);
      }
    });

    return (
      <div style={{ textAlign: "right" }}>
        {/* <Nav /> */}
        <NavBar pageName="HomePage" />

        {/* if there are no messages at all */}
        {!favmessages[0] && !regmessages[0] ?
          <Link to="/NewMessage">
            <button
              type="button"
              className="new-message-btn">
              <i className="fas fa-plus" />
            </button>
          </Link>
          : null
        }

        {/* if there are no favorite messages */}
        {favmessages[0] ?
          <div>
            <p className="main-title-messages"> מועדפים </p>
            <div style={{ textAlign: "center" }}>
              {favmessages}
            </div>
          </div>
          : <div></div>
        }

        {/* if there are no regular messages */}
        {regmessages[0] ?
          <div>
            <p className="main-title-messages"> ההודעות שלי </p>
            <div style={{ textAlign: "center" }} >
              {regmessages}
            </div>
          </div>
          : <div></div>
        }

        <div className="container">
          <Link to="/NewMessage">
            <button
              id="bottom-new-message-btn"
              type="button"
              className="btn btn-secondary btn-lg fixed-bottom btn-block">
              הוסף/י הודעה
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
