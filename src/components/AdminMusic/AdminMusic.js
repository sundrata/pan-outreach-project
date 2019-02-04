import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class AdminMusic extends Component {
  state = {
    name: '',
    url: '',
    instrument: null,
    difficulty: null,
    open: false,
    hidden: false,
    active: this.props.active
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleName = (event) => {
    this.setState({
      school_name: event.target.value
    })
  }
  handleClick = () => {
    this.props.dispatch({ type: 'POST_PERSON', payload: this.state })
    this.setState({ open: false });
  }

  //dialog handlers
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //slider handlers
  handleHiddenChange = (event, hidden) => {
    this.setState(state => ({
      hidden,
      // hidden implies !open
      open: hidden ? false : state.open,
    }));
  };

  handleSliderChange = () => {
    this.setState({
      active: false,
    });
    console.log('hit handleSlider:', this.state.active);
    this.props.dispatch({ type: 'UPDATE_PERSON', payload: this.state })
  }

  //handle delete
  deleteSchool = (row) => {
    this.props.dispatch({ type: 'DELETE_PERSON', payload: row.id })
  }
  render() {
    return (
      <div>
        <h1 className="heading">
          Sheet Music
        </h1>
        <center>
          <div>
            {/* start add new music */}
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Add New Music
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Add Music</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Add new song
                            </DialogContentText>
                {/* Username input for new school */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="name"
                  type="text"
                  onChange={this.handleName}
                  value={this.state.name}
                  fullWidth
                />
                <Select
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
               
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
            {/* ends add new music */}
          </div>
        </center>
      </div>
    )
  }
}

export default AdminMusic;