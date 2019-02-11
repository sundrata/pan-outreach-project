import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class ENotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.yellow : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.yellowHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* E NOTES */}
        <g id="E4">
          <ellipse
            transform="matrix(0.2255 -0.9742 0.9742 0.2255 75.9248 934.0198)"
            style={{ fill: this.props.colors.E4, stroke: 'black' }}
            cx="625.441"
            cy="419.255"
            rx="55.5"
            ry="81.137"
            onTouchStart={this.props.isTouch ? () => this.playNote('E4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E4')}
          />
          <text
            transform="matrix(1 0 0 1 594.4229 437.313)"
            className={this.props.displayNotes}
          >
            E4
          </text>
        </g>
        <g id="E5">
          <ellipse
            transform="matrix(0.7828 -0.6223 0.6223 0.7828 -168.1567 389.2487)"
            style={{ fill: this.props.colors.E5, stroke: 'black' }}
            cx="473.5"
            cy="435.5"
            rx="30.633"
            ry="43.355"
            onTouchStart={this.props.isTouch ? () => this.playNote('E5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E5')}
          />
          <text
            transform="matrix(1 0 0 1 444.9575 458.5942)"
            className={this.props.displayNotes}
          >
            E5
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

export default connect(mapStateToProps)(ENotes);
