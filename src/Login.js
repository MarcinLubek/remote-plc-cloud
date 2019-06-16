import React, { Component } from 'react'
import fire from './Config/Firebase'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.logIn = this.logIn.bind(this)
        this.resetPassword = this.resetPassword.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    logIn(e) {
        this.props.loading();
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {

        }).catch(function (error) {
            alert(error.message);
        }).finally(() => {
            this.props.loadingStop();
        });
    }

    resetPassword() {
        if (this.state.email) {
            this.props.loading();
            fire.auth().sendPasswordResetEmail(this.state.email).then(function () {
                alert('Link to reset your password was sent. Please check your email to finish resetting your password')
            }).catch(function (error) {
                alert(error.message)
            }).finally(() => {
                this.props.loadingStop();
            });
        } else {
            alert('Please provide your Email address. Link to reset your password will be sent to it.')
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form className="container">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="credentialInput"
                        onChange={this.handleChange}
                        value={this.state.email} />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="credentialInput"
                        onChange={this.handleChange}
                        value={this.state.password} />
                    <button onClick={this.logIn}>Log In</button>
                </form>
                <button onClick={this.props.navigateToRegistration}>Sign Up</button>
                <button onClick={this.resetPassword}>Reset Password</button>
            </div >
        )
    }
}

export default Login