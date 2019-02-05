import React, { Component } from 'react';
import CNotes from './CNotes';
import FNotes from './FNotes';
import BNotes from './BNotes';
import ENotes from './ENotes';
import ANotes from './ANotes';
import DNotes from './DNotes';
import GNotes from './GNotes';
import './PanTenor.css'

class PanTenor extends Component {
  state = {
    baseColor: '#F7E8AC',
    baseStroke: 'black',
    stroke: 'none',
  }

  testTouch = () => {
    // console.log('touched');
  }

  render() {
    return (
      <div className='disable-touch-zoom' onClick={this.testTouch}>
        <svg
          id="tenor-svg"
          x="0px"
          y="0px"
          viewBox="0 0 1440 1438"
        >
          {/* BASE LAYER */}
          <g id="Layer_2">
            <ellipse
              style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
              cx="720"
              cy="720.75"
              rx="707.5"
              ry="710.25"
            />
          </g>
          <CNotes />
          <FNotes />
          <BNotes />
          <ENotes />
          <ANotes />
          <DNotes />
          <GNotes />
        </svg>
      </div>
    );
  }
};

export default PanTenor;
