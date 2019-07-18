import React, { Component } from "react";

class Control extends Component {
	constructor(props) {
		super(props);
		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
		this.stop = this.stop.bind(this);
	}

	up(event) {
		event.preventDefault();
		let actuatorId = event.target.parentNode.parentNode.id;
		if (this.props.socket) {
			this.props.socket.emit("up", actuatorId);
		}
	}

	down(event) {
		event.preventDefault();
		let actuatorId = event.target.parentNode.parentNode.id;
		if (this.props.socket) {
			this.props.socket.emit("down", actuatorId);
		}
	}

	stop(event) {
		let actuatorId = event.target.parentNode.parentNode.id;
		if (this.props.socket) {
			this.props.socket.emit("stop", actuatorId);
		}
	}

	faza() {
		document.getElementById("baza").innerHTML += "XD";
	}

	render() {
		return (
			<div>
				<div onClick={this.faza}>Faza</div>
				<div id="baza" />
				<div>Head</div>
				<div className="actuatorSection">
					<div id="1" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[0]}
						</div>
						<div className="actuatorControl">
							<i
								className="material-icons"
								onClick={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
								expand_more
							</i>
						</div>
					</div>
					<div id="2" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[1]}
						</div>
						<div className="actuatorControl">
							<i
								className="material-icons"
								onMouseDown={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
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
							<i
								className="material-icons"
								onMouseDown={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
								expand_more
							</i>
						</div>
					</div>
					<div id="4" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[3]}
						</div>
						<div className="actuatorControl">
							<i
								className="material-icons"
								onMouseDown={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
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
							<i
								className="material-icons"
								onMouseDown={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
								expand_more
							</i>
						</div>
					</div>
					<div id="6" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[5]}
						</div>
						<div className="actuatorControl">
							<i
								className="material-icons"
								onMouseDown={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
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
							<i
								className="material-icons"
								onMouseDown={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
								expand_more
							</i>
						</div>
					</div>
					<div id="8" className="actuator">
						<div className="actuatorPosition">
							{this.props.actuatorData[7]}
						</div>
						<div className="actuatorControl">
							<i
								className="material-icons"
								onMouseDown={this.up}
								onMouseUp={this.stop}
							>
								expand_less
							</i>
							<i
								className="material-icons"
								onMouseDown={this.down}
								onMouseUp={this.stop}
							>
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
