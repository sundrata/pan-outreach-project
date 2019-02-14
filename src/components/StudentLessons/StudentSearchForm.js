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
    width: 260,
  },
});

class StudentSearchForm extends Component {
  state = {
    searchCategory: 0,
    searchName: '',
  }

  // changes the input values
  handleSearchChange = (event) => {
    console.log('event was here', this.state)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  // sends the new values to saga
  submitSearch = () => {
    this.props.dispatch({
      type: 'SEARCH_LESSON',
      payload: {
        category: this.state.searchCategory,
        name: this.state.searchName
      }
    });
    this.setState({
      searchCategory: 0,
      searchName: ''
    });
  }

  // resets the values to ''
  resetSearch = () => {
    this.props.dispatch({
      type: 'FETCH_LESSON'
    });
    this.setState({
      searchCategory: 0,
      searchName: ''
    });
  }

  render() {
    // for material ui 
    const { classes } = this.props;
    return (
      <div className="studentSearch">
        <h3>Search Lessons</h3>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="searchCategory">
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
            {this.props.reduxStore.categoryReducer.map((row) => {
              return (
                <MenuItem value={row.id}>{row.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="searchName">
            Lesson Title
          </InputLabel>
          <TextField 
            onChange={this.handleSearchChange} 
            name='searchName' 
            value={this.state.searchName}
            className={classes.textField}
          >
          </TextField>
        </FormControl>

        <Button 
          variant="outlined" 
          color="primary" 
          onClick={this.submitSearch} 
          value={this.state.searchName}
        >
          Submit Search
        </Button>
        {' '}
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={this.resetSearch}
        >
          Reset Search
        </Button>
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