import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

// import InputField from './InputField';

class Login extends Component {
  state = { email: '', pass: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, pass } = this.state;
    console.log(`email: ${email} & password: ${pass}`);
  };

  render() {
    const { email, pass } = this.state;
    return (
        <div className="signupform">
          <h1 className="ui header">Sign In</h1>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  value={pass}
                  placeholder="Password"
                  onChange={(e) => this.setState({ pass: e.target.value })}
                  required
                />
              </div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <GoogleAuth />
          <div className="ui message">
            Need an Account? <Link to="/signup/SignUp">Sign Up</Link>
          </div>
        </div>
    );
  }
}

export default Login;
