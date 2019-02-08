import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class ENotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.yellow : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.yellowHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* E NOTES */}
        <g id="E2">
          <path
            style={{ fill: this.props.colors.E2, stroke: 'black' }}
            d="M1221.557,430.074c0,0-84.099,164.457-205.422,192.657s-113.726,22.368-113.726,22.368
		        s-3.448-16.964-2.845-38.361c0.573-20.302,5.045-44.592,10.423-62.319c14.546-47.95,41.467-87.317,114.59-127.089
		        c73.122-39.772,169.822-1.337,169.822-1.337L1221.557,430.074z"
            onTouchStart={this.props.isTouch ? () => this.playNote('E2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E2')}
          />
        </g>
        <g id="E3">
          <path
            style={{ fill: this.props.colors.E3, stroke: 'black' }}
            d="M911.778,676.559c0,0,94.741-42.456,165.722-25.059c102,25,153.139,129.247,153.139,129.247
		        s-80.088,58.263-169.113,32.008C972.5,786.5,948.71,742.388,948.71,742.388s-21.53-27.784-29.37-46.836
		        C911.5,676.5,911.778,676.559,911.778,676.559z"
            onTouchStart={this.props.isTouch ? () => this.playNote('E3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E3')}
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

export default connect(mapStateToProps)(ENotes);
