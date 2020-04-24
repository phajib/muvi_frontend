import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { userUpdate } from '../../actions/usersActions'

import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2'

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
        let {username, about, profile_picture} = this.props.users.data.attributes
        this.setState({
            username: username,
            about: about,
            profile_picture: profile_picture
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateUser = (event) => {
        // console.log(this.state)
        event.preventDefault();
        let {username, password, about, profile_picture} = this.state
        // this.props.updateUser(this.state)

        fetch('http://localhost:3001/api/v1/user/edit', {
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
                profile_picture
            })
        })
        .then(resp => resp.json())
        .then(updatedProfile => {
            this.props.userUpdate(updatedProfile)
            Swal.fire({
                title: 'Profile Updated',
                text: `Your profile has been updated!`,
                icon: 'success',
                confirmButtonText: 'Time to check some movies out!',
            })
            .then(function() {
                // window.history.go(-2);
                window.location.reload(true);
            })
        })
    }

    render() {
        return (
            <div className='animated bounceIn'>
                <Grid textAlign='center' style={{ height: '78vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 500 }}>
                        <Icon name='address card' size='big' color='green' icon='address card' />
                        <Header as='h2' color='green' textAlign='center'>
                            Edit your MUVI account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input name="username" icon='user' iconPosition='left' placeholder='Username' onChange={(event) => this.handleInputChange(event)} value={this.state.username} />
                                <Form.Input name="password" icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={(event) => this.handleInputChange(event)} value={this.state.password} />
                                <Form.Input name="about" icon='book' iconPosition='left' placeholder='Something about you...' onChange={(event) => this.handleInputChange(event)} value={this.state.about} />
                                <Form.Input name="profile_picture" icon='globe' iconPosition='left' placeholder='Profile Picture wwww...' type='url' onChange={(event) => this.handleInputChange(event)} value={this.state.profile_picture} />

                                <Button color='green' size='large' onClick={(event) => { this.updateUser(event, this.state) }}>
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
        userUpdate: (updatedUser) => {dispatch(userUpdate(updatedUser))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
