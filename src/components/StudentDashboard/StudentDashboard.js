import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => (
  <div className="studentDashDisplay">
    <div className="studentDashBox">
    <Link to="/tenor">
      <img className="studentDashImages" alt="Tenor" src="/images/tenor.jpg" /> <br></br>
        <button className="dashButtons">Tenor</button>
      </Link>
    </div>
    <div className="studentDashBox">
    <Link to="/second">
      <img className="studentDashImages" alt="Second" src="/images/second.jpg" /> <br></br>
        <button className="dashButtons">Second</button>
      </Link>
    </div>
    <div className="studentDashBox">
    <Link to="/cello">
      <img className="studentDashImages" alt="Cello" src="/images/cello.jpg" /> <br></br>
        <button className="dashButtons">Cello</button>
      </Link>
    </div>
    <div className="studentDashBox">
    <Link to="/bass">
      <img className="studentDashImages" alt="Bass" src="/images/bass.jpg" /> <br></br>
        <button className="dashButtons">Bass</button>
      </Link>
    </div>
  </div>
);

export default StudentDashboard;
