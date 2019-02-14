import React, { Component } from 'react';
import { connect } from 'react-redux'

// material ui imports
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import FileViewer from 'react-file-viewer';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class StudentMusicTable extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    })
  };

  state = {
    open: false,
    url: '',
    fileType: ''
  };

  //dialog handlers
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
    return (
      <>
        <Paper>
          <Table className="adminTable">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Instrument</TableCell>
                <TableCell align="center">Difficulty</TableCell>
                <TableCell align="center">File</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxStore.sheetMusicReducer.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.instrument}</TableCell>
                    <TableCell align="center">{row.difficulty} </TableCell>
                    <TableCell align="center">
                      <Button onClick={() => this.handleClickOpen(row)}>View</Button>
                    </TableCell>
                  </TableRow>
                )
              }
              )}
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
          <br></br>
          <br></br>
          <FileViewer
            fileType={this.state.fileType}
            filePath={this.state.url} />
        </Dialog>
      </>
    )
  };
};

const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(StudentMusicTable);