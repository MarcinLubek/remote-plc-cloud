import React, { Component } from "react";

import Login from "./Login";
import fire from "./Config/Firebase";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: "login",
			isLogged: false,
			isAuthorized: false
		};
		this.navigateToLogIn = this.navigateToLogIn.bind(this);
		this.navigateToRegistration = this.navigateToRegistration.bind(this);
		this.navigateToDashboard = this.navigateToDashboard.bind(this);
		this.navigateToSettings = this.navigateToSettings.bind(this);
		this.loading = this.loading.bind(this);
		this.loadingStop = this.loadingStop.bind(this);
	}

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		this.loading();
		let self = this;
		fire.auth().onAuthStateChanged(user => {
			this.loading();
			if (user) {
				fire.database()
					.ref("/")
					.once("value")
					.then(function(snapshot) {
						if (user.uid in snapshot.val()) {
							self.setState({
								mode: "dashboard",
								isLogged: true,
								isAuthorized: true
							});
						} else {
							self.setState({
								mode: "dashboard",
								isLogged: true,
								isAuthorized: false
							});
						}
						self.loadingStop();
					});
			} else {
				this.setState({
					mode: "login"
				});
				self.loadingStop();
			}
		});
	}

	navigateToLogIn() {
		this.setState({
			mode: "login"
		});
	}

	navigateToRegistration() {
		this.setState({
			mode: "registration"
		});
	}

	navigateToDashboard() {
		this.setState({
			mode: "dashboard"
		});
	}

	navigateToSettings() {
		this.setState({
			mode: "settings"
		});
	}

	loading() {
		let loaderNode = document.getElementsByClassName("loader")[0];
		if (!loaderNode) {
			let main = document.getElementById("main");
			main.classList.add("shaded");
			loaderNode = document.createElement("div");
			loaderNode.innerHTML = "Ładowanie...";
			loaderNode.className = "loader";
			document.body.appendChild(loaderNode);
		}
	}

	loadingStop() {
		let loaderNode = document.getElementsByClassName("loader")[0];
		if (loaderNode) {
			let main = document.getElementById("main");
			main.classList.remove("shaded");
			let loaderNode = document.getElementsByClassName("loader")[0];
			document.body.removeChild(loaderNode);
		}
	}

	render() {
		switch (this.state.mode) {
			case "login":
				return (
					<div id="main">
						<Login
							navigateToRegistration={this.navigateToRegistration}
							loading={this.loading}
							loadingStop={this.loadingStop}
						/>
					</div>
				);
			case "registration":
				return (
					<div id="main">
						<Register
							navigateToLogIn={this.navigateToLogIn}
							loading={this.loading}
							loadingStop={this.loadingStop}
						/>
					</div>
				);
			case "dashboard":
				return (
					<div id="main">
						<Dashboard
							isAuthorized={this.state.isAuthorized}
							navigateToSettings={this.navigateToSettings}
							loading={this.loading}
							loadingStop={this.loadingStop}
						/>
					</div>
				);
			case "settings":
				return (
					<div id="main">
						<Settings
							navigateToDashboard={this.navigateToDashboard}
							loading={this.loading}
							loadingStop={this.loadingStop}
						/>
					</div>
				);
			default:
				return (
					<div id="main">
						<Login
							navigateToRegistration={this.navigateToRegistration}
							loading={this.loading}
							loadingStop={this.loadingStop}
						/>
					</div>
				);
		}
	}
}

export default App;
