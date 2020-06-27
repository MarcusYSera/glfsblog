import React from 'react';
// import InputField from './InputField';

class Login extends React.Component {
  state = {};

  inputValue(event) {
    this.setState({ answer: event.target.value });
  }

  render() {
    const { answer } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(event) => console.log(event.target.value)}>
          Email:
          <input type="text" value={answer} onChange={this.inputValue} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
