import React, { Component } from 'react';

 export class Newmessage extends Component {
     constructor(props)
     {
         super(props);
         this.state={
           color:'',
           favorite:false
         }
         this.addtofavorite=this.addtofavorite.bind(this);
     }
     getcolor()
    {
      //this.setState(color:)
    }
    addtofavorite()
    {
          this.setState({favorite:true});
    }
  render() {
   
    
    return (
      <div className="newmess">
                <label>Write message here...</label>
                <input type="text" id="input_msg"/>
                <br />
                <div id="color">
                      <p>choose a color</p>
                    <button type="button" className="btn btn-primary">blue</button>
                    <button type="button" className="btn btn-secondary">grey</button>
                    <button type="button" className="btn btn-success">green</button>
                    <button type="button" className="btn btn-danger">red</button>
                    <button type="button" className="btn btn-warning">yellow</button>
                    <input type="color" onChange="getcolor"/>
                </div>

                  <div id="pictures">
                      <p>choose a pictue</p>
                      <span class="glyphicon glyphicon-tree-deciduous"></span>
                      <button type="button" class="btn btn-default btn-sm">
                          <span class="oi oi-basket"></span>
                     </button>
                  </div>

                  <div id="favorite">
                        <button onClick="addtofavorite">add to favorite</button>
                        <span class="oi oi-action-undo"></span>
                  </div>

                <button id="play" onClick="play_morse_sequence();">Play Morse Sequence</button>
                <button onClick="longTone();">Tone</button>
                <button >send</button>
      </div>
    );
  }
}

export default Newmessage;
