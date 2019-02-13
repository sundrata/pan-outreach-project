import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import PanTenor from '../PanTenor/PanTenor';
// import PanSecond from '../PanSecond/PanSecond';
// import PanCello from '../PanCello/PanCello';
// import PanBass from '../PanBass/PanBass';

const tenor = require('./tenor.jpg');
const second = require('./second.jpg');

class StudentDashboard extends Component {
  render() {
    return (
      <div
        className="studentDashDisplay" >
        <div
          className="studentDashBox"
          onMouseOver={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <img className="studentDashImages" alt="Tenor" src={tenor} /> 
            <div className="center">
              <div className="center-box">
                <Link 
                  className="text"
                  to="/tenor"
                >
                  Tenor
                </Link>
              </div>
            </div>
        </div>
        <div className="studentDashBox">
          <img className="studentDashImages" alt="Second" src={tenor} /> 
          <div className="center">
            <div className="center-box">
              <Link 
                className="text"
                to="/second"
              >
                Second
              </Link>
            </div>
          </div>
        </div>
        <div className="studentDashBox">
          <img className="studentDashImages" alt="Cello" src={tenor} /> 
          <div className="center">
            <div className="center-box">
              <Link
                className="text"
                to="/cello"
              >
                Cello
              </Link>
            </div>
          </div>
        </div>
        <div className="studentDashBox">
          <img className="studentDashImages" alt="Bass" src={tenor} /> 
          <div className="center">
            <div className="center-box">
              <Link
                className="text"
                to="/bass"
              >
                Bass
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentDashboard;
