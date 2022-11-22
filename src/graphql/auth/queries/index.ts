import { gql } from "@apollo/client";

const GET_USER = gql`
  query Query {
    getCurrentUser {
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
  }
`;

export { GET_USER };
