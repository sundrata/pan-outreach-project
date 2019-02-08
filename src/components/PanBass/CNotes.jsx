import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class CNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.red : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.redHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* C NOTES */}
        <g id="C2">
          <path
            style={{ fill: this.props.colors.C2, stroke: 'black' }}
            d="M275.682,123.672c0,0,164.818,80.828,194.818,200.828s24.08,112.552,24.08,112.552s-16.804,3.699-38.08,3.448
		        c-20.187-0.239-44.401-4.285-62.107-9.337C346.5,417.5,306.935,391.41,266.218,319.455s-4.091-168.59-4.091-168.59L275.682,123.672z"
            onTouchStart={this.props.isTouch ? () => this.playNote('C2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C2')}
          />
        </g>
        <g id="CSh2">
          <path
            style={{ fill: this.props.colors.CSh2, stroke: 'black' }}
            d="M1222.557,867.074c0,0-84.099,164.457-205.422,192.657s-113.726,22.368-113.726,22.368
            s-3.448-16.964-2.845-38.361c0.573-20.302,5.045-44.592,10.423-62.319c14.546-47.95,41.467-87.317,114.59-127.089
            s169.822-1.337,169.822-1.337L1222.557,867.074z"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh2')}
          />
        </g>
        <g id="C3">
          <path
            style={{ fill: this.props.colors.C3, stroke: 'black' }}
            d="M628.815,112.954c0,0-120.531,77.068-131.811,158.252c-11.941,85.944,24.123,159.958,24.123,159.958
		        s102.777-38.015,131.208-126.133C693.292,178.091,628.815,112.954,628.815,112.954z"
            onTouchStart={this.props.isTouch ? () => this.playNote('C3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C3')}
          />
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

export default connect(mapStateToProps)(CNotes);
