import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class ANotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
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
            transform="matrix(0.4251 -0.9052 0.9052 0.4251 55.8045 597.1165)"
            style={{ fill: this.props.colors.A3, stroke: 'black' }}
            cx="497.942"
            cy="254.63"
            rx="116.702"
            ry="85.248"
            onTouchStart={this.props.isTouch ? () => this.playNote('A3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A3')}
          />
          <text
            transform="matrix(1 0 0 1 461.1343 293.6226)"
            className={this.props.displayNotes}
          >
            A3
          </text>
        </g>
        <g id="A4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -45.9312 420.1349)"
            style={{ fill: this.props.colors.A4, stroke: 'black' }}
            cx="662.782"
            cy="285.037"
            rx="48.5"
            ry="68.799"
            onTouchStart={this.props.isTouch ? () => this.playNote('A4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A4')}
          />
          <text
            transform="matrix(1 0 0 1 631.1001 317.8774)"
            className={this.props.displayNotes}
          >
            A4
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(ANotes);
