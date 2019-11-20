import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

//  Components
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";

//  Firebase
const firebase = require("firebase");
require("dotenv");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chat-firebase-react-aws.firebaseapp.com",
  databaseURL: "https://chat-firebase-react-aws.firebaseio.com",
  projectId: "chat-firebase-react-aws",
  storageBucket: "chat-firebase-react-aws.appspot.com",
  messagingSenderId: "918203908283",
  appId: "1:918203908283:web:981eb87ba44c805b72a99e",
  measurementId: "G-72Q0N326ED"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
