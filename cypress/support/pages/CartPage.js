export class CartPage {
    cartBtn = '[data-test="shopping-cart-link"]'
    cartHeader = '[data-test="title"]'
    cartTitle = '[data-test="title"]'
    itemQuantity = '[data-test="item-quantity"]' // loop through if more elements
    btnRemoveItem = 'button.cart_button' //'button:contains("Remove")'

    openCart() {
        cy.get(this.cartBtn).click()
        cy.get(this.cartHeader).should('be.visible')
    }

    verifyItemQuantity() {
        cy.get(this.itemQuantity).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                expect(parseInt(text)).to.be.greaterThan(0) // >0 because there is no posibility one product to be added more than once, the best way would be how many times the button "add product" (for a specific prod) is clicked, the function to expect that number of qty
            })
        })
    }

    verifyAllRemoveButtons() {
        cy.get(this.btnRemoveItem).each(($btn) => {
            cy.wrap($btn).should('be.visible').and('contain', 'Remove')
        })
    }
}