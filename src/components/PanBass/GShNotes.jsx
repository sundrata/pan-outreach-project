import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class GShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
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
        {/* GSh NOTES */}
        <g id="GSh2">
          <path
            style={{ fill: this.props.colors.GSh2, stroke: 'black' }}
            d="M72.413,919.281C55.297,942.643,38.5,957.5,29.5,1046.5s79,164,79.985,164.917S183.5,1147.5,183.5,1046.5
            c0-68.469-84.081-156.438-84.081-156.438L72.413,919.281z"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh2')}
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

export default connect(mapStateToProps)(GShNotes);
