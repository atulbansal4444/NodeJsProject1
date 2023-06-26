const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

// listen will catch all the incoming requests continously at port 3000.
server.listen(3000);
