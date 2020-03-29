import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import PopularMovies from '../Home/PopularMovies';
// import TopRatedMovies from '../Home/TopRatedMovies';
// import About from '../About/About'
import { signOut } from './../../actions/usersActions'

function Navbar() {
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
              <Link className="navbar-brand text-white text-lg" to="/about">
                About
              </Link>
              <Link className="navbar-brand text-white text-sm" to="/popular/1">
                Popular Movies
              </Link>
              <Link className="navbar-brand text-white text-sm" to="/top_rated">
                Top Rated Movies
              </Link>
            </li>
            <li className="nav-item d-inline-block mr-4">
              {!Array.isArray(this.props.currentUser) ? (
                    <Link className="nav-item" to="/profile">
                      {this.props.currentUser.username}'s Profile
                    </Link>
                ) : null}

              {!Array.isArray(this.props.currentUser) ? (
                // eslint-disable-next-line
                <a onClick={() => this.props.signOut()} className="nav-item">
                  Log Out
                </a>
              ) : (
                  <Link className="nav-item" to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
