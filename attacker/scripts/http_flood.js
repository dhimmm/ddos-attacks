
const http = require('http');
const target = { hostname: 'defender', port: 8080, path: '/' };

const sendRequest = () => {
    http.get(target, (res) => {
        res.on('data', () => {});
    });
};

setInterval(sendRequest, 10);
