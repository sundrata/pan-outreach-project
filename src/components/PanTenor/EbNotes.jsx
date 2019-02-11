import React, { Component } from 'react';
import NOTES from '../../constants/tenorNotes';
import { connect } from 'react-redux';
import COLORS from '../../constants/colors';

class EbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_TENOR_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.maroon : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.maroonHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* Eb NOTES */}
        <g id="Eb4">
          <ellipse
            transform="matrix(0.1815 -0.9834 0.9834 0.1815 -477.9086 696.9604)"
            style={{ fill: this.props.colors.Eb4, stroke: 'black' }}
            cx="179.723"
            cy="635.569"
            rx="119.153"
            ry="152.941"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb4')}
          />
          <text
            transform="matrix(1 0 0 1 132.1367 662.1494)"
            className={this.props.displayNotes}
          >
            E&#9837;4
          </text>
        </g>
        <g id="Eb5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -122.6176 80.4116)"
            style={{ fill: this.props.colors.Eb5, stroke: 'black' }}
            cx="426.224"
            cy="783.632"
            rx="95.385"
            ry="68.307"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb5') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb5')}
          />
          <text
            transform="matrix(1 0 0 1 383.4116 806.0781)"
            className={this.props.displayNotes}
          >
            E&#9837;5
          </text>
        </g>
        <g id="Eb6">
          <circle
            style={{ fill: this.props.colors.Eb6, stroke: 'black' }}
            cx="654"
            cy="806"
            r="52.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb6') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb6')}
          />
          <text
            transform="matrix(1 0 0 1 610.6685 826.9692)"
            className={this.props.displayNotes}
          >
            E&#9837;6
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

export default connect(mapStateToProps)(EbNotes);
