import React, { Component } from 'react';
import {Tone , char_to_morse} from '../../ToneReact.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';


let messagesInfo = [
  {
    ID: 0,
    name: "האמבולנס בדרך",
    description: "בלה בלה בלה בלה בלה בלה בלה" ,
    color: null,
    icon: "ambulance"
  },
  {
    ID: 1,
    name: "קח את התרופות",
    description: "בלה בלה בלה בלה בלה בלה בלה" ,
    color: null,
    icon: "capsules"
  },
  {
    ID: 2,
    name: "הקנאביס שלך מחכה",
    description: "בלה בלה בלה בלה בלה בלה בלה" ,
    color: null,
    icon: "cannabis"
  }
]


 export class Homepage extends Component {
   
  render() {
    return (
      <div>
        <Nav/>
          <p> Favorites </p> 
          <div>
            {messagesInfo.map((message) => <FavoriteList  itemID={message.ID} name={message.name}  description={message.description}  icon={message.icon} color={message.color} />)}
          </div>
        <hr/> <hr/>
        
        <List/>
          <Link to="/Newmessage">
          <button type="button" className="btn btn-secondary btn-lg fixed-bottom btn-block">הוסף הודעה</button>
            </Link>

      </div>
    );
  }
}

export class FavoriteList extends Component {
  render() {
    return (
<div className="list-group">
 
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
   
    <EditButton messageID={messagesInfo.ID} />  
      <h4 className="mb-3 ">{this.props.name} </h4>
      <i className={"fas fa-" + this.props.icon + " fa-3x"}/>
    </div> 
   <p className="mb-1"> {this.props.description} </p>
  </a>

</div>

    );
  }
 }


export class List extends Component {
  render() {
    return (
      <div>
      <ul class="list-group center align-items-center">
        <li class="list-group-item row list-group-item-action">
          <a class="col-md-6">
            <span>
              <button class="btn btn-sm btn-success btn pull-right" type="button">
                <i class="fas fa-angle-left" />
              </button>
            </span>
          </a>
          <a class="col-md-6">משהו פחות חשוב בלה בלה</a>
          <a class="col-md-6">
            <span>
              <span class="dropdown">
                <button
                  class="btn btn-sm btn-secondary dropdown-toggle btn pull-right"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <span class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Edit
                  </a>
                  <a class="dropdown-item" href="#">
                    Delete
                  </a>
                  <a class="dropdown-item" href="#">
                    Add to favorite
                  </a>
                </span>
              </span>
            </span>
          </a>
        </li>
        <li class="list-group-item row list-group-item-action ">
          <a class="col-md-6">
          
            <span>
              <button class="btn btn-sm btn-success btn pull-right" type="button">
                <i class="fas fa-angle-left" />
              </button>
            </span>
          </a>
          <a class="col-md-6">משהו פחות חשוב בלה בלה</a>
          <a class="col-md-6">
            <span>
              <span class="dropdown">
                <button
                  class="btn btn-sm btn-secondary dropdown-toggle btn pull-right"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <span class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Edit
                  </a>
                  <a class="dropdown-item" href="#">
                    Delete
                  </a>
                  <a class="dropdown-item" href="#">
                    Add to favorite
                  </a>
                </span>
              </span>
            </span>
          </a>
        </li>
        <li class="list-group-item row list-group-item-action">
          <a class="col-md-6">
            <span>
              <button class="btn btn-sm btn-success btn pull-right" type="button">
                <i class="fas fa-angle-left" />
              </button>
            </span>
          </a>
          <a class="col-md-6">משהו פחות חשוב בלה בלה</a>
          <a class="col-md-6">
            <span>
              <span class="dropdown">
                <button
                  class="btn btn-sm btn-secondary dropdown-toggle btn pull-right"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <span class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Edit
                  </a>
                  <a class="dropdown-item" href="#">
                    Delete
                  </a>
                  <a class="dropdown-item" href="#">
                    Add to favorite
                  </a>
                </span>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>

    );
  }
}


export class EditButton extends Component {
  render() {
    return (
      <div>
         <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Edit</a>
        <a className="dropdown-item" href="#">Delete</a>
        <a className="dropdown-item" href="#">Add to favorite</a>
      </div>
    </div>

      </div>
    );
  }
}


// export class eeee extends Component {
//   render() {
//     return (
//       <div>
//           <p>
//             Hey TeleBuzz
//           </p>
//           <h1>Morse Code Generator </h1>
//           <Tone/>
//       </div>
//     );
//   }
// }

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Telebuzz</a>
        <button className="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        
        </div> 
    </nav>

      </div>
    );
  }
}


export class Morse extends Component {
  render() {
    return (
      <div>
          <p>
            Hey TeleBuzz
          </p>
          <h1>Morse Code Generator </h1>
          <Tone/>
      </div>
    );
  }
}

export default Homepage;
