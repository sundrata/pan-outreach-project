import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class DNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
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
            transform="matrix(0.5854 -0.8107 0.8107 0.5854 -349.8704 1374.5067)"
            style={{ fill: this.props.colors.D4, stroke: 'black' }}
            cx="1169.05"
            cy="1029.355"
            rx="120.239"
            ry="151.596"
            onTouchStart={this.props.isTouch ? () => this.playNote('D4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D4')}
          />
          <text
            transform="matrix(1 0 0 1 1140.6904 1061.0615)"
            className={this.props.displayNotes}
          >
            D4
          </text>
        </g>
        <g id="D5">
          <ellipse
            transform="matrix(0.2741 -0.9617 0.9617 0.2741 -52.7768 1526.6034)"
            style={{ fill: this.props.colors.D5, stroke: 'black' }}
            cx="984.855"
            cy="798.262"
            rx="71.247"
            ry="100.371"
            onTouchStart={this.props.isTouch ? () => this.playNote('D5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D5')}
          />
          <text
            transform="matrix(1 0 0 1 951.1436 823.9507)"
            className={this.props.displayNotes}
          >
            D5
          </text>
        </g>
        <g id="D6">
          <circle
            style={{ fill: this.props.colors.D6, stroke: 'black' }}
            cx="834"
            cy="662"
            r="54.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('D6') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('D6')}
          />
          <text
            transform="matrix(1 0 0 1 799.9971 682.3135)"
            className={this.props.displayNotes}
          >
            D6
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.tenor,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(DNotes);
