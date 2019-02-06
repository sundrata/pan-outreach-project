import React, { Component } from 'react';
import NOTES from './Notes';

class ANotes extends Component {
  state = {
    A3: 'white',
    A4: 'white',
    stroke: 'black'
  }

  highlightNote = (note) => {
    this.setState({
      [note]: '#333333'
    })
    setTimeout(() => {
      this.setState(() => ({
        [note]: 'white',
      }))
    }, 500);
  }

  playNote = (note) => {
    NOTES[note].play();
    console.log('in ANotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* A NOTES */}
        <g id="A3">
          <ellipse
            transform="matrix(0.4251 -0.9052 0.9052 0.4251 55.8045 597.1165)"
            style={{ fill: this.state.A3, stroke: this.state.stroke }}
            cx="497.942"
            cy="254.63"
            rx="116.702"
            ry="85.248"
            onTouchStart={isTouch ? () => this.playNote('A3') : null}
            onClick={isTouch ? null : () => this.playNote('A3')}
          />
        </g>
        <g id="A4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -45.9312 420.1349)"
            style={{ fill: this.state.A4, stroke: this.state.stroke }}
            cx="662.782"
            cy="285.037"
            rx="48.5"
            ry="68.799"
            onTouchStart={isTouch ? () => this.playNote('A4') : null}
            onClick={isTouch ? null : () => this.playNote('A4')}
          />
        </g>
      </>
    );
  }
};

export default ANotes;
