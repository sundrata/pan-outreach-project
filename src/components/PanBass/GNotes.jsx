import React, { Component } from 'react';
import NOTES from './Notes';

class GNotes extends Component {
  state = {
    G2: 'white',
    GSh2: 'white',
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
    console.log('in GNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* G NOTES */}
        <g id="G2">
          <path 
            style={{ fill: this.state.G2, stroke: this.state.stroke }}
            d="M290.78,101.514c17.277,14.718,93.836,81.964,161.72,74.986c107-11,161.636-84.735,161.636-84.735
		        S543.635,9.699,442.5,20.5C339.5,31.5,290.78,101.514,290.78,101.514z"
            onTouchStart={isTouch ? () => this.playNote('G2') : null}
            onClick={isTouch ? null : () => this.playNote('G2')}
          />
        </g>
        <g id="GSh2">
          <path 
            style={{ fill: this.state.GSh2, stroke: this.state.stroke }}
            d="M72.413,919.281C55.297,942.643,38.5,957.5,29.5,1046.5s79,164,79.985,164.917S183.5,1147.5,183.5,1046.5
            c0-68.469-84.081-156.438-84.081-156.438L72.413,919.281z"
            onTouchStart={isTouch ? () => this.playNote('GSh2') : null}
            onClick={isTouch ? null : () => this.playNote('GSh2')}
          />
        </g>
      </>
    );
  }
};

export default GNotes;
