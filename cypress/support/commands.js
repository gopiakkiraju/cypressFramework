import 'cypress-file-upload';
import pagelocators from "../e2e/locators/pagelocators"


Cypress.Commands.add('login', (username, password) => {
    cy.visit('/'); // Adjust the login page URL
    cy.get(pagelocators.userName).click().type(username)
    cy.get(pagelocators.pwd).click().type(password)
    cy.get(pagelocators.submit).click()
    // cy.get(pagelocators.profileName).click()
});