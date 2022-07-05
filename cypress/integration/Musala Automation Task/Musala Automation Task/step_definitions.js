import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";
import 'cypress-iframe';
import 'cypress-file-upload';

let city ;
let NumberOfElment;
let flag = false;

When("I Go to musala website", () => {
    cy.visit("/")
})
When("I Enter My {string},{string}", (value,data) => {
    cy.get(value).type(data)
})





 Then("I Click on {string}", (Buttonname) => {
    cy.wait(1000)
    cy.contains(Buttonname).click({force: true})
    
 
 })

 Then("I Enter My Name {string}", (Name) => {
    cy.xpath('//input[@name="your-name"]').type(Name)    
 
 })

 Then("I Enter My Email {string}", (Email) => {
    cy.xpath('//input[@name="your-email"]').type(Email)    
 
 })

 Then("I Enter My Mobile {string}", (MobileNumber) => {
    cy.xpath('//input[@name="mobile-number"]').type(MobileNumber)    
 
 })

 Then("I Enter My Subject {string}", (Subject) => {
    cy.xpath('//input[@name="your-subject"]').type(Subject)    
 
 })

 Then("I Enter My Message {string}", (Message) => {
    cy.xpath('//textarea[@name="your-message"]').type(Message)    
 
 })

 Then("I Select the loaction {string}", (loaction) => {
   cy.xpath('//*[@id="get_location"]').select(loaction)   

 })


When("I Type {string}", (Text) => {
    cy.xpath('//*[@aria-label="Message input box"]').type(Text)
    })

When("I should see {string}", (Text) => {
cy.contains(Text)
})

When("Verify that the correct URL {string}", (URL) => {
    cy.url().should('eq', URL)

})
    
Then("I Click on Facebook icon", () => {
    cy.xpath('//a[@href="https://www.facebook.com/MusalaSoft?fref=ts"]').then($el => {
        expect($el).to.have.attr('target','_blank')
        $el.attr('target', '_self')
     }).click({force: true})
     cy.reload()

    
 
 })

 When("I should see profile picture", () => {
    cy.xpath('//*[@preserveAspectRatio="xMidYMid slice"][@style="height: 132px; width: 132px;"]').should('be.visible')
})

When("I should see Apply button", () => {
    cy.xpath('//*[@value="Apply"]').should('be.visible')
})

When("I Attach my CV", () => {
    cy.xpath('//input[@name="uploadtextfield"]').attachFile('AbanobEmad2022.pdf');
})

Then("I Click on Apply", () => {
    cy.xpath('//*[@value="Apply"]').click({force: true})
    
 
 })
 Then("I Check on Agree for condtions", () => {
    cy.xpath('//*[@id="adConsentChx"]').click({force: true})
    
 
 })


 Then("I Click on Close", () => {
    cy.xpath('//*[@class="close-form"]').click({force: true})
    
 
 })


 Then("Get the city name", () => {
cy.xpath('//article[1]/div/a').find('p').eq(1)
.invoke('text').then(message => {
    city = message;
    cy.wrap(city).as('city')

})

Then("Get the number of elemnts in the page", () => {
   
    cy.xpath('//*[@class="front"]').its('length').then(Number => {
        NumberOfElment = Number;
        cy.wrap(NumberOfElment).as('NumberOfElment') 
    })




})

Then("Print Result", () => {

    for (let i=1 ; i<= NumberOfElment ; i++) {
    let xpath = '//article['+ i + ']/div/a'


    cy.xpath(xpath).find('p').eq(1)
.invoke('text').then(message => {
    city = message;
   // cy.wrap(city).as('city')
    if(city == 'Sofia' || city == 'Skopje'){
         cy.xpath(xpath).find('h2')
         .invoke('text').then(Name => {
             let oppotunityName = Name;
             cy.wrap(oppotunityName).as('oppotunityName') 
            
             let oppotunityNamesmall = oppotunityName.toLowerCase();
             cy.log('Position: ' + oppotunityName)
             cy.log('More info: https://www.musala.com/job/' + oppotunityNamesmall + '/')
         })
        
 
 }

})}


        })
 })