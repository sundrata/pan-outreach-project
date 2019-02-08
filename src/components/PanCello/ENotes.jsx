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
        <g id="Eb3">
          <ellipse
            style={{ fill: this.props.colors.Eb3, stroke: 'black' }}
            cx="741"
            cy="118.5"
            rx="147.5"
            ry="93"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb3')}
          />
        </g>
        <g id="Eb4">
          <ellipse
            transform="matrix(0.7982 -0.6024 0.6024 0.7982 55.8307 620.1199)"
            style={{ fill: this.props.colors.Eb4, stroke: 'black' }}
            cx="953.48"
            cy="226.729"
            rx="86.902"
            ry="60.918"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb4')}
          />
        </g>
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

export default connect(mapStateToProps)(ENotes);
