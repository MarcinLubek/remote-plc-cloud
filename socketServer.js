let localClient = require("socket.io")();
let cloudClient = require("socket.io")();

localClient.listen(3001);
cloudClient.listen(3002);

let serverData;

localClient.on("connect", client => {
	console.log("local connected");
	client.on("data", data => {
		serverData = data;
		cloudClient.emit("data", serverData);
	});
	client.on("disconnect", function() {
		console.log("local disconnected");
	});
});

cloudClient.on("connect", client => {
	console.log("cloud connected");
	client.emit("data", serverData);

	client.on("up", actuatorId => {
		localClient.emit("up", actuatorId);
	});
	client.on("down", actuatorId => {
		localClient.emit("down", actuatorId);
	});
	client.on("stop", actuatorId => {
		localClient.emit("stop", actuatorId);
	});
	client.on("disconnect", function() {
		console.log("cloud disconnected");
	});
});
