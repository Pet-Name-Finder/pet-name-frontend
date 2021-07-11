describe('Show main view of Pet Name Finder App', () => {

  beforeEach(() => {
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

});
