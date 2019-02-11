import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class FShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.mint : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.mintHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* FSh NOTES */}
        <g id="FSh4">
          <ellipse
            transform="matrix(0.2695 -0.963 0.963 0.2695 442.9022 930.2535)"
            style={{ fill: this.props.colors.FSh4, stroke: 'black' }}
            cx="834.636"
            cy="173.184"
            rx="143.707"
            ry="110.209"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh4')}
          />
        </g>
        <g id="FSh5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -61.0825 118.5256)"
            style={{ fill: this.props.colors.FSh5, stroke: 'black' }}
            cx="688.075"
            cy="429.604"
            rx="61.378"
            ry="86.213"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh5')}
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

export default connect(mapStateToProps)(FShNotes);
