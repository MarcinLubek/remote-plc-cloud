let localClient = require("socket.io")();
let cloudClient = require("socket.io")();

localClient.listen(3001);
cloudClient.listen(3002);

let serverData;

localClient.on("connect", client => {
	client.on("data", data => {
		serverData = data;
		cloudClient.emit("data", serverData);
	});
});

cloudClient.on("connect", client => {
	client.emit("data", serverData);

	client.on("up", actuatorId => {
		localClient.emit("up", actuatorId);
	});
	client.on("down", actuatorId => {
		localClient.emit("down", actuatorId);
	});
	client.on("stop", () => {
		localClient.emit("stop");
	});
});
