import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class DNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.orange : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.orangeHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* D NOTES */}
        <g id="D4">
          <ellipse
            transform="matrix(0.5854 -0.8107 0.8107 0.5854 -349.8704 1374.5067)"
            style={{ fill: this.props.colors.D4, stroke: 'black' }}
            cx="1169.05"
            cy="1029.355"
            rx="120.239"
            ry="151.596"
            onTouchStart={isTouch ? () => this.playNote('D4') : null}
            onClick={isTouch ? null : () => this.playNote('D4')}
          />
        </g>
        <g id="D5">
          <ellipse
            transform="matrix(0.2741 -0.9617 0.9617 0.2741 -52.7768 1526.6034)"
            style={{ fill: this.props.colors.D5, stroke: 'black' }}
            cx="984.855"
            cy="798.262"
            rx="71.247"
            ry="100.371"
            onTouchStart={isTouch ? () => this.playNote('D5') : null}
            onClick={isTouch ? null : () => this.playNote('D5')}
          />
        </g>
        <g id="D6">
          <circle
            style={{ fill: this.props.colors.D6, stroke: 'black' }}
            cx="834"
            cy="662"
            r="54.5"
            onTouchStart={isTouch ? () => this.playNote('D6') : null}
            onClick={isTouch ? null : () => this.playNote('D6')}
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

export default connect(mapStateToProps)(DNotes);
