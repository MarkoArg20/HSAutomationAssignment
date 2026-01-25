export class CartHelper {
    
    cartItem = '[data-test="inventory-item"]'
    itemQuantity = '[data-test="item-quantity"]'
    itemName = '[data-test="inventory-item-name"]'
    
    getCartProductsData() {
        const productsData = []
        
        return cy.get(this.cartItem).each(($item) => {
            const name = $item.find(this.itemName).text().trim()
            const quantity = $item.find(this.itemQuantity).text().trim()
            
            productsData.push({
                name: name,
                quantity: parseInt(quantity)
            })
        }).then(() => {
            return productsData
        })
    }
}