import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class DNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.orange : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.orangeHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* D NOTES */}
        <g id="D2">
          <path
            style={{ fill: this.props.colors.D2, stroke: 'black' }}
            d="M712.682,123.672c0,0,164.818,80.828,194.818,200.828s24.08,112.552,24.08,112.552s-16.804,3.699-38.08,3.448
		        c-20.187-0.239-44.401-4.285-62.107-9.337C783.5,417.5,743.935,391.41,703.218,319.455c-40.718-71.955-4.091-168.59-4.091-168.59
		        L712.682,123.672z"
            onTouchStart={this.props.isTouch ? () => this.playNote('D2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D2')}
          />
        </g>
        <g id="D3">
          <path
            style={{ fill: this.props.colors.D3, stroke: 'black' }}
            d="M1065.815,112.954c0,0-120.531,77.068-131.811,158.252c-11.941,85.944,24.123,159.958,24.123,159.958
		        s102.777-38.015,131.208-126.133C1130.292,178.091,1065.815,112.954,1065.815,112.954z"
            onTouchStart={this.props.isTouch ? () => this.playNote('D3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D3')}
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

export default connect(mapStateToProps)(DNotes);
