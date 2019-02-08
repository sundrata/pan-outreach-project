import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class CNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
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
        <g id="C4">
          <ellipse
            transform="matrix(0.1611 -0.9869 0.9869 0.1611 -700.8986 1681.4668)"
            style={{ fill: this.props.colors.C4, stroke: 'black' }}
            cx="638.686"
            cy="1253.042"
            rx="160.529"
            ry="123.312"
            onTouchStart={this.props.isTouch ? () => this.playNote('C4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C4')}
          />
        </g>
        <g id="C5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -153.9281 139.4177)"
            style={{ fill: this.props.colors.C5, stroke: 'black' }}
            cx="768.32"
            cy="1002.969"
            rx="74.869"
            ry="106.963"
            onTouchStart={this.props.isTouch ? () => this.playNote('C5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C5')}
          />
        </g>
        <g id="C6">
          <ellipse
            style={{ fill: this.props.colors.C6, stroke: 'black' }}
            cx="794.5"
            cy="798.5"
            rx="55"
            ry="56"
            onTouchStart={this.props.isTouch ? () => this.playNote('C6') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('C6')}
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

export default connect(mapStateToProps)(CNotes);
