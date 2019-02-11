import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class ANotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.blue : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.blueHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* A NOTES */}
        <g id="A4">
          <ellipse
            transform="matrix(0.1738 -0.9848 0.9848 0.1738 291.1827 1898.2921)"
            style={{ fill: this.props.colors.A4, stroke: 'black' }}
            cx="1276.916"
            cy="775.61"
            rx="100.021"
            ry="131.926"
            onTouchStart={this.props.isTouch ? () => this.playNote('A4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A4')}
          />
          <text
            transform="matrix(1 0 0 1 1240.9463 792.9326)"
            className={this.props.displayNotes}
          >
            A4
          </text>
        </g>
        <g id="A5">
          <circle
            style={{ fill: this.props.colors.A5, stroke: 'black' }}
            cx="1034"
            cy="650"
            r="61.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('A5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('A5')}
          />
          <text
            transform="matrix(1 0 0 1 999.8164 668.6768)"
            className={this.props.displayNotes}
          >
            A5
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

export default connect(mapStateToProps)(ANotes);
