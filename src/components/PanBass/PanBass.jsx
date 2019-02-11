import React, { Component } from 'react';
import Switches from './Switches';
// css import
import './PanBass.css';
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

class PanBass extends Component {
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
        <Switches />
        <svg
          id="bass-svg"
          x="0px"
          y="0px"
          viewBox="0 0 1613 1450"
        >
          {/* BASE LAYER */}
          <g id="base">
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="456.5"
              cy="230.5"
              r="210"
            />
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="893.5"
              cy="230.5"
              r="210"
            />
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="1110.5"
              cy="609.5"
              r="210"
            />
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="1110.5"
              cy="1046.5"
              r="210"
            />
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="239.5"
              cy="1046.5"
              r="210"
            />
            <circle
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="239.5"
              cy="609.5"
              r="210"
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

export default PanBass;
