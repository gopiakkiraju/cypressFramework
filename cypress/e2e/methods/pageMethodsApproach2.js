import pagelocators from "../locators/pagelocators"


  export function login(username, password){
    cy.visit("https://www.saucedemo.com/")
    cy.get(pagelocators.userName).click().type(username)
    cy.get(pagelocators.pwd).click().type(password)
    cy.get(pagelocators.submit).click()
  };
