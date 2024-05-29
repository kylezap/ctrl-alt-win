import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $username: String!, $email: String!) {
    createUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email) {
      id
      firstName
      lastName
      username
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $firstName: String, $lastName: String, $username: String, $email: String) {
    updateUser(id: $id, firstName: $firstName, lastName: $lastName, username: $username, email: $email) {
      id
      firstName
      lastName
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const CREATE_GAME = gql`
  mutation CreateGame($name: String!, $rating: String!, $yearRelease: Int, $platform: String, $summary: String) {
    createGame(name: $name, rating: $rating, yearRelease: $yearRelease, platform: $platform, summary: $summary) {
      id
      name
      rating
      yearRelease
      platform
      summary
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation UpdateGame($id: ID!, $name: String, $rating: String, $yearRelease: Int, $platform: String, $summary: String) {
    updateGame(id: $id, name: $name, rating: $rating, yearRelease: $yearRelease, platform: $platform, summary: $summary) {
      id
      name
      rating
      yearRelease
      platform
      summary
    }
  }
`;

export const DELETE_GAME = gql`
  mutation DeleteGame($id: ID!) {
    deleteGame(id: $id) {
      id
    }
  }
`;