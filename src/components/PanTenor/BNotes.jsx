import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.pink : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.pinkHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* B NOTES */}
        <g id="B4">
          <ellipse
            transform="matrix(0.6631 -0.7485 0.7485 0.6631 153.779 902.843)"
            style={{ fill: this.props.colors.B4, stroke: 'black' }}
            cx="1079.905"
            cy="280.58"
            rx="130.591"
            ry="101.538"
            onTouchStart={isTouch ? () => this.playNote('B4') : null}
            onClick={isTouch ? null : () => this.playNote('B4')}
          />
        </g>
        <g id="Bb4">
          <ellipse
            transform="matrix(0.9599 -0.2802 0.2802 0.9599 -247.888 89.9579)"
            style={{ fill: this.props.colors.Bb4, stroke: 'black' }}
            cx="190.625"
            cy="911.805"
            rx="129.46"
            ry="101.873"
            onTouchStart={isTouch ? () => this.playNote('Bb4') : null}
            onClick={isTouch ? null : () => this.playNote('Bb4')}
          />
        </g>
        <g id="B5">
          <circle
            style={{ fill: this.props.colors.B5, stroke: 'black' }}
            cx="836"
            cy="410"
            r="57.5"
            onTouchStart={isTouch ? () => this.playNote('B5') : null}
            onClick={isTouch ? null : () => this.playNote('B5')}
          />
        </g>
        <g id="Bb5">
          <circle
            style={{ fill: this.props.colors.Bb5, stroke: 'black' }}
            cx="468"
            cy="931"
            r="61.5"
            onTouchStart={isTouch ? () => this.playNote('Bb5') : null}
            onClick={isTouch ? null : () => this.playNote('Bb5')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.tenor,
  displayColors: state.displayColors,
});

export default connect(mapStateToProps)(BNotes);
