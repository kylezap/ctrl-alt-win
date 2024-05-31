import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      username
      email
    }
  }
`;

export const SEARCH_GAMES = gql`
query SearchGames($name: String!) {
  searchGames(name: $name) {
    name
    platform
    rating
    summary
    yearRelease
  }
}
`;

// export const GET_SINGLE_GAME = gql`
//   query GetSingleGame($id: ID!) {
//     getSingleGame(id: $id) {
//       id
//       name
//       rating
//       yearRelease
//       platform
//       summary
//     }
//   }
// `;