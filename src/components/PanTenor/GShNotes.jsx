import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class GShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.aqua : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.aquaHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* GSh NOTES  */}
        <g id="GSh4">
          <ellipse
            transform="matrix(0.6284 -0.7779 0.7779 0.6284 -182.2244 359.0121)"
            style={{ fill: this.props.colors.GSh4, stroke: 'black' }}
            cx="284.677"
            cy="370.246"
            rx="106.013"
            ry="137.298"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh4')}
          />
        </g>
        <g id="GSh5">
          <ellipse
            transform="matrix(0.3593 -0.9332 0.9332 0.3593 -313.0156 797.0468)"
            style={{ fill: this.props.colors.GSh5, stroke: 'black' }}
            cx="424"
            cy="626.5"
            rx="55.845"
            ry="80.365"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh5')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.tenor,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(GShNotes);
