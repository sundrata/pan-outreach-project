import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class BNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
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
        <g id="B2">
          <path
            style={{ fill: this.props.colors.B2, stroke: 'black' }}
            d="M1237.778,442.62c-14.565,17.406-81.132,94.557-73.553,162.377c11.945,106.899,86.161,160.881,86.161,160.881
		        s81.439-71.224,69.745-172.259C1308.22,490.72,1237.778,442.62,1237.778,442.62z"
            onTouchStart={this.props.isTouch ? () => this.playNote('B2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('B2')}
          />
          <text 
            transform="matrix(1 0 0 1 1218.4941 628.8403)"
          >
            B2
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

export default connect(mapStateToProps)(BNotes);
