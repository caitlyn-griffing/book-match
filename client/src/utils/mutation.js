import { gql } from '@apollo/client'

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server
export const LOGIN_USER = gql`
    mutation loginUser( $email: String!, $password: String! ) {
    login(email: $email, password: $password){
        token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                bookID
                title
                description
                authors
                link
                image
                }
            }
        }  
    }
`;

// ADD_USER will execute the addUser mutation

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    image
                    link
                }
            }
        }
    }
`;

// SAVE_BOOK will execute the saveBook mutation

export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!) {
        saveBook(input: $input) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;

// REMOVE_BOOK 




