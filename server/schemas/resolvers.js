const { User, Game } = require("../models");
const { signToken } = require("../utils/auth");

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
    createUser: async (_, { firstName, lastName, username, email }) =>
      {
        const user = await User.create({ firstName, lastName, username, email });
        const token = signToken(user);
        return { token, user };
      
      },
    // updateUser: (_, { id, firstName, lastName, username, email }) =>
    //   User.findByIdAndUpdate(
    //     id,
    //     { firstName, lastName, username, email },
    //     { new: true }
    //   ),
    // deleteUser: (_, { id }) => User.findByIdAndRemove(id),
    createGame: async (_, { name, rating, yearRelease, platform, summary }) =>
      {
        const newGame = Game.create({ name, rating, yearRelease, platform, summary })
        return newGame;},
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