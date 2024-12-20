const http = require('http'); 
const fs = require('fs'); 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Read the HTML file
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error: Unable to read the file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
