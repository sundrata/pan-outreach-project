import React, { Component } from 'react';
import NOTES from './Notes';

class FNotes extends Component {
  state = {
    F2: 'white',
    FSh2: 'white',
    F3: 'white',
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
        <g id="F2">
          <path 
            style={{ fill: this.state.F2, stroke: this.state.stroke }}
            d="M445.99,571.085c0,0-139.49,12.415-214.49,84.415s-99.138,134.647-99.138,134.647S192.5,824.5,239.5,819.5
		        c14.557-1.549,20.457,0.411,36-3c34.643-7.602,78.641-24.915,100.023-47.003c20.065-20.726,38.987-39.681,52.977-66.997
		        c7.608-14.854,14.934-28.893,17.49-54.585C452.5,582.5,445.99,571.085,445.99,571.085z"
            onTouchStart={isTouch ? () => this.playNote('F2') : null}
            onClick={isTouch ? null : () => this.playNote('F2')}  
          />
        </g>
        <g id="FSh2">
          <path 
            style={{ fill: this.state.FSh2, stroke: this.state.stroke }} 
            d="M1237.778,880.62c-14.565,17.406-81.132,94.557-73.553,162.377c11.945,106.899,86.161,160.881,86.161,160.881
		        s81.439-71.224,69.745-172.259C1308.22,928.72,1237.778,880.62,1237.778,880.62z"
            onTouchStart={isTouch ? () => this.playNote('FSh2') : null}
            onClick={isTouch ? null : () => this.playNote('FSh2')}  
          />
        </g>
        <g id="F3">
          <path 
            style={{ fill: this.state.F3, stroke: this.state.stroke }}
            d="M119.232,438.336c0,0,51.268,100.164,133.268,124.164c92.579,27.096,186.241-18.524,186.241-18.524
		        s-18.054-51.284-36.647-66.38c-6.49-5.269-11.718-12.461-19.594-20.096c-14.687-14.238-33.775-29.94-53.578-37.061
		        C298.5,409.5,262.5,394.5,217.5,400.5c-20.625,2.75-42.826,8.948-61,17C135.021,427.016,119.232,438.336,119.232,438.336z"
            onTouchStart={isTouch ? () => this.playNote('F3') : null}
            onClick={isTouch ? null : () => this.playNote('F3')}  
          />
        </g>
      </>
    );
  }
};

export default FNotes;
