import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


import { signOut } from './../../actions/usersActions'
// import LoginSignUpPage from '../LoginSignUp/LoginSignUpPage'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark mb-5">
          <div className="container">
            <div className="navbar-header animated jackInTheBox">
              <Link className="navbar-brand text-white text-lg brand-text" to="/">
                MUVI
              </Link>
            </div>
            <ul className="navbar-nav ml-auto text-light d-inline-block">
              <li className="nav-item d-inline-block mr-4 animated jackInTheBox">
                <Link className="navbar-brand text-white text-lg" to="/movies">
                  Movies
                </Link>
                <Link className="navbar-brand text-white text-sm" to="/popular/1">
                  Popular Movies
                </Link>
                <Link className="navbar-brand text-white text-sm" to="/upcoming">
                  Upcoming Movies
                </Link>
                <Link className="navbar-brand text-white text-sm" to="/top_rated">
                  Top Rated Movies
                </Link>
                <Link className="navbar-brand text-white text-sm" to="/latest">
                  Latest Movies
                </Link>
                <Link className="navbar-brand text-white text-lg" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item d-inline-block mr-4">
                {Array.isArray(this.props.currentUser) ? (
                      <Link className="nav-link" to="/profile">
                        {this.props.currentUser}'s Profile
                      </Link>
                  ) : null}

                {Array.isArray(this.props.currentUser) ? (
                  // eslint-disable-next-line
                  <a onClick={() => this.props.signOut()} className="nav-link">
                    Log Out
                  </a>
                ) : (
                    <Link className="nav-link btn btn-outline-success text-white btn-lg" to="/login">Login</Link>
                )}
                {/* <LoginSignUpPage /> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})



const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
