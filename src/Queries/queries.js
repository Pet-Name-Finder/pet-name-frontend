import {gql} from 'apollo-boost';


const getPetNamesQuery = gql`
    {
        petNames {
            name
        }
    }
`

const getUserQuery = gql `
{
        user(email:"boris_walker@parisian.io"){
            id
            email
            userLikedNames{
                name
                id
            }
        }
    }
`;

export { getPetNamesQuery, getUserQuery}

//pack id, user id, likednames[], currentIndex