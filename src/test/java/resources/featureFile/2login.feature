Feature: Login Test
  As a user I want to login into nop commerce website


  @Smoke@Regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully
    And I should be able to see "Welcome, Please Sign In!"


  @Smoke@Regression
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "rkpatel@gmail.com"
    And I enter password "xyz1234"
    And I click on login button
    Then I should login successfully
    And I should be able to see "Log out" option

  @Sanity@Regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email"<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:

    |email|password|errorMessage|
    |ruyt@gmail.com|xyz1234|Login was unsuccessful.|
    |tusj@yahoo.com|ert12345|Login was unsuccessful.|
    |oam@gmail.com|ruyo123|Login was unsuccessful.|