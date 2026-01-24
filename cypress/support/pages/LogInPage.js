export class LogIn {
    username = cy.get('[data-test="username"]')
    password = cy.get('[data-test="password"]')
    logInBtn = cy.get('[data-test="login-button"]')
    products = cy.get('[data-test="inventory-list"]')

}