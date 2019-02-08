import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class EbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.maroon : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.maroonHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* Eb NOTES */}
        <g id="Eb3">
          <ellipse
            style={{ fill: this.props.colors.Eb3, stroke: 'black' }}
            cx="741"
            cy="118.5"
            rx="147.5"
            ry="93"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb3')}
          />
        </g>
        <g id="Eb4">
          <ellipse
            transform="matrix(0.7982 -0.6024 0.6024 0.7982 55.8307 620.1199)"
            style={{ fill: this.props.colors.Eb4, stroke: 'black' }}
            cx="953.48"
            cy="226.729"
            rx="86.902"
            ry="60.918"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb4')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(EbNotes);
