import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.pink : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.pinkHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* Bb NOTES */}
        <g id="Bb4">
          <ellipse
            transform="matrix(0.9599 -0.2802 0.2802 0.9599 -247.888 89.9579)"
            style={{ fill: this.props.colors.Bb4, stroke: 'black' }}
            cx="190.625"
            cy="911.805"
            rx="129.46"
            ry="101.873"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb4')}
          />
          <text
            transform="matrix(1 0 0 1 145.373 931.0791)"
            className={this.props.displayNotes}
          >
            B&#9837;4
          </text>
        </g>
        <g id="Bb5">
          <circle
            style={{ fill: this.props.colors.Bb5, stroke: 'black' }}
            cx="468"
            cy="931"
            r="61.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb5')}
          />
          <text
            transform="matrix(1 0 0 1 424.9575 954.0977)"
            className={this.props.displayNotes}
          >
            B&#9837;5
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.tenor,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(BNotes);
