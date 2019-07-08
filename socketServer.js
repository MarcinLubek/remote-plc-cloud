var ioCloud = require('socket.io')();
var ioLocal = require('socket.io')();

ioCloud.on('connection', (client) => {
    console.log('cloud connected');
    client.on('up', () => {
        ioLocal.sockets.emit('up');
        console.log('cloud emits up!');
    })
    client.on('down', () => {
        ioLocal.sockets.emit('down');
        console.log('cloud emits down!');
    })
    client.on('stop', () => {
        ioLocal.sockets.emit('stop');
        console.log('cloud emits stop!');
    })
});

// ioLocal.on('connection', (client) => {
//     client.on('up', () => {
//         console.log('socketServer ioLocal up');
//         // ioCloud.sockets.emit('up');
//         // console.log('socketServer up!');
//     })
//     client.on('down', () => {
//         console.log('socketServer ioLocal down');
//         // ioCloud.sockets.emit('down');
//         // console.log('socketServer down!');
//     })
//     client.on('stop', () => {
//         console.log('socketServer ioLocal stop');
//         // ioCloud.sockets.emit('stop');
//         // console.log('socketServer stop!');
//     })
// });

const portCloud = 3001;
const portLocal = 3002;

ioCloud.listen(portCloud);
console.log('cloud listening on port', portCloud);

ioLocal.listen(portLocal);
console.log('local listening on port', portLocal);
