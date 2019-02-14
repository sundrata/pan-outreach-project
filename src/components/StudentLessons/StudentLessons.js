import React from 'react';
import { connect } from 'react-redux';

// component imports
import StudentSearchForm from './StudentSearchForm';
import StudentLessonsTable from './StudentLessonsTable';

const StudentLessons = () => (
      <div className="studentDiv">
        <h1 className="heading"> 
          Lesson Plans 
        </h1>

        {/* search form */}
        <StudentSearchForm />

        {/* table & pdf dialogue */}
        <StudentLessonsTable />
      </div>
);

export default connect()(StudentLessons);