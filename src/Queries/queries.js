import {gql} from 'apollo-boost';

const getPetNamesQuery = gql`
    query ($email: String!){
        user(email: $email) {
            id
            userUnviewedNames{
            id
            name
            }
        }
    }
`

const getUserQuery = gql `
    query ($email: String!){
        user(email:$email){
            id
            email
            userLikedNames{
                name
                id
            }
        }
    }
`


export { getPetNamesQuery, getUserQuery}
