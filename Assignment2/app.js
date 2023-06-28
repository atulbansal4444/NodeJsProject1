const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log("In a middleware");
//   next(); // Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//   console.log('hi');
// });

app.use('/users', (req, res, next) => {
  res.send(`
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
});

app.use('/', (req, res, next) => {
  res.send(`<head><title>Assignment 1</title></head>`);
});

// listen will catch all the incoming requests continously at port 3000.
app.listen(3000);
