import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class GNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.indigo : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.indigoHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* G NOTES */}
        <g id="G2">
          <path
            style={{ fill: this.props.colors.G2, stroke: 'black' }}
            d="M290.78,101.514c17.277,14.718,93.836,81.964,161.72,74.986c107-11,161.636-84.735,161.636-84.735
		        S543.635,9.699,442.5,20.5C339.5,31.5,290.78,101.514,290.78,101.514z"
            onTouchStart={this.props.isTouch ? () => this.playNote('G2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G2')}
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

export default connect(mapStateToProps)(GNotes);
