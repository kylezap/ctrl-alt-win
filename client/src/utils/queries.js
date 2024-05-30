import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      firstName
      lastName
      username
      email
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query GetSingleUser($id: ID!) {
    getSingleUser(id: $id) {
      id
      firstName
      lastName
      username
      email
    }
  }
`;

export const GET_GAMES = gql`
  query GetGames {
    getGames {
      id
      name
      rating
      yearRelease
      platform
      summary
    }
  }
`;

export const GET_SINGLE_GAME = gql`
  query GetSingleGame($id: ID!) {
    getSingleGame(id: $id) {
      id
      name
      rating
      yearRelease
      platform
      summary
    }
  }
`;