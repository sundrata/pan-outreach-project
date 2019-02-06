import React, { Component } from 'react';
import NOTES from './Notes';

class GNotes extends Component {
  state = {
    G3: 'white',
    GSh3: 'white',
    G4: 'white',
    GSh4: 'white',
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
        <g id="G3">
          <ellipse
            transform="matrix(0.3602 -0.9329 0.9329 0.3602 -138.6203 1952.4495)"
            style={{ fill: this.state.G3, stroke: this.state.stroke }}
            cx="1354.016"
            cy="1077.278"
            rx="125.535"
            ry="87.343"
            onTouchStart={isTouch ? () => this.playNote('G3') : null}
            onClick={isTouch ? null : () => this.playNote('G3')}
          />
        </g>
        <g id="GSh3">
          <ellipse
            transform="matrix(0.3602 -0.9329 0.9329 0.3602 -615.655 1254.9376)"
            style={{ fill: this.state.GSh3, stroke: this.state.stroke }}
            cx="607.016"
            cy="1076.278"
            rx="125.535"
            ry="87.343"
            onTouchStart={isTouch ? () => this.playNote('GSh3') : null}
            onClick={isTouch ? null : () => this.playNote('GSh3')}
          />
        </g>
        <g id="G4">
          <ellipse
            transform="matrix(0.9883 -0.1526 0.1526 0.9883 -135.018 194.1195)"
            style={{ fill: this.state.G4, stroke: this.state.stroke }}
            cx="1196.861"
            cy="976.481"
            rx="74.882"
            ry="51.345"
            onTouchStart={isTouch ? () => this.playNote('G4') : null}
            onClick={isTouch ? null : () => this.playNote('G4')}
          />
        </g>
        <g id="GSh4">
          <ellipse
            transform="matrix(0.9883 -0.1526 0.1526 0.9883 -143.7587 80.2567)"
            style={{ fill: this.state.GSh4, stroke: this.state.stroke }}
            cx="450.861"
            cy="976.481"
            rx="74.882"
            ry="51.345"
            onTouchStart={isTouch ? () => this.playNote('GSh4') : null}
            onClick={isTouch ? null : () => this.playNote('GSh4')}
          />
        </g>
      </>
    );
  }
};

export default GNotes;
