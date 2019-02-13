import React from 'react';

import { Link } from 'react-router-dom';

const tenor = require('./tenor1.jpg');

const StudentDashboard = () => (
  <div>
    <div>  
      <div className="studentDashDisplay">
        <div className="studentDashBox">
          <img className="studentDashImages" alt="Tenor" src={tenor} /> <br></br>
          <Link to="/tenor">
            <button className="studentDashButtons">Tenor</button>
          </Link>
        </div>
        <div className="studentDashBox">
          <img className="studentDashImages" alt="Second" src={tenor} /> <br></br>
          <Link to="/second">
            <button className="studentDashButtons">Second</button>
          </Link>
        </div>
        <div className="studentDashBox">
          <img className="studentDashImages" alt="Cello" src={tenor} /> <br></br>
          <Link to="/cello">
            <button className="studentDashButtons">Cello</button>
          </Link>
        </div>
        <div className="studentDashBox">
          <img className="studentDashImages" alt="Bass" src={tenor} /> <br></br>
          <Link to="/bass">
            <button className="studentDashButtons">Bass</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
