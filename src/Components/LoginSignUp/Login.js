import React, { Component } from "react"
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'

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
            // changes in input w/ corresponding name, updates key in our state
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='animated bounceIn'>
                <Grid textAlign='center' style={{ height: '78vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 500 }}>
                    <Icon name='address card' size='big' color='green' icon='address card' />
                        <Header as='h2' color='green' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input name="username" icon='user' iconPosition='left' placeholder='Username' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input
                                    name="password"
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={(event) => this.handleInputChange(event)}
                                />

                                <Button color='green' size='large' onClick={(event) => { this.props.loggingIn(event, this.state) }}>
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
 