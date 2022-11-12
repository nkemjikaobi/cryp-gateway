import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation Mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      phoneNumber
      lastName
      firstName
    }
  }
`;

const LOGIN_USER = gql`
  mutation Mutation($data: LoginUserInput!) {
    loginUser(data: $data) {
      user {
        id
        email
        phoneCode
        phoneNumber
        lastName
        firstName
        createdAt
        updatedAt
        activeBusiness {
          id
          name
          websiteURL
          avatarURL
          registeredName
          isRegistered
          country {
            code
            name
          }
          createdAt
          updatedAt
          contact {
            fullName
            email
            phoneCode
            phoneNumber
          }
        }
        activeBusinessId
        businesses {
          id
          name
          websiteURL
          avatarURL
          registeredName
          isRegistered
          createdAt
          updatedAt
        }
        activeRole
      }
      meta {
        mobile {
          token
        }
      }
    }
  }
`;

const CREATE_PIN = gql`
  mutation CreatePin($input: CreateUserPinInput!) {
    createPin(input: $input) {
      id
      email
      phoneNumber
      lastName
      firstName
    }
  }
`;

const CREATE_SECURITY_QUESTION = gql`
  mutation Mutation($input: CreateUserSecurityQuestionInput!) {
    createSecurityQuestion(input: $input) {
      id
      email
      phoneNumber
      lastName
      firstName
    }
  }
`;

const SEND_PASSWORD_RESET_CODE = gql`
  mutation Mutation($email: String!) {
    sendPasswordResetCode(email: $email)
  }
`;

const CHANGE_PASSWORD = gql`
  mutation Mutation($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      id
      email
      phoneNumber
      lastName
      firstName
    }
  }
`;

export { CREATE_USER, LOGIN_USER, CREATE_PIN, CREATE_SECURITY_QUESTION, SEND_PASSWORD_RESET_CODE, CHANGE_PASSWORD };
