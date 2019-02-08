import React, { Component } from 'react';
import NOTES from '../../constants/secondNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class GNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_SECOND_NOTE',
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
        {/* B NOTES */}
        <g id="G3">
          <ellipse
            transform="matrix(0.9991 -0.0434 0.0434 0.9991 -3.397 46.0158)"
            style={{ fill: this.props.colors.G3, stroke: 'black' }}
            cx="1057.089"
            cy="101.171"
            rx="129.839"
            ry="85.05"
            onTouchStart={this.props.isTouch ? () => this.playNote('G3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G3')}
          />
        </g>
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
        </g>
        <g id="G4">
          <ellipse
            transform="matrix(0.464 -0.8858 0.8858 0.464 387.6935 1145.9587)"
            style={{ fill: this.props.colors.G4, stroke: 'black' }}
            cx="1140.827"
            cy="252.603"
            rx="59.2"
            ry="41.93"
            onTouchStart={this.props.isTouch ? () => this.playNote('G4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G4')}
          />
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
        </g>
        <g id="G5">
          <circle
            style={{ fill: this.props.colors.G5, stroke: 'black' }}
            cx="990.5"
            cy="435.5"
            r="37"
            onTouchStart={this.props.isTouch ? () => this.playNote('G5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G5')}
          />
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

export default connect(mapStateToProps)(GNotes);
