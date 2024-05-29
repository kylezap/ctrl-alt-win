const { Schema, model } = require('mongoose');

const gameSchema = require('./Game.js');

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
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    default: 0,
  },
  savedGames: [gameSchema]
});

const User = model('User', userSchema);

module.exports = User;
