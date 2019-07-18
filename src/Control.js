import React, { Component } from "react";

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			actuatorInMovement: false
		};
		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
		this.stop = this.stop.bind(this);
		this.emergencySwitch = this.emergencySwitch.bind(this);
	}

	componentDidMount() {
		window.addEventListener("mouseup", this.emergencySwitch);
		let up = document.getElementsByClassName("actuatorIconUp");
		let down = document.getElementsByClassName("actuatorIconDown");
		for (let i = 0; i < up.length; i++) {
			up[i].addEventListener("mousedown", this.up);
			down[i].addEventListener("mousedown", this.down);
			up[i].addEventListener("mouseup", this.stop);
			down[i].addEventListener("mouseup", this.stop);

			up[i].addEventListener("touchstart", this.up);
			down[i].addEventListener("touchstart", this.down);
			up[i].addEventListener("touchend", this.stop);
			down[i].addEventListener("touchend", this.stop);
		}
	}

	emergencySwitch() {
		if (this.state.actuatorInMovement) {
			this.stop();
		}
	}

	up(event) {
		if (!this.state.actuatorInMovement) {
			this.setState({
				actuatorInMovement: true
			});
			event.preventDefault();
			let actuatorId = event.target.parentNode.parentNode.id;
			if (this.props.socket) {
				this.props.socket.emit("up", actuatorId);
			}
		}
	}

	down(event) {
		if (!this.state.actuatorInMovement) {
			this.setState({
				actuatorInMovement: true
			});
			event.preventDefault();
			let actuatorId = event.target.parentNode.parentNode.id;
			if (this.props.socket) {
				this.props.socket.emit("down", actuatorId);
			}
		}
	}

	stop() {
		if (this.props.socket) {
			this.props.socket.emit("stop");
			this.setState({
				actuatorInMovement: false
			});
		}
	}

	render() {
		return (
			<div>
				<div>Head</div>
				<div className="actuatorSection">
					<div id="1" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[0]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
					<div id="2" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[1]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
				</div>
				<div>Shoulders</div>
				<div className="actuatorSection">
					<div id="3" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[2]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
					<div id="4" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[3]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
				</div>
				<div>Hips</div>
				<div className="actuatorSection">
					<div id="5" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[4]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
					<div id="6" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[5]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
				</div>
				<div>Thighs</div>
				<div className="actuatorSection">
					<div id="7" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[6]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
					<div id="8" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[7]}
						</div>
						<div className="actuatorControl">
							<i className="material-icons actuatorIconUp">
								expand_less
							</i>
							<i className="material-icons actuatorIconDown">
								expand_more
							</i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Control;
