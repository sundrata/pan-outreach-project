import React, { Component } from 'react';
import { connect } from 'react-redux'

// material ui imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// icon imports 
import ViewIcon from '@material-ui/icons/PersonalVideo'
// table & buttons 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// PDF Viewer
import FileViewer from 'react-file-viewer';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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

class StudentLessonsTable extends Component {
  state = {
    open: false, //state for view pdf
    fileType: ''
  }

  //pdf view handlers
  handleClickOpen = (row) => {
    console.log('hitting handle click open', row);
    let fileExtension = row.url.split('.').pop();
    console.log(fileExtension);
    this.setState({
      open: true,
      url: row.url,
      name: row.name,
      fileType: fileExtension,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, lessonReducer } = this.props;

    return (
      <div className={classes.root}>
        <Paper className='adminTable'>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell>Lesson Name</CustomTableCell>
                <CustomTableCell align="right">Category</CustomTableCell>
                <CustomTableCell align="right">View</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lessonReducer.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.category_name}</CustomTableCell>
                  <CustomTableCell
                    align="right"
                    className={classes.clickCell}
                    onClick={() => this.handleClickOpen(row)}
                  >
                    <ViewIcon />
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        {/* pdf box */}
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
        >
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <FileViewer
            fileType={this.state.fileType}
            filePath={this.state.url} />
        </Dialog>
      </div>
    )
  };
};

StudentLessonsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => {
  return {
    lessonReducer: reduxStore.lessonReducer
  }
}

export default connect(mapStateToProps)(withStyles(styles)(StudentLessonsTable));