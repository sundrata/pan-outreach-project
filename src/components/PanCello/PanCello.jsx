import React, { Component } from 'react';
import Switches from './Switches'
// css import
import './PanCello.css';
// svg imports
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

class PanCello extends Component {
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
        <Switches/>
        <svg
          id="cello-svg"
          x="0px"
          y="0px"
          viewBox="0 0 1613 1450"
        >
          {/* BASE LAYER */}

          <g id="base">
            <ellipse
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="736.5"
              cy="366"
              rx="355"
              ry="353.5"
            />
            <ellipse
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="366.5"
              cy="995"
              rx="355"
              ry="353.5"
            />
            <ellipse
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="1111.5"
              cy="996"
              rx="355"
              ry="353.5"
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

export default PanCello;
