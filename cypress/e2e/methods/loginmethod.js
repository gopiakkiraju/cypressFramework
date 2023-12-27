// import pagelocators from "../locators/pagelocators"
import pagelocators from "../locators/pagelocators"

export class loginPageMethods {
  login(username, password){
    cy.visit("https://www.saucedemo.com/")
    cy.get(pagelocators.userName).click().type(username)
    cy.get(pagelocators.pwd).click().type(password)
    cy.get(pagelocators.submit).click()
    
  };
}