import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

// import { editUser } from '../../actions/usersActions'


class UserEdit extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: "",
            about: "",
            profile_picture: "",
        }
    }

    componentDidMount(){
        this.setState({
            username: this.props.currentUser.username,
            about: this.props.currentUser.about,
            profile_picture: this.props.currentUser.profile_picture
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitUpdateUser = (event) => {
        event.preventDefault()
        // editUser()
        console.log(this.state)
        let {username, password, about, picture_profile} = this.state

        fetch('http://localhost:3001/user/edit', {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                username,
                password,
                about,
                picture_profile
            })
        })
        .then(resp => resp.json())
        .then(updatedProfile => {
            this.props.updateUser(updatedProfile)
            Swal.fire({
                title: 'Profile Updated',
                text: `Updates were made successfully!`,
                icon: 'success',
                confirmButtonText: 'Go to Profile',
            }).then(function() {
                window.history.back();
            })
        })
    }

    render(){
        let {username, about, profile_picture} = this.state
        return(
            <div className="login-page-container">
                <div id="edit-profile-form" className="login-signup-form">
                    <div className="edit-profile-header">
                        <i className="fas fa-user-edit"></i>
                        <h1>Edit Profile</h1>
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="username" type="text" placeholder="Username" value={username}/>
                        </div>
                    </div> 

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="password" type="text" placeholder="Password"/>
                        </div>
                    </div> 

                    <div className="field">
                        <label className="label">about</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="about" type="text" placeholder="about" value={about}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Profile Picture</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="profile_picture" type="file" placeholder="Profile Picture" value={profile_picture}/>
                        </div>
                    </div>
                    <div className="control form-submit-container">
                        <button onClick={(event) => this.onSubmitUpdateUser(event, this.state)}
                        className="button is-link">Update</button>
                        {/* eslint-disable-next-line */}
                        <span>  Or  <Link to="/profile">
                         Back</Link></span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (editUser) => {dispatch(editUser(editUser))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)