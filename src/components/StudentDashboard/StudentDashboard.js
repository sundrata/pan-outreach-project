import React from 'react';
import './StudentDashboard.css';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

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
        Tenor
      </div>
      <div className="item">
        Second
      </div>
      <div className="item">
        Cello
      </div>
      <div className="item">
        Bass
      </div>
    </div>
  </div>
);

export default StudentDashboard;