import { aliasQuery } from '../utils/graphql-test-utils'

describe('Pet Name Finder App', () => {

  beforeEach(() => {

    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {
      aliasQuery(req, 'getUserQuery')
      aliasQuery(req, 'getPetNamesQuery')
    })

    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display the title and subtitle of the page upon loading', () => {
    cy.get('.logo-link > .header-title').should('contain', 'Pet Name Finder')
  });

  it('Should display login input and button on main page when logged out', () => {
   cy.get('.login').find('[data-cy=email-input]').should('be.visible')
     .get('.login').find('[data-cy=login-now-btn]').should('contain', '🐾 Login Now! 🐾')
  });

  it('Should be able to login with matching email address', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('header').find('[data-cy=view-liked-button]').should('be.visible')
      .get('.home').find('[data-cy=start-voting-btn]').should('contain', 'Start Voting!')
  });

});
