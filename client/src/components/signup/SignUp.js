// Replaced with FinalForm

// Deprecated!!!

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Form, Field } from 'react-final-form';

import { createUserAction } from '../../actions';

import GoogleAuth from './GoogleAuth';

import glfsBlogDB from '../../apis/glfsBlogDB';

class SignUp extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    pword: '',
    createdat: '',
  };

  componentDidMount = (e) => {
    const today = new Date();
    this.setState({
      createdat: today,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, email, pword, createdat } = this.state;
    console.log(`${fname}${lname}${email}${pword}${createdat}`);

    glfsBlogDB
      .post('/api/users', {
        firstName: `${fname}`,
        lastName: `${lname}`,
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

  render() {
    const { fname, lname, email, pword } = this.state;

    return (
      <div>
        <h1 className="ui center aligned header">Sign Up</h1>
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
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
                        onChange={(event) =>
                          this.setState({ lname: event.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
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
            </div>
            <div className="middle aligned column">
              <GoogleAuth />
            </div>
          </div>
          <div className="ui vertical divider">OR</div>
        </div>
        <div className="ui message">
          Already have an Account? <Link to="/signup/login">Sign In</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return state;
};

export default connect(mapStateToProps, { createUserAction })(SignUp);
