import React, { Component } from "react"
// eslint-disable-next-line
import { connect } from 'react-redux'
import UserDetails from "./UserDetails.js"
import UserMovies from "../User/UserMovies"
import UserComments from "./UserComments"
// import { fetchUserPage } from '../../actions/usersActions' 

let HOST_URL = "http://localhost:3001/api/v1"

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
        fetch(`${HOST_URL}/user/${this.props.users.data.id}/info`)
        .then(resp => resp.json())
        .then( data => {
            console.log(data)
            this.setState({
                user: data.user_info,
                savedMovies: data.savedMovies,
                userComments: data.userComments
            })
        })
    }

    render() {
        return (
            <div className="container bg-dark">
                    <div>
                        {/* <UserDetails users={this.props.users} /> */}
                        <UserDetails userObj={this.state.user} />
                    </div>
                <div className="row">
                    <div className="col-sm-6">
                        {/* <UserMovies users={this.props.users} userMovies={this.props.userMovies} /> */}
                        <UserMovies savedMovies={this.state.savedMovies} />
                        {/* <UserMovies /> */}
                    </div>
                    <div className="col-sm-6">
                        <UserComments userComments={this.state.userComments} />
                        {/* <UserComments /> */}
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         users: state.users,
//         // savedMovies: state.userMovies,
//         // userComments: state.comments
//     }
// }

// export default connect(mapStateToProps, null)(UserPage)

export default UserPage
