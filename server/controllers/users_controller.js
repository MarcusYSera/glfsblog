const User = require('../models/user')

module.exports ={
  greeting(req, res){
    res.send({hi: 'there'});
  },
  create(req, res){
    console.log(req.body)
    const userProps = req.body;
    User.create(userProps)
    .then(user=>res.send(user));
  }
};