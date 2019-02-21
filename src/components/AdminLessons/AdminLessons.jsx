import React, { Component } from 'react';
import { connect } from 'react-redux';

// component imports
import AddLessons from './AddLessons';
import ManageCategory from './ManageCategory';
import SearchLessons from './SearchLessons';
import LessonsTable from './LessonsTable';

class AdminLessons extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_LESSON' });
    this.props.dispatch({ type: 'FETCH_CATEGORY' })
  }
  
  render() {
    return (
      <div>
        <br />
        <h1>Lesson Plans</h1>
        <AddLessons />
        <ManageCategory />
        <br />
        <SearchLessons />
        <LessonsTable />
      </div>
    )
  }
}

export default connect()(AdminLessons);
