import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icon imports
import AssignmentIcon from '@material-ui/icons/Assignment';
import DrumIcon from '@material-ui/icons/GroupWork';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import NoteIcon from '@material-ui/icons/MusicNote';
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';

const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    margin: 12,
    color: '#ffffff',
    backgroundColor: '#eb6505',
    padding: 7,
    cursor: 'pointer',
    borderRadius: 5,
    width: 30,
    textAlign: 'center',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 5,
  },
});

class StudentNav extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  }

  handleClick = (route) => {
    this.props.history.push(`/${route}`)
  }

  render() {
    // for material ui styling
    const { classes } = this.props;
    // the list items in the studentNav bar
    const sideList = (
      <div className={classes.list}>
        <List>
          {/* DRUM/HOME LIST ITEM */}
          <ListItem button key='Drums' onClick={() => this.handleClick('home')}>
            <ListItemIcon>
              <DrumIcon />
            </ListItemIcon>
            <ListItemText primary="Drums" />
          </ListItem>

          {/* NESTED LIST */}
            {/* TENOR LIST ITEM */}
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} onClick={() => this.handleClick('tenor')}>
                <ListItemIcon>
                  <ArrowRightRounded />
                </ListItemIcon>
                <ListItemText primary='Tenor' />
              </ListItem>

            {/* SECOND LIST ITEM */}
              <ListItem button className={classes.nested} onClick={() => this.handleClick('second')}>
                <ListItemIcon>
                  <ArrowRightRounded />
                </ListItemIcon>
                <ListItemText primary='Second' />
              </ListItem>
            
            {/* CELLO LIST ITEM */}
              <ListItem button className={classes.nested} onClick={() => this.handleClick('cello')}>
                <ListItemIcon>
                  <ArrowRightRounded />
                </ListItemIcon>
                <ListItemText primary='Cello' />
              </ListItem>

            {/* BASS LIST ITEM */}
              <ListItem button className={classes.nested} onClick={() => this.handleClick('bass')}>
                <ListItemIcon>
                  <ArrowRightRounded />
                </ListItemIcon>
                <ListItemText primary='Bass' />
              </ListItem>
            </List>

          {/* SHEET MUSIC LIST ITEM */}
          <ListItem button key='Sheet Music' onClick={() => this.handleClick('studentMusic')}>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary='Sheet Music' />
          </ListItem>

          {/* LESSON PLAN LIST ITEM */}
          <ListItem button key='Lesson Plans' onClick={() => this.handleClick('studentLessons')}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary='Lesson Plans' />
          </ListItem>

          {/* DIVIDER */}
          <Divider />

          {/* LOGOUT BUTTON LIST ITEM */}
          <ListItem button key='Logout' onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        {/* the studentNav bar drawer */}
        <div
          color="inherit"
          aria-label="Open drawer"
          onClick={this.toggleDrawer('left', true)}
          className={classes.menuButton}
        >
          <MenuIcon />
        </div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

StudentNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withRouter(withStyles(styles)(StudentNav)));
