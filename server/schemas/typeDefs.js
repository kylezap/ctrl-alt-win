const typeDefs = `
type User {
  _id: ID
  firstName: String!
  lastName: String!
  username: String!
  password: String!
  email: String!
  savedGames: [Game]
}

type Game {
  name: String!
  rating: String
  yearRelease: String
  platform: String
  summary: String
  background_image: String
}

type Auth {
  token: String!
  user: User
}

input UserInput {
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
}

input GameInput {
  gameId: String
  name: String!
  rating: String
  yearRelease: Int
  platform: String
  summary: String
}

type Query {
  getUser(userId: ID!): User
  searchGames(name: String!): [Game]
}

type Mutation {
  createUser(input: UserInput!) : Auth
  login(email: String!, password: String!): Auth
  saveGame(userId: ID!, GameInput: GameInput!): User
  deleteGame(userId: ID!, gameId: ID!): User
}
`;

module.exports = typeDefs;
