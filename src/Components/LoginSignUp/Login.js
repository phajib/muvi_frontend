import React, { Component } from "react"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='animated bounceIn'>
                <Grid textAlign='center' style={{ height: '78vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 500 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            <Image src='https://media1.giphy.com/media/dPXxkfC3UKvbG/giphy.gif' /> Log-in to your account
                            </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input name="username" fluid icon='user' iconPosition='left' placeholder='Username' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input
                                    name="password"
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={(event) => this.handleInputChange(event)}
                                />

                                <Button color='green' fluid size='large' onClick={(event) => { this.props.loggingIn(event, this.state) }}>
                                    Login
                                    </Button>
                            </Segment>
                        </Form>
                        <Message>
                            {/* eslint-disable-next-line */}
                                New to us? <Button onClick={() => this.props.switchForm()}>Sign Up</Button>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Login
 