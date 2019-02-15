import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';

// component imports
import EditLessons from './EditLessons';
import ViewLessons from './ViewLessons';

// material ui imports
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ViewIcon from '@material-ui/icons/PersonalVideo';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#fc9102',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  clickCell: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
});

class LessonsTable extends Component {
  state = {
    editMode: false,
    viewMode: false,
    selectedLessons: {},
  }
  
  handleDelete = (id) => {
    var result = window.confirm("Are you sure you want to delete this?");
    if (result) {
      this.props.dispatch({ 
        type: 'DELETE_LESSON',
        payload: id 
      })
    }
  }

  handleEdit = (lessons) => {
    console.log(lessons);
    
    this.setState({ editMode: true, selectedLessons: lessons });
  }

  handleView = (lessons) => {
    console.log(lessons);
     
    this.setState({ viewMode: true, selectedLessons: lessons });
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }

  toggleViewMode = () => {
    this.setState({ viewMode: !this.state.viewMode });
  }

  render() {
    const { classes, lessonReducer } = this.props;

    return (
      <div className={classes.root}>
        <Paper className='adminTable'>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell align="right">Category</CustomTableCell>
                <CustomTableCell align="right">View</CustomTableCell>
                <CustomTableCell align="right">Edit</CustomTableCell>
                <CustomTableCell align="right">Delete</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lessonReducer.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.category_name}</CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleView(row)}><ViewIcon /></CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleEdit(row)}><EditIcon /></CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleDelete(row.id)}><DeleteIcon /></CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {this.state.editMode ?
          <EditLessons lessons={this.state.selectedLessons} toggleEditMode={this.toggleEditMode} />
          :
          null
        }
        {this.state.viewMode ?
          <ViewLessons lessons={this.state.selectedLessons} toggleViewMode={this.toggleViewMode} />
          :
          null
        }
      </div>
    )
  }
}

LessonsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxStore => {
  return {
    lessonReducer: reduxStore.lessonReducer,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(LessonsTable));
