import React, { Component } from "react";
import fire from "./Config/Firebase";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			retypedPassword: ""
		};
		this.validateData = this.validateData.bind(this);
		this.registerUser = this.registerUser.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	validateData() {
		this.props.loadingStop();
		if (!this.state.email) {
			alert("Pole z adresem email nie może być puste");
		} else if (!this.state.password) {
			alert("Pole z hasłem nie może być puste");
		} else if (!this.state.retypedPassword) {
			alert("Pole z powtórnie wpisanym hasłem nie może być puste");
		} else if (this.state.password !== this.state.retypedPassword) {
			alert("Hasła muszą być takie same");
		} else {
			return true;
		}
		return false;
	}

	registerUser(e) {
		this.props.loading();
		e.preventDefault();
		if (this.validateData()) {
			fire.auth()
				.createUserWithEmailAndPassword(
					this.state.email,
					this.state.password
				)
				.then(user => {
					console.log("regiter user", user);
				})
				.catch(function(error) {
					console.log("register error", error);
				})
				.finally(() => {
					this.props.loadingStop();
				});
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
				<form id="registrationForm" className="container">
					<input
						name="email"
						type="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						name="password"
						type="password"
						placeholder="Hasło"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<input
						name="retypedPassword"
						type="password"
						placeholder="Powtórz hasło"
						value={this.state.retypedPassword}
						onChange={this.handleChange}
					/>
					<button onClick={this.registerUser}>Zarejestruj</button>
				</form>
				<button onClick={this.props.navigateToLogIn}>
					Wróć do strony logowania
				</button>
			</div>
		);
	}
}

export default Register;
