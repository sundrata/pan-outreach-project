import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div className="adminDashDisplay">
    <div className="dashBox">
      <Link to="/music">
        <img className="dashImages" alt="sheet music" src="/images/music.jpg" /> <br></br>
        <button className="dashButtons">Sheet Music</button>
      </Link>
    </div>
    <div className="dashBox">
      <Link to="/lessons">
        <img className="dashImages" alt="lesson plans" src="/images/lessons.jpg" /> <br></br>
        <button className="dashButtons">Lesson Plans</button>
      </Link>
    </div>
    <div className="dashBox">
      <Link to="/schools">
        <img className="dashImages" alt="users" src="/images/users.jpg" /> <br></br>
        <button className="dashButtons">Users</button>
      </Link>
    </div>
  </div>
);

export default AdminDashboard;
