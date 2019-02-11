import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import LogOutButton from '../LogOutButton/LogOutButton';
import Divider from '@material-ui/core/Divider';
import StudentMusic from '../StudentMusic/StudentMusic';
import StudentLessons from '../StudentLessons/StudentLessons';
import StudentDashboard from '../StudentDashboard/StudentDashboard';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class StudentNav extends Component {
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
    console.log('hit StudentNav')
    const sideList = (
      <div className={classes.list}>
        <Link to="/home">
          <p>Drums</p>
        </Link>
        <Link to="/music">
          <p>Sheet Music</p>
        </Link>
        <Link to="/lessons">
          <p>Lesson Plans</p>
        </Link>
        <Divider />
        <LogOutButton />
      </div>
    );
    return (
      <div>
        <Button size="large" onClick={this.toggleDrawer('left', true)}><i class="fas fa-bars"></i></Button>
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

export default withStyles(styles)(StudentNav);