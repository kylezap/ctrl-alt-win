const typeDefs = `
type User {
  _id: ID
  firstName: String!
  lastName: String!
  username: String!
  password: String!
  email: String!
}

type Game {
  name: String!
  rating: String
  yearRelease: Int
  platform: [String]
  summary: String
}

type Auth {
  token: String!
  user: User
}

input UserInput {
  username: String!
  email: String!
  password: String!
}

input GameInput {
  gameId: String
  name: String!
  rating: String
  yearRelease: Int
  platform: [String]
  summary: String
}

type Query {
  getUser(userId: ID!): User
  searchGames(title: String!): [Book]
}

type Mutation {
  createUser(input: UserInput!): User
  login(email: String!, password: String!): Auth
  saveGame(userId: ID!, bookInput: BookInput!): User
  deleteGame(userId: ID!, gameId: ID!): User
}
`;

module.exports = typeDefs;
