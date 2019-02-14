import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => (
  <div className="studentDashDisplay">
    <div className="studentDashBox">
      <img className="studentDashImages" alt="Tenor" src="/images/tenor.jpg" /> <br></br>
      <Link to="/tenor">
        <button className="dashButtons">Tenor</button>
      </Link>
    </div>
    <div className="studentDashBox">
      <img className="studentDashImages" alt="Second" src="/images/second.jpg" /> <br></br>
      <Link to="/second">
        <button className="dashButtons">Second</button>
      </Link>
    </div>
    <div className="studentDashBox">
      <img className="studentDashImages" alt="Cello" src="/images/cello.jpg" /> <br></br>
      <Link to="/cello">
        <button className="dashButtons">Cello</button>
      </Link>
    </div>
    <div className="studentDashBox">
      <img className="studentDashImages" alt="Bass" src="/images/bass.jpg" /> <br></br>
      <Link to="/bass">
        <button className="dashButtons">Bass</button>
      </Link>
    </div>
  </div>
);

export default StudentDashboard;
