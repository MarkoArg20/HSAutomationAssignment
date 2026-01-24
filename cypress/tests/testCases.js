import { LogIn } from '../support/pages/LogInPage'



describe('First test case ', () => {

    const logInPage = new LogIn()

  it('Log in succesfully', () => {

    cy.visit(Cypress.env('BASEURL'))

    logInPage.logIn(Cypress.env('STANDARD_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    logInPage.verifyUrlContains('/inventory')

  })
}) 