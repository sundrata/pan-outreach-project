import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class GShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.aqua : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.aquaHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* GSh NOTES */}
        <g id="GSh3">
          <ellipse
            transform="matrix(0.9967 -0.0816 0.0816 0.9967 -7.0973 27.5588)"
            style={{ fill: this.props.colors.GSh3, stroke: 'black' }}
            cx="333.423"
            cy="100.561"
            rx="129.467"
            ry="84.075"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh3')}
          />
          <text
            transform="matrix(1 0 0 1 282.355 122.2451)"
            className={this.props.displayNotes}
          >
            G&#9839;3
          </text>
        </g>
        <g id="GSh4">
          <ellipse
            transform="matrix(0.5 -0.866 0.866 0.5 -9.3798 488.6985)"
            style={{ fill: this.props.colors.GSh4, stroke: 'black' }}
            cx="418.535"
            cy="252.472"
            rx="59.126"
            ry="42.16"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh4')}
          />
          <text
            transform="matrix(1 0 0 1 368.186 274.0635)"
            className={this.props.displayNotes}
          >
            G&#9839;4
          </text>
        </g>
        <g id="GSh5">
          <circle
            style={{ fill: this.props.colors.GSh5, stroke: 'black' }}
            cx="267.5"
            cy="434.5"
            r="37"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh5')}
          />
          <text
            transform="matrix(1 0 0 1 221.0869 457.666)"
            className={this.props.displayNotes}
          >
            G&#9837;5
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

export default connect(mapStateToProps)(GShNotes);
