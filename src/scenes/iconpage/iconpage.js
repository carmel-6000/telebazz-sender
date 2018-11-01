import React, { Component } from 'react';

let icons = [
  {
    name: "cat",
    category: "animals",
  },
  {
    name: "dog",
    category: "animals",
  },
  {
    name: "fire",
    category: "danger",
  }
]


export class Iconpage extends Component {
     
    render() {
      return (
        <div className="Iconpage">
          {icons.map((curricon)=>{return <Icon iconname={curricon.name}/>})}
          <Sidebar/>
           
        </div>
      );

    }
  }

  class Icon extends Component {
    
    render(){
      return(
        <div>
          <i className={"fas fa-"+this.props.iconname}/>
        </div>
      );
    }
  } 


  class Sidebar extends Component {

  
    render(){
      return(
        <div>
          
        </div>
      );
    }
  } 
  
  