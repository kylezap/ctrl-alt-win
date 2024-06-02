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
    type: String,
  },
  platform: {
    type: String,
  },
  summary: {
    type: String,
  },
  background_image: {
    type: String,
  }
});

// const Game = model('Game', gameSchema);

module.exports = gameSchema;
