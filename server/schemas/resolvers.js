const User = require("./models/User");
const Game = require("./models/Game");

const resolvers = {
  Query: {
    getUsers: async () => {
      const allUsers = await User.find({});
      if (!allUsers) {
        throw new Error("No users found");
      } 
      return allUsers;
    },
    getSingleUser: async (_, { id }) => {
      const foundUser = await User.findById(id);
      if (!foundUser) {
        throw new Error(`No user found with id: ${id}`);
      } 
      return foundUser;
    },
    getGames: async () => {
      const allGames = await Game.find({});
      if (!allGames) {
        throw new Error("No games found");
      } 
      return allGames;
    },
    getSingleGame: async (_, { id }) => {
      const foundGame = await Game.findById(id);
      if (!foundGame) {
        throw new Error(`No game found with id: ${id}`);
      }
      return foundGame;
  },
  },

  Mutation: {
    createUser: (_, { firstName, lastName, username, email }) =>
      User.create({ firstName, lastName, username, email }),
    updateUser: (_, { id, firstName, lastName, username, email }) =>
      User.findByIdAndUpdate(
        id,
        { firstName, lastName, username, email },
        { new: true }
      ),
    deleteUser: (_, { id }) => User.findByIdAndRemove(id),
    createGame: (_, { name, rating, yearRelease, platform, summary }) =>
      Game.create({ name, rating, yearRelease, platform, summary }),
    updateGame: (_, { id, name, rating, yearRelease, platform, summary }) =>
      Game.findByIdAndUpdate(
        id,
        { name, rating, yearRelease, platform, summary },
        { new: true }
      ),
    deleteGame: (_, { id }) => Game.findByIdAndRemove(id),
  },
};

module.exports = resolvers;