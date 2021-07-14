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

export {getTempInfo}