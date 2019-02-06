import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switches from './Switches'
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

  // dummy function needed to prevent double tap zoom on touch devices
  testTouch = () => {}

  render() {
    return (
      <div className='disable-touch-zoom' onClick={this.testTouch}>
        <Switches />
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

const mapStateToProps = state => ({
  colors: state.tenor,
});

export default connect(mapStateToProps)(PanTenor);
