import {gql} from 'apollo-boost';

const getTempInfo = gql`
  query {
    episodesByIds(ids: [1, 2]) {
      name
      characters {
        name
      }
    }
  }
`

const getAllUsersQuery = gql`
  user {
      id
      email
      userPacks {
          id
      }
  }
`

export {getTempInfo}