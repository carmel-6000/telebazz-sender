import React, { Component } from 'react';
// import Tone from './ToneReact';
import { IconPage } from "./scenes/icon_page/IconPage";
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './scenes/home_page/HomePage.js';
import { MessagePage } from './scenes/message_page/MessagePage.js';
import { SendPage } from "./scenes/send_page/SendPage.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/NewMessage" component={MessagePage} />
          <Route exact path="/NewMessage/IconPage" component={IconPage} />
          <Route exact path="/EditMessage/:id" component={MessagePage} />
          <Route exact path="/EditMessage/IconPage/:id" component={IconPage} />
          <Route exact path="/SendPage" component={SendPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
