import {gql} from 'apollo-boost';


const getPetNamesQuery = gql`
    {
        petNames {
            name
        }
    }
`

export { getPetNamesQuery}

//pack id, user id, likednames[], currentIndex