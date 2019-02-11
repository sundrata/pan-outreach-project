import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class FShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
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
        <g id="FSh2">
          <path
            style={{ fill: this.props.colors.FSh2, stroke: 'black' }}
            d="M1237.778,880.62c-14.565,17.406-81.132,94.557-73.553,162.377c11.945,106.899,86.161,160.881,86.161,160.881
		        s81.439-71.224,69.745-172.259C1308.22,928.72,1237.778,880.62,1237.778,880.62z"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh2')}
          />
          <text 
            transform="matrix(1 0 0 1 1184.4795 1069.3525)"
          >
            F&#9839;2
          </text>
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

export default connect(mapStateToProps)(FShNotes);
