import React, { Component } from 'react';
// import logo from './logo.svg';
// import Tone from './ToneReact';
import { IconPage } from "./scenes/iconpage/IconPage";
import { Route , Switch } from 'react-router-dom'
import { HomePage } from './scenes/homepage/HomePage.js';
import { NewMessage } from './scenes/newmessage/NewMessage.js';

import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/NewMessage" component={NewMessage}/>
          <Route exact path="/NewMessage/IconPage/:id" component={IconPage}/>
          <Route exact path="/Editmessage/:id" component={NewMessage}/>
          <Route exact path="/Editmessage/IconPage/:id" component={IconPage}/>
        </Switch>
      </div>
    );
  }
}


export default App;
