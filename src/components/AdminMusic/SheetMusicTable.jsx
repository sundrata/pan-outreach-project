import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import EditSheetMusic from './EditSheetMusic';
import ViewSheetMusic from './ViewSheetMusic';


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

class SheetMusicTable extends Component {

  state = {
    editMode: false,
    viewMode: false,
    selectedSheetMusic: {},
  }

  handleDelete = (id) => {
    var result = window.confirm("Are you sure you want to delete this?");
    if (result) {
      this.props.dispatch({ type: 'DELETE_SHEET_MUSIC', payload: id })
    }
  }

  handleEdit = (sheetMusic) => {
    this.setState({ editMode: true, selectedSheetMusic: sheetMusic });
  }

  handleView = (sheetMusic) => {
    this.setState({ viewMode: true, selectedSheetMusic: sheetMusic });
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }

  toggleViewMode = () => {
    this.setState({ viewMode: !this.state.viewMode });
  }

  render() {
    const { classes, sheetMusic } = this.props;

    return (
      <div className={classes.root}>
        <Paper className='adminTable'>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell align="right">Instrument</CustomTableCell>
                <CustomTableCell align="right">Difficulty</CustomTableCell>
                <CustomTableCell align="right">View</CustomTableCell>
                <CustomTableCell align="right">Edit</CustomTableCell>
                <CustomTableCell align="right">Delete</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sheetMusic.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.instrument}</CustomTableCell>
                  <CustomTableCell align="right">{row.difficulty}</CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleView(row)}><ViewIcon /></CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleEdit(row)}><EditIcon /></CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleDelete(row.id)}><DeleteIcon /></CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {this.state.editMode ?
          <EditSheetMusic sheetMusic={this.state.selectedSheetMusic} toggleEditMode={this.toggleEditMode} />
          :
          null
        }
        {this.state.viewMode ?
          <ViewSheetMusic sheetMusic={this.state.selectedSheetMusic} toggleViewMode={this.toggleViewMode} />
          :
          null
        }
      </div>
    )
  }
}

SheetMusicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxStore => {
  return {
    sheetMusic: reduxStore.sheetMusicReducer,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(SheetMusicTable));
