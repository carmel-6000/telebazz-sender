import React, { Component } from 'react';
import {Tone , char_to_morse} from '../../ToneReact.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';


 export class Homepage extends Component {
  render() {
    return (
      <div>
        <Nav/>
          <p>
            Hey TeleBuzz
          </p>
        <List/>
          <Link to="/Newmessage">
          <button type="button" className="btn btn-primary">Write a new massage</button>
            </Link>

      </div>
    );
  }
}


export class List extends Component {
  render() {
    return (
      <div className="list-group">
  <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

  
  <a href="#" className="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item <EditButton/> </a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">This is a secondary list group item</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
  <a href="#" className="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
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
            </form>\
        
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
