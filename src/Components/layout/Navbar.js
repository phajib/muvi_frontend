import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { signOut } from './../../actions/usersActions'

class Navbar extends Component {
  render () {
    return (
      <div className="">
        <nav className="navbar navbar-expand-sm navbar-light bg-secondary mb-5 sticky-top">
          <div className="container">
            <div className="navbar-header animated jackInTheBox">
              <Link className="navbar-brand text-white text-lg brand-text" to="/">
                MUVI
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {!Array.isArray(this.props.users) ? (
              <Link className="navbar-brand nav-link text-white" to="/profile">
                {/* {this.props.users.user.data.attributes.username}'s Profile */}
                Profile
              </Link>
            ) : null}

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto text-light d-inline-block">
                <li className="nav-item dropdown d-inline-block mr-4 animated jackInTheBox">
                  {/* eslint-disable-next-line */}
                  {/* <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"> */}
                    <Link className="nav-link dropdown-toggle navbar-brand text-white text-lg"
                      data-toggle="dropdown"
                      id="navbardrop"
                      to="/movies">
                      Movies
                    </Link>
                  {/* </a> */}
                  <div className="dropdown-menu bg-secondary">
                    <Link className="dropdown-item navbar-brand text-white text-sm" to="/popular/1">
                      Popular Movies
                    </Link>
                    <Link className="dropdown-item navbar-brand text-white text-sm" to="/upcoming">
                      Upcoming Movies
                    </Link>
                    <Link className="dropdown-item navbar-brand text-white text-sm" to="/top_rated">
                      Top Rated Movies
                    </Link>
                    <Link className="dropdown-item navbar-brand text-white text-sm" to="/latest">
                      Latest Movies
                    </Link>
                  </div>
                </li>
                <li className="nav-item d-inline-block mr-4">
                  {/* eslint-disable-next-line */}
                  {/* <a className="nav-item"> */}
                    <Link
                    className=" nav-item navbar-brand text-white text-lg"
                    to="/about">
                      About
                    </Link>
                  {/* </a> */}
                </li>
                <li className="nav-item d-inline-block mr-4">
                  {!Array.isArray(this.props.users) ? (
                    // eslint-disable-next-line 
                    <Link 
                      className="nav-link btn btn-outline-success text-white btn-lg"
                      to="/signout"
                      onClick={() => {
                        this.props.signOut()}
                      }
                    >
                      Log Out
                    </Link>
                  ) : (
                    <Link className="btn btn-outline-success text-white btn-lg" to="/login">
                        Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
