const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  yearRelease: {
    type: Number,
  },
  platform: {
    type: String,
  },
  summary: {
    type: String,
  }
});

const Game = model('Game', gameSchema);

module.exports = Game;
