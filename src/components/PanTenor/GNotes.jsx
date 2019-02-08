import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class GNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.indigo : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.indigoHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* G NOTES  */}
        <g id="G4">
          <ellipse
            transform="matrix(0.9498 -0.313 0.313 0.9498 -336.5971 356.7783)"
            style={{ fill: this.props.colors.G4, stroke: 'black' }}
            cx="942.939"
            cy="1226.77"
            rx="105.142"
            ry="138.12"
            onTouchStart={this.props.isTouch ? () => this.playNote('G4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G4')}
          />
        </g>
        <g id="GSh4">
          <ellipse
            transform="matrix(0.6284 -0.7779 0.7779 0.6284 -182.2244 359.0121)"
            style={{ fill: this.props.colors.GSh4, stroke: 'black' }}
            cx="284.677"
            cy="370.246"
            rx="106.013"
            ry="137.298"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh4')}
          />
        </g>
        <g id="G5">
          <ellipse
            transform="matrix(0.7424 -0.6699 0.6699 0.7424 -395.6221 859.191)"
            style={{ fill: this.props.colors.G5, stroke: 'black' }}
            cx="919.497"
            cy="944.07"
            rx="57.816"
            ry="84.637"
            onTouchStart={this.props.isTouch ? () => this.playNote('G5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G5')}
          />
        </g>
        <g id="GSh5">
          <ellipse
            transform="matrix(0.3593 -0.9332 0.9332 0.3593 -313.0156 797.0468)"
            style={{ fill: this.props.colors.GSh5, stroke: 'black' }}
            cx="424"
            cy="626.5"
            rx="55.845"
            ry="80.365"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh5')}
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

export default connect(mapStateToProps)(GNotes);
