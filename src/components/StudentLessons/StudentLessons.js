import React, { Component } from 'react';
import { connect } from 'react-redux';

// component imports
import StudentSearchForm from './StudentSearchForm';
import StudentLessonsTable from './StudentLessonsTable';

class StudentLessons extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_LESSON'
    });
  }

  render() {
    return (
      <div className="studentDiv">
        <h1 className="heading">
          Lesson Plans
        </h1>
        {/* search form */}
        <StudentSearchForm />
        {/* table & pdf dialogue */}
        <StudentLessonsTable />
      </div>
    )
  }
}

export default connect()(StudentLessons);
