import React from 'react'

const UserDetails = (props) => {
    // render(){
        if(props.user){
        const {username, about, profile_picture} = props.user
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
        )} else {
            return null
        }
    // }
}

export default UserDetails