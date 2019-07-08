var ioLocal = require('socket.io')();

ioLocal.on('connection', (client) => {
    console.log('local connected');
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
console.log('local listening on port', portLocal);

var ioCloud = require('socket.io')();

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

const portCloud = 3002;

ioCloud.listen(portCloud);
console.log('cloud listening on port', portCloud);


