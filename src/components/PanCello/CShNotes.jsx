import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class CShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.orangeRed : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.orangeRedHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* CSh NOTES */}
        <g id="CSh3">
          <ellipse
            style={{ fill: this.props.colors.CSh3, stroke: 'black' }}
            cx="1106"
            cy="1235.5"
            rx="159.5"
            ry="103"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh3')}
          />
          <text 
            transform="matrix(1 0 0 1 1040.4414 1263.2617)"
          >
            CSh3
          </text>
        </g>
        <g id="CSh4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -469.2018 688.0895)"
            style={{ fill: this.props.colors.CSh4, stroke: 'black' }}
            cx="888.505"
            cy="1109.88"
            rx="99.607"
            ry="77.195"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh4')}
          />
          <text 
            transform="matrix(1 0 0 1 822.3184 1142.125)"
          >
            CSh4
          </text>
        </g>
        <g id="CSh5">
          <ellipse
            transform="matrix(0.6259 -0.7799 0.7799 0.6259 -422.9115 1222.2793)"
            style={{ fill: this.props.colors.CSh5, stroke: 'black' }}
            cx="1062.566"
            cy="1051.954"
            rx="55.601"
            ry="38.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('CSh5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('CSh5')}
          />
          <text 
            transform="matrix(1 0 0 1 1004.5762 1083.793)"
          >
            CSh5
          </text>
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

export default connect(mapStateToProps)(CShNotes);
