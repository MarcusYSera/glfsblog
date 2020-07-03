const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

describe('Users controller', ()=>{
  it('Post to /api/users creates a new driver', done =>{
    request(app)
    .post('/api/users')
    .send({ email:'test@test.com'})
    .end(()=>{
      done();
    });
  });
});