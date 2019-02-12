import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switches from '../PanSwitches/PanSwitches'
import CNotes from './CNotes';
import CShNotes from './CShNotes';
import FNotes from './FNotes';
import FShNotes from './FShNotes';
import BNotes from './BNotes';
import BbNotes from './BbNotes';
import ENotes from './ENotes';
import EbNotes from './EbNotes';
import ANotes from './ANotes';
import DNotes from './DNotes';
import GNotes from './GNotes';
import GShNotes from './GShNotes';
import './PanTenor.css'

class PanTenor extends Component {
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
        <div className="switch-div">
          <Switches />
        </div>
          <svg
            id="tenor-svg"
            x="0"
            y="0"
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
            <CShNotes />
            <FNotes />
            <FShNotes />
            <BNotes />
            <BbNotes />
            <ENotes />
            <EbNotes />
            <ANotes />
            <DNotes />
            <GNotes />
            <GShNotes />
          </svg>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.tenor,
});

export default connect(mapStateToProps)(PanTenor);
