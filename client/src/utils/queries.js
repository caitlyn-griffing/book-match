import { gql } from "@apollo/client";

const getItem = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookID
                authors
                image
                description
                title
                link
            }
        }
    }
`;

export default getItem;