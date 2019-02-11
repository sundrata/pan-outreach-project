import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.violet : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.violetHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* B NOTES */}
        <g id="B3">
          <ellipse
            transform="matrix(0.4251 -0.9052 0.9052 0.4251 -730.1371 623.7568)"
            style={{ fill: this.props.colors.B3, stroke: 'black' }}
            cx="125.942"
            cy="886.63"
            rx="116.702"
            ry="85.248"
            onTouchStart={this.props.isTouch ? () => this.playNote('B3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('B3')}
          />
          <text 
            transform="matrix(1 0 0 1 92.4575 924.3389)" 
          >
            B3
          </text>
        </g>
        <g id="B4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -462.7971 319.3102)"
            style={{ fill: this.props.colors.B4, stroke: 'black' }}
            cx="289.782"
            cy="915.037"
            rx="48.5"
            ry="68.799"
            onTouchStart={this.props.isTouch ? () => this.playNote('B4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('B4')}
          />
          <text 
            transform="matrix(1 0 0 1 262.2563 950.1992)"
          >
            B4
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

export default connect(mapStateToProps)(BNotes);
