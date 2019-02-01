import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AdminSchools extends Component {
  state = {
    username: '',
    password: '',
    school_name: '',
    open: false
  }

  //new school handlers
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <div>
          <h1 className="heading">
            Schools
        </h1>
          <center>
            {/* start add employee */}
            <div className="addEmpDialog">
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                Add New School
                        </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Add School</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add a new school
                            </DialogContentText>
                  {/* Username input for new school */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="newUsername"
                    label="Username"
                    type="text"
                    onChange={this.handleUsername}
                    value={this.state.username}
                    fullWidth
                  />
                  
                  {/* password input for new school */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="newPassword"
                    label="Password"
                    type="password"
                    onChange={this.handlePassword}
                    value={this.state.password}
                    fullWidth
                  />
                  {/* input for new schools name */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="newName"
                    label="School Name"
                    type="text"
                    onChange={this.handleName}
                    value={this.state.school_name}
                    fullWidth
                  />
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
            {/* end add employee */}
          </center>
          {this.props.reduxStore.personReducer.map((person) => {
            return (
              <ul>
                <li key={person.id}>{person.admin ? null : <span>{person.school_name} {person.creation_date}</span>}</li>
              </ul>
            )
          })}
        </div>
      </div>
    )
  }
};

const mapStateToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStateToProps)(AdminSchools);