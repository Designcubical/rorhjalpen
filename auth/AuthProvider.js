import React, { Component } from "react";
import netlifyAuth from "auth";

const AuthContext = React.createContext({
  signinRedirectCallback: () => ({}),
  logout: () => ({}),
  signoutRedirectCallback: () => ({}),
  isAuthenticated: () => ({}),
  signinRedirect: () => ({}),
  signinSilentCallback: () => ({}),
  createSigninRequest: () => ({}),
});

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  authService;
  constructor(props) {
    super(props);
    this.authService = netlifyAuth.in;
  }
  render() {
    return (
      <AuthContext.Provider value={this.authService}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
