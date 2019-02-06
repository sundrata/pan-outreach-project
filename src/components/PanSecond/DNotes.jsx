import React, { Component } from 'react';
import NOTES from './Notes';

class DNotes extends Component {
  state = {
    D4: 'white',
    D5: 'white',
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
    console.log('in DNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* D NOTES */}
        <g id="D4">
          <ellipse
            transform="matrix(0.5 -0.866 0.866 0.5 -117.294 227.0418)"
            style={{ fill: this.state.D4, stroke: this.state.stroke }}
            cx="137.977"
            cy="215.1"
            rx="60.259"
            ry="80.428"
            onTouchStart={isTouch ? () => this.playNote('D4') : null}
            onClick={isTouch ? null : () => this.playNote('D4')}
          />
        </g>
        <g id="D5">
          <ellipse
            transform="matrix(0.8778 -0.4789 0.4789 0.8778 -87.9009 169.279)"
            style={{ fill: this.state.D5, stroke: this.state.stroke }}
            cx="287.906"
            cy="256.961"
            rx="32.905"
            ry="44.5"
            onTouchStart={isTouch ? () => this.playNote('D5') : null}
            onClick={isTouch ? null : () => this.playNote('D5')}
          />
        </g>
      </>
    );
  }
};

export default DNotes;
