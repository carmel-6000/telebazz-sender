import React, { Component } from 'react';
// import {Tone , char_to_morse} from '../../ToneReact.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';
import data from '../data.json';


 export class Homepage extends Component {
   constructor(props)
   {
     super(props);
     this.state={
      messagesInfo :[]
     }
 
     this.deletemessage=this.deletemessage.bind(this);
     this.editmessage=this.editmessage.bind(this);
   }
   deletemessage(itemID)
   {
     let tempmessage=[]
      this.state.messagesInfo.map(currMg =>{
      
      
      if(currMg.ID !== itemID){
          tempmessage.push(currMg);
          
      }
    })
      localStorage.setItem("favmessages",JSON.stringify(tempmessage));
      this.setState({messagesInfo:tempmessage});
 

   }

   editmessage(itemID)
   {
    const key = "Editmessages";
    let Editmessage={};
    this.state.messagesInfo.map(currMg =>{
      if(currMg.ID === itemID){
        Editmessage=Object.assign({},currMg);
          
      }
    })
    localStorage.setItem(key,JSON.stringify(Editmessage));
   }


   componentDidMount()
   {
        let messageST=localStorage.getItem("favmessages");
        if(messageST)
        {
              let messagesOB = JSON.parse(messageST);
              const messagesInfo = Object.keys(messagesOB).map(obj =>messagesOB[obj]);
              this.setState({messagesInfo});
        }
   }
  render() {

       return (
      <div>
        <Nav/>
          <p> Favorites </p> 
          <div>
            {this.state.messagesInfo.map((message) => <FavoriteList itemID={message.ID} name={message.name}  description={message.description}  icon={message.icon} color={message.color} deletemessage={this.deletemessage} editmessage={this.editmessage} />)}
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
 
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
   
    <EditButton itemID={this.props.itemID} deletemessage={this.props.deletemessage} editmessage={this.props.editmessage}/>  
    
      <h4 className="mb-3 ">{this.props.name} </h4>
      <i  style={{color:this.props.color}} className={"fas fa-" + this.props.icon + " fa-3x"}/>
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
      <ul className="list-group center align-items-center">
        <li className="list-group-item row list-group-item-action">
          <a className="col-md-6">
            <span>
              <button className="btn btn-sm btn-success btn pull-right" type="button">
                <i className="fas fa-angle-left" />
              </button>
            </span>
          </a>
          <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
          <a className="col-md-6">
            <span>
              <span className="dropdown">
                <button
                  className="btn btn-sm btn-secondary dropdown-toggle btn pull-right"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                  <a className="dropdown-item" href="#">
                    Add to favorite
                  </a>
                </span>
              </span>
            </span>
          </a>
        </li>
        <li className="list-group-item row list-group-item-action ">
          <a className="col-md-6">
          
            <span>
              <button className="btn btn-sm btn-success btn pull-right" type="button">
                <i className="fas fa-angle-left" />
              </button>
            </span>
          </a>
          <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
          <a className="col-md-6">
            <span>
              <span className="dropdown">
                <button
                  className="btn btn-sm btn-secondary dropdown-toggle btn pull-right"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                  <a className="dropdown-item" href="#">
                    Add to favorite
                  </a>
                </span>
              </span>
            </span>
          </a>
        </li>
        <li className="list-group-item row list-group-item-action">
          <a className="col-md-6">
            <span>
              <button className="btn btn-sm btn-success btn pull-right" type="button">
                <i className="fas fa-angle-left" />
              </button>
            </span>
          </a>
          <a className="col-md-6">משהו פחות חשוב בלה בלה</a>
          <a className="col-md-6">
            <span>
              <span className="dropdown">
                <button
                  className="btn btn-sm btn-secondary dropdown-toggle btn pull-right"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                  <a className="dropdown-item" href="#">
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
      <Link to= {`/Newmessage/${this.props.itemID}`}>
        <a onClick={() => this.props.editmessage(this.props.itemID)} className="dropdown-item" href="#">Edit</a>
      </Link>

        <a onClick={() => this.props.deletemessage(this.props.itemID)} className="dropdown-item" href="#">Delete</a>
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


// export class Morse extends Component {
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

export default Homepage;
