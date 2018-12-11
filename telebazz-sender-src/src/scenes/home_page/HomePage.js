import React, { Component } from 'react';
import { MorseCode, char_to_morse } from '../../encode_message/MorseCode.jsx';
import { Link } from 'react-router-dom';
//import data from '../data.json';
// import { Nav } from "./Nav";
import {Message} from "./Message";
import { NavBar } from '../message_page/NavBar.js';


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
    }

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

  editmessage(itemID, isFav) {
    let key = "EditMessage";
    let editmsg = {};

    this.state.messages.map(currmsg => {
      if (currmsg.itemID === itemID) {
        editmsg = Object.assign({}, currmsg);
      }
    });

    localStorage.setItem(key, JSON.stringify(editmsg));
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
            description={message.description}
            icon={message.icon}
            color={message.color}
            deletemessage={this.deletemessage}
            editmessage={this.editmessage}
            changelocation={this.changelocation}
          />);
      } else {
        regmessages.push(
          <Message
            key={key}
            isFav={message.isFav}
            itemID={message.itemID}
            header={message.header}
            description={message.description}
            icon={message.icon}
            color={message.color}
            deletemessage={this.deletemessage}
            editmessage={this.editmessage}
            changelocation={this.changelocation}
          />);
      }
    });

    return (
      <div style={{ textAlign: "right" }}>
        {/* <Nav /> */}
        <NavBar />
        <p> מועדפים </p>
        <div style={{ textAlign: "center" }}>
          {favmessages}
        </div>

        <br />

        <p> עוד הודעות </p>
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
