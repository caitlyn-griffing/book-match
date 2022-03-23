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



// SAVE_BOOK will execute the saveBook mutation


// REMOVE_BOOK 




