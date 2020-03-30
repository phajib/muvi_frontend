import React, { Component } from "react"

class UserDetails extends Component {
    render(){
        let {username, about, profile_picture} = this.props.userObj
        return (
            <div className="non-user-header animated zoomIn">
                <div className="avatar-container">
                    <img className="my-profile-profile-picture" alt={profile_picture} src={`${profile_picture}`}></img>
                </div>

                <div className="non-user-details">
                    <h1>{username}</h1>
                    <p className="about">{about}</p>
                </div>
            </div>
        )
    }
}

export default UserDetails