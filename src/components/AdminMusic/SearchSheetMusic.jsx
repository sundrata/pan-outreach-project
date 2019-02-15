import React, { Component } from 'react';
import { connect } from 'react-redux'

// material ui imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// style for the form
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    marginTop: 16,
    width: 200,
  },
});

class SearchSheetMusic extends Component {
  state = {
    instrument: '',
    difficulty: 0,
    name: '',
  };

  // changes the values of the input fields
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  // sends the new input values to saga
  submitSearch = () => {
    this.props.dispatch({
      type: 'SEARCH_SHEET_MUSIC',
      payload: {
        instrument: this.state.instrument,
        difficulty: this.state.difficulty,
        name: this.state.name
      }
    });
  };

  // reset search values
  resetSearch = () => {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    })
    this.setState({
      instrument: '',
      difficulty: 0,
      name: '',
    })
  };

  render() {
    // for material ui
    const { classes } = this.props;
    return (
      <div className="adminSearch">
        <h3>Search Music</h3>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="instrument">
            Instrument
          </InputLabel>
          <Select
            name='instrument'
            value={this.state.instrument}
            onChange={this.handleInputChange}
            inputProps={{
              name: 'instrument',
            }}
          >
            <MenuItem value={'Tenor'}>Tenor</MenuItem>
            <MenuItem value={'Seconds'}>Seconds</MenuItem>
            <MenuItem value={'Cello'}>Cello</MenuItem>
            <MenuItem value={'Bass'}>Bass</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="difficulty">
            Difficulty
          </InputLabel>
          <Select
            name='difficulty'
            value={this.state.difficulty}
            onChange={this.handleInputChange}
            inputProps={{
              name: 'difficulty',
            }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="name">
            Name of Song
            </InputLabel>
          <TextField
            onChange={this.handleInputChange}
            name='name'
            value={this.state.name}
            className={classes.textField}
          >
          </TextField>
        </FormControl>
        <br />
        <Button variant="outlined" color="primary" onClick={this.submitSearch}>Submit Search</Button>
        {' '}
        <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button>
      </div>
    )
  };
};

export default connect()(withStyles(styles)(SearchSheetMusic));
