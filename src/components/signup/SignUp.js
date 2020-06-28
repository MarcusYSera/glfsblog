import React from 'react';

class SignUp extends React.Component {
  state = { fname: '', lname: '', male: false, female: false, email: '', pword: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, male, female, email, pword } = this.state;
    console.log(`${fname}${lname}${male}${female}${email}${pword}`);
  };

  handleCheckboxChange = (e) => {
    const { target } = e;
    let value = false;
    if (target.name === 'male') {
      value = target.name === 'male' ? target.checked : target.value;
    } else if (target.name === 'female') {
      value = target.name === 'female' ? target.checked : target.value;
    }
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { fname, lname, male, female, email, pword } = this.state;
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
                <label htmlFor="male">
                  Male
                  <input
                    type="checkbox"
                    name="male"
                    value={male}
                    checked={male}
                    onChange={this.handleCheckboxChange}
                  />
                </label>
                <label htmlFor="female">
                  Female
                  <input
                    type="checkbox"
                    name="female"
                    value={female}
                    checked={female}
                    onChange={this.handleCheckboxChange}
                  />
                </label>
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
