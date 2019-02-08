import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class EbNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.maroon : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.maroonHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* Eb NOTES */}
        <g id="Eb2">
          <path
            style={{ fill: this.props.colors.Eb2, stroke: 'black' }}
            d="M445.99,1008.085c0,0-139.49,12.415-214.49,84.415s-99.138,134.647-99.138,134.647S192.5,1261.5,239.5,1256.5
		        c14.557-1.549,20.457,0.411,36-3c34.643-7.602,78.641-24.915,100.023-47.003c20.065-20.726,38.987-39.681,52.977-66.997
		        c7.608-14.854,14.934-28.893,17.49-54.585C452.5,1019.5,445.99,1008.085,445.99,1008.085z"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb2')}
          />
        </g>
        <g id="Eb3">
          <path
            style={{ fill: this.props.colors.Eb3, stroke: 'black' }}
            d="M119.232,874.336c0,0,51.268,100.164,133.268,124.164c92.579,27.096,186.241-18.524,186.241-18.524
		        s-18.054-51.284-36.647-66.38c-6.49-5.269-11.718-12.461-19.594-20.096c-14.687-14.238-33.775-29.94-53.578-37.061
		        C298.5,845.5,262.5,830.5,217.5,836.5c-20.625,2.75-42.826,8.948-61,17C135.021,863.016,119.232,874.336,119.232,874.336z"
            onTouchStart={this.props.isTouch ? () => this.playNote('Eb3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('Eb3')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.bass,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(EbNotes);
