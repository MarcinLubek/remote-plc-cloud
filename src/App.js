import React, { Component } from 'react';

import openSocket from 'socket.io-client';
const socket = openSocket('localhost:3001');

class App extends Component {
	constructor(props) {
		super(props);
		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
		this.stop = this.stop.bind(this);
	}

	up() {
		socket.emit('up');
	}

	down() {
		socket.emit('down');
	}

	stop() {
		socket.emit('stop');
	}

	render() {
		return (
			<div>
				<button onMouseDown={this.up} onMouseUp={this.stop}>Up</button>
				<button onMouseDown={this.down} onMouseUp={this.stop}>Down</button>
			</div>
		);
	}
}

export default App;
