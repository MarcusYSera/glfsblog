import React from 'react';
// import InputField from './InputField';

class Login extends React.Component {
  state = { answer: '' };

  render() {
    const { answer } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={console.log(answer)}>
          Email:
          <input
            type="text"
            value={answer}
            onChange={(e) => this.setState({ answer: e.target.value })}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
