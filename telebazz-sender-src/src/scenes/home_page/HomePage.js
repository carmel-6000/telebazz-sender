import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data.json';
// import { Nav } from "./Nav";
import { Message } from "./Message";
import { NavBar } from '../../NavBar.js';
import "./HomePage.css";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
      // codeRunning: false
    }

    this.deletemessage = this.deletemessage.bind(this);
    this.editmessage = this.editmessage.bind(this);
    this.changelocation = this.changelocation.bind(this);
  }

  componentDidMount() {
    let key = "messages";
    let messageST = localStorage.getItem(key);

    if (messageST) {
      let messagesOB = JSON.parse(messageST);
      const messages = Object.keys(messagesOB).map(obj => messagesOB[obj]);
      this.setState({ messages });
    } /*else {
      window.NativeStorage.getItem(key,
        (arr) => { this.setState({ messages: arr }) },
        (error) => { console.log("homepage: cant access native storage: ", error) }
      );
    }*/

    localStorage.setItem("EditMessage", JSON.stringify(""));
    localStorage.setItem("NewMessage", JSON.stringify({}));
    localStorage.setItem("SendMessage", JSON.stringify(""));
  }

  deletemessage(event, itemID, isFav) {
    event.preventDefault();
    let key = "messages";
    let messages = this.state.messages;
    let updatemessages = [];

    messages.map(msg => {
      if (msg.itemID !== itemID) {
        updatemessages.push(msg);
      }
    });

    localStorage.setItem(key, JSON.stringify(updatemessages));
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

  changelocation(event, Itemid, isFav) {
    event.preventDefault();
    let key = "messages";
    let messages = this.state.messages;
    let updatemessages = [];

    messages.map(msg => {
      updatemessages.push(msg);
      if (msg.itemID === Itemid) {
        updatemessages[updatemessages.length - 1].isFav = !isFav;
      }
    });

    localStorage.setItem(key, JSON.stringify(updatemessages));
    this.setState({ messages: updatemessages });
  }

  // setCodeRunning = (value) => {
  //   localStorage.setItem("codeRunning",value);
  // }

  sendMessage = (itemID) => {
    // this.setCodeRunning(true);
    // console.log("sendMessage: ", this.state.codeRunning);
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
        // codeRunning={this.state.codeRunning}
        // setCodeRunning={this.setCodeRunning}
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
              <i class="fas fa-plus" />
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
