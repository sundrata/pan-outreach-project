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
import Home from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import NoteIcon from '@material-ui/icons/MusicNote';
import School from '@material-ui/icons/School';

const styles = {
  list: {
    width: 250,
    fontFamily: 'courier',
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    margin: 12,
    color: '#ffffff',
    backgroundColor: '#eb6505',
    padding: 5,
    cursor: 'pointer',
    borderRadius: 5,
    width: 30,
    height: 25,
    textAlign: 'center',
  },
  icon: {
    color: '#058beb',
  },
};

class AdminNav extends React.Component {
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


  handleLogout = () => {
    this.props.dispatch({ type: 'LOGOUT' })
    this.props.history.push(`/`)
  }
  
  render() {
    // for material ui styling
    const { classes } = this.props;
    // the list items in the adminNav bar
    const sideList = (
      <div className={classes.list}>
        <List>
          {/* HOME LIST ITEM */}
          <ListItem button key='Home' onClick={() => this.handleClick('home')}>
            <ListItemIcon>
              <Home className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          {/* SHEET MUSIC LIST ITEM*/}
          <ListItem button key='Sheet Music' onClick={() => this.handleClick('music')}>
            <ListItemIcon>
              <NoteIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary='Sheet Music' />
          </ListItem>

          {/* LESSON LIST ITEM */}
          <ListItem button key='Lesson Plans' onClick={() => this.handleClick('lessons')}>
            <ListItemIcon>
              <AssignmentIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary='Lesson Plans' />
          </ListItem>

          {/* SCHOOL LIST ITEM */}
          <ListItem button key='Schools' onClick={() => this.handleClick('schools')}>
            <ListItemIcon>
              <School className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary='Schools' />
          </ListItem>

          {/* DIVIDER */}
          <Divider />

          {/* LOGOUT LIST ITEM */}
          <ListItem button key='Logout' onClick={this.handleLogout}>
            <ListItemIcon>
              <LogoutIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        {/* the adminNav bar drawer */}
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

// for material ui styling
AdminNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withRouter(withStyles(styles)(AdminNav)));
