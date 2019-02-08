import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class GShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.aqua : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.aquaHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* GSh NOTES */}
        <g id="GSh3">
          <ellipse
            transform="matrix(0.3602 -0.9329 0.9329 0.3602 -615.655 1254.9376)"
            style={{ fill: this.props.colors.GSh3, stroke: 'black' }}
            cx="607.016"
            cy="1076.278"
            rx="125.535"
            ry="87.343"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh3')}
          />
        </g>
        <g id="GSh4">
          <ellipse
            transform="matrix(0.9883 -0.1526 0.1526 0.9883 -143.7587 80.2567)"
            style={{ fill: this.props.colors.GSh4, stroke: 'black' }}
            cx="450.861"
            cy="976.481"
            rx="74.882"
            ry="51.345"
            onTouchStart={this.props.isTouch ? () => this.playNote('GSh4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('GSh4')}
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

export default connect(mapStateToProps)(GShNotes);
