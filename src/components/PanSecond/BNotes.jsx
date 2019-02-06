import React, { Component } from 'react';
import NOTES from './Notes';

class BNotes extends Component {
  state = {
    B3: 'white',
    Bb3: 'white',
    B4: 'white',
    Bb4: 'white',
    Bb5: 'white',
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
    console.log('in BNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* B NOTES */}
        <g id="B3">
          <ellipse
            transform="matrix(0.8379 -0.5458 0.5458 0.8379 93.1051 741.7595)"
            style={{ fill: this.state.B3, stroke: this.state.stroke }}
            cx="1295.524"
            cy="214.11"
            rx="80.373"
            ry="105.668"
            onTouchStart={isTouch ? () => this.playNote('B3') : null}
            onClick={isTouch ? null : () => this.playNote('B3')}
          />
        </g>
        <g id="Bb3">
          <ellipse
            transform="matrix(0.8778 -0.4789 0.4789 0.8778 -220.1074 312.8605)"
            style={{ fill: this.state.Bb3, stroke: this.state.stroke }}
            cx="503.281"
            cy="587.931"
            rx="116.042"
            ry="84.484"
            onTouchStart={isTouch ? () => this.playNote('Bb3') : null}
            onClick={isTouch ? null : () => this.playNote('Bb3')}
          />
        </g>
        <g id="B4">
          <ellipse
            transform="matrix(0.9856 -0.1688 0.1688 0.9856 -39.7962 211.0937)"
            style={{ fill: this.state.B4, stroke: this.state.stroke }}
            cx="1221.331"
            cy="339.548"
            rx="48.59"
            ry="35.521"
            onTouchStart={isTouch ? () => this.playNote('B4') : null}
            onClick={isTouch ? null : () => this.playNote('B4')}
          />
        </g>
        <g id="Bb4">
          <ellipse
            style={{ fill: this.state.Bb4, stroke: this.state.stroke }}
            cx="369.5"
            cy="480.5"
            rx="37"
            ry="53"
            onTouchStart={isTouch ? () => this.playNote('Bb4') : null}
            onClick={isTouch ? null : () => this.playNote('Bb4')}
          />
        </g>
        <g id="Bb5">
          <circle
            style={{ fill: this.state.Bb5, stroke: this.state.stroke }}
            cx="346"
            cy="356"
            r="34.5"
            onTouchStart={isTouch ? () => this.playNote('Bb5') : null}
            onClick={isTouch ? null : () => this.playNote('Bb5')}
          />
        </g>
      </>
    );
  }
};

export default BNotes;
