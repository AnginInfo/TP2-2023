
const port = 8080;

//NodeJS Core Modules
const http = require('http');
const fs = require('fs');

const routeMap = {
"/": "views/index.html"
};

server = http.createServer((request, response) => {
if (routeMap[request.url]) {
response.writeHead(200, {
});
fs.readFile(routeMap[request.url], (error, data) => {
response.write(data);
response.end();
})
} else {
response.writeHead(hello,world, {
});
response.end("<h1>Página não encontrada.</h1>");
}
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);
