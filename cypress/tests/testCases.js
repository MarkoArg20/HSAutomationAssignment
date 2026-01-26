import { LogInPage } from '../support/pages/LogInPage'
import { HomePage } from '../support/pages/HomePage'
import { CartPage } from '../support/pages/CartPage'

let logInPage
let homePage
let cartPage

beforeEach(() => {
  logInPage = new LogInPage()
  homePage = new HomePage()
  cartPage = new CartPage()
  cy.visit(Cypress.env('BASEURL'))
})


describe('Test suite', () => {

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
    cartPage.openCart()
    cartPage.verifyItemQuantity()
    cartPage.verifyAllRemoveButtonsAreDisplayed()
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
    logInPage.verifyValidationOnInvalidLogin()

  })

  it('Login with error user : Add fleece jacked to cart and confirm', () => {
//there is an uncaught error in the app, and our test fails. Below I added another test that ignores the uncaught error and checks for the product in the cart

    logInPage.logIn(Cypress.env('ERROR_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    homePage.addFleeceJacketToCart()
    homePage.goToCart()
    cartPage.verifyItemQuantity()
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
    cartPage.verifyProductInCart('Sauce Labs Fleece Jacket') // input whichever product from the catalog and this test will verify if it is added to the cart
    logInPage.logOut()

  })

  it('Verify succesfull adding of all the products in the cart  ', () => {

    logInPage.logIn(Cypress.env('STANDARD_USER'), Cypress.env('USER_PASSWORD'))
    logInPage.verifySuccesfullLogIn()
    homePage.addAllItemsToCart()
    homePage.goToCart()
    cartPage.verifyProductInCart('Sauce Labs Backpack')
    cartPage.verifyProductInCart('Sauce Labs Bike Light')
    cartPage.verifyProductInCart('Sauce Labs Fleece Jacket')
    cartPage.verifyProductInCart('Sauce Labs Bolt T-Shirt')
    cartPage.verifyProductInCart('Sauce Labs Onesie')
    logInPage.logOut()

  })

}) 

describe('Login test cases', () => {


  it('Try to log in with wrong password and correct username', () => {

    logInPage.logIn(Cypress.env('STANDARD_USER'), Cypress.env('WRONG_PASSWORD'))
    logInPage.verifyValidationOnInvalidLogin()

  })

  it('Try to log in with wrong username and correct password', () => {

    logInPage.logIn(Cypress.env('WRONG_USERNAME'), Cypress.env('USER_PASSWORD'))
    logInPage.verifyValidationOnInvalidLogin()

  })

  it('Try to log in with wrong username and wrong password', () => {

    logInPage.logIn(Cypress.env('WRONG_USERNAME'), Cypress.env('WRONG_PASSWORD'))
    logInPage.verifyValidationOnInvalidLogin()

  })


})