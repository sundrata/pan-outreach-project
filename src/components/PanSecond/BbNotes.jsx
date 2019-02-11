import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.pink : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.pinkHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* Bb NOTES */}
        <g id="Bb3">
          <ellipse
            transform="matrix(0.8778 -0.4789 0.4789 0.8778 -220.1074 312.8605)"
            style={{ fill: this.props.colors.Bb3, stroke: 'black' }}
            cx="503.281"
            cy="587.931"
            rx="116.042"
            ry="84.484"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb3')}
          />
          <text 
            transform="matrix(1 0 0 1 458.6704 611.3408)" 
          >
            B&#9837;3
          </text>
        </g>
        <g id="Bb4">
          <ellipse
            style={{ fill: this.props.colors.Bb4, stroke: 'black' }}
            cx="369.5"
            cy="480.5"
            rx="37"
            ry="53"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb4')}
          />
          <text 
            transform="matrix(1 0 0 1 322.0615 500.5098)" 
          >
            B&#9837;4
          </text>
        </g>
        <g id="Bb5">
          <circle
            style={{ fill: this.props.colors.Bb5, stroke: 'black' }}
            cx="346"
            cy="356"
            r="34.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb5')}
          />
          <text 
            transform="matrix(1 0 0 1 221.0869 457.666)" 
          >
            B&#9837;5
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

export default connect(mapStateToProps)(BbNotes);
