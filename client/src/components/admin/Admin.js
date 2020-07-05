import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewUser } from '../../actions';

class Admin extends Component {
  componentDidMount() {
    this.props.viewUser();
  }
  render() {
    return (
      <div>
        <h1>Admin page</h1>
      </div>
    );
  }
}

export default connect(null, { viewUser })(Admin);
