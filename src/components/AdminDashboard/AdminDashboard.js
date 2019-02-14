import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div className="adminDashDisplay">
    <div className="dashBox">
      <img className="dashImages" alt="sheet music" src="/images/music.jpg" /> <br></br>
      <Link to="/music">
        <button className="dashButtons">Sheet Music</button>
      </Link>
    </div>
    <div className="dashBox">
      <img className="dashImages" alt="lesson plans" src="/images/lessons.jpg" /> <br></br>
      <Link to="/lessons">
        <button className="dashButtons">Lesson Plans</button>
      </Link>
    </div>
    <div className="dashBox">
      <img className="dashImages" alt="schools" src="/images/school.jpg" /> <br></br>
      <Link to="/schools">
        <button className="dashButtons">Schools</button>
      </Link>
    </div>
  </div>
);

export default AdminDashboard;
