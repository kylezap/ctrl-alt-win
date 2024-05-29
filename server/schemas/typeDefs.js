const typeDefs = `
type User {
  id: ID!
  firstName: String!
  lastName: String!
  username: String!
  email: String!
}

type Game {
  id: ID!
  name: String!
  rating: String!
  yearRelease: Int
  platform: String
  summary: String
}

type Auth {
  token: String!
  user: User
}

type Query {
  getUsers: [User]
  getSingleUser(id: ID!): User
  getGames: [Game]
  getSingleGame(id: ID!): Game
}

type Mutation {
  createUser(firstName: String!, lastName: String!, username: String!, email: String!): User
  updateUser(id: ID!, firstName: String, lastName: String, username: String, email: String): User
  deleteUser(id: ID!): User
  createGame(name: String!, rating: String!, yearRelease: Int, platform: String, summary: String): Game
  updateGame(id: ID!, name: String, rating: String, yearRelease: Int, platform: String, summary: String): Game
  deleteGame(id: ID!): Game
}
`;

module.exports = typeDefs;
