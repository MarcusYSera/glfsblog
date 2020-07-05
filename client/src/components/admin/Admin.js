import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewUser } from '../../actions';

class Admin extends Component {
  componentDidMount() {
    this.props.viewUser();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <div>
          <p key={user.id}>
            Name: {user.firstName} {user.lastName} <br /> email: {user.email}
          </p>
          <p></p>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderUsers()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { viewUser })(Admin);
