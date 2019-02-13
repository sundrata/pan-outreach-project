import React, { Component } from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FileViewer from 'react-file-viewer';

import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapStateToProps = (reduxStore) => {
  return{
    reduxStore
  }
}
class StudentMusic extends Component {

  

  componentDidMount(){
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    })
  };

  state = {
    open: false,
    id: 0,
    searchInstrument: '',
    searchDifficulty: 0,
    searchName: '',
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

  handleSearchChange = (event) => {
    console.log('event was here', this.state)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value

    })
  };

  submitSearch = () => {
    this.props.dispatch({
      type: 'SEARCH_SHEET_MUSIC', payload: { instrument: this.state.searchInstrument, difficulty: this.state.searchDifficulty, name: this.state.searchName }
    });
    this.setState({
      searchName: ''
    });
  };

  resetSearch = () => {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    })

    this.setState({
      id: 0,
      searchInstrument: '',
      searchDifficulty: 0,
      searchName: '',

    })

  };



  render() {
    return (
      <div>
        <h1 className="heading">
          Sheet Music
        </h1>
        {/* search feature */}
        <DialogContentText>
          Sort by Instrument
        </DialogContentText>
        <br></br>
        <Select
          name='searchInstrument'
          value={this.state.searchInstrument}
          onChange={this.handleSearchChange}
          inputProps={{
            name: 'searchInstrument',
          }}
        >
          <MenuItem value={'Tenor'}>Tenor</MenuItem>
          <MenuItem value={'Seconds'}>Seconds</MenuItem>
          <MenuItem value={'Cello'}>Cello</MenuItem>
          <MenuItem value={'Bass'}>Bass</MenuItem>
        </Select>
        <DialogContentText>
          Sort by Difficulty
                </DialogContentText>
        <Select
          name='searchDifficulty'
          value={this.state.searchDifficulty}
          onChange={this.handleSearchChange}
          inputProps={{
            name: 'searchDifficulty',
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <DialogContentText>
          Search by Song Name
        </DialogContentText>
        <TextField onChange={this.handleSearchChange} name='searchName' value={this.state.searchName}>
        </TextField>
        <Button variant="outlined" color="primary" onClick={this.submitSearch}>Submit Search</Button>
        <Button variant="outlined" color="primary" onClick={this.resetSearch}>Reset Search</Button>
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
            fileType= {this.state.fileType}
            filePath={this.state.url} />
        
        </Dialog>
          
      
        {/* Table */}
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
                    <TableCell align="center"><Button onClick={() => this.handleClickOpen(row)}>View</Button></TableCell>
                  </TableRow>
                )
              }
              )}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  };
};


export default connect(mapStateToProps)(StudentMusic);