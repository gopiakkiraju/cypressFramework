describe("Flipkart Automation", () => {
  it("Clicking on email input and typing",() =>{
    login()
  })

  function login(){
    cy.visit("https://www.flipkart.com/")
    cy.get('input[type = "text"][autocomplete = "off"]').last().type("7569175753")
    cy.get("._30XB9F").click();
    cy.wait(7000)
  }

  
})