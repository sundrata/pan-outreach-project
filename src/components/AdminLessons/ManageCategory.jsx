import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// material ui imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

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

class ManageCategory extends Component {
  state = {
    edit: false, //this state controls whether or not to display edit dialog
    open: false, //state for manage categories dialog
    category: '', //state for adding new category
    addAlert: false,
  }

  handleClose = () => {
    this.setState({
      open: false,
      edit: false,
      category: '',
      pdfView: false,
      addAlert: false,
      delAlert: false
    });
  };

  handleCategory = (event) => {
    this.setState({
      ...this.state,
      category_id: event.target.value,
    });
  }
  
  //handlers for categories
  handleCatOpen = () => {
    this.setState({
      ...this.state,
      open: true
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

  render() {
    const { classes, categoryReducer } = this.props;
    return (
      <div>
        <Container>
          <div>
            <Button variant="outlined" color="primary" onClick={this.handleCatOpen}>
              Manage Categories
            </Button>
          </div>
        </Container>
        <form className={classes.container}>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Manage Category</DialogTitle>
            <DialogContent>
              <FormControl className={classes.formControl} required>
              <TextField
                autoFocus
                margin="normal"
                label="Category Name"
                name="name"
                type="text"
                onChange={this.handleNewCategory}
                value={this.state.category}
                className={classes.textField}
              />
                <br />
                <h3>Existing Categories</h3>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Category Name</TableCell>
                        <TableCell align="center">Delete</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {categoryReducer.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">
                              <Button 
                                onClick={() => this.deleteCategory(row)}
                              >
                                <DeleteIcon />
                              </Button>
                            </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              {this.state.category ?
                <Button onClick={() => this.handleAddCat()} color="primary">
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
  categoryReducer: reduxStore.categoryReducer
});

export default connect(mapStateToProps)(withStyles(styles)(ManageCategory))
