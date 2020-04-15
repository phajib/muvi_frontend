import React, { Component } from "react"
import { connect } from 'react-redux'
import UserDetails from "./UserDetails.js"
import UserMovies from "../User/UserMovies"
import UserComments from "./UserComments"
// import { fetchUserPage } from '../../actions/usersActions' 

// let HOST_URL = "http://localhost:3001/api/v1"
// debugger
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
        // fetch(`${HOST_URL}/user/${this.props.userProfile}/info`)
        // .then(resp => resp.json())
        // .then( data => {
        //     console.log(data)
        //     this.setState({
        //         user: data.user_info,
        //         savedMovies: data.savedMovies,
        //         userComments: data.userComments
        //     })
        // })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <UserDetails users={this.props.users} />
                    <div className="col">
                        {/* <UserMovies users={this.props.users} savedMovies={this.props.savedMovies}/> */}
                        {/* <UserMovies savedMovies={this.state.savedMovies} /> */}
                        <UserMovies users={this.props.users} userMovies={this.props.userMovies} />
                    </div>
                    <div className="col">
                        {/* <UserComments users={this.props.users} userComments={this.props.userComments} /> */}
                    {/* <UserComments users={this.props.users}/> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        savedMovies: state.userMovies,
        userComments: state.userComments
    }
}

export default connect(mapStateToProps, null)(UserPage)
