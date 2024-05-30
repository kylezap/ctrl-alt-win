const db = require('../config/connection');
const { User, Game } = require('../models');
// const gameSeeds = require('./gameData.json');
const userSeeds = require('./userData.json');
const gameDB = require('./gameDB');

// db.once('open', async () => {
//   await gameDB('Game', 'games');

//   await Game.insertMany(gameSeeds);
//   console.log('Games seeded!');

//   process.exit(0);
// });

db.once('open', async () => {
  await gameDB('User');

  await User.insertMany(userSeeds);
  console.log('Users seeded!');

  process.exit(0);
});