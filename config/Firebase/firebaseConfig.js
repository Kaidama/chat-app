import * as firebase from "./node_modules/firebase";

const connectFirebase = async () => {
  try {
    await firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "chat-firebase-react-aws.firebaseapp.com",
      databaseURL: "https://chat-firebase-react-aws.firebaseio.com",
      projectId: "chat-firebase-react-aws",
      storageBucket: "chat-firebase-react-aws.appspot.com",
      messagingSenderId: "918203908283",
      appId: "1:918203908283:web:981eb87ba44c805b72a99e",
      measurementId: "G-72Q0N326ED"
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectFirebase;
