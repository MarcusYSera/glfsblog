const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test'){
  mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PSW}@glfsblog.o5glh.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`);
}

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message});
});

module.exports = app;
