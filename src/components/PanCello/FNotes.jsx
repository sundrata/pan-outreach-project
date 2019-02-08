import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class FNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
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
        <g id="F3">
          <ellipse
            style={{ fill: this.props.colors.F3, stroke: 'black' }}
            cx="368.5"
            cy="749"
            rx="148"
            ry="91.5"
            onTouchStart={this.props.isTouch ? () => this.playNote('F3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F3')}
          />
        </g>
        <g id="F4">
          <ellipse
            transform="matrix(0.8097 -0.5869 0.5869 0.8097 -392.8751 504.0717)"
            style={{ fill: this.props.colors.F4, stroke: 'black' }}
            cx="580.678"
            cy="857.722"
            rx="85.812"
            ry="61.696"
            onTouchStart={this.props.isTouch ? () => this.playNote('F4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('F4')}
          />
        </g>
        <g id="FSh3">
          <ellipse
            transform="matrix(0.3602 -0.9329 0.9329 0.3602 211.6651 1199.1621)"
            style={{ fill: this.props.colors.FSh3, stroke: 'black' }}
            cx="980.016"
            cy="445.278"
            rx="125.535"
            ry="87.343"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh3')}
          />
        </g>
        <g id="FSh4">
          <ellipse
            transform="matrix(0.9883 -0.1526 0.1526 0.9883 -43.0781 129.7948)"
            style={{ fill: this.props.colors.FSh4, stroke: 'black' }}
            cx="823.861"
            cy="345.481"
            rx="74.882"
            ry="51.345"
            onTouchStart={this.props.isTouch ? () => this.playNote('FSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('FSh4')}
          />
        </g>
      </>
    );
  }
};

const mapStateToProps = state => ({
  colors: state.cello,
  displayColors: state.displayColors,
  isTouch: state.isTouch,
});

export default connect(mapStateToProps)(FNotes);
