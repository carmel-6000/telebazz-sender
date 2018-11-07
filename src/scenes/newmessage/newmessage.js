import React, { Component } from 'react';
import './newmessage.css';
// import {Link} from 'react-router-dom';
// import data from '../data.json';
import { BrowserRouter as Router, Link } from 'react-router-dom';

let icomname = [
  "microscope",
  "anchor",
  "basketball-ball",
  "hourglass",
  "bolt",
  "award",
  "bed",
  "cannabis",
  "fire",
  "home",
  "drumstick-bite",
  "ghost",
  "toilet-paper"
];

let deafultcolors = [
  {
    colorclass: "dark",
    colorvalue: "#343a40"
  },
  {
    colorclass: "primary",
    colorvalue: "#007bff"

  },
  {
    colorclass: "success",
    colorvalue: "#28a745"
  },
  {

    colorclass: "info",
    colorvalue: "#17a2b8"
  },
  {
    colorclass: "warning",
    colorvalue: "#ffc107"
  },
  {
    colorclass: "danger",
    colorvalue: "#dc3545"
  }];



export class Newmessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: 'nulll',
      favorite: false,
      inputtext: '',
      icon: 'anchor',

    }
    this.addtofavorite = this.addtofavorite.bind(this);
    this.updatechosencolor = this.updatechosencolor.bind(this);
    this.updatecolor = this.updatecolor.bind(this);
    this.updatetext = this.updatetext.bind(this);
    this.updateimg = this.updateimg.bind(this);
    this.checkcondutions = this.checkcondutions.bind(this);
    this.savedata = this.savedata.bind(this);
    this.updatename = this.updatename.bind(this);
  }
  componentWillMount() {
    if (this.props.match.params.id) {
      let editmessageST = localStorage.getItem("Editmessages");
      if (editmessageST) {
        let editmessageOB = JSON.parse(editmessageST);

        this.setState({ inputtext: editmessageOB.description });
        this.setState({ name: editmessageOB.name });
        this.setState({ color: editmessageOB.color });
        this.setState({ favorite: editmessageOB.favorite });
        this.setState({ icon: editmessageOB.icon });

      }
    }

  }

  updatechosencolor(event) {
    this.setState({ color: event.target.value });
  }
  addtofavorite() {
    this.setState({ favorite: !this.state.favorite });

  }
  updatecolor(newcolor) {
    this.setState({ color: newcolor });
  }

  updatename(event) {
    this.setState({ name: event.target.value });
  }
  updatetext(event) {
    this.setState({ inputtext: event.target.value });
  }
  checkcondutions() {
    if (this.state.inputtext.length > 10) {
      alert("too many characters!");
    }
  }
  updateimg(iconimg) {
    this.setState({ icon: iconimg });
  }
  savedata() {

    if (this.props.match.params.id) {
      let editmessage = {
        name: this.state.name,
        description: this.state.inputtext,
        color: this.state.color,
        icon: this.state.icon,
        favorite: this.state.favorite,
        ID: this.props.match.params.id
      };

      const key = this.state.favorite ? "favmessages" : "messages";
      let editmessageST = localStorage.getItem(key);
      let editmessagesARR = [];

      //convert string to object of objects
      let editmessagesOB = JSON.parse(editmessageST);
      //convert object of objects to array of objects
      editmessagesARR = Object.keys(editmessagesOB).map(obj => editmessagesOB[obj]);
      let index = editmessagesARR.findIndex((element) => { return editmessage.ID == element.ID });
      editmessagesARR[index] = editmessage;
      localStorage.setItem("favmessages", JSON.stringify(editmessagesARR));

    }
    else {
      let newmessage = {
        name: this.state.name,
        description: this.state.inputtext,
        color: this.state.color,
        icon: this.state.icon,
        favorite: this.state.favorite,
        ID: Date.now()
      };

      const key = this.state.favorite ? "favmessages" : "messages";
      let addnewmessageST = localStorage.getItem(key);
      let addnewmessagesARR = [];
      if (addnewmessageST) {
        let addnewmessagesOB = JSON.parse(addnewmessageST);
        addnewmessagesARR = Object.keys(addnewmessagesOB).map(obj => addnewmessagesOB[obj]);
      }

      addnewmessagesARR.push(newmessage);
      localStorage.setItem(key, JSON.stringify(addnewmessagesARR));

    }
  }

  render() {
    console.log("message:" + this.state.name);
    console.log("description:" + this.state.inputtext);
    console.log("icon:" + this.state.icon);
    console.log("color:" + this.state.color);
    console.log("is favorite?" + this.state.favorite);

    return (
      <div>
        <NavBar />

        <div className="container">
          <div className="form-signin">

            {/* <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-palette"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">

                  <Colors updatecolor={this.updatecolor} />
                </a>
              </div>
            </div> */}

            <label for="exampleInputEmail1 text-right">נושא ההודעה:</label>
            <input type="text" onChange={this.updatename} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="הכנס נושא הודעה" value={this.state.name} />
            <small id="emailHelp" className="form-text text-muted">על ההודעה להיות קצרה ותמציתית.</small>
          </div>
          <br />

          <div>
            <label for="exampleInputPassword1">תיאור ההודעה:</label>
            <input type="text" onChange={this.updatetext} className="form-control" id="exampleInputPassword1" placeholder="תיאור תוכן ההודעה" value={this.state.inputtext} />
          </div>
          <br />
          
          {/* <div className="d-flex justify-content-center">
            <i style={{ color: this.state.color }} class={"fas fa-" + this.state.icon + " fa-5x pull-left"} />
            <input type="color" rgba value={this.state.value} onChange={this.updatechosencolor} />
          </div> */}
          <br />
          <div class="row">
            <div class="col-11 text-center">
            <i style={{ color: this.state.color }} class={"fas fa-" + this.state.icon + " fa-5x pull-left"} /> <br/>
            {/* <input type="color" rgba value={this.state.value} onChange={this.updatechosencolor} /> */}
              <br/>
              <Link to="/Newmessage/Iconpage">
                <button type="button" class="btn btn-info " > <i class="fas fa-pencil-alt"></i> שנה אייקון</button>
              </Link>
            </div>
          </div>



          <div className="form-group">

            <br />
            <Colors updatecolor={this.updatecolor} />
            <small id="emailHelp" className="form-text text-muted text-center ">ביכולתך לבחור בצבע מוכן מראש או לחילופין לבחור צבע מותאם אישית.</small>

          </div>

          <Favoritebutton favbutt={this.state.favorite} onChange={this.addtofavorite} />


        </div>


        {/* <div id="pictures">
  <div id="deafultimg">
                         <Icons updateimg = {this.updateimg}/>
                          
                     </div>
                  </div> */}

        <Link to="/">
          <button type="submit" class="btn btn-secondary btn-lg btn-block" onClick={this.savedata}>send</button>
        </Link>
      </div>
    );
  }
}

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Telebuzz</a>
          <button className="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <a href="/" className="text-light"><i class="fas fa-arrow-left"></i>  </a>
            </span>
          </button>
        </nav>

      </div>
    );
  }
}


// class Icons extends Component {

//   render(){
//     return(
//       <div>
//       {icomname.map((currimage)=><Icon iconimage={currimage} onClick={()=>this.props.updateimg(currimage)}/>)}
//       </div>
//     );

//   }
// }

// class Icon extends Component {
//   render(){
//     return(
//       <button type="button" class="btn btn-default "  onClick={this.props.onClick}>
//           <i class={"fas fa-" + this.props.iconimage}></i>
//       </button>
//     );
//   }
// }


class Colors extends Component {
  render() {
    return (
      <div>
        {deafultcolors.map((currcolor) =>
          <Color
            colorclass={currcolor.colorclass}
            colorvalue={currcolor.colorvalue}
            onclicker={() => this.props.updatecolor(currcolor.colorvalue)} />)}

      </div>
    );
  }
}

class Color extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onclicker} className={"btn btn-circle btn-" + this.props.colorclass} />
    );
  }
}

class Favoritebutton extends Component {

  render() {
    return (
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" checked={this.props.favbutt} onChange={this.props.onChange} />
        <label class="custom-control-label pull-right" for="defaultUnchecked">הוספה למועדפים:</label>
      </div>
    );
  }
}


export default Newmessage;
