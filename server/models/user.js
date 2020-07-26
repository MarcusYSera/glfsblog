const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Name is required.']
  },
  lastName: {
    type: String,
    required: false
  },
  // gender: {
  //   type: String,
  //   required: false
  // },
  // birthday: {
  //   type: String,
  //   required: false
  // },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: false
  },
  createdAt: {
    type: String,
    // required: false
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;