import React from "react";

function ConnectionStatus(props) {
	function toggleConnection(e) {
		if (props.connectionState) {
			props.disconnect();
		} else {
			props.connect();
		}
	}

	if (props.connectionState) {
		return (
			<div className="connectionStatus" onClick={toggleConnection}>
				<div className="led green" />
				<div>Połączono</div>
			</div>
		);
	} else {
		return (
			<div className="connectionStatus" onClick={toggleConnection}>
				<div className="led red" />
				<div>Połącz</div>
			</div>
		);
	}
}

export default ConnectionStatus;
