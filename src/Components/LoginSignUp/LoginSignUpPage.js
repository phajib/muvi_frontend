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

    switchForm = () => {
        this.setState({
            displayLogin: !this.state.displayLogin
        })
    }

    createUser = (event, userInfo) => {
        event.preventDefault();
        this.props.signUp(userInfo)     //signUp ACTION apparently not a function
    }

    loggingIn = (event, userInfo) => {
        event.preventDefault();
        this.props.logIn(userInfo)      //logIn ACTION
    }
    
    render(){
        return(
            <div className="login-page-container">
                <div className="login-signup-form animated bounceInUp">
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
    signUp: (userInfo) => {dispatch(signUp(userInfo))},
    logIn: (userInfo) => {dispatch(logIn(userInfo))}
})

export default connect(null, mapDispatchToProps)(LoginPage)