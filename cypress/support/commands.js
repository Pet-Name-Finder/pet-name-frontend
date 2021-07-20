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

let originalFetch;

const responseStub = result =>
  Promise.resolve({
    json() {
      return Promise.resolve(result);
    },
    text() {
      return Promise.resolve(JSON.stringify(result));
    },
    ok: result.ok === undefined ? true : result.ok,
  });

function isStub(wrappedMethod) {
  return wrappedMethod.restore && wrappedMethod.restore.sinon;
}

function getFetchStub(win, { withArgs, as, callsFake }) {
  let stub = win.fetch;
  if (!isStub(win.fetch)) {
    originalFetch = win.fetch;
    stub = cy.stub(win, 'fetch');
  }
  stub
    .withArgs(...withArgs)
    .as(as)
    .callsFake(callsFake);
}

Cypress.Commands.add('mockGraphQL', (getOperationMock) => {
const fetchGraphQL = (path, options, ...rest) => {
    const { body } = options;
    try {
      const { operationName, variables } = JSON.parse(body);
      const { test = null, mockResult } = getOperationMock(operationName);

      if (typeof test === 'function') {
        test(variables);
      }
      if (mockResult) {
        return responseStub(mockResult);
      }
      return originalFetch(path, options, ...rest);
    } catch (err) {
      return responseStub(err);
    }
  };

  return cy.on('window:before:load', win => {
    getFetchStub(win, {
      withArgs: ['/graphql'],
      as: 'fetchGraphQL',
      callsFake: fetchGraphQL
    })
  })
})
