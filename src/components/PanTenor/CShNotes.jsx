import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class CShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
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
            transform="matrix(0.9374 -0.3482 0.3482 0.9374 -43.9603 199.5367)"
            style={{ fill: this.props.colors.CSh4, stroke: 'black' }}
            cx="533.207"
            cy="222.083"
            rx="123.312"
            ry="160.529"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh4')}
          />
        </g>
        <g id="CSh5">
          <ellipse
            transform="matrix(0.7732 -0.6342 0.6342 0.7732 -194.8556 450.9876)"
            style={{ fill: this.props.colors.CSh5, stroke: 'black' }}
            cx="533.07"
            cy="497.909"
            rx="71.879"
            ry="103.233"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh5')}
          />
        </g>
        <g id="CSh6">
          <ellipse
            style={{ fill: this.props.colors.CSh6, stroke: 'black' }}
            cx="602.5"
            cy="679.5"
            rx="55"
            ry="56"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh6') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh6')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.tenor,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(CShNotes);
