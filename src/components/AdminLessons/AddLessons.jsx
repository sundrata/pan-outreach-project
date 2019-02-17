import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

// material ui imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
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

class AddLesson extends Component {
  state = {
    edit: false, //this state controls whether or not to display edit dialog
    open: false, //state for add lesson plan dialog
    name: '', //state for new/edit lesson plan name
    category_id: 0, //state for new/edit lesson plan category
    file: '', //state for file associated with lesson plan
    pdfView: false,
    addAlert: false,
  }

  //add lesson plan dialog state
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      pdfView: false,
      addAlert: false,
    });
  };

  //handlers for adding new lesson plan
  handleSubmit = () => {
    this.setState({
      open: false,
      addAlert: true
    });
    // event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    formData.append('name', this.state.name);
    formData.append('category_id', this.state.category_id);
    axios.post(`/api/upload/lesson-plan`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log('response:', response.data.Location);
      this.props.dispatch({
        type: 'ADD_LESSON_SNACK'
      });
      this.props.dispatch({
        type: 'FETCH_LESSON'
      });
      // handle your response;
    }).catch(error => {
      console.log('error in posting file or submitting state', error);

    });
  }
  // add name to lesson
  handleName = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  };
  // add category name to lesson
  handleCategory = (event) => {
    this.setState({
      ...this.state,
      category_id: event.target.value,
    });
  }
  // upload file
  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  };
  //handlers for categories
  handleCatOpen = () => {
    this.setState({
      ...this.state,
      open2: true
    })
  }
  // set new category
  handleNewCategory = (event) => {
    this.setState({
      ...this.state,
      category: event.target.value,
    });
  }
  // delete category
  deleteCategory = (row) => {
    this.props.dispatch({ type: 'DELETE_CATEGORY', payload: row.id })
  }
  // handle add category
  handleAddCat = () => {
    this.props.dispatch({ type: 'POST_CATEGORY', payload: this.state })
    this.handleClose();
  }

  //pdf handlers
  handlePdf = (row) => {
    console.log('hitting handle click open', row);
    let fileExtension = row.url.split('.').pop();
    console.log(fileExtension);
    this.setState({
      pdfView: true,
      url: row.url,
      name: row.name,
      fileType: fileExtension,
    });
  };

  render() {
    const { classes, categoryReducer } = this.props;

    return (
      <div>
        <Container>
          <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Add Lesson Plan
            </Button>
          </div>
        </Container>
        <br />
        <form className={classes.container}>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add Lesson Plan</DialogTitle>
            <DialogContent>
              <FormControl className={classes.formControl} required>
              <TextField
                autoFocus
                margin="dense"
                id="newLessonName"
                label="Lesson Name"
                type="text"
                onChange={this.handleName}
                value={this.state.name}
                fullWidth
              />
              </FormControl>
              <br />
              <FormControl className={classes.formControl} required>
                <InputLabel htmlFor="category-simple">Category</InputLabel>
                <Select
                  value={this.state.category_id}
                  onChange={this.handleCategory}
                  label="Category"
                  inputProps={{
                    name: 'category',
                    id: 'category-simple'
                  }}
                >
                  {categoryReducer.map((row) => (
                      <MenuItem
                        value={row.id}
                        key={row.id}
                      >
                        {row.name}
                      </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <input label='upload file' type='file' onChange={this.handleFileUpload} />
            </DialogContent>

            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              {this.state.name && this.state.category_id && this.state.file ?
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

const mapStateToProps = reduxStore => ({
  categoryReducer: reduxStore.categoryReducer,
});

export default connect(mapStateToProps)(withStyles(styles)(AddLesson))
