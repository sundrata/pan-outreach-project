import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
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
        <g id="Bb2">
          <path
            style={{ fill: this.props.colors.Bb2, stroke: 'black' }}
            d="M72.413,482.281C55.297,505.643,38.5,520.5,29.5,609.5s79,164,79.985,164.917
		        C110.469,775.333,183.5,710.5,183.5,609.5c0-68.469-84.081-156.438-84.081-156.438L72.413,482.281z"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb2')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.bass,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(BbNotes);
