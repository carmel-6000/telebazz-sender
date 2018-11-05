import React, { Component } from 'react';
import './iconpage.css';


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
        // <div className="Iconpage">
        //   {icons.map((curricon)=>{return <Icon iconname={curricon.name}/>})}
        //   <Sidebar/>
        //     </div>
<div> 
      <NavBar/>
  <div className="container">
    <h3>איזה אייקון תרצו להציג?</h3>
      <div class="row">
        <div class="col-12 text-center">
        <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           סנן  
        </button>
        </div>
      </div>
       

  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">בעלי חיים</button>
    <button class="dropdown-item" type="button">אסונות</button>
    <button class="dropdown-item" type="button">מקומות</button>
    <button class="dropdown-item" type="button">דת</button>
    <button class="dropdown-item" type="button">רפואה</button>
    <button class="dropdown-item" type="button">אנשים</button>
    <button class="dropdown-item" type="button">מזון</button>
  </div>

  <div>
    <label for="exampleInputPassword1">תיאור ההודעה:</label>
    <input type="text" onChange={this.updatetext} className="form-control" id="exampleInputPassword1" placeholder="תיאור תוכן ההודעה"/>
  </div>


  </div>
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
  
  
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Telebuzz</a>
        <button className="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span> 
           <a href="/Newmessage" className="text-light"><i class="fas fa-arrow-left"></i>  </a>
            </span>
        </button>
    </nav>

      </div>
    );
  }
}