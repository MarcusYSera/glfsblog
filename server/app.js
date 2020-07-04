const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/routes');
const { mongoUser, mongoPassword, mongoDB } = require('./config');

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test'){
  mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@glfsblog.o5glh.mongodb.net/${mongoDB}?retryWrites=true&w=majority`);
}

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message});
});

module.exports = app;
