import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateUser } from '../../actions/usersActions'

import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react'
// import Swal from 'sweetalert2'

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
            username: this.props.users.username,
            about: this.props.users.about,
            profile_picture: this.props.users.profile_picture
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateUser = (event) => {
        event.preventDefault();
        // console.log(this.state)
        // let {username, password, about, picture_profile} = this.state
        this.updateUser(this.state)

        // fetch('http://localhost:3001/api/v1/user/edit', {
        //     method: "PATCH",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept':'application/json',
        //         "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        //     },
        //     body: JSON.stringify({
        //         username,
        //         password,
        //         about,
        //         picture_profile
        //     })
        // })
        // .then(resp => resp.json())
        // .then(updatedProfile => {
        //     updateUser(updatedProfile)
        //     Swal.fire({
        //         title: 'Profile Updated',
        //         text: `Your profile has been updated!`,
        //         icon: 'success',
        //         confirmButtonText: 'Go to Profile',
        //     }).then(function() {
        //         window.history.go(-2);
        //     })
        // })
    }

    render() {
        return (
            <div className='animated bounceIn'>
                <Grid textAlign='center' style={{ height: '78vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 500 }}>
                        <Icon name='address card' size='big' color='green' fluid icon='address card' />
                        <Header as='h2' color='green' textAlign='center'>
                            Edit your MUVI account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input name="username" fluid icon='user' iconPosition='left' placeholder='Username' onChange={(event) => this.handleInputChange(event)} value={this.state.username} />
                                <Form.Input name="password" fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={(event) => this.handleInputChange(event)} value={this.state.password} />
                                <Form.Input name="about" fluid icon='book' iconPosition='left' placeholder='Something about you...' onChange={(event) => this.handleInputChange(event)} value={this.state.about} />
                                <Form.Input name="profile_picture" fluid icon='globe' iconPosition='left' placeholder='Profile Picture wwww...' type='url' onChange={(event) => this.handleInputChange(event)} value={this.state.profile_picture} />

                                <Button color='green' fluid size='large' onClick={(event) => { this.updateUser(event, this.state) }}>
                                    Update
                                </Button>
                                <span>  Or  <Link to="/profile">
                                    Back</Link></span>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (updatedUser) => {dispatch(updateUser(updatedUser))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)



        // return(
        //     <div className="login-page-container">
        //         <div id="edit-profile-form" className="login-signup-form">
        //             <div className="edit-profile-header">
        //                 <i className="fas fa-user-edit"></i>
        //                 <h1>Edit Profile</h1>
        //             </div>
        //             <div className="field">
        //                 <label className="label">Username</label>
        //                 <div className="control">
        //                     <input onChange={(event) => this.handleInputChange(event)}
        //                     className="input" name="username" type="text" placeholder="Username" value={username}/>
        //                 </div>
        //             </div> 

        //             <div className="field">
        //                 <label className="label">Password</label>
        //                 <div className="control">
        //                     <input onChange={(event) => this.handleInputChange(event)}
        //                     className="input" name="password" type="text" placeholder="Password"/>
        //                 </div>
        //             </div> 

        //             <div className="field">
        //                 <label className="label">about</label>
        //                 <div className="control">
        //                     <input onChange={(event) => this.handleInputChange(event)}
        //                     className="input" name="about" type="text" placeholder="about" value={about}/>
        //                 </div>
        //             </div>

        //             <div className="field">
        //                 <label className="label">Profile Picture</label>
        //                 <div className="control">
        //                     <input onChange={(event) => this.handleInputChange(event)}
        //                     className="input" name="profile_picture" type="file" placeholder="Profile Picture" value={profile_picture}/>
        //                 </div>
        //             </div>
        //             <div className="control form-submit-container">
        //                 <button onClick={(event) => this.updateUser(event, this.state)}
        //                 className="button is-link">Update</button>
        //                 {/* eslint-disable-next-line */}
        //                 <span>  Or  <Link to="/profile">
        //                  Back</Link></span>
        //             </div>
        //         </div>
        //     </div>
        // )
 