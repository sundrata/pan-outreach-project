import React, { Component } from 'react';
import NOTES from './Notes';

class FNotes extends Component {
  state = {
    F3: 'white',
    F4: 'white',
    FSh3: 'white',
    FSh4: 'white',
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
    console.log('in FNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* F NOTES */}
        <g id="F3">
          <ellipse
            style={{ fill: this.state.F3, stroke: this.state.stroke }}
            cx="368.5"
            cy="749"
            rx="148"
            ry="91.5"
            onTouchStart={isTouch ? () => this.playNote('F3') : null}
            onClick={isTouch ? null : () => this.playNote('F3')}
          />
        </g>
        <g id="F4">
          <ellipse
            transform="matrix(0.8097 -0.5869 0.5869 0.8097 -392.8751 504.0717)"
            style={{ fill: this.state.F4, stroke: this.state.stroke }}
            cx="580.678"
            cy="857.722"
            rx="85.812"
            ry="61.696"
            onTouchStart={isTouch ? () => this.playNote('F4') : null}
            onClick={isTouch ? null : () => this.playNote('F4')}
          />
        </g>
        <g id="FSh3">
          <ellipse
            transform="matrix(0.3602 -0.9329 0.9329 0.3602 211.6651 1199.1621)"
            style={{ fill: this.state.FSh3, stroke: this.state.stroke }}
            cx="980.016"
            cy="445.278"
            rx="125.535"
            ry="87.343"
            onTouchStart={isTouch ? () => this.playNote('FSh3') : null}
            onClick={isTouch ? null : () => this.playNote('FSh3')}
          />
        </g>
        <g id="FSh4">
          <ellipse
            transform="matrix(0.9883 -0.1526 0.1526 0.9883 -43.0781 129.7948)"
            style={{ fill: this.state.FSh4, stroke: this.state.stroke }}
            cx="823.861"
            cy="345.481"
            rx="74.882"
            ry="51.345"
            onTouchStart={isTouch ? () => this.playNote('FSh4') : null}
            onClick={isTouch ? null : () => this.playNote('FSh4')}
          />
        </g>
      </>
    );
  }
};

export default FNotes;
