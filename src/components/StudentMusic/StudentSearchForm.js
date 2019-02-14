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

class StudentSearchForm extends Component {
  state = {
    id: 0,
    searchInstrument: '',
    searchDifficulty: 0,
    searchName: '',
  };

  // changes the values of the input fields
  handleSearchChange = (event) => {
    console.log('event was here', this.state)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value

    })
  };

  // sends the new input values to saga
  submitSearch = () => {
    this.props.dispatch({
      type: 'SEARCH_SHEET_MUSIC', 
      payload: { 
          instrument: this.state.searchInstrument, 
          difficulty: this.state.searchDifficulty, 
          name: this.state.searchName 
        }
    });
    this.setState({
      searchName: ''
    });
  };

  // resets the search values to ''
  resetSearch = () => {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    })

    this.setState({
      id: 0,
      searchInstrument: '',
      searchDifficulty: 0,
      searchName: '',
    })
  };
  render() {
    // for material ui 
    const { classes } = this.props;
    return (
      <div className="studentSearch">
        <h3>Search Music</h3>
        
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="searchInstrument">
            Instrument
          </InputLabel>
          <Select
            name='searchInstrument'
            value={this.state.searchInstrument}
            onChange={this.handleSearchChange}
            inputProps={{
              name: 'searchInstrument',
            }}
          >
            <MenuItem value={'Tenor'}>Tenor</MenuItem>
            <MenuItem value={'Seconds'}>Seconds</MenuItem>
            <MenuItem value={'Cello'}>Cello</MenuItem>
            <MenuItem value={'Bass'}>Bass</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="searchDifficulty">
            Difficulty
            </InputLabel>
          <Select
            name='searchDifficulty'
            value={this.state.searchDifficulty}
            onChange={this.handleSearchChange}
            inputProps={{
              name: 'searchDifficulty',
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
          <InputLabel shrink htmlFor="searchName">
            Name of Song
            </InputLabel>
          <TextField
            onChange={this.handleSearchChange}
            name='searchName'
            value={this.state.searchName}
            className={classes.textField}
          >
          </TextField>
        </FormControl>

        <Button variant="outlined" color="primary" onClick={this.submitSearch}>Submit Search</Button>
        {' '}
        <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button>
      </div>
    )
  };
};

const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(withStyles(styles)(StudentSearchForm));