import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        email
        phoneCode
        phoneNumber
        lastName
        isPinSet
        firstName
        customerId
        questions {
          question
          answer
        }
      }
      meta {
        mobile {
          token
        }
      }
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
        customerId
        questions {
          question
          answer
        }
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

const USE_EMAIL_CODE = gql`
  mutation Mutation($code: String!) {
    useEmailCode(code: $code) {
      id
      email
    }
  }
`;

const SEND_EMAIL_CODE = gql`
  mutation Mutation($email: String!) {
    sendEmailCode(email: $email)
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

const RESET_PASSWORD = gql`
  mutation ResetPassword($input: PasswordResetInput!) {
    resetPassword(input: $input) {
      id
      email
      phoneCode
      phoneNumber
      lastName
      isPinSet
      firstName
      customerId
    }
  }
`;

export { CREATE_USER, LOGIN_USER, CREATE_PIN, CREATE_SECURITY_QUESTION, SEND_PASSWORD_RESET_CODE, CHANGE_PASSWORD, USE_EMAIL_CODE, SEND_EMAIL_CODE, RESET_PASSWORD };
