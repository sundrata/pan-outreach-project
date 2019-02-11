import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class DNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
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
        <g id="D3">
          <ellipse
            style={{ fill: this.props.colors.D3, stroke: 'black' }}
            cx="360"
            cy="1235.5"
            rx="159.5"
            ry="103"
            onTouchStart={this.props.isTouch ? () => this.playNote('D3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D3')}
          />
          <text 
            transform="matrix(1 0 0 1 325.3994 1263.4229)"
          >
            D3
          </text>
        </g>
        <g id="D4">
          <ellipse
            transform="matrix(0.9022 -0.4312 0.4312 0.9022 -460.2684 169.403)"
            style={{ fill: this.props.colors.D4, stroke: 'black' }}
            cx="143.505"
            cy="1099.88"
            rx="99.607"
            ry="77.195"
            onTouchStart={this.props.isTouch ? () => this.playNote('D4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D4')}
          />
          <text
            transform="matrix(1 0 0 1 102.7144 1134.999)"
          >
            D4
          </text>
        </g>
        <g id="D5">
          <ellipse
            transform="matrix(0.6259 -0.7799 0.7799 0.6259 -702.3817 639.6775)"
            style={{ fill: this.props.colors.D5, stroke: 'black' }}
            cx="315.566"
            cy="1051.954"
            rx="55.601"
            ry="38.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('D5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D5')}
          />
          <text 
            transform="matrix(1 0 0 1 282.2485 1083.5059)"
          >
            D5
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

export default connect(mapStateToProps)(DNotes);
