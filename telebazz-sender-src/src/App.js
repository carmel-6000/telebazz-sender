import React, { Component } from 'react';
// import Tone from './ToneReact';
import { IconPage } from "./scenes/icon_page/IconPage";
import { Route, HashRouter, Switch } from 'react-router-dom'
import { HomePage } from './scenes/home_page/HomePage.js';
import { Message } from './scenes/new_message/Message.js';

import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HashRouter> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/NewMessage" component={Message} />
            <Route exact path="/NewMessage/IconPage" component={IconPage} />
            <Route exact path="/EditMessage/:id" component={Message} />
            <Route exact path="/EditMessage/IconPage/:id" component={IconPage} />
          </Switch>
        {/* </HashRouter> */}
      </div>
    );
  }
}


export default App;
