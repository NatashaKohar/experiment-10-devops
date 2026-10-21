
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>Hello World!</h1>
        <h2>DevOps Experiment 10</h2>
        <p>My application is running successfully.</p>
    `);
});

const port = process.env.PORT || 3000;

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
