import React, { Component } from "react";
import fire from "./Config/Firebase";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
		this.logIn = this.logIn.bind(this);
		this.resetPassword = this.resetPassword.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	logIn(e) {
		this.props.loading();
		e.preventDefault();
		fire.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(user => {})
			.catch(function(error) {
				alert(error.message);
			})
			.finally(() => {
				this.props.loadingStop();
			});
	}

	resetPassword() {
		if (this.state.email) {
			this.props.loading();
			fire.auth()
				.sendPasswordResetEmail(this.state.email)
				.then(function() {
					alert(
						"Link do zresetowania twojego hasła został wysłany. Proszę sprawdź swoją skrzynkę mailową aby ukończyć resetowanie hasła"
					);
				})
				.catch(function(error) {
					alert(error.message);
				})
				.finally(() => {
					this.props.loadingStop();
				});
		} else {
			alert(
				"Podaj swój adres email. Link do zresetowania hasła będzie na niego przesłany"
			);
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
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
						value={this.state.email}
					/>
					<input
						name="password"
						type="password"
						placeholder="Hasło"
						className="credentialInput"
						onChange={this.handleChange}
						value={this.state.password}
					/>
					<button onClick={this.logIn}>Zaloguj się</button>
				</form>
				<button onClick={this.props.navigateToRegistration}>
					Zarejestruj się
				</button>
				<button onClick={this.resetPassword}>Zresetuj hasło</button>
			</div>
		);
	}
}

export default Login;
