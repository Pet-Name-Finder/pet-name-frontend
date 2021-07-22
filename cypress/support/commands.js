// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Comands.add('requestGraphQL', operationName => {
//   cy.request({
//     url: '/',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: {
//       query: operationName
//     },
//     failOnStatusCode: false
//   });
// });

Cypress.Commands.add('visitStubbed', function(url, operations = {}) {
  cy.visit(url, {
    onBeforeLoad: win => {
      cy
        .stub(win, 'fetch')

        .withArgs('https://pet-name-finder-be.herokuapp.com/graphql')

        .callsFake(serverStub)
    },
  })

  function serverStub(_, req) {
      const { operationName, query, variables } = JSON.parse(req.body)

      const resultStub = operations[operationName]
      if (resultStub) {
        return Promise.resolve(responseStub(resultStub))
      }

      // If you want, fallback to default mock data if stub for operation is not specified (optional)
      return runQuery(query, variables).then(responseStub)
    }
  })

  function responseStub(result) {
    return {
      json() {
        return Promise.resolve(result)
      },
      ok: true,
    }
}
