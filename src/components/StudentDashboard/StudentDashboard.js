import React from 'react';
import './StudentDashboard.css';

import StudentNav from '../StudentNav/StudentNav';
import PanCello from '../PanCello/PanCello';
import PanSecond from '../PanSecond/PanSecond';
import PanBass from '../PanBass/PanBass';
import PanTenor from '../PanTenor/PanTenor';
import LogOutButton from '../LogOutButton/LogOutButton';

const StudentDashboard = () => (
  <div>
    <div>
      <p>
        <StudentNav />
      </p>
    </div>
    <div className="container">
      <div className="item">
        ITEM 1
        </div>
      <div className="item">
        ITEM 2
        </div>
      <div className="item">
        ITEM 3
        </div>
      <div className="item">
        ITEM 4
        </div>
    </div>
  </div>
);

export default StudentDashboard;