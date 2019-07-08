// var ioCloud = require('socket.io')();
var ioLocal = require('socket.io')();

// ioCloud.on('connection', (client) => {
//     console.log('cloud connected');
//     client.on('up', () => {
//         ioCloud.sockets.emit('up');
//         console.log('socketServer up!');
//     })
//     client.on('down', () => {
//         ioCloud.sockets.emit('down');
//         console.log('socketServer down!');
//     })
//     client.on('stop', () => {
//         ioCloud.sockets.emit('stop');
//         console.log('socketServer stop!');
//     })
// });

ioLocal.on('connection', (client) => {
    console.log('local connected');
    client.on('up', () => {
        // ioCloud.sockets.emit('up');
        // console.log('socketServer up!');
    })
    client.on('down', () => {
        // ioCloud.sockets.emit('down');
        // console.log('socketServer down!');
    })
    client.on('stop', () => {
        // ioCloud.sockets.emit('stop');
        // console.log('socketServer stop!');
    })
});

// const portCloud = 3001;
const portLocal = 3002;

// ioCloud.listen(portCloud);
// console.log('cloud listening on port', portCloud);

ioLocal.listen(portLocal);
console.log('local listening on port', portLocal);
