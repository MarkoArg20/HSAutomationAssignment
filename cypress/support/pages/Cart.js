export class Cart {
    cartBtn = cy.get('[data-test="shopping-cart-link"]')
    cartTitle = cy.contains('[data-test="title"]', 'Your Cart')
    itemQuantity = cy.get('[data-test="item-quantity"]') // loop through if more elements
    btnRemoveItem = cy.contains('button', 'Remove')
}