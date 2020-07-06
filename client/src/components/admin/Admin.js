import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewUserAction } from '../../actions';

class Admin extends Component {
  componentDidMount() {
    this.props.viewUserAction();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <div key={user._id}>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>email: {user.email}</p>
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

export default connect(mapStateToProps, { viewUserAction })(Admin);
