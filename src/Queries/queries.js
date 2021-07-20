import {gql} from 'apollo-boost';


const getPetNamesQuery = gql`
    {
        petNames {
            name
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
