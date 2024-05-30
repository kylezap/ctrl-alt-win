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

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        username
      }
      token
    }
  }
`;

export const SAVE_GAME = gql`
  mutation SaveBook($userId: ID!, $bookInput: BookInput!) {
    saveBook(userId: $userId, bookInput: $bookInput) {
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        title
      }
      bookCount
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