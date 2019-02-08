import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class FShNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.mint : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.mintHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* FSh NOTES */}
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

export default connect(mapStateToProps)(FShNotes);
