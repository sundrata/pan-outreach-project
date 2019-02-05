import React, { Component } from 'react';
import NOTES from './Notes';

class CNotes extends Component {
  state = {
    CSh4: 'red',
    C4: 'red',
    CSh5: 'red',
    C5: 'red',
    CSh6: 'red',
    C6: 'red',
    stroke: 'black'
  }

  highlightNote = (note) => {
    this.setState({
      [note]: '#930E00'
    })
    setTimeout(() => {
      this.setState(() => ({
        [note]: 'red',
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
        <g id="CSh4">
          <ellipse
            transform="matrix(0.9374 -0.3482 0.3482 0.9374 -43.9603 199.5367)"
            style={{ fill: this.state.CSh4, stroke: this.state.stroke }}
            cx="533.207"
            cy="222.083"
            rx="123.312"
            ry="160.529"
            onTouchStart={isTouch ? () => this.playNote('CSh4') : null}
            onClick={isTouch ? null : () => this.playNote('CSh4')}
          />
        </g>
        <g id="C4">
          <ellipse
            transform="matrix(0.1611 -0.9869 0.9869 0.1611 -700.8986 1681.4668)"
            style={{ fill: this.state.C4, stroke: this.state.stroke }}
            cx="638.686"
            cy="1253.042"
            rx="160.529"
            ry="123.312"
            onTouchStart={isTouch ? () => this.playNote('C4') : null}
            onClick={isTouch ? null : () => this.playNote('C4')}
          />
        </g>
        <g id="CSh5">
          <ellipse
            transform="matrix(0.7732 -0.6342 0.6342 0.7732 -194.8556 450.9876)"
            style={{ fill: this.state.CSh5, stroke: this.state.stroke }}
            cx="533.07"
            cy="497.909"
            rx="71.879"
            ry="103.233"
            onTouchStart={isTouch ? () => this.playNote('CSh5') : null}
            onClick={isTouch ? null : () => this.playNote('CSh5')}
          />
        </g>
        <g id="C5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -153.9281 139.4177)"
            style={{ fill: this.state.C5, stroke: this.state.stroke }}
            cx="768.32"
            cy="1002.969"
            rx="74.869"
            ry="106.963"
            onTouchStart={isTouch ? () => this.playNote('C5') : null}
            onClick={isTouch ? null : () => this.playNote('C5')}
          />
        </g>
        <g id="CSh6">
          <ellipse
            style={{ fill: this.state.CSh6, stroke: this.state.stroke }}
            cx="602.5"
            cy="679.5"
            rx="55"
            ry="56"
            onTouchStart={isTouch ? () => this.playNote('CSh6') : null}
            onClick={isTouch ? null : () => this.playNote('CSh6')}
          />
        </g>
        <g id="C6">
          <ellipse
            style={{ fill: this.state.C6, stroke: this.state.stroke }}
            cx="794.5"
            cy="798.5"
            rx="55"
            ry="56"
            onTouchStart={isTouch ? () => this.playNote('C6') : null}
            onClick={isTouch ? null : () => this.playNote('C6')}
          />
        </g>
      </>
    );
  }
};

export default CNotes;
