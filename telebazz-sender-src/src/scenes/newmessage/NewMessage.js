import React, { Component } from 'react';
import './NewMessage.css';
// import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { NavBar } from "./NavBar";
import { Icons } from "./Icons";
import { Colors } from "./Colors";
import { FavoriteButton } from "./FavoriteButton";


export class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      color: 'null',
      isFav: false,
      description: '',
      icon: 'anchor',
      favatfirst: false,
      specialicon: false,
      itemID: Date.now()
    }
    this.addtofavorite = this.addtofavorite.bind(this);
    this.updatechosencolor = this.updatechosencolor.bind(this);
    this.updatecolor = this.updatecolor.bind(this);
    this.updatetext = this.updatetext.bind(this);
    this.updateheader = this.updateheader.bind(this);
    this.updateimg = this.updateimg.bind(this);
    this.checkcondutions = this.checkcondutions.bind(this);
    this.savedata = this.savedata.bind(this);
  }


  componentWillMount() {

    if (this.props.match.params.id) {
      let key = "Editmessage";
      let editmessageST = localStorage.getItem(key);
      if (editmessageST) {
        let editmessageOB = JSON.parse(editmessageST);
        this.setState({ description: editmessageOB.description });
        this.setState({ header: editmessageOB.header });
        this.setState({ color: editmessageOB.color });
        this.setState({ isFav: editmessageOB.isFav });
        this.setState({ icon: editmessageOB.icon });
        this.setState({ favatfirst: editmessageOB.isFav });
        this.setState({ itemID: this.props.match.params.id });
        this.setState({ specialicon: editmessageOB.specialicon });

      }
    }

  }

  updatechosencolor(event) {
    this.setState({ color: event.target.value });
  }
  addtofavorite() {
    this.setState({ isFav: !this.state.isFav });

  }
  updatecolor(newcolor) {
    this.setState({ color: newcolor });
  }

  updateheader(event) {
    this.setState({ header: event.target.value });
  }
  updatetext(event) {
    this.setState({ description: event.target.value });
  }
  checkcondutions() {
    if (this.state.description.length > 10) {
      alert("too many characters!");
    }
  }
  updateimg(iconimg) {
    this.setState({ icon: iconimg });
  }

  savedata() {
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
        }
        else {
          tempmessage.push(currmsg);
        }
      });
      localStorage.setItem(key, JSON.stringify(tempmessage));
    }
    else {
      messagesArr.push(msg);
      localStorage.setItem(key, JSON.stringify(messagesArr));
    }

  }

  render() {
    // console.log("message:" + this.state.header);
    // console.log("description:" + this.state.description);
    // console.log("icon:" + this.state.icon);
    // console.log("color:" + this.state.color);
    // console.log("is favorite?" + this.state.isFav);
    return (
      <div>
        <NavBar />

        <div className="container">
          <div className="form-signin">
            <label for="exampleInputEmail1 text-right">נושא ההודעה:</label>
            <input type="text" onChange={this.updateheader} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="הכנס נושא הודעה" value={this.state.header} />
            <small id="emailHelp" className="form-text text-muted">על ההודעה להיות קצרה ותמציתית.</small>
          </div>
          <br />

          <div>
            <label for="exampleInputPassword1">תיאור ההודעה:</label>
            <input type="text" onChange={this.updatetext} className="form-control" id="exampleInputPassword1" placeholder="תיאור תוכן ההודעה" value={this.state.description} />
          </div>
          <br />

          <br />
          <div class="row">
            <div class="col-11 text-center">
              <i style={{ color: this.state.color }} class={"fas fa-" + this.state.icon + " fa-5x pull-left"} /> <br />
              <br />

              <Link to={`/NewMessage/IconPage/${this.state.itemID}`}>
                <button
                  type="button"
                  class="btn btn-info ">
                  {/* onClick={this.changeIcon}> */}
                  <i class="fas fa-pencil-alt"></i>
                  שנה אייקון
                </button>
              </Link>


            </div>
          </div>



          <div className="form-group">

            <br />
            <Colors updatecolor={this.updatecolor} />

            <small id="emailHelp" className="form-text text-muted text-center ">ביכולתך לבחור בצבע מוכן מראש או לחילופין לבחור צבע מותאם אישית.</small>

          </div>

          <FavoriteButton favbutt={this.state.isFav} onChange={this.addtofavorite} />


        </div>


        <div id="pictures">
          <div id="deafultimg">
            <Icons updateimg={this.updateimg} />

          </div>
        </div>

        <Link to="/">
          <button type="submit" class="btn btn-secondary btn-lg btn-block" onClick={this.savedata}>send</button>
        </Link>
      </div>
    );
  }
}

export default NewMessage;
