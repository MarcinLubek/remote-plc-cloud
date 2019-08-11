import React, { Component } from "react";
import fire from "./Config/Firebase";

import Menu from "./Menu";

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: "main",
			deleteConfirmed: false,
			newPassword: "",
			newPasswordRetyped: ""
		};
		this.changePasswordMode = this.changePasswordMode.bind(this);
		this.deleteAccountMode = this.deleteAccountMode.bind(this);
		this.backToSettings = this.backToSettings.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.deleteAccount = this.deleteAccount.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	changePasswordMode() {
		this.setState({
			mode: "changePassword"
		});
	}

	deleteAccountMode() {
		this.setState({
			mode: "deleteAccount"
		});
	}

	backToSettings() {
		this.setState({
			mode: "main"
		});
	}

	changePassword() {
		if (this.state.newPassword === "") {
			alert("Proszę wpisz nowe hasło");
		} else if (this.state.newPasswordRetyped === "") {
			alert("Please retype your new password");
			alert("Proszę wpisz ponownie swoje nowe hasło");
		} else if (this.state.newPassword !== this.state.newPasswordRetyped) {
			alert("Hasła muszą się zgadzać");
		} else {
			this.props.loading();
			let self = this;
			let user = fire.auth().currentUser;
			user.updatePassword(this.state.newPassword)
				.then(function() {
					alert("Hasło zmienione!");
					self.props.loadingStop();
					self.backToSettings();
				})
				.catch(function(error) {
					alert(error.message);
					self.props.loadingStop();
				});
		}
	}

	deleteAccount() {
		this.props.loading();
		let user = fire.auth().currentUser;
		user.delete()
			.then(function() {
				alert("Użytkownik usunięty");
			})
			.catch(function(error) {
				alert(error.message);
			});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	render() {
		switch (this.state.mode) {
			default:
				return (
					<div className="container">
						<div className="bufferContainer">
							<div id="menuContainerId" className="menuContainer">
								<Menu
									navigateToSettings={
										this.props.navigateToSettings
									}
									navigateToDashboard={
										this.props.navigateToDashboard
									}
								/>
							</div>
						</div>
						<button onClick={this.changePasswordMode}>
							Zmień hasło
						</button>
						<button onClick={this.deleteAccountMode}>
							Usuń konto
						</button>
					</div>
				);
			case "changePassword":
				return (
					<div className="container">
						<input
							name="newPassword"
							type="password"
							placeholder="Nowe hasło"
							value={this.state.newPassword}
							onChange={this.handleChange}
						/>
						<input
							name="newPasswordRetyped"
							type="password"
							placeholder="Powtórz nowe hasło"
							value={this.state.newPasswordRetyped}
							onChange={this.handleChange}
						/>
						<button onClick={this.changePassword}>
							Zmień hasło
						</button>
						<button onClick={this.backToSettings}>Wróć</button>
					</div>
				);
			case "deleteAccount":
				return (
					<div className="container">
						<div>Jesteś pewien?</div>
						<button onClick={this.deleteAccount}>Usuń konto</button>
						<button onClick={this.backToSettings}>Wróć</button>
					</div>
				);
		}
	}
}

export default Settings;
