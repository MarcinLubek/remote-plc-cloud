//
// Local
//

let ioLocal = require("socket.io")();

let actuatorData;

ioLocal.on("connection", client => {
  console.log("local connected");
  client.on("actuatorData", faza => {
    console.log(faza);
  });
  client.on("disconnect", () => {
    console.log("local disconnected");
  });
  // client.on('up', () => {
  //     console.log('socketServer ioLocal up');
  //     // ioCloud.sockets.emit('up');
  //     // console.log('socketServer up!');
  // })
  // client.on('down', () => {
  //     console.log('socketServer ioLocal down');
  //     // ioCloud.sockets.emit('down');
  //     // console.log('socketServer down!');
  // })
  // client.on('stop', () => {
  //     console.log('socketServer ioLocal stop');
  //     // ioCloud.sockets.emit('stop');
  //     // console.log('socketServer stop!');
  // })
});
const portLocal = 3001;

ioLocal.listen(portLocal);
console.log("local listening on port", portLocal);

//
// Cloud
//

let ioCloud = require("socket.io")();

ioCloud.on("connection", client => {
  console.log("cloud connected");
  client.on("up", () => {
    ioLocal.sockets.emit("up");
    console.log("cloud emits up!");
  });
  client.on("down", () => {
    ioLocal.sockets.emit("down");
    console.log("cloud emits down!");
  });
  client.on("stop", () => {
    ioLocal.sockets.emit("stop");
    console.log("cloud emits stop!");
  });
  client.on("disconnect", () => {
    console.log("cloud disconnected");
  });
});
const portCloud = 3002;

ioCloud.listen(portCloud);
console.log("cloud listening on port", portCloud);
