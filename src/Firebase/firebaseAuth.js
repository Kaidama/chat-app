import React, { useEffect, useState, createContext, useContext } from "react";
import * as firebase from "firebase";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCdLgM7uTso7PPMjA6rVcz0HGLwvRy2EyE",
  authDomain: "chat-firebase-react-aws.firebaseapp.com",
  databaseURL: "https://chat-firebase-react-aws.firebaseio.com",
  projectId: "chat-firebase-react-aws",
  storageBucket: "chat-firebase-react-aws.appspot.com",
  messagingSenderId: "918203908283",
  appId: "1:918203908283:web:981eb87ba44c805b72a99e",
  measurementId: "G-72Q0N326ED"
});

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
  
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response;
      });
  };

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      user ? setUser(user) : setUser(false);
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signup,
    signin
  };
}


