import React, { Component } from 'react';
// nav bar import
import StudentNav from '../StudentNav/StudentNav';
// css import 
import './PanCello.css';
// svg imports
import ANotes from './ANotes';
import BNotes from './BNotes';
import CNotes from './CNotes';
import DNotes from './DNotes';
import ENotes from './ENotes';
import FNotes from './FNotes';
import GNotes from './GNotes';

class PanCello extends Component {
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
        <CNotes />
        <DNotes />
        <ENotes />
        <FNotes />
        <GNotes />
      </svg>
    );
  }
};

export default PanCello;