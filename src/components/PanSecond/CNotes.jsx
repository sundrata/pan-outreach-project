import React, { Component } from 'react';
import NOTES from './Notes';

class CNotes extends Component {
  state = {
    C4: 'white',
    CSh4: 'white',
    C5: 'white',
    CSh5: 'white',
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
    console.log('in CNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* C NOTES */}
        <g id="C4">
          <ellipse
            transform="matrix(0.8055 -0.5925 0.5925 0.8055 -14.48 380.9514)"
            style={{ fill: this.state.C4, stroke: this.state.stroke }}
            cx="573.173"
            cy="212.537"
            rx="79.861"
            ry="104.628"
            onTouchStart={isTouch ? () => this.playNote('C4') : null}
            onClick={isTouch ? null : () => this.playNote('C4')}
          />
        </g>
        <g id="CSh4">
          <ellipse
            transform="matrix(0.5358 -0.8443 0.8443 0.5358 215.3201 826.6624)"
            style={{ fill: this.state.CSh4, stroke: this.state.stroke }}
            cx="859.5"
            cy="217.5"
            rx="62"
            ry="80"
            onTouchStart={isTouch ? () => this.playNote('CSh4') : null}
            onClick={isTouch ? null : () => this.playNote('CSh4')}
          />
        </g>
        <g id="C5">
          <ellipse
            transform="matrix(0.9967 -0.0816 0.0816 0.9967 -25.9686 41.8764)"
            style={{ fill: this.state.C5, stroke: this.state.stroke }}
            cx="499.054"
            cy="338.466"
            rx="48.853"
            ry="35.072"
            onTouchStart={isTouch ? () => this.playNote('C5') : null}
            onClick={isTouch ? null : () => this.playNote('C5')}
          />
        </g>
        <g id="CSh5">
          <ellipse
            transform="matrix(0.8959 -0.4442 0.4442 0.8959 -9.1788 475.5527)"
            style={{ fill: this.state.CSh5, stroke: this.state.stroke }}
            cx="1010.326"
            cy="257.366"
            rx="32.581"
            ry="45"
            onTouchStart={isTouch ? () => this.playNote('CSh5') : null}
            onClick={isTouch ? null : () => this.playNote('CSh5')}
          />
        </g>
      </>
    );
  }
};

export default CNotes;
