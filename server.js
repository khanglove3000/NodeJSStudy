const http = require('http');

const server = http.createServer(req, res => {
    console.log('run request...');
    res.setHeader('content-type', 'text/html');
    res.write('<h3>Hello World </h3>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('NodeJS');
})