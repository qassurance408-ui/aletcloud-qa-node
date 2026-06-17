const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>AletCloud QA - Node.js Test</h1>
        <p>Framework: Node.js</p>
        <p>Time: ${new Date().toISOString()}</p>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
