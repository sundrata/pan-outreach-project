import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class ANotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
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
        <g id="A2">
          <path
            style={{ fill: this.props.colors.A2, stroke: 'black' }}
            d="M727.78,101.514c17.277,14.718,93.836,81.964,161.72,74.986c107-11,161.636-84.735,161.636-84.735
            S980.635,9.699,879.5,20.5C776.5,31.5,727.78,101.514,727.78,101.514z"
            onTouchStart={this.props.isTouch ? () => this.playNote('A2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A2')}
          />
          <text
            transform="matrix(1 0 0 1 859.0146 123.772)"
            className={this.props.displayNotes}
          >
            A2
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.bass,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(ANotes);
