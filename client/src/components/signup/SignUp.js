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
    // gender: '',
    // bday: '',
    email: '',
    pword: '',
    createdat: '',
    month: 0,
  };

  componentDidMount = (e) => {
    const today = new Date();
    const month = `${today.getFullYear().toString()}-${`0${today.getMonth() + 1}`
      .slice(-2)
      .toString()}`;
    this.setState({
      createdat: today,
      month: month,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, gender, bday, email, pword, createdat } = this.state;
    console.log(`${fname}${lname}${gender}${bday}${email}${pword}${createdat}`);

    glfsBlogDB
      .post('/api/users', {
        firstName: `${fname}`,
        lastName: `${lname}`,
        // birthday: `${bday}`,
        // gender: `${gender}`,
        email: `${email}`,
        password: `${pword}`,
        createdAt: `${createdat}`,
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
    let opposite = '';
    if (target.value === 'male') {
      value = target.value === 'male' ? target.checked : value;
      opposite = 'female';
    } else if (target.value === 'female') {
      value = target.value === 'female' ? target.checked : value;
      opposite = 'male';
    }
    this.setState({
      [target.value]: value,
      gender: target.value,
      [opposite]: false,
    });
  };

  render() {
    const { fname, lname, male, female, bday, email, pword, month } = this.state;

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
            {/* <div className="field">
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={male}
                  onChange={this.handleCheckboxChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={female}
                  onChange={this.handleCheckboxChange}
                />
                Female
              </label>
            </div> */}
            {/* <div className="field">
              <label htmlFor="bday">
                Birthday:
                <input
                  type="month"
                  name="bday"
                  value={bday}
                  max={month}
                  onChange={(e) => this.setState({ bday: e.target.value })}
                />
              </label>
            </div> */}
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
            <button className="ui submit button" type="submit">
              Submit
            </button>
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
