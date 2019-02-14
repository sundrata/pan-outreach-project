import React from 'react';
import { Link } from 'react-router-dom';

// image imports
const music = require('./music.jpg');
const lessons = require('./lessons.jpg');
const school = require('./school.jpg')

const AdminDashboard = () => (
  <div className="adminDashDisplay">
    <div className="dashBox">
      <img className="dashImages" alt="sheet music" src={music} /> <br></br>
      <Link to="/music">
        <button className="dashButtons">Sheet Music</button>
      </Link>
    </div>
    <div className="dashBox">
      <img className="dashImages" alt="lesson plans" src={lessons} /> <br></br>
      <Link to="/lessons">
        <button className="dashButtons">Lesson Plans</button>
      </Link>
    </div>
    <div className="dashBox">
      <img className="dashImages" alt="schools" src={school} /> <br></br>
      <Link to="/schools">
        <button className="dashButtons">Schools</button>
      </Link>
    </div>
  </div>
);

export default AdminDashboard;
