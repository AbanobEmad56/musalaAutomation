import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";


When("I click on {string}", (button) => {
    cy.contains(_(button), {matchCase: false}).click();
    // We wait because of resources were not loaded yet it will return a validation error and test will fail
});
Then("I should see the error message {string}", (errorMessage) => {
    cy.containsText(errorMessage)
})

