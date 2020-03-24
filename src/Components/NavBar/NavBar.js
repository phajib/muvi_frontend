import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <div id="navbar" className="ui top fixed menu">
            <Link className="item" to="/">
                <i className="video icon"></i>
            </Link>
            <Link className="item" to="/movies">Movies</Link>
            <Link className="item" to="/profile">{this.props.currentUser.username}'s Profile</Link>

            {!Array.isArray(props.currentUser) ? (
                // eslint-disable-next-line
                <a className="item" onClick={() => props.logOut()}to="/logOut">Log Out</a>
            ) : (
                <Link className="item" to="/login">Login</Link>
            )}
        </div>
    )
}

export default NavBar
