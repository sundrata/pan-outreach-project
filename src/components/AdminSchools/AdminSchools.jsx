import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSchool from './AddSchool';
import SchoolTable from './SchoolTable';

class AdminSchools extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_PERSON'
    });
  }

  render() {
    return (
      <div>
        <br />
        <h1>Users</h1>
        <AddSchool />
        <SchoolTable />
      </div>
    )
  }
}

export default connect()(AdminSchools);
