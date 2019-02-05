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
import InputLabel from '@material-ui/core/InputLabel';


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


  handleClick = () => {
    console.log(this.state);
    
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

  handleInstrumentChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });

    console.log(this.state.instrument);

  }

  handleDifficultyChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });

    console.log(this.state.difficulty);

  }

  handleNameChange = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
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
                  Add New Song
                </DialogContentText>
                {/* Username input for new school */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="File Name"
                  type="text"
                  onChange={this.handleNameChange}
                  value={this.state.name}
                  fullWidth
                />
                <DialogContentText>
                  Choose Instrument
                </DialogContentText>
                <Select
                  value={this.state.instrument}
                  onChange={this.handleInstrumentChange}
                  inputProps={{
                    name: 'instrument',
                  }}
                > 
                  <MenuItem value={'Tenor'}>Tenor</MenuItem>
                  <MenuItem value={'Seconds'}>Seconds</MenuItem>
                  <MenuItem value={'Cello'}>Cello</MenuItem>
                  <MenuItem value={'Bass'}>Bass</MenuItem>
                </Select>
                <DialogContentText>
                  Choose Difficulty
                </DialogContentText>
                <Select
                  value={this.state.difficulty}
                  onChange={this.handleDifficultyChange}
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