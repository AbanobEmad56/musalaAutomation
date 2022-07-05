Feature: Musala Automation Test   

Scenario Outline: Test Case 1
    Given I Go to musala website
    When I Click on "Contact us"
    And I Enter My Name "Abanob Emad"
    And I Enter My Email "<Email>"
    And I Enter My Mobile "+201220300950"
    And I Enter My Subject "i want support"
    And I Enter My Message "i want support in this porblem"
    And I Click on "Send"
    Then I should see "The e-mail address entered is invalid"

    Examples: 
      | Email         |
      | abanob.test   |
      | abanob.test.test.com   |
      | abanob.test@stest@Test.com  |
      | abanob.test@Test,com   |
      | abanob.test@@Test.com   |


Scenario: Test Case 2 
    Given I Go to musala website
    When I Click on "Company"
    And Verify that the correct URL "https://www.musala.com/company/"
    Then I should see "Leadership"
    When I Click on Facebook icon
    And Verify that the correct URL "https://www.facebook.com/MusalaSoft?fref=ts"
    Then I should see profile picture

Scenario: Test Case 3
    Given I Go to musala website
    When I Click on "Careers"
    And I Click on "Check our open positions"
    And Verify that the correct URL "https://www.musala.com/careers/join-us/"
    And I Select the loaction "Anywhere"
    And I Click on "Automation QA Engineer"
    Then I should see "General description"
    And I should see "Requirements"
    And I should see "Responsibilities"
    And I should see "What we offer"
    Then I should see Apply button
    When I Click on Apply
    And I Enter My Email "abanob.test@stest@Test.com "
    And I Enter My Mobile "+201220300950"
    And I Attach my CV
    And I Check on Agree for condtions
    When I Click on "Send"
    And I Click on Close
    Then I should see "The field is required"
    And I should see "The e-mail address entered is invalid"



Scenario: Test Case 4
    Given I Go to musala website
    When I Click on "Careers"
    And I Click on "Check our open positions"
    And I Select the loaction "Sofia"
    And Get the city name
    And Get the number of elemnts in the page
    Then Print Result
    And I Select the loaction "Skopje"
    And Get the city name
    And Get the number of elemnts in the page
    Then Print Result

@This_Test_should_be_faild
Scenario: Test Case 5
    Given I Go to musala website
    When I Click on "Cars"

