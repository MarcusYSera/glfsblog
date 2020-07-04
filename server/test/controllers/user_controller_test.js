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
      .send({ email:'mocha@test.com'})
      .end(()=>{
        User.count().then(newCount =>{
          assert(count+1 === newCount);
          done();
        })
      });
    })
  });

  it('PUT to /api/users/id edits an existing user', done => {
    const user = new User({ email: 'mocha@test.com', current: false});

    user.save().then(()=>{
      request(app)
        .put(`/api/users/${user._id}`)
        .send({ current: true})
        .end(()=>{
          User.findOne({ email: 'mocha@test.com'})
            .then(user =>{
              assert(user.current === true);
              done();
            });
        });
    });
  });

  it('DELETE to /api/users/id deletes an existing user', done => {
    const user = new User({email: 'mocha@test.com'});

    user.save().then(() => {
      request(app)
        .delete(`/api/users/${user._id}`)
        .end(() => {
          User.findOne({email: 'mocha@test.com'})
            .then((user) => {
              assert(user === null);
              done();
            });
        });
    });
  });
});