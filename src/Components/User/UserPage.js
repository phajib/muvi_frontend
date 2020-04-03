import React, { Component } from "react"
import UserDetails from "./UserDetails.js"
import UserMovies from "../User/UserMovies"
import UserComments from "./UserComments"

import {fetchUserPage} from '../../actions/usersActions' 
// import "../styles/profile_page.scss"

class UserPage extends Component {
    constructor(){
        super()

        this.state = {
            user: [],
            userMovies: [],
            comments: []
        }
    }

    componentDidMount(){
        fetchUserPage()
    }

    render(){
        // let user;
        // this.props.users.user ? user = this.props.currentUser.user : user = this.props.currentUser
        
        // let myComments;
        // user ? (myComments = this.props.allComments.filter(comm => comm.user_id === user.id)) : (myComments = [])

        return (
            <div className="profile-page-container"> 
                <UserDetails userObj={this.state.users} />
                {/* <UserDetails users={user}/> */}
                <UserMovies userMovies={this.state.userMovies} />
                {/* <UserComments classes="mycomments four wide column" movieComments={myComments} deleteComment={this.props.handleDeleteComment} mycomments={true} user={user} /> */}
                <UserComments comments={this.state.comments} />
            </div>
        )
    }
}

export default UserPage





// import React, { Component } from 'react';
// import UserContainer from './UserContainer'
// import MymoviesContainer from './MymoviesContainer'
// import CommentRating from '../components/CommentRating'
// import Navbar from '../components/Navbar'
// import '../style/profile.css'


// class Profile extends Component {

//   render() {
//     let user;
//     this.props.users.user ? user = this.props.users.user : user = this.props.users

//     let myComments;
//     user ? (myComments = this.props.allComments.filter(comm => comm.user_id === user.id)) : (myComments = [])

//     return (
//       <div className="Profile">
//         <Navbar users={this.props.users} signOut={this.props.signOut}/>
//         <div id="profileCon" className="ui grid">
//           <UserDetails user={user}/>
//           <UserMovies myMovieList={this.props.myMovieList} />
//           <UserComments classes="mycomments four wide column" movieComments={myComments} deleteComment={this.props.handleDeleteComment} mycomments={true} user={user} />
//         </div>
//       </div>
//     )
//   }

// }

// export default Profile