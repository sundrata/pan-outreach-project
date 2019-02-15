import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

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
    open: true,
    school_name: this.props.school.school_name,
    username: this.props.school.username,
    password: '',
    id: this.props.school.id,
  }

  handleClose = () => {
    this.setState({
      school_name: '',
      username: '',
      password: '',
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
    this.props.dispatch({ type: 'UPDATE_PERSON', payload: this.state })
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
            <DialogTitle id="form-dialog-title">Edit School</DialogTitle>
            <DialogContent>
              <TextField
                required
                label="School Name"
                name="school_name"
                className={classes.textField}
                value={this.state.school_name}
                onChange={this.handleInputChange}
                margin="normal"
              />
              <br />
              <TextField
                required
                label="Username"
                name="username"
                className={classes.textField}
                value={this.state.username}
                onChange={this.handleInputChange}
                margin="normal"
              />
              <br />
              <TextField
                required
                type="password"
                label="Password"
                name="password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleInputChange}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              {this.state.school_name && this.state.username && this.state.password ?
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


export default connect()(withStyles(styles)(AddSheetMusic))
