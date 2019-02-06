import React, { Component } from 'react';
import NOTES from './Notes';

class GNotes extends Component {
  state = {
    G3: 'white',
    GSh3: 'white',
    G4: 'white',
    GSh4: 'white',
    G5: 'white',
    GSh5: 'white',
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
    console.log('in GNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* B NOTES */}
        <g id="G3">
          <ellipse
            transform="matrix(0.9991 -0.0434 0.0434 0.9991 -3.397 46.0158)"
            style={{ fill: this.state.G3, stroke: this.state.stroke }}
            cx="1057.089"
            cy="101.171"
            rx="129.839"
            ry="85.05"
            onTouchStart={isTouch ? () => this.playNote('G3') : null}
            onClick={isTouch ? null : () => this.playNote('G3')}
          />
        </g>
        <g id="GSh3">
          <ellipse
            transform="matrix(0.9967 -0.0816 0.0816 0.9967 -7.0973 27.5588)"
            style={{ fill: this.state.GSh3, stroke: this.state.stroke }}
            cx="333.423"
            cy="100.561"
            rx="129.467"
            ry="84.075"
            onTouchStart={isTouch ? () => this.playNote('GSh3') : null}
            onClick={isTouch ? null : () => this.playNote('GSh3')}
          />
        </g>
        <g id="G4">
          <ellipse
            transform="matrix(0.464 -0.8858 0.8858 0.464 387.6935 1145.9587)"
            style={{ fill: this.state.G4, stroke: this.state.stroke }}
            cx="1140.827"
            cy="252.603"
            rx="59.2"
            ry="41.93"
            onTouchStart={isTouch ? () => this.playNote('G4') : null}
            onClick={isTouch ? null : () => this.playNote('G4')}
          />
        </g>
        <g id="GSh4">
          <ellipse
            transform="matrix(0.5 -0.866 0.866 0.5 -9.3798 488.6985)"
            style={{ fill: this.state.GSh4, stroke: this.state.stroke }}
            cx="418.535"
            cy="252.472"
            rx="59.126"
            ry="42.16"
            onTouchStart={isTouch ? () => this.playNote('GSh4') : null}
            onClick={isTouch ? null : () => this.playNote('GSh4')}
          />
        </g>
        <g id="G5">
          <circle
            style={{ fill: this.state.G5, stroke: this.state.stroke }}
            cx="990.5"
            cy="435.5"
            r="37"
            onTouchStart={isTouch ? () => this.playNote('G5') : null}
            onClick={isTouch ? null : () => this.playNote('G5')}
          />
        </g>
        <g id="GSh5">
          <circle
            style={{ fill: this.state.GSh5, stroke: this.state.stroke }}
            cx="267.5"
            cy="434.5"
            r="37"
            onTouchStart={isTouch ? () => this.playNote('GSh5') : null}
            onClick={isTouch ? null : () => this.playNote('GSh5')}
          />
        </g>
      </>
    );
  }
};

export default GNotes;
