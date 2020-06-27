import React from 'react';
// import InputField from './InputField';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: '' };
  }

  inputValue(event) {
    this.setState({ answer: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(event) => console.log(event.target.value)}>
          Email:
          <input type="text" value={this.state.answer} onChange={this.inputValue} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
