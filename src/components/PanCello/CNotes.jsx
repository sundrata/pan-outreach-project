import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class CNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.red : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.redHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* C NOTES */}
        <g id="C3">
          <ellipse
            style={{ fill: this.props.colors.C3, stroke: 'black' }}
            cx="733"
            cy="604.5"
            rx="159.5"
            ry="103"
            onTouchStart={this.props.isTouch ? () => this.playNote('C3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C3')}
          />
          <text 
            transform="matrix(1 0 0 1 696.1084 631.854)"
          >
            C3
          </text>
        </g>
        <g id="C4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -179.2137 370.7318)"
            style={{ fill: this.props.colors.C4, stroke: 'black' }}
            cx="515.505"
            cy="477.88"
            rx="99.607"
            ry="77.195"
            onTouchStart={this.props.isTouch ? () => this.playNote('C4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C4')}
          />
          <text 
            transform="matrix(1 0 0 1 478.8242 506.1133)"
          >
            C4
          </text>
        </g>
        <g id="C5">
          <ellipse
            transform="matrix(0.6259 -0.7799 0.7799 0.6259 -71.1086 695.6706)"
            style={{ fill: this.props.colors.C5, stroke: 'black' }}
            cx="689.566"
            cy="421.954"
            rx="55.601"
            ry="38.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('C5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C5')}
          />
          <text 
            transform="matrix(1 0 0 1 658.125 454.0269)"
          >
            C5
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(CNotes);
