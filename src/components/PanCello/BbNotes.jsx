import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class BbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.pink : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.pinkHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* Bb NOTES */}
        <g id="Bb3">
          <ellipse
            transform="matrix(0.4251 -0.9052 0.9052 0.4251 -300.6574 1299.9149)"
            style={{ fill: this.props.colors.Bb3, stroke: 'black' }}
            cx="872.942"
            cy="886.63"
            rx="116.702"
            ry="85.248"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb3')}
          />
        </g>
        <g id="Bb4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -334.799 737.1495)"
            style={{ fill: this.props.colors.Bb4, stroke: 'black' }}
            cx="1035.782"
            cy="915.037"
            rx="48.5"
            ry="68.799"
            onTouchStart={this.props.isTouch ? () => this.playNote('Bb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Bb4')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(BbNotes);
