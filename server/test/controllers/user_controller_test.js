const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const User = mongoose.model('user');

describe('Users controller', ()=>{
  it('Post to /api/users creates a new driver', done =>{
    User.count().then(count =>{
      request(app)
      .post('/api/users')
      .send({ email:'test@test.com'})
      .end(()=>{
        User.count().then(newCount =>{
          assert(count+1 === newCount);
          done();
        })
      });
    })
  });
});