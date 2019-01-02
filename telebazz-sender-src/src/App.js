import React, { Component } from 'react';
import { IconPage } from "./scenes/icon_page/IconPage";
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './scenes/home_page/HomePage.js';
import { MessagePage } from './scenes/message_page/MessagePage.js';
import { SendPage } from "./scenes/send_page/SendPage.js";
import { HashRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/NewMessage" component={MessagePage} />
            <Route exact path="/NewMessage/IconPage" component={IconPage} />
            <Route exact path="/EditMessage/:id" component={MessagePage} />
            <Route exact path="/EditMessage/IconPage/:id" component={IconPage} />
            <Route exact path="/SendPage/:id" component={SendPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}


export default App;
