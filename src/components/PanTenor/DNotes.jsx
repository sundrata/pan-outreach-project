import React, { Component } from 'react';
import NOTES from './Notes';

class DNotes extends Component {
  state = {
    D4: 'orange',
    D5: 'orange',
    D6: 'orange',
    stroke: 'black'
  }

  highlightNote = (note) => {
    this.setState({
      [note]: '#EA7A00'
    })
    setTimeout(() => {
      this.setState(() => ({
        [note]: 'orange',
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
            transform="matrix(0.5854 -0.8107 0.8107 0.5854 -349.8704 1374.5067)"
            style={{ fill: this.state.D4, stroke: this.state.stroke }}
            cx="1169.05"
            cy="1029.355"
            rx="120.239"
            ry="151.596"
            onTouchStart={isTouch ? () => this.playNote('D4') : null}
            onClick={isTouch ? null : () => this.playNote('D4')}
          />
        </g>
        <g id="D5">
          <ellipse
            transform="matrix(0.2741 -0.9617 0.9617 0.2741 -52.7768 1526.6034)"
            style={{ fill: this.state.D5, stroke: this.state.stroke }}
            cx="984.855"
            cy="798.262"
            rx="71.247"
            ry="100.371"
            onTouchStart={isTouch ? () => this.playNote('D5') : null}
            onClick={isTouch ? null : () => this.playNote('D5')}
          />
        </g>
        <g id="D6">
          <circle
            style={{ fill: this.state.D6, stroke: this.state.stroke }}
            cx="834"
            cy="662"
            r="54.5"
            onTouchStart={isTouch ? () => this.playNote('D6') : null}
            onClick={isTouch ? null : () => this.playNote('D6')}
          />
        </g>
      </>
    );
  }
};

export default DNotes;
