import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class FNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.green : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.greenHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* F NOTES */}
        <g id="F3">
          <ellipse
            transform="matrix(0.5208 -0.8537 0.8537 0.5208 -47.3056 1085.9656)"
            style={{ fill: this.props.colors.F3, stroke: 'black' }}
            cx="943.68"
            cy="585.121"
            rx="84.516"
            ry="136.001"
            onTouchStart={this.props.isTouch ? () => this.playNote('F3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F3')}
          />
        </g>
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
        <g id="F4">
          <ellipse
            transform="matrix(0.0351 -0.9994 0.9994 0.0351 391.5617 1200.5498)"
            style={{ fill: this.props.colors.F4, stroke: 'black' }}
            cx="817.5"
            cy="397.5"
            rx="58"
            ry="72"
            onTouchStart={this.props.isTouch ? () => this.playNote('F4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F4')}
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
        <g id="F5">
          <circle
            style={{ fill: this.props.colors.F5, stroke: 'black' }}
            cx="944"
            cy="340"
            r="40.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('F5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F5')}
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

export default connect(mapStateToProps)(FNotes);
