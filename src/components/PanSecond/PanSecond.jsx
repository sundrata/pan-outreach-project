import React, { Component } from 'react';
import Switches from '../PanSwitches/PanSwitches'
import './PanSecond.css';
import ANotes from './ANotes';
import BNotes from './BNotes';
import BbNotes from './BbNotes';
import CNotes from './CNotes';
import CShNotes from './CShNotes';
import DNotes from './DNotes';
import ENotes from './ENotes';
import EbNotes from './EbNotes';
import FNotes from './FNotes';
import FShNotes from './FShNotes';
import GNotes from './GNotes';
import GShNotes from './GShNotes';

class PanSecond extends Component {
  state = {
    baseColor: '#F7E8AC',
    baseStroke: 'black',
    stroke: 'none',
  }

  // dummy function needed to prevent double tap zoom on touch devices
  testTouch = () => { }

  render() {
    return (
      <div className='disable-touch-zoom' onClick={this.testTouch}>
        <div className="switch-div-second">
          <h3>Second</h3>
          <Switches />
        </div>
        <svg
          id="seconds-svg"
          x="0px"
          y="0px"
          viewBox="0 0 1451 730"
        >
          {/* BASE LAYER */}

          <g id="base">
            <ellipse
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="363.5"
              cy="362"
              rx="357"
              ry="355.5"
            />
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="1087"
              cy="362"
              r="355.5"
            />
          </g>

          <ANotes />
          <BNotes />
          <BbNotes />
          <CNotes />
          <CShNotes />
          <DNotes />
          <ENotes />
          <EbNotes />
          <FNotes />
          <FShNotes />
          <GNotes />
          <GShNotes />
        </svg>
      </div>
    );
  }
};

export default PanSecond;
