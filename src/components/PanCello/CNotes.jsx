import React, { Component } from 'react';
import NOTES from './Notes';

class CNotes extends Component {
  state = {
    C4: 'white',
    CSh4: 'white',
    C3: 'white',
    CSh3: 'white',
    C5: 'white',
    CSh5: 'white',
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
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -179.2137 370.7318)"
            style={{ fill: this.state.C4, stroke: this.state.stroke }}
            cx="515.505"
            cy="477.88"
            rx="99.607"
            ry="77.195"
            onTouchStart={isTouch ? () => this.playNote('C4') : null}
            onClick={isTouch ? null : () => this.playNote('C4')}
          />
        </g>
        <g id="CSh4">
          <ellipse
            transform="matrix(0.8284 -0.5601 0.5601 0.8284 -469.2018 688.0895)"
            style={{ fill: this.state.CSh4, stroke: this.state.stroke }}
            cx="888.505"
            cy="1109.88"
            rx="99.607"
            ry="77.195"
            onTouchStart={isTouch ? () => this.playNote('CSh4') : null}
            onClick={isTouch ? null : () => this.playNote('CSh4')}
          />
        </g>
        <g id="C3">
          <ellipse
            style={{ fill: this.state.C3, stroke: this.state.stroke }}
            cx="733"
            cy="604.5"
            rx="159.5"
            ry="103"
            onTouchStart={isTouch ? () => this.playNote('C3') : null}
            onClick={isTouch ? null : () => this.playNote('C3')}
          />
        </g>
        <g id="CSh3">
          <ellipse
            style={{ fill: this.state.CSh3, stroke: this.state.stroke }}
            cx="1106"
            cy="1235.5"
            rx="159.5"
            ry="103"
            onTouchStart={isTouch ? () => this.playNote('CSh3') : null}
            onClick={isTouch ? null : () => this.playNote('CSh3')}
          />
        </g>
        <g id="C5">
          <ellipse
            transform="matrix(0.6259 -0.7799 0.7799 0.6259 -71.1086 695.6706)"
            style={{ fill: this.state.C5, stroke: this.state.stroke }}
            cx="689.566"
            cy="421.954"
            rx="55.601"
            ry="38.5"
            onTouchStart={isTouch ? () => this.playNote('C5') : null}
            onClick={isTouch ? null : () => this.playNote('C5')}
          />
        </g>
        <g id="CSh5">
          <ellipse
            transform="matrix(0.6259 -0.7799 0.7799 0.6259 -422.9115 1222.2793)"
            style={{ fill: this.state.CSh5, stroke: this.state.stroke }}
            cx="1062.566"
            cy="1051.954"
            rx="55.601"
            ry="38.5"
            onTouchStart={isTouch ? () => this.playNote('CSh5') : null}
            onClick={isTouch ? null : () => this.playNote('CSh5')}
          />
        </g>
      </>
    );
  }
};

export default CNotes;
