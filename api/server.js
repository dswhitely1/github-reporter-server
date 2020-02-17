const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes/routes.index');

const server = express();

// Middleware
server.use([helmet(), express.json(), cors(), morgan('dev')]);

server.use('/', routes);

server.use((error, req, res, next) => {
  console.log('Called', error);
  res.status(500).json({ message: 'An Error Has Occurred', error });
});

module.exports = server;
