// import pagelocators from "../locators/pagelocators"
import pagelocators from "../locators/pagelocators"

export class loginPageMethods {
  login(username, password){
    cy.visit("/")
    cy.get(pagelocators.userName).click().type(username)
    cy.get(pagelocators.pwd).click().type(password)
    cy.get(pagelocators.submit).click()
    cy.get(pagelocators.profileName).click()
  };
}