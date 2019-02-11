import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class EbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.maroon : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.maroonHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* Eb NOTES */}
        <g id="Eb4">
          <ellipse
            transform="matrix(0.1834 -0.983 0.983 0.1834 687.9495 1667.5366)"
            style={{ fill: this.props.colors.Eb4, stroke: 'black' }}
            cx="1347.665"
            cy="419.691"
            rx="56"
            ry="80.909"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb4')}
          />
          <text
            transform="matrix(1 0 0 1 1307.2578 437.3848)"
            className={this.props.displayNotes}
          >
            E&#9837;4
          </text>
        </g>
        <g id="Eb5">
          <ellipse
            transform="matrix(0.7568 -0.6536 0.6536 0.7568 5.317 887.7842)"
            style={{ fill: this.props.colors.Eb5, stroke: 'black' }}
            cx="1195.74"
            cy="436.747"
            rx="31.326"
            ry="43.587"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb5')}
          />
          <text
            transform="matrix(1 0 0 1 1154.0801 462.4502)"
            className={this.props.displayNotes}
          >
            E&#9837;5
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.second,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(EbNotes);
