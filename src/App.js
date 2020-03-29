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
// import UserEdit from './Components/User/UserEdit'
import LoginSignUpPage from './Components/LoginSignUp/LoginSignUpPage'
import TopRatedMovies from './Components/Home/TopRatedMovies'
import PopularMovies from './Components/Home/PopularMovies'

import { fetchTopRated, fetchPopular } from './actions/movieActions'
import { checkUser } from './actions//usersActions'


class App extends Component {
  componentDidMount() {
    this.props.fetchTopRated()
    this.props.fetchPopular()

    if (localStorage.getItem('jwt')){
      this.props.checkUser()
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/movies" component={Landing} />
          < Route exact path="/movie/:id" render={(props) => {
            let movie_id = props.match.params.id 
             return  <Movie movieID={movie_id} /> 
          }}/>
          < Route exact path="/profile" component={() => {
              return this.props.currentUser.length === 0 ? < Redirect to="/login"/> : <UserPage />
          }}/>
          {/* < Route exact path="/profile/edit" component={() => {
              return this.props.currentUser.length === 0 ? < Redirect to="/login"/> : <UserEdit />
          }}/> */}
          < Route exact path="/login" render={() => {
            return this.props.currentUser.length === 0 ? < LoginSignUpPage /> : < Redirect to="/"/>
          }}/> 

          < Route exact path="/user/:id" render={(props) => {
            let profileId = props.match.params.id
            let userId = this.props.currentUser.id
            return (userId === parseInt(profileId)) ? <UserPage /> : <UserPage profileId={profileId} />
          }} />

          <Route exact path="/popular" component={PopularMovies} />
          <Route exact path="/toprated" component={TopRatedMovies} />
          <Route exact path="/about" component={About} />
          <Footer />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: () => {dispatch(fetchPopular())},
    fetchTopRated: () => {dispatch(fetchTopRated())},
    checkUser: () => {dispatch(checkUser())}
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));