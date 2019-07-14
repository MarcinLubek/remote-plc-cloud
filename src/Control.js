import React, { Component } from 'react';

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			actuatorPosition1: 0,
			actuatorPosition2: 0,
			actuatorPosition3: 0,
			actuatorPosition4: 0,
			actuatorPosition5: 0,
			actuatorPosition6: 0,
			actuatorPosition7: 0,
			actuatorPosition8: 0
		}
		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
		this.stop = this.stop.bind(this);
	}

	up(event) {
		console.log(event.target.parentNode.parentNode.id, ' is emmiting up!');
		if (this.props.socket) {
			this.props.socket.emit('up');
		}
	}

	down(event) {
		console.log(event.target.parentNode.parentNode.id, ' is emmiting down!');
		if (this.props.socket) {
			this.props.socket.emit('down');
		}
	}

	stop(event) {
		console.log(event.target.parentNode.parentNode.id, 'emmiting stopped!');
		if (this.props.socket) {
			this.props.socket.emit('stop');
		}
	}

	render() {
		return (
			<div>
				<div>Head</div>
				<div className="actuatorSection">
					<div id="actuator1" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition1}</div>
						<div className="actuatorControl">
							<i className="material-icons" onMouseDown={this.up} onMouseUp={this.stop}>expand_less</i>
							<i className="material-icons" onMouseDown={this.down}>expand_more</i>
						</div>
					</div>
					<div id="actuator2" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition2}</div>
						<div className="actuatorControl">
							<i className="material-icons" onClick={this.up}>expand_less</i>
							<i className="material-icons" onClick={this.down}>expand_more</i>
						</div>
					</div>
				</div>
				<div>Shoulders</div>
				<div className="actuatorSection">
					<div id="actuator3" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition3}</div>
						<div className="actuatorControl">
							<i className="material-icons" onClick={this.up}>expand_less</i>
							<i className="material-icons" onClick={this.down}>expand_more</i>
						</div>
					</div>
					<div id="actuator4" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition4}</div>
						<div className="actuatorControl">
							<i className="material-icons" onClick={this.up}>expand_less</i>
							<i className="material-icons" onClick={this.down}>expand_more</i>
						</div>
					</div>
				</div>
				<div>Hips</div>
				<div className="actuatorSection">
					<div id="actuator5" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition5}</div>
						<div className="actuatorControl">
							<i className="material-icons" onClick={this.up}>expand_less</i>
							<i className="material-icons" onClick={this.down}>expand_more</i>
						</div>
					</div>
					<div id="actuator6" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition6}</div>
						<div className="actuatorControl">
							<i className="material-icons" onClick={this.up}>expand_less</i>
							<i className="material-icons" onClick={this.down}>expand_more</i>
						</div>
					</div>
				</div>
				<div>Thighs</div>
				<div className="actuatorSection">
					<div id="actuator7" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition7}</div>
						<div className="actuatorControl">
							<i className="material-icons" onClick={this.up}>expand_less</i>
							<i className="material-icons" onClick={this.down}>expand_more</i>
						</div>
					</div>
					<div id="actuator8" className="actuator">
						<div className="actuatorPosition">{this.state.actuatorPosition8}</div>
						<div className="actuatorControl">
							<i className="material-icons" onClick={this.up}>expand_less</i>
							<i className="material-icons" onClick={this.down}>expand_more</i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Control;