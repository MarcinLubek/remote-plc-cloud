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
		this.faza = this.faza.bind(this);
	}

	connect() {
		this.props.loading();

		let uri = "http://vps699582.ovh.net:3002";
		let socket = openSocket(uri);
		this.setState({ socket: socket });

		socket.on("connect_error", () => {
			console.log("Connection error!");
			socket.io._reconnection = false;
			this.setState({
				connected: false
			});
		});

		socket.on("connect", () => {
			console.log("client 2 on connect");
			console.log("before", socket);
			setTimeout(() => {
				socket.disconnect();
				console.log("after", socket);
			}, 4000);
			this.setState({
				connected: true,
				socket: socket
			});
		});
		socket.on("data", data => {
			console.log("client 2 on data");
			this.setState({
				actuatorData: data
			});
		});

		this.props.loadingStop();
	}
	// connect() {
	// 	let socket = openSocket("http://vps699582.ovh.net:3003");
	// 	this.props.loading();
	// 	socket.on("connect", () => {
	// 		console.log("client 2 on connect");
	// 	});
	// 	socket.on("data", data => {
	// 		console.log("client 2 on data");
	// 		this.setState({
	// 			actuatorData: data
	// 		});
	// 	});
	// 	socket.on("error", function() {
	// 		console.log("socket on error");
	// 	});
	// 	if (socket.connected) {
	// 		this.setState({
	// 			connected: true,
	// 			socket: socket
	// 		});
	// 	}
	// 	this.props.loadingStop();
	// }

	disconnect() {
		let socket = this.state.socket;
		// socket.disconnect();
		this.props.loading();
		this.setState({
			connected: false,
			socket: null
		});
		this.props.loadingStop();
	}

	faza() {
		console.log("faza", this.state);
	}

	render() {
		if (this.props.isAuthorized) {
			if (this.state.connected) {
				return (
					<div className="container">
						<button onClick={this.faza}>faza</button>
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
						<button onClick={this.faza}>faza</button>
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
