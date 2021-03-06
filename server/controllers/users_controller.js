const User = require('../models/user');

module.exports ={
  view(req, res, next){
    User.find()
      .then(user => res.send(user))
      .catch(next)
  },

  findByEmail(req, res, next){
    const userEmail = req.params.email;
    User.findOne({email: userEmail})
      .then(user => res.send(user))
      .catch(next)
  },

  create(req, res, next){
    const userProps = req.body;

    User.create(userProps)
    .then(user=>res.send(user))
    .catch(next)
  },

  edit(req, res, next) {
    const userId = req.params.id;
    const userProps = req.body;

    User.findByIdAndUpdate({ _id: userId}, userProps)
      .then(()=> User.findById({ _id: userId}))
      .then(user => res.send(user))
      .catch(next);
  },

  delete(req, res, next) {
    const userId = req.params.id;

    User.findByIdAndRemove({_id: userId})
      .then(user => res.status(204).send(user))
      .catch(next);
  }
};