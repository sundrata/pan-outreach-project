import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
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
        <g id="B4">
          <ellipse
            transform="matrix(0.6631 -0.7485 0.7485 0.6631 153.779 902.843)"
            style={{ fill: this.props.colors.B4, stroke: 'black' }}
            cx="1079.905"
            cy="280.58"
            rx="130.591"
            ry="101.538"
            onTouchStart={this.props.isTouch ? () => this.playNote('B4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('B4')}
          />
        </g>
        <g id="B5">
          <circle
            style={{ fill: this.props.colors.B5, stroke: 'black' }}
            cx="836"
            cy="410"
            r="57.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('B5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('B5')}
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

export default connect(mapStateToProps)(BbNotes);
