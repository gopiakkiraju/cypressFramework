import pagelocators from "../locators/pagelocators"

export class checkOutMethod {
  checkOut(){
    cy.get(pagelocators.sauceLabsBackPack).click()
    cy.get(pagelocators.addToCart).click()
    cy.get(pagelocators.cartIcon).click()
    cy.get(pagelocators.checkOut).click()
    
  };
}