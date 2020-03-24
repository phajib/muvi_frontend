import React from 'react';

import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import { fetchingTopRated, checkUser } from './Modules/actions'

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'

import './App.css'

export class App extends React.Component {
  componentDidMount() {
    this.props.fetchLatest()
    this.props.checkUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {/* <Route exact path="/" render={() => <Home allMovies={this.state.allMovies} popularMovies={this.state.popularMovies} topRatedMovies={this.state.topRatedMovies} currentUser={this.state.currentUser} logOut={this.logOut} />} /> */}
          <Route exact path="/home" component={Home} />

          {/* <Route exact path="/movies" component={SearchContainer} /> */}
          <Route exact path="/movies" render={() => <SearchMovie allMovies={this.state.allMovies} currentUser={this.state.currentUser} logOut={this.logOut} addToList={this.addToList} />} />
          
          <Route exact path="/movie/:id" render={(props) => {
            let movieId = props.match.params.id 
             return  <Show movieID={movieId}/> 
          }}/>
          {/* <Route exact path="/movies/:id" render={(props) => {
            let id = props.match.params.id
            return <Show movieId={id} newCommnetAdded={this.newCommnetAdded} allComments={this.state.allComments} currentUser={this.state.currentUser}
              logOut={this.logOut} addToList={this.addToList} removeFromAllComments={this.removeFromAllComments} />
          }} /> */}

          <Route exact path="/profile" component={() => {
              return this.props.currentUser.length === 0 ? <Redirect to="/login"/> : <UserProfile /> 
            }}/>
          {/* <Route exact path="/profile" render={() => {
            return this.state.currentUser.length === 0 ? <Redirect to="/login" /> :
              <UserProfile currentUser={this.state.currentUser}
                logOut={this.logOut} handleDeleteComment={this.handleDeleteComment} allComments={this.state.allComments} myMovieList={this.state.myMovieList} />
          }} /> */}
          
          {/* Need to do UserProfile Edit */}
          {/* <Route exact path="/user/edit" render={()} */}

          <Route exact path="/profile" render={() => {
            return this.state.currentUser.length === 0 ? <Redirect to="/login" /> :
              <UserProfile currentUser={this.state.currentUser} />
                // logOut={this.logOut} handleDeleteComment={this.handleDeleteComment} allComments={this.state.allComments} myMovieList={this.state.myMovieList} />

          }} />

          <Route exact path="/login" render={() => {
            return this.state.currentUser.length === 0 ? <LoginPage currentUser={this.state.currentUser} loggingIn={this.loggingIn}
              signUp={this.signUp} /> : <Redirect to="/profile" />
          }} />

          <Route exact path="/about" render={() => < About />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingTopRated: () => {dispatch(fetchingTopRated())},
    checkUser: () => {dispatch(checkUser())}
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
