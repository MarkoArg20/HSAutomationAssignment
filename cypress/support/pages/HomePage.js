export class HomePage {
    products = '[data-test="inventory-list"]'
    btnAddToCartBackPack = '[data-test="add-to-cart-sauce-labs-backpack"]' // maybe a better way with something dynamic for add to cart a random element
    btnAddToCartBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    btnAddToCartBoltTshirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    btnAddToCartFleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    btnAddToCartOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]'
    // btnAddToCartTShirt = child element ?  
    cartBtn = '[data-test="shopping-cart-link"]'
    imgOnesie = '[data-test="inventory-item-sauce-labs-onesie-img"]'

    addItemToCart() {
        cy.get(this.btnAddToCartBackPack).click()
    }

    addAllItemsToCart() {
        cy.get(this.btnAddToCartBackPack).click()
        cy.get(this.btnAddToCartBikeLight).click()
        cy.get(this.btnAddToCartBoltTshirt).click()
        cy.get(this.btnAddToCartFleeceJacket).click()
        cy.get(this.btnAddToCartOnesie).click()
    }

    addFleeceJacketToCart() {
    cy.get(this.btnAddToCartFleeceJacket).click()
    }

    goToCart() {
        cy.get(this.cartBtn).click()
    }

    assertOnesieImg(imgSrc) {
        cy.get(this.imgOnesie).should('have.attr', 'src').and('include', imgSrc)         
    }
}