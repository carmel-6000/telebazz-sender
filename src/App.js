import React, { Component } from 'react';
// import logo from './logo.svg';
// import Tone from './ToneReact';
import { Iconpage } from "./scenes/iconpage/iconpage";
import { Route , Switch } from 'react-router-dom'
import { Homepage } from './scenes/homepage/homepage';
import { Newmessage } from './scenes/newmessage/newmessage';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Newmessage" component={Newmessage}/>
          <Route exact path="/Newmessage/Iconpage" component={Iconpage}/>
        </Switch>
      </div>
    );
  }
}


export default App;
