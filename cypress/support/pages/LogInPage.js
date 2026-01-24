export class LogIn {
    username = '[data-test="username"]'
    password = '[data-test="password"]'
    logInBtn = '[data-test="login-button"]'
    products = '[data-test="inventory-list"]'

    logIn(username, password) {
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.logInBtn).click()
    }

    verifySuccesfullLogIn() {
        cy.get(this.products).should('be.visible')
    }

    verifyUrlContains(Url) {
        cy.url().should('include', Url)
    }
}