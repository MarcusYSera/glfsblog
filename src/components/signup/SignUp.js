import React from 'react';

class SignUp extends React.Component {
  state = { fname: '', lname: '', gender: '', email: '', pword: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, gender, email, pword } = this.state;
    console.log(`${fname}${lname}${gender}${email}${pword}`);
  };

  render() {
    const { fname, lname, gender, email, pword } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.onFormSubmit}>
          First Name:{' '}
          <input
            type="text"
            value={fname}
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
          <br />
          Last Name:{' '}
          <input
            type="text"
            value={lname}
            onChange={(event) => this.setState({ lname: event.target.value })}
          />
          <br />
          Gender:{' '}
          <input
            type="text"
            value={gender}
            onChange={(event) => this.setState({ gender: event.target.value })}
          />
          <br />
          Email:{' '}
          <input
            type="text"
            value={email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <br />
          Password:{' '}
          <input
            type="text"
            value={pword}
            onChange={(e) => this.setState({ pword: e.target.value })}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
