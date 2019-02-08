import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminLessons from '../AdminLessons/AdminLessons';
import AdminMusic from '../AdminMusic/AdminMusic';
import AdminSchools from '../AdminSchools/AdminSchools';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import LogOutButton from '../LogOutButton/LogOutButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class AdminNav extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    console.log('hit adminNav')
    const sideList = (
      <div className={classes.list}>
        <Link to="/home">
        <p>Home</p>
        </Link>
        <Link to="/lessons">
        <p>Lesson Plans</p>
        </Link>
        <Link to="/music">
        <p>Sheet Music</p>
        </Link>
        <Link to="/schools">
        <p>Schools</p>
         </Link> 
        <Divider />
        <LogOutButton />
      </div>
    );
    return (
      <div>
        <Button size="large" onClick={this.toggleDrawer('left', true)}><i className="fas fa-bars"></i></Button>
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

AdminNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminNav);