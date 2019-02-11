import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class CShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.orangeRed : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.orangeRedHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* CSh NOTES */}
        <g id="CSh2">
          <path
            style={{ fill: this.props.colors.CSh2, stroke: 'black' }}
            d="M1222.557,867.074c0,0-84.099,164.457-205.422,192.657s-113.726,22.368-113.726,22.368
            s-3.448-16.964-2.845-38.361c0.573-20.302,5.045-44.592,10.423-62.319c14.546-47.95,41.467-87.317,114.59-127.089
            s169.822-1.337,169.822-1.337L1222.557,867.074z"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh2')}
          />
          <text
            transform="matrix(1 0 0 1 970.6074 977.6025)"
            className={this.props.displayNotes}
          >
            C&#9839;2
          </text>
        </g>
        <g id="CSh3">
          <path
            style={{ fill: this.props.colors.CSh3, stroke: 'black' }}
            d="M911.778,1114.559c0,0,94.741-42.456,165.722-25.059c102,25,153.139,129.247,153.139,129.247
		        s-80.088,58.263-169.113,32.008c-89.025-26.255-112.815-70.367-112.815-70.367s-21.53-27.784-29.37-46.836
            C911.5,1114.5,911.778,1114.559,911.778,1114.559z"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh3')}
          />
          <text
            transform="matrix(1 0 0 1 1002.8926 1188.1973)"
            className={this.props.displayNotes}
          >
            C&#9839;3
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

export default connect(mapStateToProps)(CShNotes);
