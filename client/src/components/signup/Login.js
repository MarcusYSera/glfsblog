import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui header">Login</h1>
          <form className="ui large form" onSubmit={this.onFormSubmit}>
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
          <div className="ui message">
            Need an Account? <Link to="/signup/SignUp">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;