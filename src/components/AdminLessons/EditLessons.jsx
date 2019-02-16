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

class EditLessons extends Component {
  state = {
    open: true,
    name: this.props.lessons.name,
    category_id: this.props.lessons.category_id,
    category_name: this.props.lessons.category_name,
    // file: this.props.lessons.url,
    id: this.props.lessons.id,
  }

  handleClose = () => {
    this.setState({
      name: '',
      category_id: '',
      file: '',
      id: '',
    })
    this.props.toggleEditMode();
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = () => {
    this.props.dispatch({ 
      type: 'UPDATE_LESSON', 
      payload: this.state 
    })
    this.handleClose();
  }

  render() {
    const { classes, categoryReducer } = this.props;
    console.log(this.state);
    
    return (
      <div>
        <form className={classes.container} >
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle id="form-dialog-title">Edit Lesson</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="normal"
                label="Lesson Name"
                name="name"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.name}
                className={classes.textField}
              />
              <br />
              <FormControl className={classes.formControl} required>
                <InputLabel htmlFor="category-simple">Category</InputLabel>
                <Select
                  value={this.state.category_id}
                  onChange={this.handleInputChange}
                  inputProps={{
                    name: 'category',
                    id: 'category-simple'
                  }}
                > 
                  {categoryReducer.map(row => (
                      <MenuItem 
                        value={row.id}
                        key={row.id}
                      >
                        {row.name}
                      </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} variant="contained" color="primary">
                Update
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxStore => ({
  categoryReducer: reduxStore.categoryReducer
});

export default connect(mapStateToProps)(withStyles(styles)(EditLessons))
