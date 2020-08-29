const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const cors = require('cors');

const routes = require('./routes/routes');
const { mongoUser, mongoPassword, mongoDB } = require('./config');

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test'){
  // deployment database
  // mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@glfsblog.o5glh.mongodb.net/${mongoDB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
  // local database
  mongoose.connect('mongodb://localhost/glfsblog', { useNewUrlParser: true, useUnifiedTopology: true })
}

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Origin, X-Requested-With, Content-Type, Accept")
//   next();
// });

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST",
  optionsSuccessStatus: 200
  })
);
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, "../client/build")))
routes(app);


app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message});
});

module.exports = app;
