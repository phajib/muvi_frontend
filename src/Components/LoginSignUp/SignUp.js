import React, { Component } from "react"
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'

class Signup extends Component {
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
                    <Icon name='address card' size='big' color='green' icon='address card' />
                        <Header as='h2' color='green' textAlign='center'>
                            Sign Up for a MUVI account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input name="username" icon='user' iconPosition='left' placeholder='Username' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input name="password" icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input name="about" icon='book' iconPosition='left' placeholder='Something about you...' onChange={(event) => this.handleInputChange(event)} />
                                <Form.Input name="profile_picture" icon='picture' iconPosition='left' placeholder='Profile Picture wwww...' type='url' onChange={(event) => this.handleInputChange(event)} />

                                <Button color='green' size='large' onClick={(event) => { this.props.createUser(event, this.state) }}>
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
