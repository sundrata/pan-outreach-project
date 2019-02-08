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
        color: this.props.displayColors ? COLORS.pink : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.pinkHighlight : COLORS.colorlessHighlight
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
        </g>
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
