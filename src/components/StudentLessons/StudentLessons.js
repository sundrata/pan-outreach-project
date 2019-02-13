import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DialogContentText from '@material-ui/core/DialogContentText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class StudentLessons extends Component {
  state = {
    searchCategory: 0,
    searchName : ''
  }

  handleSearchChange = (event) => {
    console.log('event was here', this.state)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }
  
  submitSearch = () => {
    this.props.dispatch({
      type: 'SEARCH_LESSON', payload: {category: this.state.searchCategory, name: this.state.searchName}
    });
    this.setState({
      searchCategory: 0,
      searchName : ''
    });
  }

  resetSearch = () => {
    this.props.dispatch({
      type: 'FETCH_LESSON'
    });
    this.setState({
      searchCategory: 0,
      searchName : ''
    });
  }

  render() {
    return (
      <center>
        <h1 className="heading"> Lesson Plans </h1>
        {/* start sort and search */}
        <DialogContentText>
                Sort by Category
                </DialogContentText>
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
              <DialogContentText>
                Search by Lesson Name
              </DialogContentText>
        <TextField onChange={this.handleSearchChange} name='searchName' value={this.state.searchName}>               
              </TextField><br></br>
              <Button variant="outlined" color="primary" onClick={this.submitSearch} value={this.state.searchName}>Submit Search</Button>
              <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button>
              {/* end sort and search */}
        <Paper>
          <Table className="adminTable">
            <TableHead>
              <TableRow>
                <TableCell align="left">Lesson Name</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxStore.lessonReducer.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.category_name}</TableCell>
                    {/* view lesson plan */}
                    <TableCell align="left"><Button onClick={() => this.editLesson(row)}>View</Button></TableCell> 
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </center>
    )
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStateToProps)(StudentLessons);