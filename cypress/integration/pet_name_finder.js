import { hasOperationName, aliasQuery } from '../utils/graphql-test-utils'

describe('Pet Name Finder App', () => {

  beforeEach(() => {

    cy.intercept('POST', 'https://pet-name-finder-be.herokuapp.com/graphql', (req) => {
      if (hasOperationName(req, 'getUserQuery')) {
        req.alias = 'gqlGetUserQuery'

        req.reply((res) => {
          res.test.data.user = {
             data: {
               user: {
                 __typename: 'User',
                 email: 'boris_walker@parisian.io',
                 id: 1,
                 userLikedNames: [
                   {__typename: "PetName", id: "1", name: "Roo Roo"},
                   {__typename: "PetName", id: "5", name: "Bailey"},
                   {__typename: "PetName", id: "6", name: "Baby Bear"},
                   {__typename: "PetName", id: "8", name: "Winston"}
                 ]
              }
            }
          }
        })
      }

      if (hasOperationName(req, 'getPetNamesQuery')) {
        req.alias = 'gqlGetPetNamesQuery'

        req.reply((res) => {
          res.names.data.user = {
            data: {
              user: {
                id: "1",
                userUnviewedNames: [
                {__typename: "PetName", id: "9", name: "Sweetheart"},
                {__typename: "PetName", id: "10", name: "Soul Mate"},
                {__typename: "PetName", id: "11", name: "Sexy Dork"}
                ],
                __typename: "User"
              }
            }
          }
        })
      }
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

  it('Should not be able to login and be alerted of wrong email', () => {
    const stub = cy.stub()

    cy.on ('window:alert', stub)
    cy.get('.login').find('[data-cy=email-input]').type('bored_runner@america.co')
      .get('.login').find('[data-cy=login-now-btn]').click()
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Sorry no account found!')
      })
  });

  it('Should display logout instead of login button after successful login', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('header').find('[data-cy=logout-button]').should('contain', "Logout")
  });

  it('Should display login page after logging out', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('header').find('[data-cy=logout-button]').click()
      .get('.login').find('[data-cy=email-input]').should('be.visible')
      .get('.login').find('[data-cy=login-now-btn]').should('be.visible')
  });

  it('Should display Home page after clicking app name', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('header').find('[data-cy=view-liked-button]').click()
      .get('header').find('[data-cy=header-title]').click()
      .get('.home').find('[data-cy=start-voting-btn]').should('contain', 'Start Voting!')
  });

  it('Should display name and option to like or dislike name', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('.home').find('[data-cy=start-voting-btn]').click()
      .wait(500).get('.pack').find('.up-paw').should('be.visible')
      .wait(300).get('.pack').find('.down-paw').should('be.visible')
      .get('.pack').find('.vote-block > section').should('be.visible')
  });

  it('Should be able to like a name', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('.home').find('[data-cy=start-voting-btn]').click()
      .wait(500).get('.pack').find('[data-cy=up-paw]').click()
      .get('header').find('[data-cy=view-liked-button]').click()
      .get('.liked-names').find('.bullet-container > :nth-child(1)').should('be.visible')
      .get('.liked-names').find('.bullet-container > :nth-child(2)').should('be.visible')
      .get('.liked-names').find('.bullet-container > :nth-child(3)').should('be.visible')
  });

  it('Should be able to dislike a name', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('.home').find('[data-cy=start-voting-btn]').click()
      .wait(500).get('.pack').find('[data-cy=down-paw]').click()
  });

  it('Should add liked names to liked names list', () => {
    cy.get('.login').find('[data-cy=email-input]').type('boris_walker@parisian.io')
      .get('.login').find('[data-cy=login-now-btn]').click()
      .get('.home').find('[data-cy=start-voting-btn]').click()
      .wait(500).get('.pack').find('[data-cy=up-paw]').click()
      .get('header').find('[data-cy=view-liked-button]').click()
      .get('.liked-names').find('.bullet-container > :nth-child(1)').should('be.visible')
      .get('.liked-names').find('.bullet-container > :nth-child(2)').should('be.visible')
      .get('.liked-names').find('.bullet-container > :nth-child(3)').should('be.visible')
      .get('.liked-names').find('.bullet-container > :nth-child(4)').should('be.visible')
      .get('.liked-names').find('.bullet-container > :nth-child(5)').should('be.visible')
    });

});
