import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class FNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.green : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.greenHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* F NOTES */}
        <g id="F4">
          <ellipse
            transform="matrix(0.6584 -0.7526 0.7526 0.6584 -733.6282 650.6843)"
            style={{ fill: this.props.colors.F4, stroke: 'black' }}
            cx="350.073"
            cy="1133.613"
            rx="144.589"
            ry="111.309"
            onTouchStart={this.props.isTouch ? () => this.playNote('F4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F4')}
          />
        </g>
        <g id="F5">
          <ellipse
            transform="matrix(0.3962 -0.9181 0.9181 0.3962 -541.6311 1145.6666)"
            style={{ fill: this.props.colors.F5, stroke: 'black' }}
            cx="600.311"
            cy="984.672"
            rx="89.688"
            ry="62.346"
            onTouchStart={this.props.isTouch ? () => this.playNote('F5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F5')}
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

export default connect(mapStateToProps)(FNotes);
