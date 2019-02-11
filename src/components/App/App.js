import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AdminRoute from '../AdminRoute/AdminRoute';
import AdminSchools from '../AdminSchools/AdminSchools';
import AdminLessons from '../AdminLessons/AdminLessons';
import AdminMusic from '../AdminMusic/AdminMusic';
import AdminNav from '../AdminNav/AdminNav';
import PanTenor from '../PanTenor/PanTenor';
import PanSecond from '../PanSecond/PanSecond';
import PanCello from '../PanCello/PanCello';
import PanBass from '../PanBass/PanBass';
import Split from '../Split/Split';
import StudentNav from '../StudentNav/StudentNav'
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({ type: 'FETCH_PERSON' })
    this.props.dispatch({ type: 'FETCH_LESSON' })
    this.props.dispatch({ type: 'FETCH_CATEGORY' })
    // true if touch device, otherwise false
    this.props.dispatch({ type: 'IS_TOUCH_DEVICE', payload: (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)) })
  }


  render() {

    return (
      <Router>
        <div>
          {this.props.user.admin ? <AdminNav /> : <StudentNav /> }
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <ProtectedRoute
              exact
              path="/home"
              component={Split}
            />
            {/* <AdminRoute
              exact
              path="/adminNav"
              component={AdminNav}
              /> */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
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
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
