import React, { Component } from 'react';
import NOTES from '../../constants/celloNotes';
import COLORS from '../../constants/colors';
import { connect } from 'react-redux';

class GNotes extends Component {

  playNote = (note) => {
    NOTES[note].play();
    this.props.dispatch({
      type: 'PLAY_CELLO_NOTE',
      payload: {
        note: note,
        color: this.props.displayColors ? COLORS.indigo : COLORS.colorless,
        highlight: this.props.displayColors ? COLORS.indigoHighlight : COLORS.colorlessHighlight
      }
    })
  }

  render() {
    return (
      <>
        {/* G NOTES */}
        <g id="G3">
          <ellipse
            transform="matrix(0.3602 -0.9329 0.9329 0.3602 -138.6203 1952.4495)"
            style={{ fill: this.props.colors.G3, stroke: 'black' }}
            cx="1354.016"
            cy="1077.278"
            rx="125.535"
            ry="87.343"
            onTouchStart={this.props.isTouch ? () => this.playNote('G3') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G3')}
          />
        </g>
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
        <g id="G4">
          <ellipse
            transform="matrix(0.9883 -0.1526 0.1526 0.9883 -135.018 194.1195)"
            style={{ fill: this.props.colors.G4, stroke: 'black' }}
            cx="1196.861"
            cy="976.481"
            rx="74.882"
            ry="51.345"
            onTouchStart={this.props.isTouch ? () => this.playNote('G4') : null}
            onClick={this.props.isTouch ? null : () => this.playNote('G4')}
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

export default connect(mapStateToProps)(GNotes);
