import React, { Component } from 'react';
// nav bar import
import StudentNav from '../StudentNav/StudentNav';
// css import
import './PanBass.css';
// svg imports
import ANotes from './ANotes';
import BNotes from './BNotes';
import CNotes from './CNotes';
import DNotes from './DNotes';
import ENotes from './ENotes';
import FNotes from './FNotes';
import GNotes from './GNotes';

class PanBass extends Component {
  state = {
    baseColor: '#F7E8AC',
    baseStroke: 'black',
    stroke: 'none',
  }
  render() {
    return (
      <svg
        id="cello-svg"
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
        <CNotes />
        <DNotes />
        <ENotes />
        <FNotes />
        <GNotes />
      </svg>
    );
  }
};

export default PanBass;
