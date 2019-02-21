import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Switch from '@material-ui/core/Switch';

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
    username: '',
    password: '',
    school_name: '',
    admin: '',
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      username: '',
      password: '',
      school_name: '',
      admin: false,
    })
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

  handleSubmit = (event) => {
    this.props.dispatch({ type: 'POST_PERSON', payload: this.state });
    this.handleClose();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container>
          <div>
            <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleClickOpen}>
              Add New User
            </Button>
          </div>
        </Container>
        <br />
        <form className={classes.container} >
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle id="form-dialog-title">New User</DialogTitle>
            <DialogContent>
              <TextField
                required
                label="School/Name"
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
