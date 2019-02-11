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
          <text
            transform="matrix(1 0 0 1 173.2368 608.8438)"
            className={this.props.displayNotes}
          >
            F&#9839;3
          </text>
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
          <text
            transform="matrix(1 0 0 1 50.4058 417.8159)"
            className={this.props.displayNotes}
          >
            F&#9839;4
          </text>
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
          <text
            transform="matrix(1 0 0 1 178.8057 362.1162)"
            className={this.props.displayNotes}
          >
            F&#9839;5
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

export default connect(mapStateToProps)(FShNotes);
