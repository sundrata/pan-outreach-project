import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class DNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.orange : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.orangeHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* D NOTES */}
        <g id="D4">
          <ellipse
            transform="matrix(0.5 -0.866 0.866 0.5 -117.294 227.0418)"
            style={{ fill: this.props.colors.D4, stroke: 'black' }}
            cx="137.977"
            cy="215.1"
            rx="60.259"
            ry="80.428"
            onTouchStart={this.props.isTouch ? () => this.playNote('D4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D4')}
          />
          <text 
            transform="matrix(1 0 0 1 102.6807 237.9321)"
          >
            D4
          </text>
        </g>
        <g id="D5">
          <ellipse
            transform="matrix(0.8778 -0.4789 0.4789 0.8778 -87.9009 169.279)"
            style={{ fill: this.props.colors.D5, stroke: 'black' }}
            cx="287.906"
            cy="256.961"
            rx="32.905"
            ry="44.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('D5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D5')}
          />
          <text 
            transform="matrix(1 0 0 1 255.0742 281.207)"
          >
            D5
          </text>
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

export default connect(mapStateToProps)(DNotes);
