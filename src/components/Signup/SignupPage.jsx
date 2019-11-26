import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../Firebase/firebaseAuth";
import {
  FormControl,
  InputLabel,
  Input,
  Paper,
  CssBaseline,
  Typography,
  Button
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Firebase from "../../Firebase/firebase";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Firebase.auth().createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/");
      } catch {
        alert(error);
      }
    },
    [history]
  );

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up!
        </Typography>
        <form onSubmit={e => handleSubmit} className={classes.form}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signup-email-input">
              Enter Your Email
            </InputLabel>
            <Input
              type="email"
              autoComplete="email"
              autoFocus
              id="signup-email-input"
              onChange={e => setEmail(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signup-password-input">
              Create A Password
            </InputLabel>
            <Input
              type="password"
              autoComplete="password"
              autoFocus
              id="signup-password-input"
              onChange={e => setPassword(e.target.value)}
            ></Input>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
        {signupError ? (
          <Typography className={classes.errorText} component="h5" variant="h6">
            {setSignupError}
          </Typography>
        ) : null}
        <h5 component="h5" variant="h6" className={classes.hasAccountHeader}>
          Already Have An Account?
        </h5>
        <Link className={classes.logInLink} to="/login">
          Login
        </Link>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(SignupPage);
