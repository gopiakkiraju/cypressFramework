// Assuming you have a basic Cypress test file
import values from '../../fixtures/example.json'
const csvFilePath = 'cypress/fixtures/testingCsvFile.csv';
describe('Example Test', () => {

  xit('should use cy.wrap to interact with a wrapped object', () => {
    // Wrap an object to make it a subject for Cypress commands
    cy.wrap({ name: 'Santosh', Day1: 1 }).as('user');
    // Use the wrapped object in Cypress commands
    cy.get('@user').should('have.property', 'name', 'Santosh');
    cy.get('@user').should('have.property', 'Day1', 1);
  });

  // it('should use invoke to check the state after clicking a button', () => {
  //   // Visit the webpage with the button
  //   cy.visit('https://example.com');

  //   // Click the button
  //   cy.get('#myButton').click();

  //   // Use invoke to check the state after clicking the button
  //   cy.get('#myElement')
  //     .invoke('text') // Invoking 'text' function to get the text content
  //     .should('eq', 'Button Clicked'); // Asserting the expected text after clicking the button
  // });

  // it('should handle and test alerts', () => {
  //   // Visit the webpage with an alert
  //   cy.visit('https://example.com');

  //   // Trigger an alert
  //   cy.get('#triggerAlert').click();

  //   // Handle the alert using cy.on
  //   cy.on('window:alert', (alertText) => {
  //     // Assert the alert text
  //     expect(alertText).to.equal('This is an alert message');
  //   });

  //   // Click on a button that triggers a confirm
  //   cy.get('#triggerConfirm').click();

  //   // Handle the confirm using cy.on
  //   cy.on('window:confirm', () => true); // Clicks OK

  //   // Perform assertions or additional actions after handling the confirm
  //   cy.get('#confirmResult').should('have.text', 'Confirmed');

  //   // Click on a button that triggers a prompt
  //   cy.get('#triggerPrompt').click();

  //   // Handle the prompt using cy.on
  //   cy.on('window:prompt', (promptText) => {
  //     // Assert the prompt text
  //     expect(promptText).to.equal('Please enter your name');
  //     // Return a value to simulate user input
  //     return 'John Doe';
  //   });

  //   // Perform assertions or additional actions after handling the prompt
  //   cy.get('#promptResult').should('have.text', 'Entered name: John Doe');
  // });

  // it('should make a POST request with body, headers, and validate the response', () => {
  //   // Define the request payload and headers
  //   const requestBody = {
  //     username: 'john_doe',
  //     password: 'secretpassword',
  //   };

  //   const requestHeaders = {
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer your_access_token',
  //   };

  //   // Make a POST request using cy.request
  //   cy.request({
  //     method: 'POST',
  //     url: 'https://api.example.com/login',
  //     body: requestBody,
  //     headers: requestHeaders,
  //   }).then((response) => {
  //     // Validate the response status code
  //     expect(response.status).to.equal(200);

  //     // Validate the response body structure
  //     expect(response.body).to.have.property('token');
  //     expect(response.body).to.have.property('userId');
  //     expect(response.body.userId).to.be.a('string');

  //     // Validate specific values in the response
  //     expect(response.body.token).to.exist;
  //     expect(response.body.token).to.be.a('string');
  //     expect(response.body.token).to.have.length.greaterThan(0);
  //   });
  // });

  

  it('upload a file to application', () => {
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile('testingCsvFile.csv')
    cy.wait(10000)
  // })
  })
  
  it('Read data from text file', () => {
    cy.readFile('cypress/fixtures/textFile.txt').then((content) => {
      const lines = content.split('\n');
      const firstLine = lines[0].trim();
      cy.log(`Data from the line: ${firstLine}`);
    });
  });

  it('Read specific values from a CSV file', () => {
    cy.readFile(csvFilePath).then((content) => {
      const value = content.split('\n').map(row => row.split(','));
      const expectedValue = value[1][0].trim(); // Assuming indexing is zero-based
      console.log(expectedValue)
    });
  });

  it('Create a CSV file and add values in it', () => {
    const filePath = 'cypress/fixtures/writeFile.csv';
    const header = ['Name', 'Age', 'Country'];
    const values = [
      ['Akkiraju', '30', 'USA'],
      ['Santosh', '25', 'Canada'],
      ['Bob Johnson', '40', 'UK']
    ];
    const csvContent = [header.join(','), ...values.map(row => row.join(','))].join('\n');
    cy.writeFile(filePath, csvContent);
  });

  it('should log in with valid credentials', () => {
    cy.login(values.userName, values.pwd);
  });

  // testing git actions

});
