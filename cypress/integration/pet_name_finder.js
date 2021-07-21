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
    cy.get('nav > .header-title').should('contain', 'Pet Name Finder')
  });

  it('Should display the Liked Names and Login buttons', () => {
    cy.get('.header').find('.view-liked-button').should('be.visible')
      .get('.header').find('[data-cy=view-liked-button]').should('contain', '⭐️ View Liked Names ⭐️')
      .get('.header').find('.login-button').should('be.visible')
      .get('.header').find('[data-cy=login-button]').should('contain', 'Login')
  });

  it('Should display the default page pack buttons', () => {
    cy.get('.home').find('.view-packs-btn').should('be.visible')
      .get('.home').find('[data-cy=view-packs-btn]').should('contain', 'View Your Packs')
      .get('.home').find('.start-pack-btn').should('be.visible')
      .get('.home').find('[data-cy=start-pack-btn]').should('contain', 'Start New Pack')
      .get('.home').find('.start-lone-btn').should('be.visible')
      .get('.home').find('[data-cy=start-lone-btn]').should('contain', 'Start as a Lone Wolf')
  });


});

describe('Login and Logout of Pet Name Finder App', () => {

  // beforeEach(() => {
  //   cy.fixture('mockUserData.json')
  //   .then(mockData => {
  //     cy.intercept('GET', 'https://', {
  //       statusCode: 201,
  //       delay: 100,
  //       body: mockData
  //     })
  //   })
  //   cy.visit('http://localhost:3000')
  // });

  it('Should be able to login with matching email address', () => {
    // test for input box and submit button
    // test for typing
  });

  it('Should not be able to login and be alerted of wrong email', () => {
    // test for error handling - alerts
    // wrong input type (not an email)
    // non-matching email
  });

  it('Should display logout instead of login button after successful login', () => {
    // test button contains
  });

  it('Should be able to logout', () => {
    // After click => currentUser state is changed
    // After logout => Button goes back to Login
  });

});

describe('View Pack details on Pet Name Finder App', () => {

  // beforeEach(() => {
  //   cy.fixture('mockPackData.json')
  //   .then(mockData => {
  //     cy.intercept('GET', 'https://', {
  //       statusCode: 201,
  //       delay: 100,
  //       body: mockData
  //     })
  //   })
  //   cy.visit('http://localhost:3000')
  // });

  it('Should be able to view all user\'s packs after login', () => {
    // test for list of packs that are each a button
  });

});

describe('User Interaction with namess data on Pet Name Finder App', () => {

  // beforeEach(() => {
  //   cy.fixture('mockNamesData.json')
  //   .then(mockData => {
  //     cy.intercept('GET', 'https://', {
  //       statusCode: 201,
  //       delay: 100,
  //       body: mockData
  //     })
  //   })
  //   cy.visit('http://localhost:3000')
  // });

  it('Should be able to choose names', () => {
    // test for ability to like a name
    // test that the liked name is added to user's list
    // test for ability to dislike a name
  });

});
