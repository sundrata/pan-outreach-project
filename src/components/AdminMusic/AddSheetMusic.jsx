import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const Container = styled.div`
 text-align: center;
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    marginLeft: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
  },
});

class AddSheetMusic extends Component {
  state = {
    open: false,
    name: '',
    instrument: '',
    difficulty: '',
    file: '',
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      name: '',
      instrument: '',
      difficulty: '',
      file: '',
    })
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    formData.append('name', this.state.name);
    formData.append('instrument', this.state.instrument);
    formData.append('difficulty', this.state.difficulty);
    axios.post(`/api/upload/sheet-music`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      this.props.dispatch({
        type: 'ADD_MUSIC_SNACK'
      })
      this.props.dispatch({
        type: 'GET_SHEET_MUSIC'
      });
      // handle your response;
    }).catch(error => {
      console.log('error in posting file or submitting state', error);
    });
    this.handleClose();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container>
          <div>
            <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleClickOpen}>
              Add New Sheet Music
            </Button>
          </div>
        </Container>
        <br />
        <form className={classes.container} >
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle id="form-dialog-title">New Sheet Music</DialogTitle>
            <DialogContent>
              <TextField
                required
                label="Name"
                name="name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleInputChange}
                margin="normal"
              />
              <br />
              <FormControl className={classes.formControl} required>
                <InputLabel htmlFor="instrument-simple">Instrument</InputLabel>
                <Select
                  required
                  value={this.state.instrument}
                  onChange={this.handleInputChange}
                  inputProps={{
                    name: 'instrument',
                    id: 'instrument-simple',
                  }}
                >
                  <MenuItem value={'Tenor'}>Tenor</MenuItem>
                  <MenuItem value={'Seconds'}>Seconds</MenuItem>
                  <MenuItem value={'Cello'}>Cello</MenuItem>
                  <MenuItem value={'Bass'}>Bass</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl className={classes.formControl} required>
                <InputLabel htmlFor="difficulty-simple">Difficulty</InputLabel>
                <Select
                  value={this.state.difficulty}
                  onChange={this.handleInputChange}
                  inputProps={{
                    name: 'difficulty',
                    id: 'difficulty-simple',
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <br/>
              <input label='upload file' type='file' onChange={this.handleFileUpload} />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              {this.state.name && this.state.instrument && this.state.difficulty && this.state.file ?
                <Button onClick={this.handleSubmit} variant="contained" color="primary">
                  Submit
                </Button>
                :
                <Button variant="contained" color="primary" disabled >
                  Submit
                </Button>
              }
            </DialogActions>
          </Dialog>
        </form>
      </div>
    )
  }
}


export default connect()(withStyles(styles)(AddSheetMusic))
