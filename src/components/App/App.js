import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

// route imports
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AdminRoute from '../AdminRoute/AdminRoute';
import AdminSchools from '../AdminSchools/AdminSchools';
import AdminLessons from '../AdminLessons/AdminLessons';
import AdminMusic from '../AdminMusic/AdminMusic';
import AdminHeader from '../AdminHeader/AdminHeader';
import PanTenor from '../PanTenor/PanTenor';
import PanSecond from '../PanSecond/PanSecond';
import PanCello from '../PanCello/PanCello';
import PanBass from '../PanBass/PanBass';
import StudentLessons from '../StudentLessons/StudentLessons';
import Split from '../Split/Split';
import StudentMusic from '../StudentMusic/StudentMusic';
import StudentNav from '../StudentNav/StudentNav';
import Snackbar from '../Snackbar/Snackbar'

// MUI/CSS imports
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from '@material-ui/core/styles';

// setup custom MUI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fc9102'
    },
  },
});

class App extends Component {
  // loads the user, lessons, & category each time the page loads
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
    this.props.dispatch({ type: 'FETCH_PERSON' })
    this.props.dispatch({ type: 'FETCH_LESSON' })
    this.props.dispatch({ type: 'FETCH_CATEGORY' })
    // true if touch device, otherwise false
    this.props.dispatch({ type: 'IS_TOUCH_DEVICE', payload: (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)) })
  }

  render() {

    // conditionally render navigation
    let Navbar;
    if (!this.props.user.id) {  // if no user logged in
      Navbar = null
    } else if (this.props.user.admin) {  // if admin
      Navbar = <AdminHeader />
    } else if (!this.props.user.admin) { // if not admin
      Navbar = <StudentNav />
    }

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            {/* render navbar */}
            {Navbar}
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              <ProtectedRoute
                exact
                path="/home"
                component={Split}
              />

              <AdminRoute
                exact
                path="/schools"
                component={AdminSchools}
              />
              <AdminRoute
                exact
                path="/lessons"
                component={AdminLessons}
              />
              <AdminRoute
                exact
                path="/music"
                component={AdminMusic}
              />

              <ProtectedRoute
                exact
                path="/tenor"
                component={PanTenor}
              />
              <ProtectedRoute
                exact
                path="/second"
                component={PanSecond}
              />
              <ProtectedRoute
                exact
                path="/cello"
                component={PanCello}
              />
              <ProtectedRoute
                exact
                path="/bass"
                component={PanBass}
              />
              <ProtectedRoute
                exact
                path="/studentMusic"
                component={StudentMusic}
              />
              <ProtectedRoute
                exact
                path="/studentLessons"
                component={StudentLessons}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            <Snackbar />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
