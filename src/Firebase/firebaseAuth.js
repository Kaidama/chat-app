import React, { useEffect, useState } from "react";
import Firebase from "../Firebase/config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // currentUser is set to null by useState
  // setCurrentUser will be set when useEffect is called

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {/* these are the routes */}
      {children}
    </AuthContext.Provider>
  );
};
