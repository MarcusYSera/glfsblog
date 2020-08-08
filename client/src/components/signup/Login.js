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
        <h1 className="ui center aligned header">Login</h1>
        <div className="ui center aligned basic segment">
          <GoogleAuth />
          <div className="ui horizontal divider">OR</div>
          <form
            className="ui form attached fluid segment"
            onSubmit={this.onFormSubmit}
          >
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
          <div className="ui bottom attached warning message">
            Need an Account? <Link to="/signup/FinalForm">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
