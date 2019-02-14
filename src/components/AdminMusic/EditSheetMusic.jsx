import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
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

class EditSheetMusic extends Component {
  state = {
    open: true,
    name: this.props.sheetMusic.name,
    instrument: this.props.sheetMusic.instrument,
    difficulty: this.props.sheetMusic.difficulty,
    id: this.props.sheetMusic.id,
  }

  handleClose = () => {
    this.setState({
      name: '',
      instrument: '',
      difficulty: '',
      id: '',
    })
    this.props.toggleEditMode()
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = () => {
    this.props.dispatch({ type: 'EDIT_SHEET_MUSIC', payload: this.state })
    this.handleClose()
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} >
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle id="form-dialog-title">Edit Sheet Music</DialogTitle>
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
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="instrument-simple">Instrument</InputLabel>
                <Select
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
              <FormControl className={classes.formControl}>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              {this.state.name && this.state.instrument && this.state.difficulty ?
                <Button onClick={this.handleSubmit} variant="contained" color="primary">
                  Update
                </Button>
                :
                <Button variant="contained" color="primary" disabled >
                  Update
                </Button>
              }
            </DialogActions>
          </Dialog>
        </form>
      </div>
    )
  }
}


export default connect()(withStyles(styles)(EditSheetMusic))
