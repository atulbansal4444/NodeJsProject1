const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require("./routes/shop");

const app = express();

// app.use((req, res, next) => {
//   console.log("In a middleware");
//   next(); // Allows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

// listen will catch all the incoming requests continously at port 3000.
app.listen(3000);
