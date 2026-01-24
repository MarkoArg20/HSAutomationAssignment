export class HomePage {
    products = cy.get('[data-test="inventory-list"]')
    btnAddToCartBackPack = cy.get('[data-test="add-to-cart-sauce-labs-backpack"]') // maybe a better way with something dynamic for add to cart 
    btnAddToCartBikeLight = cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    btnAddToCartBoltTshirt = cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    btnAddToCartFleeceJacket = cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    btnAddToCartOnesie = cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
    // btnAddToCartTShirt = child element ?  
}