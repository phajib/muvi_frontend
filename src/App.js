import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import './App.css';

import Navbar from './Components/layout/Navbar';
import Landing from './Components/Home/Landing';
import Movie from './Components/Movie/Movie';
import About from './Components/About/About'
import Footer from './Components/layout/Footer';
import UserPage from './Components/User/UserPage'
import UserEdit from './Components/User/UserEdit'
import LoginSignUpPage from './Components/LoginSignUp/LoginSignUpPage'
import TopRatedMovies from './Components/Home/TopRatedMovies'
import UpcomingMovies from './Components/Home/UpcomingMovies'
import PopularMovies from './Components/Home/PopularMovies'
import LatestMovies from './Components/Home/LatestMovies'

import { fetchTopRated, fetchUpcoming, fetchPopular, fetchLatest  } from './actions/movieActions'
// eslint-disable-next-line
import { checkUser } from './actions//usersActions'

class App extends Component {
  componentDidMount() {
    this.props.fetchTopRated()
    this.props.fetchUpcoming()
    this.props.fetchPopular()
    this.props.fetchLatest()

    if (localStorage.getItem('jwt')){
      this.props.checkUser()
      // this.props.fetchUserMovies(this.props.users)
    }
  }

  render() {
    return (
      <div className="App bg-dark">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/movies" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />

          {/* <Route exact path="/profile" component={UserPage} /> */}
          <Route exact path="/profile" render={() => {
            // let userProfile = this.props.match.params.id
              return this.props.users.length === 0 ?
              <Redirect to="/login"/> : <UserPage users={this.props.users} />
              // <Redirect to="/login"/> : <UserPage users={this.props.users} userMovies={this.props.fetchUserMovies} />
              // <Redirect to="/login"/> : <UserPage userProfile={userProfile} />
           }}/>
           {/* <Route exact path="/profile/edit" component={UserEdit} /> */}
          <Route exact path="/profile/edit" render={() => {
              return this.props.users.length === 0 ?
              < Redirect to="/login"/> : <UserEdit />
          }}/>
          {/* <Route exact path="/login" component={LoginSignUpPage} /> */}
          <Route exact path="/login" render={() => {
            return this.props.users.length === 0 ?
            < LoginSignUpPage /> : < Redirect to="/"/>
          }}/>

          <Route exact path="/signout" component={Landing} />
          <Route exact path="/popular/1" component={PopularMovies} />
          <Route exact path="/upcoming" component={UpcomingMovies} />
          <Route exact path="/top_rated" component={TopRatedMovies} />
          <Route exact path="/latest" component={LatestMovies} />
          <Route exact path="/about" component={About} />
        </Switch>
      <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: () => {dispatch(fetchPopular())},
    fetchUpcoming: () => {dispatch(fetchUpcoming())},
    fetchTopRated: () => {dispatch(fetchTopRated())},
    fetchLatest: () => {dispatch(fetchLatest())},
    checkUser: () => {dispatch(checkUser())},
    // fetchUserMovies: () => {dispatch(fetchUserMovies())},
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));