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
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui header">Sign Up</h1>
          <form className="ui large form" onSubmit={this.onFormSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <input
                  type="text"
                  value={fname}
                  placeholder="First Name"
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  value={lname}
                  placeholder="Last Name"
                  onChange={(event) => this.setState({ lname: event.target.value })}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  value={gender}
                  placeholder="Gender"
                  onChange={(event) => this.setState({ gender: event.target.value })}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => this.setState({ email: event.target.value })}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  value={pword}
                  placeholder="Password"
                  onChange={(e) => this.setState({ pword: e.target.value })}
                />
              </div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
