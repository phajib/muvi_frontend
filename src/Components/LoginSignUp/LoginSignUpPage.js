import React, { Component } from "react"
import { connect } from "react-redux"
import { signUp, logIn } from "./../../actions/usersActions"

import Login from "./Login"
import Signup from "./SignUp"

class LoginPage extends Component {
    constructor(){
        super();

        this.state = {
            displayLogin: true
        }
    }

    switchForm = () => {        // switches forms from Login to Sign Up
        this.setState({
            displayLogin: !this.state.displayLogin
        })
    }

    createUser = (event, userInfo) => {
        event.preventDefault(); // don't re-render
        this.props.userSignUp(userInfo)
    }

    loggingIn = (event, userInfo) => {
        event.preventDefault();
        this.props.logIn(userInfo)      //logIn ACTION
    }

    render(){
        return(
            <div className="login-page-container">
                <div className="login-signup-form animated bounceIn">
                    {this.state.displayLogin ? 
                        (< Login switchForm={this.switchForm} loggingIn={this.loggingIn} />) 
                        :
                        (< Signup switchForm={this.switchForm} createUser={this.createUser} />)
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userSignUp: (userInfo) => {dispatch(signUp(userInfo))},
    logIn: (userInfo) => {dispatch(logIn(userInfo))}
})

export default connect(null, mapDispatchToProps)(LoginPage)