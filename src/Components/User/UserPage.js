import React, { Component } from "react"
import UserDetails from "./UserDetails.js"
// import UserMovies from "../User/UserMovies"
// import UserComments from "./UserComments"

// import { fetchUserPage } from '../../actions/usersActions' 
// import "../styles/profile_page.scss"

class UserPage extends Component {
    // constructor(){
    //     super()

    //     this.state = {
    //         user: [],
    //         userMovies: [],
    //         movieComments: []
    //     }
    // }

    // componentDidMount(){
        // fetchUserPage()
        // fetch(`http://localhost:3001/api/v1/user/${this.profileId}/info`)
        // .then(resp => resp.json())
        // .then( data => {
        //     this.setState({
        //         user: data.user_info,
        //         userMovies: data.userMovies,
        //         movieComments: data.comments
        //     })
        // })
    // }

    render() {
        // let user;
        // this.props.users ? user = this.props.users.user : user = this.props.users
        // this.props.users.user ? user = this.props.users.user : user = this.props.users
        // user = this.props.users.attributes


        return (
            <div className="container">
                <UserDetails users={this.props.users.user} />
                {/* <UserDetails user={user} /> */}
                {/* <UserDetails userObj={this.state.user}/> */}
                {/* <UserMovies userMovies={this.props.userMovies} /> */}
                {/* <UserComments movieComments={this.state.userComments} /> */}
                {/* <UserComments 
                    classes="mycomments four wide column"
                    movieComments={userComments}
                    deleteComment={this.props.fetchleDeleteComment}
                    mycomments={true}
                    user={user} /> */}
                {/* <UserComments comments={this.state.comments} /> */}
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
//     user ? (myComments = this.props.movieComments.filter(comm => comm.user_id === user.id)) : (myComments = [])

//     return (
//       <div className="Profile">
//         <Navbar users={this.props.users} signOut={this.props.signOut}/>
//         <div id="profileCon" className="ui grid">
//           <UserDetails user={user}/>
//           <UserMovies userMovies={this.props.userMovies} />
//           <UserComments classes="mycomments four wide column" movieComments={myComments} deleteComment={this.props.handleDeleteComment} mycomments={true} user={user} />
//         </div>
//       </div>
//     )
//   }

// }

// export default Profile