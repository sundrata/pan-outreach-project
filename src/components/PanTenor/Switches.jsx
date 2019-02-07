import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';

class Switches extends React.Component {
  state = {
    displayNotes: false,
    displayColors: true,
  };

  handleColorChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.state.displayColors ?
    this.props.dispatch({ type: 'HIDE_COLORS' })
    :
    this.props.dispatch({ type: 'SHOW_COLORS' })
  };

  handleNoteChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.dispatch({ type: 'TOGGLE_NOTES' });
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.displayNotes}
              onChange={this.handleNoteChange('displayNotes')}
              value="displayNotes"
            />
          }
          label="Note Labels"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.displayColors}
              onChange={this.handleColorChange('displayColors')}
              value="displayColors"
              color="primary"
            />
          }
          label="Colors"
        />
      </FormGroup>
    );
  }
}

export default connect()(Switches);
