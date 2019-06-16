import React, { Component } from 'react'
import fire from './Config/Firebase'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            retypedPassword: ''
        }
        this.validateData = this.validateData.bind(this)
        this.registerUser = this.registerUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    validateData() {
        if (!this.state.email) {
            alert('Email field cannot be empty')
        } else if (!this.state.password) {
            alert('Password field can not be empty')
        } else if (!this.state.retypedPassword) {
            alert('Retyped password field can not be empty')
        } else if (this.state.password !== this.state.retypedPassword) {
            alert('Passwords do not match')
        } else {
            return true
        }
        return false
    }

    registerUser(e) {
        this.props.loading()
        e.preventDefault()
        if (this.validateData()) {
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
                console.log('regiter user', user)
            }).catch(function (error) {
                console.log('register error', error)
            }).finally(() => {
                // this.props.loadingStop();
            });
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
                <form id="registrationForm" className="container">
                    <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <input name="retypedPassword" type="password" placeholder="Retype Password" value={this.state.retypedPassword} onChange={this.handleChange} />
                    <button onClick={this.registerUser}>Register</button>
                </form>
                <button onClick={this.props.navigateToLogIn}>Back to Log in page</button>
            </div >
        )
    }
}

export default Register