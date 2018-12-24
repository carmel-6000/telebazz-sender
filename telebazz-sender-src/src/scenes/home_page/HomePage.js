import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data.json';
// import { Nav } from "./Nav";
import { Message } from "./Message";
import { NavBar } from '../../NavBar.js';


export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ''
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
      //tempmessage=Object.assign({},currMg);
    });

    localStorage.setItem(key, JSON.stringify(updatemessages));
    this.setState({ messages: updatemessages });
  }

  sendMessage = (itemID) => {
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
      if (message.isFav) {
        favmessages.push(
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
      } else {
        regmessages.push(
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
      }
    });

    return (
      <div style={{ textAlign: "right" }}>
        {/* <Nav /> */}
        <NavBar pageName="HomePage"/>
        <p> מועדפים </p>
        <div style={{ textAlign: "center" }}>
          {favmessages}
        </div>

        <br />

        <p> ההודעות שלי </p>
        <div style={{ textAlign: "center" }} >
          {regmessages}
        </div>

        <div className="container">
          <Link to="/NewMessage">
            <button type="button" className="btn btn-secondary btn-lg fixed-bottom btn-block">הוסף/י הודעה</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
