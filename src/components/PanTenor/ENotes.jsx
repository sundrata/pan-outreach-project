import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class ENotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
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
            transform="matrix(0.9269 -0.3754 0.3754 0.9269 -96.9854 498.2941)"
            style={{ fill: this.props.colors.E4, stroke: 'black' }}
            cx="1230.407"
            cy="498.066"
            rx="144.284"
            ry="111.421"
            onTouchStart={this.props.isTouch ? () => this.playNote('E4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E4')}
          />
          <text
            transform="matrix(1 0 0 1 1204.7637 518.1304)"
            className={this.props.displayNotes}
          >
            E4
          </text>
        </g>
        <g id="E5">
          <ellipse
            transform="matrix(0.7724 -0.6351 0.6351 0.7724 -103.6233 724.3026)"
            style={{ fill: this.props.colors.E5, stroke: 'black' }}
            cx="958.792"
            cy="506.735"
            rx="92.613"
            ry="66.307"
            onTouchStart={this.props.isTouch ? () => this.playNote('E5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E5')}
          />
          <text
            transform="matrix(1 0 0 1 926.3613 532.2759)"
            className={this.props.displayNotes}
          >
            E5
          </text>
        </g>
        <g id="E6">
          <ellipse
            style={{ fill: this.props.colors.E6, stroke: 'black' }}
            cx="712"
            cy="598.5"
            rx="52.5"
            ry="51"
            onTouchStart={this.props.isTouch ? () => this.playNote('E6') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E6')}
          />
          <text
            transform="matrix(1 0 0 1 683.3599 619.2402)"
            className={this.props.displayNotes}
          >
            E6
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

export default connect(mapStateToProps)(ENotes);
