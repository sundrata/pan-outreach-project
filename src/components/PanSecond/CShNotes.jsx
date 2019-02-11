import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class CShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
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
        <g id="CSh4">
          <ellipse
            transform="matrix(0.5358 -0.8443 0.8443 0.5358 215.3201 826.6624)"
            style={{ fill: this.props.colors.CSh4, stroke: 'black' }}
            cx="859.5"
            cy="217.5"
            rx="62"
            ry="80"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh4')}
          />
          <text
            transform="matrix(1 0 0 1 814.3721 239.7886)"
            className={this.props.displayNotes}
          >
            C&#9839;4
          </text>
        </g>
        <g id="CSh5">
          <ellipse
            transform="matrix(0.8959 -0.4442 0.4442 0.8959 -9.1788 475.5527)"
            style={{ fill: this.props.colors.CSh5, stroke: 'black' }}
            cx="1010.326"
            cy="257.366"
            rx="32.581"
            ry="45"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh5')}
          />
          <text
            transform="matrix(1 0 0 1 963.9092 280.9199)"
            className={this.props.displayNotes}
          >
            C&#9839;5
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.second,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(CShNotes);
