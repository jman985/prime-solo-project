import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserHomePage from '../UserHomePage/UserHomePage';
import UserBuildsPage from '../UserBuildsPage/UserBuildsPage';
import UserBuildsItem from '../UserBuildsItem/UserBuildsItem';
import './App.css';
import EditBuildPage from '../EditBuildPage/EditBuildPage';
import ComponentPage from '../ComponentPage/ComponentPage';
// import NewBuildPage from '../NewBuildPage/NewBuildPage';
import ReviewPage from '../ReviewPage/ReviewPage';



class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserHomePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/builds"
              component={UserBuildsPage}
            />
             <ProtectedRoute
              exact
              path={`/builder/:buildId`}
              component={EditBuildPage}
            />
            <ProtectedRoute 
              exact path= {`/builder/:buildId/:componentName`}
              component={ComponentPage}
            />
            {/* <ProtectedRoute 
              exact path= {`/newbuild`}
              component={NewBuildPage}
            /> */}
            <ProtectedRoute 
              exact path= {`/review/:buildId`}
              component={ReviewPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
