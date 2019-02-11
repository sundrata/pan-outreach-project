import React, { Component } from 'react';
import NOTES from '../../constants/bassNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';


class FNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_BASS_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.green : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.greenHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* F NOTES */}
        <g id="F2">
          <path
            style={{ fill: this.props.colors.F2, stroke: 'black' }}
            d="M445.99,571.085c0,0-139.49,12.415-214.49,84.415s-99.138,134.647-99.138,134.647S192.5,824.5,239.5,819.5
		        c14.557-1.549,20.457,0.411,36-3c34.643-7.602,78.641-24.915,100.023-47.003c20.065-20.726,38.987-39.681,52.977-66.997
		        c7.608-14.854,14.934-28.893,17.49-54.585C452.5,582.5,445.99,571.085,445.99,571.085z"
            onTouchStart={this.props.isTouch ? () => this.playNote('F2') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F2')}
          />
          <text 
            transform="matrix(1 0 0 1 267.6304 733.752)"
          >
            F2
          </text>
        </g>
        <g id="F3">
          <path
            style={{ fill: this.props.colors.F3, stroke: 'black' }}
            d="M119.232,438.336c0,0,51.268,100.164,133.268,124.164c92.579,27.096,186.241-18.524,186.241-18.524
		        s-18.054-51.284-36.647-66.38c-6.49-5.269-11.718-12.461-19.594-20.096c-14.687-14.238-33.775-29.94-53.578-37.061
		        C298.5,409.5,262.5,394.5,217.5,400.5c-20.625,2.75-42.826,8.948-61,17C135.021,427.016,119.232,438.336,119.232,438.336z"
            onTouchStart={this.props.isTouch ? () => this.playNote('F3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F3')}
          />
          <text 
            transform="matrix(1 0 0 1 239.4438 522.1343)"
          >
            F3
          </text>
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

export default connect(mapStateToProps)(FNotes);
