import React, { Component } from "react";

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <header>
          <h3> Sign in using ...</h3>
          <hr />
          <a className="google-btn" href="/auth/google">
            Login with Google+
          </a>
          <a className="fb-login-button" href="/auth/facebook">
            Login with Facebook
          </a>
        </header>
      </div>
    );
  }
}
