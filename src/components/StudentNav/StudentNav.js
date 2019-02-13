import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import LogOutButton from '../LogOutButton/LogOutButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DrumIcon from '@material-ui/icons/GroupWork';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NoteIcon from '@material-ui/icons/MusicNote';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from 'react-router'

const styles = {
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
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClick = (route) => {
    this.props.history.push(`/${route}`)
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button key='Tenor' onClick={this.handleClick('tenor')}>
            <ListItemIcon>
              <DrumIcon />
            </ListItemIcon>
            <ListItemText primary='Tenor' />
          </ListItem>
          <ListItem button key='Seconds'>
            <ListItemIcon>
              <DrumIcon />
            </ListItemIcon>
            <ListItemText primary='Seconds' />
          </ListItem>
          <ListItem button key='Cello'>
            <ListItemIcon>
              <DrumIcon />
            </ListItemIcon>
            <ListItemText primary='Cello' />
          </ListItem>
          <ListItem button key='Bass'>
            <ListItemIcon>
              <DrumIcon />
            </ListItemIcon>
            <ListItemText primary='Bass' />
          </ListItem>
          <ListItem button key='Sheet Music'>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary='Sheet Music' />
          </ListItem>
          <ListItem button key='Lesson Plans'>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary='Lesson Plans' />
          </ListItem>
          <ListItem button key='Logout'>
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

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TemporaryDrawer));
