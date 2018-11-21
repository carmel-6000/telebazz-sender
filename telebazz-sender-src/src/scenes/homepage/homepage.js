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
      favmessagesInfo: [],
      messagesInfo :[]
     }
 
     this.deletemessage=this.deletemessage.bind(this);
     this.editmessage=this.editmessage.bind(this);
     this.changelocation=this.changelocation.bind(this);
   }



   deletemessage(itemID, favorite)
   {
     let tempmessage=[]

     if (favorite) {
      this.state.favmessagesInfo.map(currMg => {
       if (currMg.ID !== itemID) {
                tempmessage.push(currMg);
          
              }
            })
             localStorage.setItem("favmessages", JSON.stringify(tempmessage));
             this.setState({ favmessagesInfo: tempmessage });
           }
           else {
             this.state.messagesInfo.map(currMg => {
               if (currMg.ID !== itemID) {
                 tempmessage.push(currMg);
       
               }
             })
             localStorage.setItem("messages", JSON.stringify(tempmessage));
             this.setState({ messagesInfo: tempmessage });
           }  

   }

   editmessage(itemID, favorite) {
    const key = "Editmessages";
    let Editmessage = {};
    if(favorite)
    {
        this.state.favmessagesInfo.map(currMg => {
          if (currMg.ID === itemID) {
            Editmessage = Object.assign({}, currMg);

          }
        })
        localStorage.setItem(key,JSON.stringify(Editmessage));
    }
    else{
      this.state.messagesInfo.map(currMg => {
        if (currMg.ID === itemID) {
          Editmessage = Object.assign({}, currMg);

        }
      })
      localStorage.setItem(key,JSON.stringify(Editmessage));
    }
  }


  
  changelocation(Itemid,favorite)
  {
    let key = favorite ? "favmessages": "messages";
    let editmessageST = localStorage.getItem(key);
    let  editmessagesARR =[];
    let tempmessage=[];
         
    //convert string to object of objects
    let editmessagesOB = JSON.parse(editmessageST); 
    //convert object of objects to array of objects
    editmessagesARR = Object.keys(editmessagesOB).map(obj =>editmessagesOB[obj]); 

    editmessagesARR.map(currMg => {
          if (currMg.ID === Itemid) {
                console.log("ltlg");
                tempmessage=Object.assign({},currMg);
                tempmessage.favorite=!favorite;
          }
          });
        this.deletemessage(Itemid,favorite);

        key = favorite ?  "messages":"favmessages";
        editmessageST = localStorage.getItem(key);
        //convert string to object of objects
        editmessagesOB = JSON.parse(editmessageST); 
        //convert object of objects to array of objects
        editmessagesARR = Object.keys(editmessagesOB).map(obj =>editmessagesOB[obj]);
        editmessagesARR.push(tempmessage);
        localStorage.setItem(key,JSON.stringify(editmessagesARR));

        if(tempmessage.favorite)
            this.setState({favmessagesInfo:editmessagesARR});
        else
            this.setState({messagesInfo:editmessagesARR});
    
}
  componentWillMount()
  {
    let key="Editmessages";
    localStorage.setItem(key,"");
  }
  componentDidMount() {
    let messageST = localStorage.getItem("favmessages");
    if (messageST) {
      let messagesOB = JSON.parse(messageST);
      const favmessagesInfo = Object.keys(messagesOB).map(obj => messagesOB[obj]);
      this.setState({ favmessagesInfo });
    }

    messageST = localStorage.getItem("messages");
    if (messageST) {
      let messagesOB = JSON.parse(messageST);
      const messagesInfo = Object.keys(messagesOB).map(obj => messagesOB[obj]);
      this.setState({ messagesInfo });
    }

  }

  render() {

       return (
      <div>
        <Nav/>
          <p> Favorites </p> 
          <div>
          {this.state.favmessagesInfo.map((message) => <FavoriteList favorite={message.favorite} itemID={message.ID} name={message.name} description={message.description} icon={message.icon} color={message.color} deletemessage={this.deletemessage} editmessage={this.editmessage} changelocation={this.changelocation}/>)}
          </div>
        <hr/> <hr/>
        <p> More </p>
        <div>
          {this.state.messagesInfo.map((message) => <List favorite={message.favorite} itemID={message.ID} name={message.name} description={message.description} icon={message.icon} color={message.color} deletemessage={this.deletemessage} editmessage={this.editmessage} changelocation={this.changelocation}/>)}
        </div>

        <div className="container">

          <Link to="/Newmessage">
          <button type="button" className="btn btn-secondary btn-lg fixed-bottom btn-block">הוסף הודעה</button>
          </Link>
          </div>

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
   
    <EditButton itemID={this.props.itemID} deletemessage={this.props.deletemessage} editmessage={this.props.editmessage} favorite={this.props.favorite} changelocation={this.props.changelocation}/>
    
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
      <div className="list-group">

        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">

            <EditButton itemID={this.props.itemID} deletemessage={this.props.deletemessage} editmessage={this.props.editmessage} favorite={this.props.favorite} changelocation={this.props.changelocation}/>

            <h4 className="mb-3 ">{this.props.name} </h4>
            <i style={{ color: this.props.color }} className={"fas fa-" + this.props.icon + " fa-3x"} />
          </div>
          <p className="mb-1"> {this.props.description} </p>
        </a>
      </div>);
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
            <Link to={`/Newmessage/${this.props.itemID}`}>
              <a onClick={() => this.props.editmessage(this.props.itemID, this.props.favorite)} className="dropdown-item" href="#">Edit</a>
            </Link>

            <a onClick={() => this.props.deletemessage(this.props.itemID, this.props.favorite)} className="dropdown-item" href="#">Delete</a>
            <a onClick={() =>this.props.changelocation(this.props.itemID, this.props.favorite)} className="dropdown-item" href="#"  >add to favorite</a>

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
