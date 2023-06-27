const requestHandler = (req, res) => {
  const url = req.url;
  
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Assignment 1</title></head>
        <body>
          <form action="/create-user" method="POST">
            <input type="text" name="username">
            <button>Send</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  }

  if (url === '/create-user' && req.method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const user = Buffer.concat(body).toString();
      console.log(user);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    })
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Assignment 1</title></head>
        <body>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
          </ul>
        </body>
      </html>
    `);
    res.end();
  }
};

module.exports = requestHandler;