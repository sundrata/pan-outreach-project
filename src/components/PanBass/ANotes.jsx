import React, { Component } from 'react';
import NOTES from './Notes';

class ANotes extends Component {
  state = {
    A2: 'white',
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
        <g id="A2">
          <path 
            style={{ fill: this.state.A2, stroke: this.state.stroke }} 
            d="M727.78,101.514c17.277,14.718,93.836,81.964,161.72,74.986c107-11,161.636-84.735,161.636-84.735
            S980.635,9.699,879.5,20.5C776.5,31.5,727.78,101.514,727.78,101.514z"
            onTouchStart={isTouch ? () => this.playNote('A2') : null}
            onClick={isTouch ? null : () => this.playNote('A2')}
          />
        </g>
      </>
    );
  }
};

export default ANotes;
