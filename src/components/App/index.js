import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "../Login/LoginPage";
import SignupPage from "../Signup/SignupPage";
import DashboardPage from "../Dashboard/DashboardPage";
import { FirebaseProvider } from "../../Firebase/firebaseAuth";

import * as ROUTES from "../../constants/routes";
const App = () => (
  <FirebaseProvider>
    <Router>
      <div>
        <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
      </div>
    </Router>
  </FirebaseProvider>
);

export default App;
