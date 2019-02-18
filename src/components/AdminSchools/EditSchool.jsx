import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import Switch from '@material-ui/core/Switch';

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
    admin: this.props.school.admin,
    password: '',
    id: this.props.school.id,
  }

  handleClose = () => {
    this.setState({
      school_name: '',
      username: '',
      password: '',
      admin: '',
      id: '',
    })
    this.props.toggleEditMode()
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleAdminChange = (event) => {
    this.setState({
      admin: !this.state.admin,
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
            <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
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
                label="New Password"
                name="password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleInputChange}
                margin="normal"
              />
              <br/>
              <DialogContentText>
                Admin Privileges
              </DialogContentText>
              <Switch
                id='admin-switch'
                checked={this.state.admin}
                value={this.state.admin}
                color="secondary"
                onChange={this.handleAdminChange}
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
