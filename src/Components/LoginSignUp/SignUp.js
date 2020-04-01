// import React, { Component } from "react"

// const sample = {
//     width: '40vw',
// }

// class Signup extends Component {
//     constructor(){
//         super();

//         this.state = {
//             username: "",
//             password: "",
//             about: '',
//             profile_picture: ''
//         }
//     }

//     handleInputChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     render(){
//         return(
//             <div id="signup-container" style={sample}>
//                 <h1 className="is-size-1 sign-up-text">Sign Up</h1>
//                 <div className="field">
//                     <label className="label">Username</label>
//                     <div className="control">
//                         <input onChange={(event) => this.handleInputChange(event)}
//                         className="input" name="username" type="text" placeholder="Username"/>
//                     </div>
//                 </div> 

//                 <div className="field">
//                     <label className="label">Password</label>
//                     <div className="control">
//                         <input onChange={(event) => this.handleInputChange(event)}
//                         className="input" name="password" type="password" placeholder="Password"/>
//                     </div>
//                 </div>

//                 <div className="field">
//                     <label className="label">About</label>
//                     <div className="control">
//                         <input onChange={(event) => this.handleInputChange(event)}
//                         className="input" name="bio" type="text" placeholder="About"/>
//                     </div>
//                 </div>

//                 <div className="field">
//                     <label className="label">Profile Picture</label>
//                     <div className="control">
//                         <input onChange={(event) => this.handleInputChange(event)}
//                         className="input" name="avatar" type="file" placeholder="Profile Picture"/>
//                     </div>
//                 </div>

//                 <div className="control form-submit-container">
//                     <button onClick={(event) => this.props.createUser(event, this.state)}
//                     className="button is-link">Sign Up</button>
//                     {/* eslint-disable-next-line */}
//                     <span>  Or  <a onClick={() => this.props.switchForm()}>
//                             Login
//                         </a></span>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Signup


import React, { Component } from "react"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Signup extends Component {
    // constructor(){
    //     super();

    //     this.state = {
    //         username: "",
    //         password: "",
    //         about: '',
    //         profile_picture: ''
    //     }
    // }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className='animated bounceIn'>
            <Grid textAlign='center' style={{ height: '78vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 500 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            <Image src='https://media1.giphy.com/media/dPXxkfC3UKvbG/giphy.gif' /> Sign Up for a MUVI account
                            </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input fluid icon='book' iconPosition='left' placeholder='Something about you...' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input fluid icon='file image' iconPosition='left' placeholder='Profile Picture' type='file' onChange={(event) => this.handleInputChange(event)} />

                                <Button color='green' fluid size='large' onClick={(event) => { this.props.createUser(event, this.state) }}>
                                    Sign Up
                                </Button>
                                
                            </Segment>
                        </Form>
                        <Message>
                            {/* eslint-disable-next-line */}
                                I just remembered who i was... <Button onClick={() => this.props.switchForm()}>Login</Button>
                        </Message>
                    </Grid.Column>
                </Grid>
                </div>
        )
    }
}

export default Signup
