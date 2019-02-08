import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class FShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.mint : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.mintHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* FSh NOTES */}
        <g id="FSh3">
          <ellipse
            transform="matrix(0.5314 -0.8471 0.8471 0.5314 -390.7879 460.4152)"
            style={{ fill: this.props.colors.FSh3, stroke: 'black' }}
            cx="220.77"
            cy="583.437"
            rx="83.742"
            ry="135.484"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh3')}
          />
        </g>
        <g id="FSh4">
          <ellipse
            transform="matrix(0.0424 -0.9991 0.9991 0.0424 -307.011 472.6154)"
            style={{ fill: this.props.colors.FSh4, stroke: 'black' }}
            cx="93.032"
            cy="396.459"
            rx="57"
            ry="72.531"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh4')}
          />
        </g>
        <g id="FSh5">
          <circle
            style={{ fill: this.props.colors.FSh5, stroke: 'black' }}
            cx="221.5"
            cy="338.5"
            r="41"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh5')}
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

export default connect(mapStateToProps)(FShNotes);
