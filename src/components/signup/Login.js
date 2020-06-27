import React from 'react';
// import InputField from './InputField';

class Login extends React.Component {
  state = { email: '', pass: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, pass } = this.state;
    console.log(email, pass);
  };

  render() {
    const { email, pass } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onFormSubmit}>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          Password:
          <input
            type="text"
            value={pass}
            onChange={(e) => this.setState({ pass: e.target.value })}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
