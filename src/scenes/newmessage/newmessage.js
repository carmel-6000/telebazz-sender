import React, { Component } from 'react';
import './newmessage.css';
import {Link} from 'react-router-dom';
// import data from '../data.json';

let icomname=["microscope","anchor","basketball-ball","hourglass","bolt","award","bed","cannabis","fire","home","drumstick-bite","ghost","toilet-paper"];
let deafultcolors=[{
  colorname:"blue" ,
  colorclass:"btn btn-outline-primary",
  colorvalue:"#0000FF"

},
{
  colorname:"grey" ,
  colorclass:"btn btn-outline-secondary",
  colorvalue:"#808080"
},
{
  colorname:"green" ,
  colorclass:"btn btn-outline-success",
  colorvalue:"#008000"
},
{
  colorname:"red" ,
  colorclass:"btn btn-outline-danger",
  colorvalue:"#dc3545"
},
{
  colorname:"yellow" ,
  colorclass:"btn btn-outline-warning",
  colorvalue:"#FFFF00"
},
{
  colorname:"black" ,
  colorclass:"btn btn-outline-dark",
  colorvalue:"#0000FF"
}];
 


 export class Newmessage extends Component {
     constructor(props)
     {
         super(props);
         this.state={
           name:'',
           color:'#000000',
           favorite:false,
           inputtext:'',
           icon:'anchor',

         }
         this.addtofavorite=this.addtofavorite.bind(this);
         this.updatechosencolor=this.updatechosencolor.bind(this);
         this.updatecolor=this.updatecolor.bind(this);
         this.updatetext=this.updatetext.bind(this);
         this.updateimg=this.updateimg.bind(this);
         this.checkcondutions=this.checkcondutions.bind(this);
         this.savedata=this.savedata.bind(this);
         this.updatename=this.updatename.bind(this);
     }
    
     updatechosencolor(event)
    {
      this.setState({color:event.target.value});
    }
    addtofavorite()
    {
      this.setState({favorite:!this.state.favorite});

    }
    updatecolor(newcolor)
    {
      this.setState({color:newcolor});
    }
    updatename(event)
    {
      this.setState({name:event.target.value});
    }
    updatetext(event)
    {
      this.setState({inputtext:event.target.value});
    }
    checkcondutions()
    {
      if(this.state.inputtext.length >10)
      {
        alert("to many characters!");
      }
    }
    updateimg(iconimg)
    {
      this.setState({icon:iconimg});
    }
    savedata()
    {
      console.log("entered");
        let newmessage={
          name: this.state.name,
          description: this.state.inputtext ,
          color: this.state.color,
          icon: this.state.icon,
          ID : Date.now()
        };
        console.log("before", localStorage);
        const key = this.state.favorite ? "favmessages": "messages";
        let addnewmessageST = localStorage.getItem(key);
        let  addnewmessagesARR =[];
        if(addnewmessageST)
        {
              let addnewmessagesOB = JSON.parse(addnewmessageST);
            addnewmessagesARR = Object.keys(addnewmessagesOB).map(obj =>addnewmessagesOB[obj]);
        }
      
        addnewmessagesARR.push(newmessage);
         localStorage.setItem(key,JSON.stringify(addnewmessagesARR));
          console.log("after", localStorage);
    }
    
  render() {
    
    // console.log("color:"+this.state.color);
    // console.log("message:"+this.state.inputtext);
    // console.log("icon:"+this.state.icon);
    // console.log("fav?"+this.state.favorite);
    return (
      <div className="newmess">
      <div id="textmessage">
                    <label>Message Name:</label>
                    <i class="fas fa-allergies"></i>
                    <input type="text" id="input_header" onChange={this.updatename}/>
                    <br />
                </div>
                <div id="textmessage">
                    <label>Message Description:</label>
                    <i class="fas fa-allergies"></i>
                    <input type="text" id="input_msg" onChange={this.updatetext}/>
                    <br />
                </div>

                    <div id="colorselect">
                    <h2>choose a color</h2>
                    <div id="color">
                        <Colors updatecolor={this.updatecolor}/>
                       
                    </div>
                    <p>create your color:</p>
                    <input type="color" value={this.state.value} onChange={this.updatechosencolor}/>
                </div>


                  <div id="pictures">
                      <h2>choose a picture</h2>
                    <div id="deafultimg">
                         <Icons updateimg = {this.updateimg}/>
                          
                     </div>
                     <Link to="/Newmessage/Iconpage">
                            <button >for more</button>
                     </Link>
                  </div>

                  <div id="favorite">
                       <Favoritebutton onChange={this.addtofavorite}/>
                  </div>

                {/* <button id="play" onClick="play_morse_sequence();">Play Morse Sequence</button>
                <button onClick="longTone();">Tone</button> */}
                <br></br>
                
                <Link to="/">
                <button type="submit" class="btn btn-secondary btn-lg btn-block" onClick={this.savedata}>send</button>
          </Link>
                {/* <h2>{this.state.speed}</h2> */}
      </div>
    );
  }
}

class Icons extends Component {
  
  render(){
    return(
      <div>
      {icomname.map((currimage)=><Icon iconimage={currimage} onClick={()=>this.props.updateimg(currimage)}/>)}
      </div>
    );
    
  }
  
}
class Icon extends Component {
  
  render(){
    return(
      <button type="button" class="btn btn-default "  onClick={this.props.onClick}>
          <i class={"fas fa-" + this.props.iconimage}></i>
      </button>
    );
    
  }
  
}


class Colors extends Component{
  render(){
    return(
     <div>
        {deafultcolors.map((currcolor)=>
        <Color
         colorname={currcolor.colorname}
         colorclass={currcolor.colorclass}
         colorvalue={currcolor.colorvalue}
          onClick={()=>this.props.updatecolor(currcolor.colorvalue)}/>)}
     </div>
     
    );
  }
}

class Color extends Component{
  render(){
    return(
      <button type="button" 
            className={this.props.colorclass} 
            onClick={this.props.onClick}>
            {this.props.colorname}
      </button>
    );
  }
}

class Favoritebutton extends Component{
  
  render(){
    return(
      <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="defaultUnchecked" onChange={this.props.onChange}/>
          <label class="custom-control-label" for="defaultUnchecked">Add to favorite</label>
      </div>
    
    );
  }
}
export default Newmessage;
