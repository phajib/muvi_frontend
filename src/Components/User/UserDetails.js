// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

// // const UserDetails = (props) => {
// class UserDetails extends Component {
//     render(){
//         // if(props.users){
//         const {username, about, profile_picture} = this.props.users
//         return (
//             <div className="container animated zoomIn">
//                 <h3 className="text-success">Your Details</h3>
//             {console.log(this.props.users)}
//                 <div className="container">
//                     <img className="container" alt={profile_picture} src={`${profile_picture}`}></img>
//                 </div>

//                 <div className="container">
//                     <h1>{username}</h1>
//                     <p className="about">{about}</p>
//                 </div>
//                 <div className="container">
//                     <button className="button is-light">
//                         <Link to="/profile/edit">Edit Profile</Link>
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default UserDetails


import React, {Component} from 'react';

import { Link } from 'react-router-dom'

// const UserDetails = (props) => {
class UserDetails extends Component {
    render() {
//   if (props.user) {
    // const { username, about, profile_picture } = props.user
    let { username, about, profile_picture } = this.props.users

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