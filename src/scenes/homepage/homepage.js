import React, { Component } from 'react';
import {Tone , char_to_morse} from '../../ToneReact.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


 export class Homepage extends Component {
  render() {
    return (
      <div>
        <Nav/>
          <p>
            Favorites
          
          </p>
        <FavList/>
        <hr/> <hr/>
        <List/>
        <br/>
          <Link to="/Newmessage">
          <button type="button" className="btn btn-primary">Write a new massage</button>
            </Link>

      </div>
    );
  }
}


export class FavList extends Component {
  render() {
    return (

<div>
  <ul className="list-group center align-items-center">
    <li className="list-group-item row list-group-item-action ">
    <a className="col-md-6"> <StartButton/> </a>
      <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
      <a className="col-md-6"><EditButton/></a>
      </li>
      <li className="list-group-item row list-group-item-action">
      <a className="col-md-6"> <StartButton/> </a>
      <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
      <a className="col-md-6"><EditButton/></a>
      </li>
      <li className="list-group-item row list-group-item-action">
      <a className="col-md-6"> <StartButton/> </a>
      <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
      <a className="col-md-6"><EditButton/></a>
      </li>
  </ul>
</div>

    );
  }
}


export class List extends Component {
  render() {
    return (

<div>
  <ul className="list-group center align-items-center">
    <li className="list-group-item row list-group-item-action">
    <a className="col-md-6"> <StartButton/> </a>
      <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
      <a className="col-md-6"><EditButton/></a>
      </li>
      <li className="list-group-item row list-group-item-action ">
      <a className="col-md-6"> <StartButton/> </a>
      <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
      <a className="col-md-6"><EditButton/></a>
      </li>
      <li className="list-group-item row list-group-item-action">
      <a className="col-md-6"> <StartButton/> </a>
      <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
      <a className="col-md-6"><EditButton/></a>
      </li>
  </ul>
</div>

    );
  }
}

export class EditButton extends Component {
  render() {
    return (
      <span>


         <span className="dropdown">
      <button className="btn btn-sm btn-secondary dropdown-toggle btn pull-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        
      </button>
      <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Edit</a>
        <a className="dropdown-item" href="#">Delete</a>
        <a className="dropdown-item" href="#">Add to favorite</a>
      </span>
    </span>
      </span>
      
   
    );
  }
}


export class StartButton extends Component {
  render() {
    return (
    <span> 
    <button className="btn btn-sm btn-success btn pull-right" type="button">
       <i class="fas fa-angle-left"></i>
   </button> 
   </span>
   
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
