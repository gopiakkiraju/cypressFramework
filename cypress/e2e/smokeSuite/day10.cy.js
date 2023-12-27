it("flipkart login", () => {

        cy.visit("https://www.flipkart.com/")
        //cy.visit("url to visit/navigate") ---syntax to hit an url
        //quotations can be in single or double
        // Locator is an entity used to locate a front end value/element in web application
        // Id, class, xpath, css value, contains text, span values and so on

        //  id as --- #(astrick)
        // class as --- .(dot)
        // xpath as --- //button[@class = "_1wGnMD rX1XT4 _2nD2xJ"]
        // //*[contains(text(), 'Request OTP')]
        // cy.get('._30XB9F').click({force: true})
        // cy.wait(30000)
        cy.get("._30XB9F").click();
        

})

// click Operation, type opration









    // describe("Flipkart price vaildation", () => {

    //     it("find products greater than 50k ", () => {
    
    //         cy.visit("https://www.flipkart.com/")
    //         cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    //         cy.get("input[name='q']").type("mobile{enter}")
    //         cy.get("div[class='_13oc-S']").find("div[class='_30jeq3 _1_WHN1']").should('be.visible')
    //         cy.get("div[class='_30jeq3 _1_WHN1']").then(($price) => {
    
    //             const totals = $price.toArray().map((s) => s.replace("₹", '')).map(parseFloat)
    //             cy.log(totals)
    
    //         })
    
    
    
    
    //     })
    // })