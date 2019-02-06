import React, { Component } from 'react';
import NOTES from './Notes';

class BNotes extends Component {
  state = {
    B3: 'white',
    Bb3: 'white',
    B4: 'white',
    Bb4: 'white',
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
            transform="matrix(0.4251 -0.9052 0.9052 0.4251 -730.1371 623.7568)"
            style={{ fill: this.state.B3, stroke: this.state.stroke }}
            cx="125.942"
            cy="886.63"
            rx="116.702"
            ry="85.248"
            onTouchStart={isTouch ? () => this.playNote('B3') : null}
            onClick={isTouch ? null : () => this.playNote('B3')}
          />
        </g>
        <g id="Bb3">
          <ellipse
            transform="matrix(0.4251 -0.9052 0.9052 0.4251 -300.6574 1299.9149)"
            style={{ fill: this.state.Bb3, stroke: this.state.stroke }}
            cx="872.942"
            cy="886.63"
            rx="116.702"
            ry="85.248"
            onTouchStart={isTouch ? () => this.playNote('Bb3') : null}
            onClick={isTouch ? null : () => this.playNote('Bb3')}
          />
        </g>
        <g id="B4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -462.7971 319.3102)"
            style={{ fill: this.state.B4, stroke: this.state.stroke }}
            cx="289.782"
            cy="915.037"
            rx="48.5"
            ry="68.799"
            onTouchStart={isTouch ? () => this.playNote('B4') : null}
            onClick={isTouch ? null : () => this.playNote('B4')}
          />
        </g>
        <g id="Bb4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -334.799 737.1495)"
            style={{ fill: this.state.Bb4, stroke: this.state.stroke }}
            cx="1035.782"
            cy="915.037"
            rx="48.5"
            ry="68.799"
            onTouchStart={isTouch ? () => this.playNote('Bb4') : null}
            onClick={isTouch ? null : () => this.playNote('Bb4')}
          />
        </g>
      </>
    );
  }
};

export default BNotes;
