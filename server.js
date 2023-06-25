const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My first page</title></head>');
    res.write(`
      <body>
        <form action='/message' method='POST'>
          <input type='text' />
          <button type='submit'>Send</button>
        </form>
      </body>
    `);
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>My first page</title></head>');
  res.write('<body>Body</body></html>');

  res.end();
});

// listen will catch all the incoming requests continously at port 3000.
server.listen(3000);
