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
        </g>
        <g id="Eb4">
          <ellipse
            transform="matrix(0.1834 -0.983 0.983 0.1834 687.9495 1667.5366)"
            style={{ fill: this.props.colors.Eb4, stroke: 'black' }}
            cx="1347.665"
            cy="419.691"
            rx="56"
            ry="80.909"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb4')}
          />
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
        </g>
        <g id="Eb5">
          <ellipse
            transform="matrix(0.7568 -0.6536 0.6536 0.7568 5.317 887.7842)"
            style={{ fill: this.props.colors.Eb5, stroke: 'black' }}
            cx="1195.74"
            cy="436.747"
            rx="31.326"
            ry="43.587"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb5')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.second,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(ENotes);
