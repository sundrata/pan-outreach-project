import React, { Component } from 'react';
import NOTES from './Notes';

class GNotes extends Component {
  state = {
    G4: '#A9D7E4',
    GSh4: '#A9D7E4',
    G5: '#A9D7E4',
    GSh5: '#A9D7E4',
    stroke: 'black'
  }

  highlightNote = (note) => {
    this.setState({
      [note]: '#23A9C9'
    })
    setTimeout(() => {
      this.setState(() => ({
        [note]: '#A9D7E4',
      }))
    }, 500);
  }

  playNote = (note) => {
    NOTES[note].play();
    console.log('in GNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* G NOTES  */}
        <g id="G4">
          <ellipse
            transform="matrix(0.9498 -0.313 0.313 0.9498 -336.5971 356.7783)"
            style={{ fill: this.state.G4, stroke: this.state.stroke }}
            cx="942.939"
            cy="1226.77"
            rx="105.142"
            ry="138.12"
            onTouchStart={isTouch ? () => this.playNote('G4') : null}
            onClick={isTouch ? null : () => this.playNote('G4')}
          />
        </g>
        <g id="GSh4">
          <ellipse
            transform="matrix(0.6284 -0.7779 0.7779 0.6284 -182.2244 359.0121)"
            style={{ fill: this.state.GSh4, stroke: this.state.stroke }}
            cx="284.677"
            cy="370.246"
            rx="106.013"
            ry="137.298"
            onTouchStart={isTouch ? () => this.playNote('GSh4') : null}
            onClick={isTouch ? null : () => this.playNote('GSh4')}
          />
        </g>
        <g id="G5">
          <ellipse
            transform="matrix(0.7424 -0.6699 0.6699 0.7424 -395.6221 859.191)"
            style={{ fill: this.state.G5, stroke: this.state.stroke }}
            cx="919.497"
            cy="944.07"
            rx="57.816"
            ry="84.637"
            onTouchStart={isTouch ? () => this.playNote('G5') : null}
            onClick={isTouch ? null : () => this.playNote('G5')}
          />
        </g>
        <g id="GSh5">
          <ellipse
            transform="matrix(0.3593 -0.9332 0.9332 0.3593 -313.0156 797.0468)"
            style={{ fill: this.state.GSh5, stroke: this.state.stroke }}
            cx="424"
            cy="626.5"
            rx="55.845"
            ry="80.365"
            onTouchStart={isTouch ? () => this.playNote('GSh5') : null}
            onClick={isTouch ? null : () => this.playNote('GSh5')}
          />
        </g>
      </>
    );
  }
};

export default GNotes;
