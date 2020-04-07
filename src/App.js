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

import { fetchTopRated, fetchUpcoming, fetchPopular, fetchLatest } from './actions/movieActions'
import { checkUser } from './actions//usersActions'
// import { fetchComments } from './actions/commentActions'
// import Login from './Components/LoginSignUp/Login';

class App extends Component {
  componentDidMount() {
    this.props.fetchTopRated()
    this.props.fetchUpcoming()
    this.props.fetchPopular()
    this.props.fetchLatest()

    if (localStorage.getItem('jwt')){
      this.props.checkUser()
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
          {/* <Route exact path="/movie/:id" render={() => {
            return <Movie users={this.state.users} />
          }} /> */}

          {/* <Route exact path='/profile' component={UserPage} /> */}
          <Route exact path="/profile" render={() => {
              return this.props.users.length === 0 ?
              <Redirect to="/login"/> : <UserPage />
              // <Redirect to="/login"/> : <UserPage users={this.state.users} userMovies={this.props.userMovies} />
           }}/>

          <Route exact path="/profile/edit" component={() => {
              return this.props.users.length === 0 ?
              < Redirect to="/login"/> : <UserEdit />
          }}/>

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
    // fetchComments: () => {dispatch(fetchComments())},
    checkUser: () => {dispatch(checkUser())},
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));