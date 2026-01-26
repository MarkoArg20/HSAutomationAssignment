import { LogInPage } from '../support/pages/LogInPage'
import { HomePage } from '../support/pages/HomePage'
import { CartPage } from '../support/pages/CartPage'


describe('Test suite', () => {

  const logInPage = new LogInPage()
  const homePage = new HomePage()
  const cart = new CartPage()

  beforeEach(() => {
    cy.visit(Cypress.env('BASEURL'))
  })


  it('Login as standard user : Confirm login and check the URL', () => {

    logInPage.logIn(Cypress.env('STANDARD_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    logInPage.verifyUrlContains('/inventory') //in the parameter add part of the url that you want to assert 
    logInPage.logOut()

  })


  it('Login as standard user : Add item to cart, verify quantity, check remove button visibility', () => {

    logInPage.logIn(Cypress.env('STANDARD_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    homePage.addAllItemsToCart()
    cart.openCart()
    cart.verifyItemQuantity()
    cart.verifyAllRemoveButtonsAreDisplayed()
    logInPage.logOut()

  })

  it('Login as problem user : Check that the onesie image is shown as the source for the onesie', () => {

    logInPage.logIn(Cypress.env('PROBLEM_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    homePage.assertOnesieImg('red-onesie') //if 'sl-404' is put in this parameter the test will pass (see the method why)
    logInPage.logOut()
  })

  it('Login with locked user : Login with this user and confirm error is displayed', () => {

    logInPage.logIn(Cypress.env('LOCKED_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifyErrorMessageIsDisplayedForLockedUser()

  })

  it('Login with error user : Add fleece jacked to cart and confirm', () => {
//there is an uncaught error in the app, and our test fails. Below I added another test that ignores the uncaught error and checks for the product in the cart

    logInPage.logIn(Cypress.env('ERROR_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    homePage.addFleeceJacketToCart()
    homePage.goToCart()
    cart.verifyItemQuantity()
    logInPage.logOut()

  })

  it('Login with error user : Add fleece jacked to cart and confirm (ignoring the unhadled error)', () => {

    cy.on('uncaught:exception', (err, runnable) => { //ignores the uncaught error
      return false
    })

    logInPage.logIn(Cypress.env('ERROR_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    homePage.addAllItemsToCart()
    homePage.goToCart()
    cart.verifyProductInCart('Sauce Labs Fleece Jacket') // input whichever product from the catalog and this test will verify if it is added to the cart
    logInPage.logOut()
  })

}) 