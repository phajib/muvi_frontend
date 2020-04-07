import React, { Component } from "react"
import { connect } from 'react-redux'
import UserDetails from "./UserDetails.js"
import UserMovies from "../User/UserMovies"
import UserComments from "./UserComments"

// import { fetchUserPage } from '../../actions/usersActions' 
// import "../styles/profile_page.scss"

class UserPage extends Component {
    constructor(){
        super()

        this.state = {
            user: [],
            savedMovies: [],
            userComments: []
        }
    }

    componentDidMount(){
        // fetchUserPage()
        fetch(`http://localhost:3001/api/v1/user/${this.props.users.id}/info`)
        .then(resp => resp.json())
        .then( data => {
            this.setState({
                user: data.user_info,
                savedMovies: data.savedMovies,
                userComments: data.userComments
            })
        })
    }

    render() {
        // let user;
        // this.props.users ? user = this.props.users.user : user = this.props.users
        // this.props.users.user ? user = this.props.users.user : user = this.props.users
        // user = this.props.users.attributes


        return (
            <div className="container">
                <div className="row">
                    <UserDetails users={this.props.users} />
                    {/* <UserDetails user={user} /> */}
                    {/* <UserMovies /> */}
                    <UserMovies savedMovies={this.state.savedMovies} />
                    {/* <UserMovies userMovies={this.props.userMovies} /> */}
                    {/* <UserComments comments={this.state.comments} /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, null)(UserPage)





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
//     user ? (myComments = this.props.userComments.filter(comm => comm.user_id === user.id)) : (myComments = [])

//     return (
//       <div className="Profile">
//         <Navbar users={this.props.users} signOut={this.props.signOut}/>
//         <div id="profileCon" className="ui grid">
//           <UserDetails user={user}/>
//           <UserMovies userMovies={this.props.userMovies} />
//           <UserComments classes="mycomments four wide column" userComments={myComments} deleteComment={this.props.handleDeleteComment} mycomments={true} user={user} />
//         </div>
//       </div>
//     )
//   }

// }

// export default Profile