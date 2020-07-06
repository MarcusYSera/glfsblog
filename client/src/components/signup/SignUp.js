import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

import glfsBlogDB from '../../apis/glfsBlogDB';

class SignUp extends Component {
  state = {
    fname: '',
    lname: '',
    male: false,
    female: false,
    gender: '',
    email: '',
    pword: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, gender, email, pword } = this.state;
    console.log(`${fname}${lname}${gender}${email}${pword}`);

    glfsBlogDB
      .post('/api/users', {
        firstName: `${fname}`,
        lastName: `${lname}`,
        gender: `${gender}`,
        email: `${email}`,
        password: `${pword}`,
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
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
      gender: name,
    });
  };

  render() {
    const { fname, lname, male, female, email, pword } = this.state;
    const today = new Date();
    const month = `${today.getFullYear().toString()}-${`0${today.getMonth() + 1}`
      .slice(-2)
      .toString()}`;
    return (
      <div className="signupform">
        <h1 className="ui header">Sign Up</h1>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui stacked segment">
            <div className="two fields">
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
            </div>
            <div className="field">
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={this.handleCheckboxChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={this.handleCheckboxChange}
                />
                Female
              </label>
            </div>
            {/* <div className="field">
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
            </div> */}
            <div className="field">
              <label htmlFor="bday">
                Birthday:
                <input type="month" name="bday" max={month} required />
              </label>
            </div>
            <div className="field">
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(event) => this.setState({ email: event.target.value })}
              />
            </div>
            <div className="field">
              <input
                type="password"
                value={pword}
                placeholder="Password"
                onChange={(e) => this.setState({ pword: e.target.value })}
              />
            </div>
            <input className="ui submit button" type="submit" value="Submit" />
          </div>
        </form>
        <GoogleAuth />
        <div className="ui message">
          Already have an Account? <Link to="/signup/signin">Sign In</Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
