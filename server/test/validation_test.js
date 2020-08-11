const assert = require('assert');
const User = require('../models/user');

describe('Validating records', ()=>{
  it('requires a user name', ()=>{
    const user = new User({name: undefined});
    const validationResult = user.validateSync();
    const {message} = validationResult.errors.name;

    assert(message === 'Name is required.')
    // done();
    // if we need a callback to check against database such as existing user
    // user.validate((validationResult)=>{

    // })
  })
})