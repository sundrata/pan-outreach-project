import React, { Component } from 'react';
import { connect } from 'react-redux'

// component imports
import StudentSearchForm from './StudentSearchForm';
import StudentMusicTable from './StudentMusicTable';

class StudentMusic extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    });
  }

  render() {
    return (
      <div className="studentDiv">
        <h1 className="heading">
          Sheet Music
        </h1>
        {/* search feature */}
        <StudentSearchForm />
        {/* table & pdf file opener */}
        <StudentMusicTable />
      </div>
    )
  }
}

export default connect()(StudentMusic);
