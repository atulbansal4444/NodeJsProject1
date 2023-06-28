const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log("In a middleware");
//   next(); // Allows the request to continue to the next middleware in line
// });

app.use((req, res, next) => {
  console.log('hi');
});

// listen will catch all the incoming requests continously at port 3000.
app.listen(3000);
