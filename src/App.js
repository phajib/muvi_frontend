import React, { Component } from 'react';
import { connect } from 'react-redux'
// eslint-disable-next-line
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
import PopularMovies from './Components/Home/PopularMovies'

import { fetchTopRated, fetchPopular } from './actions/movieActions'
import { checkUser } from './actions//usersActions'


// debugger
class App extends Component {
  componentDidMount() {
    this.props.fetchTopRated()
    this.props.fetchPopular()
    // this.props.fetchUpcoming()

    if (localStorage.getItem('jwt')){
      this.props.checkUser()
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/movies" component={Landing} />
          {/* < Route exact path="/movie/:id" render={(props) => {
            let movie_id = props.match.params.id 
             return  <Movie movieID={movie_id} /> 
          }}/> */}
          <Route exact path="/movie/:id" component={Movie} />
          {/* < Route exact path='/profile' component={UserPage} /> */}
          < Route exact path="/profile" render={() => {
              return this.props.currentUser.length === 0 ?
              <Redirect to="/login"/> : <UserPage currentUser={this.state.currentUser} />
          }}/>
          {/* < Route exact path='/profile/edit' component={UserEdit} /> */}
          < Route exact path="/profile/edit" component={() => {
              return this.props.currentUser.length === 0 ? < Redirect to="/login"/> : <UserEdit />
          }}/>
          < Route exact path='/login' component={LoginSignUpPage} />
          {/* < Route exact path="/login" render={() => {
            return this.props.currentUser.length === 0 ? < LoginSignUpPage /> : < Redirect to="/"/>
          }}/> */}

          < Route exact path="/user/:id" render={(props) => {
            let profileId = props.match.params.id
            let userId = this.props.currentUser.id
            return (userId === parseInt(profileId)) ? <UserPage /> : <UserPage profileId={profileId} />
          }} />

          <Route exact path="/popular" component={PopularMovies} />
          <Route exact path="/toprated" component={TopRatedMovies} />
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
    fetchTopRated: () => {dispatch(fetchTopRated())},
    // fetchUpcoming: () => {dispatch(fetchUpcoming())},
    checkUser: () => {dispatch(checkUser())}
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));