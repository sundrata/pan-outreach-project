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

class SearchLessons extends Component {
  state = {
    searchCategory: 0, //state for sorting by category
    searchName: null, //state for searching by name
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
  };

  // reset search values
  resetSearch = () => {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    })
    this.setState({
      searchInstrument: '',
      searchDifficulty: 0,
      searchName: '',
    })
  };
  render() {
    // for material ui
    const { classes, categoryReducer } = this.props;
    return (
      <div className="adminSearch">
        <h3>Search Lessons</h3>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="searchName">
            Lesson Name
          </InputLabel>
          <TextField 
            onChange={this.handleSearchChange} 
            name='searchName' 
            value={this.state.searchName}
            className={classes.textField}
          >
          </TextField>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="searchDifficulty">
            Category
          </InputLabel>
          <Select
            name='searchCategory'
            value={this.state.searchCategory}
            onChange={this.handleSearchChange}
            inputProps={{
              name: 'searchCategory',
            }}
          >
            {categoryReducer.map(row => (
              <MenuItem 
                value={row.id} 
                key={row.id}
              >
                {row.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <br />
        <Button variant="outlined" color="primary" onClick={this.submitSearch}>Submit Search</Button>
        {' '}
        <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button>
      </div>
    )
  };
};

const mapStateToProps = reduxStore => ({
  categoryReducer: reduxStore.categoryReducer
});

export default connect(mapStateToProps)(withStyles(styles)(SearchLessons));
