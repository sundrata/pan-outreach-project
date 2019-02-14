import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class SearchSheetMusic extends Component {

  state = {
    name: '',
    instrument: '',
    difficulty: '',
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  resetSearch = () => {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    })
    this.clearInputs()
  };

  submitSearch = () => {
    this.props.dispatch({
      type: 'SEARCH_SHEET_MUSIC',
      payload: {
        instrument: this.state.instrument,
        difficulty: this.state.difficulty,
        name: this.state.name }
    });
    this.clearInputs()
  };

  clearInputs = () => {
    this.setState({
      name: '',
      instrument: '',
      difficulty: '',
    })
  }

  render() {
    return (
      <div>
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
        <TextField onChange={this.handleInputChange} name='name' value={this.state.name}>
        </TextField>
        <Button variant="outlined" color="primary" onClick={this.submitSearch}>Submit Search</Button>
        <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button>
      </div>
    )
  }
}


export default connect()(SearchSheetMusic);
