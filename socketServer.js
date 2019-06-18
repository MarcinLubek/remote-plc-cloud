var io = require('socket.io')();

io.on('connection', (client) => {
    console.log('connected');
    client.on('up', () => {
        io.sockets.emit('up');
        console.log('socketServer up!');
    })
    client.on('down', () => {
        io.sockets.emit('down');
    })
    client.on('stop', () => {
        io.sockets.emit('stop');
    })
});

const port = 3001;
io.listen(port);
console.log('listening on port', port);
