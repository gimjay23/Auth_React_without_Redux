import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import SignIn from "./SignIn";

export default class HeaderBar extends Component {
  render() {
    const user = this.props.auth;

    const logOut = (
      <ul>
        <li>
          <a href="/auth/logout">Log out</a>
        </li>
      </ul>
    );

    const logIn = (
      <ul>
        <li>
          <a href="/auth/login/">Login</a>
        </li>
      </ul>
    );

    return (
      <Router>
        <Container className="mr-auto">
          <br />
          <nav>
            <ul>
              <li><li> {user ? logIn : logOut} </li></li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signin">Sign In Here</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact default path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </Container>
      </Router>
    );
  }
}
