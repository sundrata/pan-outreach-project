import React, { Component } from 'react';
import NOTES from './Notes';

class FNotes extends Component {
  state = {
    F3: 'white',
    FSh3: 'white',
    F4: 'white',
    FSh4: 'white',
    F5: 'white',
    FSh5: 'white',
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
    console.log('in FNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* F NOTES */}
        <g id="F3">
          <ellipse
            transform="matrix(0.5208 -0.8537 0.8537 0.5208 -47.3056 1085.9656)"
            style={{ fill: this.state.F3, stroke: this.state.stroke }}
            cx="943.68"
            cy="585.121"
            rx="84.516"
            ry="136.001"
            onTouchStart={isTouch ? () => this.playNote('F3') : null}
            onClick={isTouch ? null : () => this.playNote('F3')}
          />
        </g>
        <g id="FSh3">
          <ellipse
            transform="matrix(0.5314 -0.8471 0.8471 0.5314 -390.7879 460.4152)"
            style={{ fill: this.state.FSh3, stroke: this.state.stroke }}
            cx="220.77"
            cy="583.437"
            rx="83.742"
            ry="135.484"
            onTouchStart={isTouch ? () => this.playNote('FSh3') : null}
            onClick={isTouch ? null : () => this.playNote('FSh3')}
          />
        </g>
        <g id="F4">
          <ellipse
            transform="matrix(0.0351 -0.9994 0.9994 0.0351 391.5617 1200.5498)"
            style={{ fill: this.state.F4, stroke: this.state.stroke }}
            cx="817.5"
            cy="397.5"
            rx="58"
            ry="72"
            onTouchStart={isTouch ? () => this.playNote('F4') : null}
            onClick={isTouch ? null : () => this.playNote('F4')}
          />
        </g>
        <g id="FSh4">
          <ellipse
            transform="matrix(0.0424 -0.9991 0.9991 0.0424 -307.011 472.6154)"
            style={{ fill: this.state.FSh4, stroke: this.state.stroke }}
            cx="93.032"
            cy="396.459"
            rx="57"
            ry="72.531"
            onTouchStart={isTouch ? () => this.playNote('FSh4') : null}
            onClick={isTouch ? null : () => this.playNote('FSh4')}
          />
        </g>
        <g id="F5">
          <circle
            style={{ fill: this.state.F5, stroke: this.state.stroke }}
            cx="944"
            cy="340"
            r="40.5"
            onTouchStart={isTouch ? () => this.playNote('F5') : null}
            onClick={isTouch ? null : () => this.playNote('F5')}
          />
        </g>
        <g id="FSh5">
          <circle
            style={{ fill: this.state.FSh5, stroke: this.state.stroke }}
            cx="221.5"
            cy="338.5"
            r="41"
            onTouchStart={isTouch ? () => this.playNote('FSh5') : null}
            onClick={isTouch ? null : () => this.playNote('FSh5')}
          />
        </g>
      </>
    );
  }
};

export default FNotes;
