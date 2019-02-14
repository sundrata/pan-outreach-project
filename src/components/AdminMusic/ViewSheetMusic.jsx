import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FileViewer from 'react-file-viewer';
import Dialog from '@material-ui/core/Dialog';

class ViewSheetMusic extends Component {

  state = {
    open: true,
    url: this.props.sheetMusic.url,
    name: this.props.sheetMusic.name,
    fileType: this.props.sheetMusic.url.split('.').pop(),
  }

  handleViewClose = () => {
    this.props.toggleViewMode();
    this.setState({
      url: '',
      name: '',
      fileType: '',
    });
  };


  render() {
    return (
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleViewClose}
        >
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleViewClose} aria-label="Close">
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
    )
  }
}


export default connect()(ViewSheetMusic);
