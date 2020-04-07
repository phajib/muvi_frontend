import React, {Component} from 'react';

import { Link } from 'react-router-dom'

// const UserDetails = (props) => {
// debugger
class UserDetails extends Component {
    render() {
//   if (props.user) {
    let { username, about, profile_picture } = this.props.users.data.attributes

    return (
        <div className="container">
            <div className="row animated fadeIn">
                <div className="col">
                    <img id="profile_picture" className="rounded-circle img-thumbnail animated rubberBand" src={profile_picture} alt="profile_picture"></img>
                    <div className="container">
                        <Link className="btn btn-outline-success btn-sm" to="/profile/edit">Edit Profile</Link>
                    </div>
                </div>
                <div className="col animated flipInX" >
                    <h2 id="username" className="text-success">{username}</h2>
                    <p id="about" className="text-success">{about}</p>
                </div>
            </div>
        </div>
    // )} else {return null}
    )}
}

export default UserDetails