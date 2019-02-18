import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';


const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  myCustomBackground: {
    background: 'linear-gradient(to right bottom, #fc9102, rgb(120, 120, 120))',
  },
});

class SimpleSnackbar extends React.Component {

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.dispatch({ type: 'HIDE_SNACK' });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.snackbars.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
            className: classes.myCustomBackground,
          }}
          // SnackbarContentProps={{
          // }}
          background-color= 'blue'
          message={<span id="message-id">{this.props.snackbars.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
  snackbars: reduxState.snackbars,
});

export default connect(mapStateToProps)(withStyles(styles)(SimpleSnackbar));