import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import AdminNav from '../AdminNav/AdminNav';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
class AdminLessons extends Component {
  state = {
    edit: false, //this state controls whether or not to display edit dialog
    open: false, //state for add lesson plan dialog
    open2: false, //state for manage categories dialog
    name: '',//state for new/edit lesson plan name
    category_id: 0,//state for new/edit lesson plan category
    file: '', //state for file associated with lesson plan
    category: '', //state for adding new category 
  }
  //delete lesson plan dispatch
  deleteLesson = (row) => {
    this.props.dispatch({ type: 'DELETE_LESSON', payload: row.id })
  }
  //add lesson plan dialog state 
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      open2: false,
      edit: false
    });
  };
  //handlers for adding new lesson plan
  handleClick = () => {
    this.props.dispatch({ type: 'POST_LESSON', payload: this.state })
    this.handleClose();
  }
  handleName = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  };
  handleCategory = (event) => {
    this.setState({
      ...this.state,
      category_id: event.target.value,
    });
  }
  //handlers for categories
  handleCatOpen = () => {
    this.setState({
      ...this.state,
      open2: true
    })
  }
  handleNewCategory = (event) => {
    this.setState({
      ...this.state,
      category: event.target.value,
    });
  }

  deleteCategory = (row) => {
    this.props.dispatch({ type: 'DELETE_CATEGORY', payload: row.id })
  }

  handleAddCat = () => {
    this.props.dispatch({ type: 'POST_CATEGORY', payload: this.state })
    this.handleClose();
  }
  //edit category handlers
  editLesson = (row) => {
    this.setState({ id: row.id });
    this.setState({ edit: true });
  }

  //edit lesson plan handlers
  editHandleClick = () => {
    this.props.dispatch({ type: 'UPDATE_LESSON', payload: this.state })
    this.handleClose();
  }
  render() {
    return (
      this.state.edit ?
        <Dialog
          open={this.state.edit}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Lesson Plan</DialogTitle>
          <DialogContent>
            {/* Lesson Plan Name input */}
            <TextField
              autoFocus
              margin="dense"
              id="newUsername"
              label="Plan Name"
              type="text"
              onChange={this.handleName}
              value={this.state.name}
              fullWidth
            />
            {/* select lesson plan category */}
            <DialogContentText>Select Category: <span><Select
              value={this.state.category_id}
              onChange={this.handleCategory}
              label="Category"
              inputProps={{
                name: 'category',
              }}
            > <option value="none" default disabled>
                Select Category
              </option>
              {this.props.reduxStore.categoryReducer.map((row) => {
                return (
                  <MenuItem value={row.id}>{row.name}</MenuItem>
                )
              })}
            </Select></span></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
                            </Button>
            <Button onClick={() => this.editHandleClick()} color="primary">
              Submit
                            </Button>
          </DialogActions>
        </Dialog>
        :
        <div>
          <AdminNav />
          <div>
            <h1 className="heading">
              Lesson Plans
        </h1>
            <center>
              {/* start add school */}
              <div >
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                  Add Lesson Plan
                        </Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Add Lesson Plan</DialogTitle>
                  <DialogContent>
                    {/* Lesson Plan Name input */}
                    <TextField
                      autoFocus
                      margin="dense"
                      id="newUsername"
                      label="Plan Name"
                      type="text"
                      onChange={this.handleName}
                      value={this.state.name}
                      fullWidth
                    />
                    {/* select lesson plan category */}
                    <DialogContentText>Select Category: <span><Select
                      value={this.state.category_id}
                      onChange={this.handleCategory}
                      label="Category"
                      inputProps={{
                        name: 'category',
                      }}
                    > <option value="none" default disabled>
                        Select Category
              </option>
                      {this.props.reduxStore.categoryReducer.map((row) => {
                        return (
                          <MenuItem value={row.id}>{row.name}</MenuItem>
                        )
                      })}
                    </Select></span></DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                            </Button>
                    <Button onClick={() => this.handleClick()} color="primary">
                      Submit
                            </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <div><Button variant="outlined" color="primary" onClick={this.handleCatOpen}>
                Manage Categories
                        </Button>
                <Dialog
                  open={this.state.open2}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
                  <DialogContent>
                    {/* Lesson Plan Name input */}
                    <TextField
                      autoFocus
                      margin="dense"
                      id="newCategory"
                      label="Category Name"
                      type="text"
                      onChange={this.handleNewCategory}
                      value={this.state.category}
                      fullWidth
                    />
                    <hr></hr>
                    <DialogContentText>Existing Categories:</DialogContentText>
                    <Paper>
                      <Table className="adminTable">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">Category Name</TableCell>
                            <TableCell align="center">Delete</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.props.reduxStore.categoryReducer.map((row) => {
                            return (
                              <TableRow key={row.id}>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center"><Button onClick={() => this.deleteCategory(row)}>Delete</Button></TableCell>
                              </TableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                    </Paper>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                            </Button>
                    <Button onClick={() => this.handleAddCat()} color="primary">
                      Submit
                            </Button>
                  </DialogActions>
                </Dialog></div>
              {/* end add school */}
              <Paper>
                <Table className="adminTable">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Lesson Name</TableCell>
                      <TableCell align="center">Category</TableCell>
                      <TableCell align="center">Edit</TableCell>
                      <TableCell align="center">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.reduxStore.lessonReducer.map((row) => {
                      return (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.category_name}</TableCell>
                          <TableCell align="center"><Button onClick={() => this.editLesson(row)}>Edit</Button></TableCell>
                          <TableCell align="center"><Button onClick={() => this.deleteLesson(row)}>Delete</Button></TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Paper>
              <button onClick={() => this.logState()}>log state</button>
            </center>
          </div>
        </div>
    )
  }
};

const mapStateToProps = reduxStore => ({
  reduxStore,
});
export default connect(mapStateToProps)(AdminLessons);