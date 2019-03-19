var io = require('socket.io')();

io.on('connection', (client) => {
    console.log('connected');
    client.on('up', () => {
        console.log('going up!')
    })
    client.on('down', () => {
        console.log('going down!')
    })
    client.on('stop', () => {
        console.log('stop!')
    })
});

const port = 3001;
io.listen(port);
console.log('listening on port', port);