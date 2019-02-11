import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class ANotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.blue : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.blueHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* A NOTES */}
        <g id="A3">
          <ellipse
            transform="matrix(0.8528 -0.5222 0.5222 0.8528 -127.5044 726.6196)"
            style={{ fill: this.props.colors.A3, stroke: 'black' }}
            cx="1225.404"
            cy="589.526"
            rx="117.041"
            ry="84.869"
            onTouchStart={this.props.isTouch ? () => this.playNote('A3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A3')}
          />
          <text 
            transform="matrix(1 0 0 1 1192.5049 607.7656)" 
          >
            A3
          </text>
        </g>
        <g id="A4">
          <ellipse
            style={{ fill: this.props.colors.A4, stroke: 'black' }}
            cx="1093"
            cy="481.5"
            rx="37.5"
            ry="53"
            onTouchStart={this.props.isTouch ? () => this.playNote('A4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A4')}
          />
          <text 
            transform="matrix(1 0 0 1 1059.0996 503.4375)"
          >
            A4
          </text>
        </g>
        <g id="A5">
          <circle
            style={{ fill: this.props.colors.A5, stroke: 'black' }}
            cx="990.5"
            cy="435.5"
            r="37"
            onTouchStart={this.props.isTouch ? () => this.playNote('A5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A5')}
          />
          <text 
            transform="matrix(1 0 0 1 957.9092 457.5942)"
          >
            A5
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

export default connect(mapStateToProps)(ANotes);
