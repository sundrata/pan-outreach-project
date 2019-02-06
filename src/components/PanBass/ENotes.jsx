import React, { Component } from 'react';
import NOTES from './Notes';

class ENotes extends Component {
  state = {
    E2: 'white',
    Eb2: 'white',
    E3: 'white',
    Eb3: 'white',
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
        <g id="E2">
          <path 
            style={{ fill: this.state.E2, stroke: this.state.stroke }}  
            d="M1221.557,430.074c0,0-84.099,164.457-205.422,192.657s-113.726,22.368-113.726,22.368
		        s-3.448-16.964-2.845-38.361c0.573-20.302,5.045-44.592,10.423-62.319c14.546-47.95,41.467-87.317,114.59-127.089
		        c73.122-39.772,169.822-1.337,169.822-1.337L1221.557,430.074z"
            onTouchStart={isTouch ? () => this.playNote('E2') : null}
            onClick={isTouch ? null : () => this.playNote('E2')}
          />
        </g>
        <g id="Eb2">
          <path 
            style={{ fill: this.state.Eb2, stroke: this.state.stroke }} 
            d="M445.99,1008.085c0,0-139.49,12.415-214.49,84.415s-99.138,134.647-99.138,134.647S192.5,1261.5,239.5,1256.5
		        c14.557-1.549,20.457,0.411,36-3c34.643-7.602,78.641-24.915,100.023-47.003c20.065-20.726,38.987-39.681,52.977-66.997
		        c7.608-14.854,14.934-28.893,17.49-54.585C452.5,1019.5,445.99,1008.085,445.99,1008.085z"
            onTouchStart={isTouch ? () => this.playNote('Eb2') : null}
            onClick={isTouch ? null : () => this.playNote('Eb2')}
          />
        </g>
        <g id="E3">
          <path 
            style={{ fill: this.state.E3, stroke: this.state.stroke }}  
            d="M911.778,676.559c0,0,94.741-42.456,165.722-25.059c102,25,153.139,129.247,153.139,129.247
		        s-80.088,58.263-169.113,32.008C972.5,786.5,948.71,742.388,948.71,742.388s-21.53-27.784-29.37-46.836
		        C911.5,676.5,911.778,676.559,911.778,676.559z"
            onTouchStart={isTouch ? () => this.playNote('E3') : null}
            onClick={isTouch ? null : () => this.playNote('E3')}
          />
        </g>
        <g id="Eb3">
          <path 
            style={{ fill: this.state.Eb3, stroke: this.state.stroke }}  
            d="M119.232,874.336c0,0,51.268,100.164,133.268,124.164c92.579,27.096,186.241-18.524,186.241-18.524
		        s-18.054-51.284-36.647-66.38c-6.49-5.269-11.718-12.461-19.594-20.096c-14.687-14.238-33.775-29.94-53.578-37.061
		        C298.5,845.5,262.5,830.5,217.5,836.5c-20.625,2.75-42.826,8.948-61,17C135.021,863.016,119.232,874.336,119.232,874.336z"
            onTouchStart={isTouch ? () => this.playNote('Eb3') : null}
            onClick={isTouch ? null : () => this.playNote('Eb3')}
          />
        </g>
      </>
    );
  }
};

export default ENotes;
