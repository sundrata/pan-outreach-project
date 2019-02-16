import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Switch from '@material-ui/core/Switch';
import EditSchool from './EditSchool';

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

class SchoolTable extends Component {

  state = {
    editMode: false,
    selectedSchool: {},
  }

  handleDelete = (id) => {
    var result = window.confirm("Are you sure you want to delete this?");
    if (result) {
      this.props.dispatch({ type: 'DELETE_PERSON', payload: id })
    }
  }

  handleEdit = (school) => {
    this.setState({ editMode: true, selectedSchool: school });
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }

  toggleActive = (row) => {
    this.props.dispatch({ type: 'UPDATE_ACTIVE', payload: row })
  }

  toggleAdmin = (row) => {
    this.props.dispatch({ type: 'UPDATE_ADMIN', payload: row })
  }

  render() {
    const { classes, schools } = this.props;
    return (
      <div className={classes.root}>
        <Paper className='adminTable'>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell>School Name</CustomTableCell>
                <CustomTableCell align="right">Username</CustomTableCell>
                <CustomTableCell align="right">Date Created</CustomTableCell>
                <CustomTableCell align="right">Active Account</CustomTableCell>
                <CustomTableCell align="right">Admin Privileges</CustomTableCell>
                <CustomTableCell align="right">Edit</CustomTableCell>
                <CustomTableCell align="right">Delete</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schools.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">{row.school_name}</CustomTableCell>
                  <CustomTableCell align="right">{row.username}</CustomTableCell>
                  <CustomTableCell align="right">{moment(row.creation_date).format('MMMM Do YYYY')}</CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.toggleActive(row)}>
                    <Switch
                      id='active-switch'
                      checked={row.active}
                      value={row.active}
                      color="primary"
                    />
                  </CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.toggleAdmin(row)}>
                    <Switch
                      id='admin-switch'
                      checked={row.admin}
                      value={row.admin}
                      color="secondary"
                    />
                  </CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleEdit(row)}><EditIcon /></CustomTableCell>
                  <CustomTableCell align="right" className={classes.clickCell} onClick={() => this.handleDelete(row.id)}><DeleteIcon /></CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {this.state.editMode ?
          <EditSchool school={this.state.selectedSchool} toggleEditMode={this.toggleEditMode} />
          :
          null
        }
      </div>
    )
  }
}

SchoolTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxStore => {
  return {
    schools: reduxStore.personReducer,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(SchoolTable));
