import React, { Component } from 'react';
import NOTES from './Notes';

class ENotes extends Component {
  state = {
    Eb3: 'white',
    Eb4: 'white',
    E3: 'white',
    E4: 'white',
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
    console.log('in ENotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* E NOTES */}
        <g id="Eb3">
          <ellipse
            style={{ fill: this.state.Eb3, stroke: this.state.stroke }}
            cx="741"
            cy="118.5"
            rx="147.5"
            ry="93"
            onTouchStart={isTouch ? () => this.playNote('Eb3') : null}
            onClick={isTouch ? null : () => this.playNote('Eb3')}
          />
        </g>
        <g id="Eb4">
          <ellipse
            transform="matrix(0.7982 -0.6024 0.6024 0.7982 55.8307 620.1199)"
            style={{ fill: this.state.Eb4, stroke: this.state.stroke }}
            cx="953.48"
            cy="226.729"
            rx="86.902"
            ry="60.918"
            onTouchStart={isTouch ? () => this.playNote('Eb4') : null}
            onClick={isTouch ? null : () => this.playNote('Eb4')}
          />
        </g>
        <g id="E3">
          <ellipse
            style={{ fill: this.state.E3, stroke: this.state.stroke }}
            cx="1114.5"
            cy="750"
            rx="148"
            ry="91.5"
            onTouchStart={isTouch ? () => this.playNote('E3') : null}
            onClick={isTouch ? null : () => this.playNote('E3')}
          />
        </g>
        <g id="E4">
          <ellipse
            transform="matrix(0.8097 -0.5869 0.5869 0.8097 -251.4622 942.0972)"
            style={{ fill: this.state.E4, stroke: this.state.stroke }}
            cx="1326.678"
            cy="858.722"
            rx="85.812"
            ry="61.696"
            onTouchStart={isTouch ? () => this.playNote('E4') : null}
            onClick={isTouch ? null : () => this.playNote('E4')}
          />
        </g>
      </>
    );
  }
};

export default ENotes;
