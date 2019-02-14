import React, { Component } from 'react';
import { connect } from 'react-redux';
import SheetMusicTable from './SheetMusicTable';
import AddSheetMusic from './AddSheetMusic';
import SearchSheetMusic from './SearchSheetMusic';

class AdminMusic extends Component {
  state = {

  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SHEET_MUSIC'
    });
  }

  render() {
    return (
      <div>
        <br/>
        <h1>Sheet Music</h1>
        <AddSheetMusic />
        <SearchSheetMusic />
        <SheetMusicTable />
      </div>
    )
  }
}

export default connect()(AdminMusic);
