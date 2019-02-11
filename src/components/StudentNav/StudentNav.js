import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import LogOutButton from '../LogOutButton/LogOutButton';
import Divider from '@material-ui/core/Divider';


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
    console.log('hit studentNav')
    const sideList = (
      <div className={classes.list}>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/tenor">
          <p>Tenor</p>
        </Link>
        <Link to="/second">
          <p>Second</p>
        </Link>
        <Link to="/cello">
          <p>Cello</p>
        </Link>
        <Link to="/bass">
          <p>Bass</p>
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

StudentNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentNav);
