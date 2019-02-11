import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class ENotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.yellow : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.yellowHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* E NOTES */}
        <g id="E3">
          <ellipse
            style={{ fill: this.props.colors.E3, stroke: 'black' }}
            cx="1114.5"
            cy="750"
            rx="148"
            ry="91.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('E3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E3')}
          />
          <text
            transform="matrix(1 0 0 1 1085.9189 780.8896)"
            className={this.props.displayNotes}
          >
            E3
          </text>
        </g>
        <g id="E4">
          <ellipse
            transform="matrix(0.8097 -0.5869 0.5869 0.8097 -251.4622 942.0972)"
            style={{ fill: this.props.colors.E4, stroke: 'black' }}
            cx="1326.678"
            cy="858.722"
            rx="85.812"
            ry="61.696"
            onTouchStart={this.props.isTouch ? () => this.playNote('E4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('E4')}
          />
          <text
            transform="matrix(1 0 0 1 1294.8916 896.3555)"
            className={this.props.displayNotes}
          >
            E4
          </text>
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  displayNotes: state.displayNotes,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(ENotes);
