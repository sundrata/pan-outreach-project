import React, { Component } from 'react';
import NOTES from './Notes';
// import { connect } from 'react-redux';

// let displayColors = true;

// let colors = {
//   color: 'blue',
//   highlight: '#00157C'
// }

// let noColors = {
//   color: 'white',
//   highlight: 'black'
// }

// if (!displayColors) {
//   colors = noColors
// }

class ANotes extends Component {
  state = {
    A4: 'blue',
    A5: 'blue',
    stroke: 'black'
  }

  playNote = (note) => {
    console.log('in ANotes', note);
    NOTES[note].play();
    this.setState({
      [note]: '#00157C'
    });
    setTimeout(() => {
      this.setState(() => ({
        [note]: 'blue',
      }))
    }, 500);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* A NOTES */}
        <g id="A4">
          <ellipse
            transform="matrix(0.1738 -0.9848 0.9848 0.1738 291.1827 1898.2921)"
            style={{ fill: this.state.A4, stroke: this.state.stroke }}
            cx="1276.916"
            cy="775.61"
            rx="100.021"
            ry="131.926"
            onTouchStart={isTouch ? () => this.playNote('A4') : null}
            onClick={isTouch ? null : () => this.playNote('A4')}
          />
        </g>
        <g id="A5">
          <circle
            style={{ fill: this.state.A5, stroke: this.state.stroke }}
            cx="1034"
            cy="650"
            r="61.5"
            onTouchStart={isTouch ? () => this.playNote('A5') : null}
            onClick={isTouch ? null : () => this.playNote('A5')}
          />
        </g>
      </>
    );
  }
};

export default ANotes;
