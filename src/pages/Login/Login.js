import React, { Component } from 'react';
import SignIn from './SignIn.js'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
    <SignIn></SignIn>
    );
  }
}

export default Login;
