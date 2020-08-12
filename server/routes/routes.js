const UsersController = require('../controllers/users_controller')

module.exports = (app) =>{

  app.get('/api', UsersController.view);

  app.get('/api/users/:email', UsersController.findByEmail);

  app.post('/api/users', UsersController.create);

  app.put('/api/users/:id', UsersController.edit);

  app.delete('/api/users/:id', UsersController.delete);

};
