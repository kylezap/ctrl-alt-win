const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    default: 0,
  },
  email: {
    type: String,
    required: true,
    default: 0,
  }
});

const User = model('User', userSchema);

module.exports = User;
