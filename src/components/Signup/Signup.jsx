import React, { Component } from "react";
import { Link } from "react-router-dom";
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

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      pasword: null,
      passwordConfirmation: null,
      signupError: ""
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up!
          </Typography>
          <form onSubmit={e => this.submitSignup} className={classes.form}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-email-input">
                Enter Your Email
              </InputLabel>
              <Input
                type="email"
                autoComplete="email"
                autoFocus
                id="signup-email-input"
                onChange={e => this.handleOnChange("email", e)}
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
                onChange={e => this.handleOnChange("password", e)}
              ></Input>
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-confirmation-input">
                Confirm Your Password
              </InputLabel>
              <Input
                type="confirmPassword"
                autoComplete="confirmPassword"
                autoFocus
                id="signup-confirm-password-input"
                onChange={e => this.handleOnChange("confirmPassword", e)}
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
          {this.state.signupError ? (
            <Typography
              className={classes.errorText}
              component="h5"
              variant="h6"
            >
              {this.state.signupError}
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
  }
  submitSignup = e => {
    console.log("Submitting!");
  };
  handleOnChange = (type, e) => {
    console.log(type, e);
  };
}

export default withStyles(styles)(Signup);
