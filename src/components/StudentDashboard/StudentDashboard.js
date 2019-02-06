import React from 'react';
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
        Student Dashboard 
        <LogOutButton />
      </p>
    </div>
  </div>
);

export default StudentDashboard;