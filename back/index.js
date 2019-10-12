const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3070;
const usersRoutes = require('./app/usersRoutes');
require('./app/mongoose');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});
  
app.use('/api/users', usersRoutes);

app.listen(port, error => {
  if (error) {
    return console.log(`failed to start server ${error}`);
  }

  console.log(`running server on from port::::::: ${port}`);
});

module.exports = app;
