const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test'){
  mongoose.connect('mongodb+srv://dbUser:9ihi36QWPdh1HMhV@glfsblog.o5glh.mongodb.net/GLFSBlog?retryWrites=true&w=majority');
}

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message});
});

module.exports = app;
