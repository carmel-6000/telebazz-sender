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

          <Link to="/Newmessage">
          <button type="button" className="btn btn-primary">Write a new massagedsvfdvf</button>
            </Link>

      </div>
    );
  }
}





export class Nav extends Component {
  render() {
    return (
      <div>
              
      <nav className="navbar navbar-light light-blue lighten-4">

      <a className="navbar-brand" href="#">Navbar</a>

      <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
          aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fa fa-bars fa-1x"></i></span></button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent1">

          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
              </li>
          </ul>

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
