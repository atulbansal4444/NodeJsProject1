const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
});

// listen will catch all the incoming requests continously at port 3000.
server.listen(3000);
