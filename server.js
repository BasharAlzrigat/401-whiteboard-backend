
'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const postRouter = require('./routes/post.route')
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.use(postRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


function start() {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  }

  module.exports = {
    server: app,
    start: start
  }