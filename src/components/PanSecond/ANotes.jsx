import React, { Component } from 'react';
import NOTES from './Notes';

class ANotes extends Component {
  state = {
    A3: 'white',
    A4: 'white',
    A5: 'white',
    stroke: 'black'
  }

  highlightNote = (note) => {
    this.setState({
      [note]: '#00157C'
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
            transform="matrix(0.8528 -0.5222 0.5222 0.8528 -127.5044 726.6196)"
            style={{ fill: this.state.A3, stroke: this.state.stroke }}
            cx="1225.404"
            cy="589.526"
            rx="117.041"
            ry="84.869"
            onTouchStart={isTouch ? () => this.playNote('A3') : null}
            onClick={isTouch ? null : () => this.playNote('A3')}
          />
        </g>
        <g id="A4">
          <ellipse
            style={{ fill: this.state.A4, stroke: this.state.stroke }}
            cx="1093"
            cy="481.5"
            rx="37.5"
            ry="53"
            onTouchStart={isTouch ? () => this.playNote('A4') : null}
            onClick={isTouch ? null : () => this.playNote('A4')}
          />
        </g>
        <g id="A5">
          <circle
            style={{ fill: this.state.A5, stroke: this.state.stroke }}
            cx="1068"
            cy="358"
            r="34.5"
            onTouchStart={isTouch ? () => this.playNote('A5') : null}
            onClick={isTouch ? null : () => this.playNote('A5')}
          />
        </g>
      </>
    );
  }
};

export default ANotes;
