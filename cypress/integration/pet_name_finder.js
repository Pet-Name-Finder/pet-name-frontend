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

  it('Should display the default page pack buttons', () => {
    cy.get('.home').find('.view-packs-btn').should('be.visible')
      .get('.home').find('[data-cy=view-packs-btn]').should('contain', 'View Your Packs')
      .get('.home').find('.start-pack-btn').should('be.visible')
      .get('.home').find('[data-cy=start-pack-btn]').should('contain', 'Start New Pack')
      .get('.home').find('.start-lone-btn').should('be.visible')
      .get('.home').find('[data-cy=start-lone-btn]').should('contain', 'Start as a Lone Wolf')
  });


});
