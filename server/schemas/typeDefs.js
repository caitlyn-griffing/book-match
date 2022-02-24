const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [ Book ]
  }
  type Book {
    _id: ID
    author: [ String ]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: String
    user: User
  }
  
  # Queries
  type Query {
    getAllUsers : [ User! ]!
    getSingleUser(id: ID!) : User!
    me: User!
  }
  # Mutations
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, input: BookInput): User!
    removeBook(userId: ID!, bookId: String): User!
  }
  input BookInput {
    bookAuthors: [String]! 
    description: String! 
    title: String! 
    bookId: String! 
    image: String!
    link: String!
  }
  
  
`
// type Query {
//   me: User
// }

// const typeDefs = gql`
//   type Class {
//     _id: ID
//     name: String
//     building: String
//     creditHours: Int
//   }

//   type Query {
//     classes: [Class]
//   }
// `;

module.exports = typeDefs;
