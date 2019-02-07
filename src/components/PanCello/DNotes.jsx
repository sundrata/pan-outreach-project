import React, { Component } from 'react';
import NOTES from './Notes';

class DNotes extends Component {
  state = {
    D3: 'white',
    D4: 'white',
    D5: 'white',
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
    console.log('in DNotes', note);
    this.highlightNote(note);
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* D NOTES */}
        <g id="D3">
          <ellipse
            style={{ fill: this.state.D3, stroke: this.state.stroke }}
            cx="360"
            cy="1235.5"
            rx="159.5"
            ry="103"
            onTouchStart={isTouch ? () => this.playNote('D3') : null}
            onClick={isTouch ? null : () => this.playNote('D3')}
          />
        </g>
        <g id="D4">
          <ellipse
            transform="matrix(0.9022 -0.4312 0.4312 0.9022 -460.2684 169.403)"
            style={{ fill: this.state.D4, stroke: this.state.stroke }}
            cx="143.505"
            cy="1099.88"
            rx="99.607"
            ry="77.195"
            onTouchStart={isTouch ? () => this.playNote('D4') : null}
            onClick={isTouch ? null : () => this.playNote('D4')}
          />
        </g>
        <g id="D5">
          <ellipse
            transform="matrix(0.6259 -0.7799 0.7799 0.6259 -702.3817 639.6775)"
            style={{ fill: this.state.D5, stroke: this.state.stroke }}
            cx="315.566"
            cy="1051.954"
            rx="55.601"
            ry="38.5"
            onTouchStart={isTouch ? () => this.playNote('D5') : null}
            onClick={isTouch ? null : () => this.playNote('D5')}
          />
        </g>
      </>
    );
  }
};

export default DNotes;
