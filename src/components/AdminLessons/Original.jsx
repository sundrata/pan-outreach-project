import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FileViewer from 'react-file-viewer';

class AdminLessons extends Component {
  state = {
    edit: false, //this state controls whether or not to display edit dialog
    open: false, //state for add lesson plan dialog
    open2: false, //state for manage categories dialog
    name: '',//state for new/edit lesson plan name
    category_id: 0,//state for new/edit lesson plan category
    file: '', //state for file associated with lesson plan
    category: '', //state for adding new category
    searchCategory: 0, //state for sorting by category
    searchName: null, //state for searching by name
    pdfView: false,
    addAlert: false,
  }
  //delete lesson plan dispatch
  deleteLesson = (row) => {
    this.props.dispatch({ type: 'DELETE_LESSON', payload: row.id })
  }
  //add lesson plan dialog state
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      open2: false,
      edit: false,
      pdfView: false,
      addAlert: false,
      delAlert: false
    });
  };
  //handlers for adding new lesson plan
  handleClick = () => {
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
  handleName = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  };
  handleCategory = (event) => {
    this.setState({
      ...this.state,
      category_id: event.target.value,
    });
  }
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
  handleNewCategory = (event) => {
    this.setState({
      ...this.state,
      category: event.target.value,
    });
  }

  deleteCategory = (row) => {
    this.props.dispatch({ type: 'DELETE_CATEGORY', payload: row.id })
  }

  handleAddCat = () => {
    this.props.dispatch({ type: 'POST_CATEGORY', payload: this.state })
    this.handleClose();
  }
  //edit category handlers
  editLesson = (row) => {
    this.setState({ id: row.id });
    this.setState({ edit: true });
  }
  //sort and search handlers
  handleSearchChange = (event) => {
    console.log('event was here', this.state)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  submitSearch = () => {
    this.props.dispatch({
      type: 'SEARCH_LESSON', payload: { category: this.state.searchCategory, name: this.state.searchName }
    });
    this.setState({
      searchCategory: 0,
      searchName: ''
    });
  }

  resetSearch = () => {
    this.props.dispatch({
      type: 'FETCH_LESSON'
    });
    this.setState({
      searchCategory: 0,
      searchName: ''
    });
  }
  //edit lesson plan handlers
  editHandleClick = () => {
    this.setState({ edit: false });
    // event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    formData.append('id', this.state.id);
    formData.append('name', this.state.name);
    formData.append('category_id', this.state.category_id);
    axios.put(`/api/upload/edit-lesson-plan`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log('response:', response.data.Location);
      this.props.dispatch({
        type: 'EDIT_LESSON_SNACK'
      });
      this.props.dispatch({
        type: 'FETCH_LESSON'
      });
      // handle your response;
    }).catch(error => {
      console.log('error in editing file or submitting state', error);

    });
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
    const isEnabled = this.state.name.length > 0 && this.state.file.length > 0 && this.state.category_id > 0;
    return (
      this.state.edit ?
        <>
          <h1 className="heading">
            Lesson Plans
          </h1>
          <center>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Add Lesson Plan
                </Button>
            <DialogContentText>
              Sort by Category
                </DialogContentText>
            <Select
              name='searchCategory'
              value={this.state.searchCategory}
              onChange={this.handleSearchChange}
              inputProps={{
                name: 'searchCategory',
              }}
            >
              {this.props.reduxStore.categoryReducer.map((row) => {
                return (
                  <MenuItem value={row.id}>{row.name}</MenuItem>
                )
              })}
            </Select>
            <DialogContentText>
              Search by Lesson Name
              </DialogContentText>
            <TextField onChange={this.handleSearchChange} name='searchName' value={this.state.searchName}>
            </TextField><br></br>
            <Button variant="outlined" color="primary" onClick={this.submitSearch}>Submit Search</Button>
            <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button><br></br>
            <Button variant="outlined" color="primary" onClick={this.handleCatOpen}>Manage Categories</Button>
            <Paper>
              <Table className="adminTable">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Lesson Name</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">.PDF</TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.reduxStore.lessonReducer.map((row) => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.category_name}</TableCell>
                        <TableCell align="center"><Button onClick={() => this.handlePdf(row)}>View</Button></TableCell>
                        <TableCell align="center"><Button onClick={() => this.editLesson(row)}>Edit</Button></TableCell>
                        <TableCell align="center"><Button onClick={() => this.deleteLesson(row)}>Delete</Button></TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Paper>
          </center>
          <Dialog
            open={this.state.edit}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Edit Lesson Plan</DialogTitle>
            <DialogContent>
              {/* Lesson Plan Name input */}
              <TextField
                autoFocus
                margin="dense"
                id="newUsername"
                label="Plan Name"
                type="text"
                onChange={this.handleName}
                value={this.state.name}
                fullWidth
              />
              {/* select lesson plan category */}
              <DialogContentText>Select Category: <span><Select
                value={this.state.category_id}
                onChange={this.handleCategory}
                label="Category"
                inputProps={{
                  name: 'category',
                }}
              > <option value="none" default disabled>
                  Select Category
              </option>
                {this.props.reduxStore.categoryReducer.map((row) => {
                  return (
                    <MenuItem value={row.id}>{row.name}</MenuItem>
                  )
                })}
              </Select></span></DialogContentText>
              <form onSubmit={this.submitFile}>
                <input label='upload file' type='file' onChange={this.handleFileUpload} />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
                            </Button>
              <Button disabled={!isEnabled} onClick={() => this.editHandleClick()} color="primary">
                Submit
                            </Button>
            </DialogActions>
          </Dialog>
        </>
        :
        <div>

          <div>
            <h1 className="heading">
              Lesson Plans
        </h1>
            <center>
              {/* start add school */}
              <div >
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                  Add Lesson Plan
                </Button>
                <DialogContentText>
                  Sort by Category
                </DialogContentText>
                <Select
                  name='searchCategory'
                  value={this.state.searchCategory}
                  onChange={this.handleSearchChange}
                  inputProps={{
                    name: 'searchCategory',
                  }}
                >
                  {this.props.reduxStore.categoryReducer.map((row) => {
                    return (
                      <MenuItem value={row.id}>{row.name}</MenuItem>
                    )
                  })}
                </Select>
                <DialogContentText>
                  Search by Lesson Name
                </DialogContentText>
                <TextField onChange={this.handleSearchChange} name='searchName' value={this.state.searchName}>
                </TextField><br></br>
                <Button variant="outlined" color="primary" onClick={this.submitSearch}>Submit Search</Button>
                <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button>
                {/* end sort and search */}
                {/* pdf box */}
                <Dialog
                  fullScreen
                  open={this.state.pdfView}
                  onClose={this.handleClose}
                >
                  <AppBar>
                    <Toolbar>
                      <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <br></br>
                  <br></br>
                  <FileViewer
                    fileType={this.state.fileType}
                    filePath={this.state.url} />
                </Dialog>
                {/* begin add lesson plan */}
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Add Lesson Plan</DialogTitle>
                  <DialogContent>
                    {/* Lesson Plan Name input */}
                    <TextField
                      autoFocus
                      margin="dense"
                      id="newUsername"
                      label="Plan Name"
                      type="text"
                      onChange={this.handleName}
                      value={this.state.name}
                      fullWidth
                    />
                    {/* select lesson plan category */}
                    <DialogContentText>Select Category: <span>
                      <Select
                      value={this.state.category_id}
                      onChange={this.handleCategory}
                      label="Category"
                      inputProps={{
                        name: 'category',
                      }}
                    > <option value="none" default disabled>
                        Select Category
              </option>
                      {this.props.reduxStore.categoryReducer.map((row) => {
                        return (
                          <MenuItem value={row.id}>{row.name}</MenuItem>
                        )
                      })}
                    </Select></span></DialogContentText>
                    <form onSubmit={this.submitFile}>
                      <input label='upload file' type='file' onChange={this.handleFileUpload} />
                      {/* <button type='submit'>Send</button> */}
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                            </Button>
                    <Button disabled={!isEnabled} onClick={() => this.handleClick()} color="primary">
                      Submit
                            </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <div><Button variant="outlined" color="primary" onClick={this.handleCatOpen}>
                Manage Categories
                        </Button>
                <Dialog
                  open={this.state.open2}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
                  <DialogContent>
                    {/* Lesson Plan Name input */}
                    <TextField
                      autoFocus
                      margin="dense"
                      id="newCategory"
                      label="Category Name"
                      type="text"
                      onChange={this.handleNewCategory}
                      value={this.state.category}
                      fullWidth
                    />
                    <hr></hr>
                    <DialogContentText>Existing Categories:</DialogContentText>
                    <Paper>
                      <Table className="adminTable">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">Category Name</TableCell>
                            <TableCell align="center">Delete</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.props.reduxStore.categoryReducer.map((row) => {
                            return (
                              <TableRow key={row.id}>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center"><Button onClick={() => this.deleteCategory(row)}>Delete</Button></TableCell>
                              </TableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                    </Paper>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                            </Button>
                    <Button onClick={() => this.handleAddCat()} color="primary">
                      Submit
                            </Button>
                  </DialogActions>
                </Dialog></div>
              {/* end add school */}
              <Paper>
                <Table className="adminTable">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Lesson Name</TableCell>
                      <TableCell align="center">Category</TableCell>
                      <TableCell align="center">.PDF</TableCell>
                      <TableCell align="center">Edit</TableCell>
                      <TableCell align="center">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.reduxStore.lessonReducer.map((row) => {
                      return (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.category_name}</TableCell>
                          <TableCell align="center"><Button onClick={() => this.handlePdf(row)}>View</Button></TableCell>
                          <TableCell align="center"><Button onClick={() => this.editLesson(row)}>Edit</Button></TableCell>
                          <TableCell align="center"><Button onClick={() => this.deleteLesson(row)}>Delete</Button></TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </center>
          </div>
        </div>
    )
  }
};

const mapStateToProps = reduxStore => ({
  reduxStore,
});
export default connect(mapStateToProps)(AdminLessons);
