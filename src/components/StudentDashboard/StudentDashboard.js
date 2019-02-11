import React from 'react';
import { Link } from 'react-router-dom';

// import PanTenor from '../PanTenor/PanTenor';
// import PanSecond from '../PanSecond/PanSecond';
// import PanCello from '../PanCello/PanCello';
// import PanBass from '../PanBass/PanBass';

const music = require('./music.jpg');

const StudentDashboard = () => (
  <div>
    <div>  
      <div className="studentDashDisplay">
        <div className="dashBox">
          <img className="dashImages" alt="Tenor" src={music} /> <br></br>
          <Link to="/tenor">
            <button className="dashButtons">Tenor</button>
          </Link>
        </div>
        <div className="dashBox">
          <img className="dashImages" alt="Second" src={music} /> <br></br>
          <Link to="/second">
            <button className="dashButtons">Second</button>
          </Link>
        </div>
        <div className="dashBox">
          <img className="dashImages" alt="Cello" src={music} /> <br></br>
          <Link to="/cello">
            <button className="dashButtons">Cello</button>
          </Link>
        </div>
        <div className="dashBox">
          <img className="dashImages" alt="Bass" src={music} /> <br></br>
          <Link to="/bass">
            <button className="dashButtons">Bass</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
