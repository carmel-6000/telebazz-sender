import React, { Component } from 'react';
// import Tone from './ToneReact';
import { IconPage } from "./scenes/icon_page/IconPage";
import { Route, HashRouter, Switch } from 'react-router-dom'
import { HomePage } from './scenes/home_page/HomePage.js';
import { NewMessage } from './scenes/new_message/NewMessage.js';

import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HashRouter> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/NewMessage" component={NewMessage} />
            <Route exact path="/NewMessage/IconPage/:id" component={IconPage} />
            <Route exact path="/EditMessage/:id" component={NewMessage} />
            <Route exact path="/EditMessage/IconPage/:id" component={IconPage} />
          </Switch>
        {/* </HashRouter> */}
      </div>
    );
  }
}


export default App;
