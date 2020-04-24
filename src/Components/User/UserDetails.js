import React, {Component} from 'react';

import { Link } from 'react-router-dom'

class UserDetails extends Component {
    render() {
    let { username, about, profile_picture } = this.props.userObj

    return (
        <div className="row bg-dark">
            <div className="row mx-auto animated fadeIn">
                <div className="col">
                    <img
                        className="rounded-circle img-thumbnail mx-auto animated rubberBand"
                        id="profile_picture"
                        src={profile_picture}
                        alt="profile_picture">
                    </img>
                    <br/><br/>
                </div>
                <div className="col animated flipInX" >
                    <h1 id="username" className="text-success">{username}</h1>
                    <h3 id="about" className="text-success">{about}</h3>
                    <Link className="btn btn-outline-success btn-sm" to="/profile/edit">Edit Profile</Link>
                </div>
            </div>
        </div>
    )}
}

export default UserDetails