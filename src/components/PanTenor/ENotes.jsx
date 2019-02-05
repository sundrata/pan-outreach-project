import React, { Component } from 'react';
import NOTES from './Notes';

class ENotes extends Component {
  state = {
    E4: 'yellow',
    Eb4: 'yellow',
    E5: 'yellow',
    Eb5: 'yellow',
    E6: 'yellow',
    Eb6: 'yellow',
    stroke: 'black'
  }

  highlightNote = (note) => {
    this.setState({
      [note]: '#D8D800'
    })
    setTimeout(() => {
      this.setState(() => ({
        [note]: 'yellow',
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
        <g id="E4">
          <ellipse
            transform="matrix(0.9269 -0.3754 0.3754 0.9269 -96.9854 498.2941)"
            style={{ fill: this.state.E4, stroke: this.state.stroke }}
            cx="1230.407"
            cy="498.066"
            rx="144.284"
            ry="111.421"
            onTouchStart={isTouch ? () => this.playNote('E4') : null}
            onClick={isTouch ? null : () => this.playNote('E4')}
          />
        </g>
        <g id="Eb4">
          <ellipse
            transform="matrix(0.1815 -0.9834 0.9834 0.1815 -477.9086 696.9604)"
            style={{ fill: this.state.Eb4, stroke: this.state.stroke }}
            cx="179.723"
            cy="635.569"
            rx="119.153"
            ry="152.941"
            onTouchStart={isTouch ? () => this.playNote('Eb4') : null}
            onClick={isTouch ? null : () => this.playNote('Eb4')}
          />
        </g>
        <g id="E5">
          <ellipse
            transform="matrix(0.7724 -0.6351 0.6351 0.7724 -103.6233 724.3026)"
            style={{ fill: this.state.E5, stroke: this.state.stroke }}
            cx="958.792"
            cy="506.735"
            rx="92.613"
            ry="66.307"
            onTouchStart={isTouch ? () => this.playNote('E5') : null}
            onClick={isTouch ? null : () => this.playNote('E5')}
          />
        </g>
        <g id="Eb5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -122.6176 80.4116)"
            style={{ fill: this.state.Eb5, stroke: this.state.stroke }}
            cx="426.224"
            cy="783.632"
            rx="95.385"
            ry="68.307"
            onTouchStart={isTouch ? () => this.playNote('Eb5') : null}
            onClick={isTouch ? null : () => this.playNote('Eb5')}
          />
        </g>
        <g id="E6">
          <ellipse
            style={{ fill: this.state.E6, stroke: this.state.stroke }}
            cx="712"
            cy="598.5"
            rx="52.5"
            ry="51"
            onTouchStart={isTouch ? () => this.playNote('E6') : null}
            onClick={isTouch ? null : () => this.playNote('E6')}
          />
        </g>
        <g id="Eb6">
          <circle
            style={{ fill: this.state.Eb6, stroke: this.state.stroke }}
            cx="654"
            cy="806"
            r="52.5"
            onTouchStart={isTouch ? () => this.playNote('Eb6') : null}
            onClick={isTouch ? null : () => this.playNote('Eb6')}
          />
        </g>
      </>
    );
  }
};

export default ENotes;
