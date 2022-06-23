Feature: The globalsqa Website

  Scenario: As a user, I can log into the page and add new customer

    Given I am on the login page
    When I navigate to the addCust section
    And I add new customer
    And I search newly created customer
    And I delete the newly created customer
    Then I verify that customer is deleted
