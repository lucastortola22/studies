const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, resp) => {
    if (req.url === '/') {
        

        fs.readFile(path.join(__dirname, 'index.html'), (error, data) => {
            resp.writeHead(200, {'Content-Type': 'text/html'})
            resp.write(data);
            resp.end();
        })

        
    }
    if (req.url === '/user') {
        resp.write('list of user'); 
        resp.end();
    }
})

server.listen(3000, () => {
    console.log('server is up and running.')
})