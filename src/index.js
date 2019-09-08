import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App/App";
import "typeface-roboto";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKdyVjgwQKAJDPbRQ_mu5dWF6AFSJJx1o",
  authDomain: "resume-1b4f0.firebaseapp.com",
  databaseURL: "https://resume-1b4f0.firebaseio.com",
  projectId: "resume-1b4f0",
  storageBucket: "resume-1b4f0.appspot.com",
  messagingSenderId: "958694321376",
  appId: "1:958694321376:web:034d00aab55561b7"
};

firebase.initializeApp(firebaseConfig);

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
