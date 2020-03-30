import React, { Component } from "react"

const sample = {
    width: '40vw',
}

class Signup extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: "",
            about: '',
            profile_picture: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div id="signup-container" style={sample}>
                <h1 className="is-size-1 sign-up-text">Sign Up</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="username" type="text" placeholder="Username"/>
                    </div>
                </div> 

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="password" type="password" placeholder="Password"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">About</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="bio" type="text" placeholder="About"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Profile Picture</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="avatar" type="file" placeholder="Profile Picture"/>
                    </div>
                </div>

                <div className="control form-submit-container">
                    <button onClick={(event) => this.props.createUser(event, this.state)}
                    className="button is-link">Sign Up</button>
                    {/* eslint-disable-next-line */}
                    <span>  Or  <a onClick={() => this.props.switchForm()}>
                            Login
                        </a></span>
                </div>
            </div>
        )
    }
}

export default Signup
