import React, { Component } from 'react';
import './newmessage.css';


 export class Newmessage extends Component {
     constructor(props)
     {
         super(props);
         this.state={
           color:'#000000',
           favorite:false,
           inputtext:'',
           icon:''
         }
         this.addtofavorite=this.addtofavorite.bind(this);
         this.getcolor=this.getcolor.bind(this);
         this.updatecolor=this.updatecolor.bind(this);
         this.updatetext=this.updatetext.bind(this);
         this.updateimg=this.updateimg.bind(this);
         this.checkcondutions=this.checkcondutions.bind(this);
     }
     getcolor(event)
    {
      this.setState({color:event.target.value});
    }
    addtofavorite()
    {
          this.setState({favorite:true});
    }
    updatecolor(newcolor)
    {
        this.setState({color:newcolor});
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
    updateimg(classimg)
    {

    }
    
  render() {
    
    console.log(this.state.color);
    console.log(this.state.inputtext);
    return (
      <div className="newmess">
                <div id="textmessage">
                    <label>Write message here...</label>
                    <i class="fas fa-allergies"></i>
                    <input type="text" id="input_msg" onChange={this.updatetext}/>
                    <br />
                </div>
                
                <div id="colorselect">
                    <h2>choose a color</h2>
                    <div id="color">
                        <button type="button" class="btn btn-outline-primary" colorvalue="#0000FF" >blue</button>
                        <button type="button" class="btn btn-outline-secondary" colorvalue="#808080" onClick={()=>this.updatecolor(this.colorvalue)}>grey</button>
                          <button type="button" class="btn btn-outline-success" colorvalue="#008000" onClick={()=>this.updatecolor(this.colorvalue)}>green</button>
                        <button type="button" class="btn btn-outline-danger" colorvalue="#dc3545" onClick={()=>this.updatecolor(this.colorvalue)}>red</button>
                        <button type="button" class="btn btn-outline-warning" colorvalue="#FFFF00" onClick={()=>this.updatecolor(this.colorvalue)}>yellow</button>
                        <button type="button" class="btn btn-outline-dark" colorvalue="#000000" onClick={(newcolor)=>this.updatecolor(this.colorvalue)}>black</button>
                    </div>
                    <p>create your color:</p>
                    <input type="color" value={this.state.value} onChange={this.getcolor}/>
                </div>


                  <div id="pictures">
                      <h2>choose a picture</h2>
                    <div id="deafultimg">
                            <button type="button" class="btn btn-default btn-sm"  >
                                <i class="fab fa-angellist"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                                <i class="far fa-angry"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                                <i class="fas fa-bed"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                                <i class="fas fa-balance-scale"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                                <i class="fas fa-award"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                                <i class="fas fa-birthday-cake"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                              <i class="fas fa-bolt"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm" >
                            <i class="fas fa-book"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                            <i class="fas fa-anchor"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                            <i class="fas fa-birthday-cake"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                            <i class="fas fa-bomb"></i>
                          </button>
                          <button type="button" class="btn btn-default btn-sm">
                            <i class="fas fa-basketball-ball" ></i>
                          </button>
                     </div>
                     <button >for more</button>
                  </div>

                  <div id="favorite">
                       <br></br><button type="button" class="btn btn-primary btn-lg btn-block">add to favorite</button>
                          
                  </div>

                {/* <button id="play" onClick="play_morse_sequence();">Play Morse Sequence</button>
                <button onClick="longTone();">Tone</button> */}
                <br></br><button type="button" class="btn btn-secondary btn-lg btn-block" >send</button>
      </div>
    );
  }
}

export default Newmessage;
