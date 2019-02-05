import React, { Component } from 'react';
import NOTES from './Notes';

class FNotes extends Component {
  state = {
    FSh4: 'green',
    F4: 'green',
    FSh5: 'green',
    F5: 'green',
    stroke: 'black'
  }

  highlightNote = (note) => {
    this.setState({
      [note]: '#224900'
    })
    setTimeout(() => {
      this.setState(() => ({
        [note]: 'green',
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
        <g id="FSh4">
          <ellipse
            transform="matrix(0.2695 -0.963 0.963 0.2695 442.9022 930.2535)"
            style={{ fill: this.state.FSh4, stroke: this.state.stroke }}
            cx="834.636"
            cy="173.184"
            rx="143.707"
            ry="110.209"
            onTouchStart={isTouch ? () => this.playNote('FSh4') : null}
            onClick={isTouch ? null : () => this.playNote('FSh4')}
          />
        </g>
        <g id="F4">
          <ellipse
            transform="matrix(0.6584 -0.7526 0.7526 0.6584 -733.6282 650.6843)"
            style={{ fill: this.state.F4, stroke: this.state.stroke }}
            cx="350.073"
            cy="1133.613"
            rx="144.589"
            ry="111.309"
            onTouchStart={isTouch ? () => this.playNote('F4') : null}
            onClick={isTouch ? null : () => this.playNote('F4')}
          />
        </g>
        <g id="FSh5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -61.0825 118.5256)"
            style={{ fill: this.state.FSh5, stroke: this.state.stroke }}
            cx="688.075"
            cy="429.604"
            rx="61.378"
            ry="86.213"
            onTouchStart={isTouch ? () => this.playNote('FSh5') : null}
            onClick={isTouch ? null : () => this.playNote('FSh5')}
          />
        </g>
        <g id="F5">
          <ellipse
            transform="matrix(0.3962 -0.9181 0.9181 0.3962 -541.6311 1145.6666)"
            style={{ fill: this.state.F5, stroke: this.state.stroke }}
            cx="600.311"
            cy="984.672"
            rx="89.688"
            ry="62.346"
            onTouchStart={isTouch ? () => this.playNote('F5') : null}
            onClick={isTouch ? null : () => this.playNote('F5')}
          />
        </g>
      </>
    );
  }
};

export default FNotes;
