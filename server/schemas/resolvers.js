const { User, Game } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (_, { userId }) => {
      const foundUser = await User.findById(userId);
      if (!foundUser) {
        throw new Error(`No user found with id: ${userId}`);
      }
      return foundUser;
    },
    searchGames: async (_, { name }) => {
      const allGames = await Game.find({name});
      if (!allGames) {
        throw new Error("No games found");
      }
      return allGames;
    },
  },

  Mutation: {
    createUser: async (_, {input}) => {
      console.log(input);
      const user = await User.create(input);

      const token = signToken(user);
      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({
        $or: [{ username: email }, { email: email }],
      });
      if (!user) {
        throw new Error("User not found");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new Error("Incorrect password");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveGame: async (_, { userId, GameInput }) => {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { savedGames: GameInput } },
        { new: true }
      );
      return updatedUser;
    },
    deleteGame: async (_, { userId, bookId }) => {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { savedGames: { bookId: bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    },
  },
};

module.exports = resolvers;
