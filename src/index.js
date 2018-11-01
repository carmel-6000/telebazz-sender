import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDyRCPdkTyFzv5I7mZ4rdzT_lbClkACcXM",
    authDomain: "sender-bazzer.firebaseapp.com",
    databaseURL: "https://sender-bazzer.firebaseio.com",
    projectId: "sender-bazzer",
    storageBucket: "sender-bazzer.appspot.com",
    messagingSenderId: "681931452265"
  };
  firebase.initializeApp(config);


ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
    
  ), document.getElementById('root'));
  //registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
 serviceWorker.unregister();





