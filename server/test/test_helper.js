const mongoose = require('mongoose');

before(done=>{
  mongoose.connect('mongodb://localhost/glfsblog_test', { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection
    .once('open', ()=>done())
    .on('error', err=>{
    console.warn('Warning', error);
  });
});

beforeEach(done =>{
  const {users} = mongoose.connection.collections;
  users.drop()
    .then(() => done())
    .catch(() => done())
})