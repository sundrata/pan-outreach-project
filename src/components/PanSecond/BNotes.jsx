import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
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
            transform="matrix(0.8379 -0.5458 0.5458 0.8379 93.1051 741.7595)"
            style={{ fill: this.props.colors.B3, stroke: 'black' }}
            cx="1295.524"
            cy="214.11"
            rx="80.373"
            ry="105.668"
            onTouchStart={this.props.isTouch ? () => this.playNote('B3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('B3')}
          />
          <text 
            transform="matrix(1 0 0 1 1272.4863 237.9263)"
          >
            B3
          </text>
        </g>
        <g id="B4">
          <ellipse
            transform="matrix(0.9856 -0.1688 0.1688 0.9856 -39.7962 211.0937)"
            style={{ fill: this.props.colors.B4, stroke: 'black' }}
            cx="1221.331"
            cy="339.548"
            rx="48.59"
            ry="35.521"
            onTouchStart={this.props.isTouch ? () => this.playNote('B4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('B4')}
          />
          <text 
            transform="matrix(1 0 0 1 1190.5713 359.188)" 
          >
            B4
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.second,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(BNotes);
