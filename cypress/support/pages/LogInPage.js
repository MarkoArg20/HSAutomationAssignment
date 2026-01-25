export class LogInPage {
    username = '[data-test="username"]'
    password = '[data-test="password"]'
    logInBtn = '[data-test="login-button"]'
    products = '[data-test="inventory-list"]'
    btnOpenMenu = 'button#react-burger-menu-btn'
    btnLogOut = '[data-test="logout-sidebar-link"]'

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

    logOut() {
        cy.get(this.btnOpenMenu).contains('Open Menu').click()  
        cy.get(this.btnLogOut).click() 
    }
}