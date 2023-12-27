describe("Flipkart Automation", () => {
  it("Clicking on Mobiles",() =>{
    login("userA", "Mobiles")
  })

  it("Clicking on Electronic Gadgets",() =>{
    login("userB", "Electronic Gadgets")
  })


  function login(emailPhoneInput, inputOption){
    cy.visit("https://www.flipkart.com/")
    cy.get('input[type = "text"][autocomplete = "off"]').last().type(emailPhoneInput)
    // cy.get("._30XB9F").click();
    // cy.wait(3000)
    // cy.contains("Mobiles").click();// to get locator based on text using contains
    cy.get('._1XjE3T').contains(inputOption).click(); // to get locator based on text for any locator that has more than one value
    // // cy.contains("Sign in").click().contains("Explore").click() // this may not work if page is loading with your first action
    cy.get('a[title = "Become a Seller"]').should('have.text', 'Become a Seller').click({ multiple: true });
    // cy.wait(10000)
    // Implicit wait
    // explicit wait
  }

  
})