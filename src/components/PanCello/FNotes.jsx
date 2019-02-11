import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class FNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.green : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.greenHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* F NOTES */}
        <g id="F3">
          <ellipse
            style={{ fill: this.props.colors.F3, stroke: 'black' }}
            cx="368.5"
            cy="749"
            rx="148"
            ry="91.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('F3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F3')}
          />
          <text
            transform="matrix(1 0 0 1 339.5908 781.0815)"
            className={this.props.displayNotes}
          >
            F3
          </text>
        </g>
        <g id="F4">
          <ellipse
            transform="matrix(0.8097 -0.5869 0.5869 0.8097 -392.8751 504.0717)"
            style={{ fill: this.props.colors.F4, stroke: 'black' }}
            cx="580.678"
            cy="857.722"
            rx="85.812"
            ry="61.696"
            onTouchStart={this.props.isTouch ? () => this.playNote('F4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F4')}
          />
          <text
            transform="matrix(1 0 0 1 548.4263 896.6836)"
            className={this.props.displayNotes}
          >
            F4
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(FNotes);
