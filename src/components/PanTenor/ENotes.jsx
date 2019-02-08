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
        </g>
        <g id="Eb4">
          <ellipse
            transform="matrix(0.1815 -0.9834 0.9834 0.1815 -477.9086 696.9604)"
            style={{ fill: this.props.colors.Eb4, stroke: 'black' }}
            cx="179.723"
            cy="635.569"
            rx="119.153"
            ry="152.941"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb4')}
          />
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
        </g>
        <g id="Eb5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -122.6176 80.4116)"
            style={{ fill: this.props.colors.Eb5, stroke: 'black' }}
            cx="426.224"
            cy="783.632"
            rx="95.385"
            ry="68.307"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb5')}
          />
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
        </g>
        <g id="Eb6">
          <circle
            style={{ fill: this.props.colors.Eb6, stroke: 'black' }}
            cx="654"
            cy="806"
            r="52.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb6') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb6')}
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

export default connect(mapStateToProps)(ENotes);
