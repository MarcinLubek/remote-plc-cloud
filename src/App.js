import React, { Component } from 'react'

import Login from './Login'
import fire from './Config/Firebase'
import Register from './Register'
import Dashboard from './Dashboard'
import Settings from './Settings'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'login',
			isLogged: false,
			isAuthorized: false
		}
		this.navigateToLogIn = this.navigateToLogIn.bind(this)
		this.navigateToRegistration = this.navigateToRegistration.bind(this)
		this.navigateToDashboard = this.navigateToDashboard.bind(this)
		this.navigateToSettings = this.navigateToSettings.bind(this)
	}

	componentDidMount() {
		this.authListener()
	}

	authListener() {
		let self = this
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				fire.database().ref('/').once('value').then(function (snapshot) {
					if (user.uid in snapshot.val()) {
						self.setState({
							mode: 'dashboard',
							isLogged: true,
							isAuthorized: true
						})
					} else {
						self.setState({
							mode: 'dashboard',
							isLogged: true,
							isAuthorized: false
						})
					}
				});
			} else {
				this.setState({
					mode: 'login'
				})
			}
		})
	}

	navigateToLogIn() {
		this.setState({
			mode: 'login'
		})
	}

	navigateToRegistration() {
		this.setState({
			mode: 'registration'
		})
	}

	navigateToDashboard() {
		this.setState({
			mode: 'dashboard'
		})
	}

	navigateToSettings() {
		this.setState({
			mode: 'settings'
		})
	}

	render() {
		switch (this.state.mode) {
			default:
				return (
					<div>
						<Login navigateToRegistration={this.navigateToRegistration} />
					</div>
				)
			case 'registration':
				return (
					<Register navigateToLogIn={this.navigateToLogIn} />
				)
			case 'dashboard':
				return (
					<Dashboard isAuthorized={this.state.isAuthorized} navigateToSettings={this.navigateToSettings} />
				)
			case 'settings':
				return (
					<Settings />
				)
		}
	}
}

export default App
