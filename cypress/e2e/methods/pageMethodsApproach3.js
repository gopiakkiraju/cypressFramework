import pagelocators from "../locators/pagelocators"


export class LoginPageMethods {
  static login(username, password){
    cy.visit("https://demo.applitools.com/")
    cy.get(pagelocators.userName).click().type(username)
    cy.get(pagelocators.pwd).click().type(password)
    cy.get(pagelocators.submit).click()
  }

  
}

