import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home/Home'
import SearchMovie from './Components/Search/SearchMovie'
import LoginPage from './Components/LoginSignup/LoginPage'
import UserProfile from './Components/UserProfile/UserProfile'
import Show from './Components/Show/Show'
import About from './Components/About/About'
import Swal from 'sweetalert2'
import './App.css'

class App extends React.Component {
  state = {
    allMovies: [],
    popularMovies: [],
    topratedMovies: [],
    currentUser: [],
    allComments: [],
    myMovieList: []
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Home allMovies={this.state.allMovies} popularMovies={this.state.popularMovies} topratedMovies={this.state.topratedMovies} currentUser={this.state.currentUser}
            signOut={this.signOut} />} />

          <Route exact path="/movies" render={() => <SearchMovie allMovies={this.state.allMovies} currentUser={this.state.currentUser} signOut={this.signOut} addToList={this.addToList} />} />

          <Route exact path="/movies/:id" render={(props) => {
            let id = props.match.params.id
            return <Show movieId={id} newCommnetAdded={this.newCommnetAdded} allComments={this.state.allComments} currentUser={this.state.currentUser}
              signOut={this.signOut} addToList={this.addToList} removeFromAllComments={this.removeFromAllComments}
            />
          }} />

          <Route exact path="/login" render={() => {
            return this.state.currentUser.length === 0 ? <LoginPage currentUser={this.state.currentUser} loggingIn={this.loggingIn}
              signUp={this.signUp} /> : <Redirect to="/profile" />
          }} />

          <Route exact path="/profile" render={() => {
            return this.state.currentUser.length === 0 ? <Redirect to="/login" /> :
              <UserProfile currentUser={this.state.currentUser}
                signOut={this.signOut} handleDeleteComment={this.handleDeleteComment} allComments={this.state.allComments} myMovieList={this.state.myMovieList} />

          }} />

          <Route exact path="/about" render={() => < About />} />
        </div>
      </Router>
    );
  }
}

export default App;
