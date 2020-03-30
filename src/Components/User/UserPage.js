import React, { Component } from "react"
import UserDetails from "./UserDetails.js"
import UserMovies from "../User/UserMovies"
import UserComments from "./UserComments"
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
        fetch(`http://localhost:3001/user/${this.props.profileId}/info`)
        .then(resp => resp.json())
        .then( data => {
            this.setState({
                user: data.user_info,
                userMovies: data.userMovies,
                comments: data.comments
            })
        })
    }

    render(){
        return (
            <div className="profile-page-container"> 
                <UserDetails currentUser={this.props.currentUser}/>
                <UserDetails userObj={this.state.user} />
                <UserMovies userMovies={this.state.userMovies} />
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
//     this.props.currentUser.user ? user = this.props.currentUser.user : user = this.props.currentUser

//     let myComments;
//     user ? (myComments = this.props.allComments.filter(comm => comm.user_id === user.id)) : (myComments = [])

//     return (
//       <div className="Profile">
//         <Navbar currentUser={this.props.currentUser} signOut={this.props.signOut}/>
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