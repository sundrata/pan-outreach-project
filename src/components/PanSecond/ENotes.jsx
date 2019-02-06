import React, { Component } from 'react';
import NOTES from './Notes';

class ENotes extends Component {
  state = {
    E4: 'white',
    Eb4: 'white',
    E5: 'white',
    Eb5: 'white',
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
            transform="matrix(0.2255 -0.9742 0.9742 0.2255 75.9248 934.0198)"
            style={{ fill: this.state.E4, stroke: this.state.stroke }}
            cx="625.441"
            cy="419.255"
            rx="55.5"
            ry="81.137"
            onTouchStart={isTouch ? () => this.playNote('E4') : null}
            onClick={isTouch ? null : () => this.playNote('E4')}
          />
        </g>
        <g id="Eb4">
          <ellipse
            transform="matrix(0.1834 -0.983 0.983 0.1834 687.9495 1667.5366)"
            style={{ fill: this.state.Eb4, stroke: this.state.stroke }}
            cx="1347.665"
            cy="419.691"
            rx="56"
            ry="80.909"
            onTouchStart={isTouch ? () => this.playNote('Eb4') : null}
            onClick={isTouch ? null : () => this.playNote('Eb4')}
          />
        </g>
        <g id="E5">
          <ellipse
            transform="matrix(0.7828 -0.6223 0.6223 0.7828 -168.1567 389.2487)"
            style={{ fill: this.state.E5, stroke: this.state.stroke }}
            cx="473.5"
            cy="435.5"
            rx="30.633"
            ry="43.355"
            onTouchStart={isTouch ? () => this.playNote('E5') : null}
            onClick={isTouch ? null : () => this.playNote('E5')}
          />
        </g>
        <g id="Eb5">
          <ellipse
            transform="matrix(0.7568 -0.6536 0.6536 0.7568 5.317 887.7842)"
            style={{ fill: this.state.Eb5, stroke: this.state.stroke }}
            cx="1195.74"
            cy="436.747"
            rx="31.326"
            ry="43.587"
            onTouchStart={isTouch ? () => this.playNote('Eb5') : null}
            onClick={isTouch ? null : () => this.playNote('Eb5')}
          />
        </g>
      </>
    );
  }
};

export default ENotes;
