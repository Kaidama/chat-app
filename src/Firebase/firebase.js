import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
