import { LogInPage } from '../support/pages/LogInPage'
import { HomePage } from '../support/pages/HomePage'
import { CartPage } from '../support/pages/CartPage'


describe('Test suite for assignment', () => {

    const logInPage = new LogInPage()
    const homePage = new HomePage()
    const cart = new CartPage()

  it('Log in succesfully', () => {

    cy.visit(Cypress.env('BASEURL'))
    logInPage.logIn(Cypress.env('STANDARD_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    logInPage.verifyUrlContains('/inventory')
    logInPage.logOut()

  })


  it('Log in succesfully add a product, verify qty and delete btn ', () => {

    cy.visit(Cypress.env('BASEURL'))
    logInPage.logIn(Cypress.env('STANDARD_USER'), Cypress.env('USER_PASSWORD'))
    homePage.addAllItemsToCart()
    cart.openCart()
    cart.verifyItemQuantity()
    cart.verifyAllRemoveButtons()
    logInPage.logOut()

  })

  it('Log in as a problem user - assert onesie img is displayed', () => {

    cy.visit(Cypress.env('BASEURL'))
    logInPage.logIn(Cypress.env('PROBLEM_USER'), Cypress.env('USER_PASSWORD'))
    homePage.assertOnesieImg('red-onesie') //if 'sl-404' its put in this parameter the test will pass (see the method why)

  })

  it('Log in as a locked user and confirm error is shown', () => {

    cy.visit(Cypress.env('BASEURL'))

    logInPage.logIn(Cypress.env('LOCKED_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifyErrorMessageIsDisplayedForLockedUser()

  })

  it('Login with error user : Add fleece jacked to cart and confirm (this should fail)', () => {
//there is an uncaught error in the app, and our test fails. Below I added another test that ignores the uncaught error and checks for the product in the cart
    cy.visit(Cypress.env('BASEURL'))

    logInPage.logIn(Cypress.env('ERROR_USER'), Cypress.env('USER_PASSWORD'))
    homePage.addFleeceJacketToCart()
    homePage.goToCart()
    cart.verifyItemQuantity()

  })

  it('Login with error user : Add fleece jacked to cart and confirm (ignoring the unhadled error)', () => {

    cy.on('uncaught:exception', (err, runnable) => { //ignores the uncaught error
        return false
    })

    cy.visit(Cypress.env('BASEURL'))

    logInPage.logIn(Cypress.env('ERROR_USER'), Cypress.env('USER_PASSWORD'))
    homePage.addAllItemsToCart()
    homePage.goToCart()
    cart.verifyProductInCart('Sauce Labs Fleece Jacket') // input whichever product from the catalog and this test will verify if it is added to the cart

  })

}) 