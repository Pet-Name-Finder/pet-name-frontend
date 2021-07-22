export const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  )
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
}

// export const getPetNamesQuery = gql`
//     query ($email: String!){
//         user(email: $email) {
//             id
//             userUnviewedNames{
//             id
//             name
//             }
//         }
//     }
// `
//
// export const getUserQuery = gql `
//     query ($email: String!){
//         user(email:$email){
//             id
//             email
//             userLikedNames{
//                 name
//                 id
//             }
//         }
//     }
// `
