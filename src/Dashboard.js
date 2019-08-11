import React, { Component } from "react";
import Menu from "./Menu";
import Control from "./Control";
import ConnectionStatus from "./ConnectionStatus";
import "material-design-icons/iconfont/material-icons.css";

import openSocket from "socket.io-client";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			connected: false,
			socket: null,
			actuatorData: []
		};
		this.connect = this.connect.bind(this);
		this.disconnect = this.disconnect.bind(this);
	}

	connect() {
		this.props.loading();

		let uri = "http://vps699582.ovh.net:3002";
		let socket = openSocket(uri);
		this.setState({ socket: socket });

		socket.on("connect_error", () => {
			alert(
				"Podczas próby połączenia wystąpił błąd. Sprawdź proszę połączenie z serwerem."
			);
			socket.disconnect();
			this.setState({
				connected: false
			});
		});

		socket.on("connect", () => {
			this.setState({
				connected: true,
				socket: socket
			});
		});
		socket.on("data", data => {
			this.setState({
				actuatorData: data
			});
		});

		this.props.loadingStop();
	}

	disconnect() {
		let socket = this.state.socket;
		socket.disconnect();
		this.props.loading();
		this.setState({
			connected: false
		});
		this.props.loadingStop();
	}

	render() {
		if (this.props.isAuthorized) {
			if (this.state.connected) {
				return (
					<div className="container">
						<div className="bufferContainer">
							<ConnectionStatus
								connectionState={this.state.connected}
								connect={this.connect}
								disconnect={this.disconnect}
							/>
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
						<Control
							socket={this.state.socket}
							actuatorData={this.state.actuatorData}
						/>
					</div>
				);
			} else {
				return (
					<div className="container">
						<div className="bufferContainer">
							<ConnectionStatus
								connectionState={this.state.connected}
								connect={this.connect}
								disconnect={this.disconnect}
							/>
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
						<div className="shaded">
							<Control
								socket={this.state.socket}
								actuatorData={this.state.actuatorData}
							/>
						</div>
					</div>
				);
			}
		} else {
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
					<div>Jesteś nieautoryzowanym użytkownikiem</div>
				</div>
			);
		}
	}
}

export default Dashboard;
