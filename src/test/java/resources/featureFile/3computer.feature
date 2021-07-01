Feature: Computer Test

  As a user I want to navigate to computer page and its all related products page on nopcommerce website

  @Smoke@Regression
  Scenario: User should be able to navigate to computer page successfully
    Given I am on homepage
    When I click on computers tab
    Then I should be able to navigate to computers page successfully
    And I should able to see "Computers" as title on computers page

  @Smoke@Regression
  Scenario: User should be able to  navigate to desktop page successfully
    Given I am on homepage
    When I mouse hover on computers tab
    And I mouse hover and click on "Desktops" from computers drop down menu
    Then I should be able to navigate to Desktops page successfully
    And I should be able to see "Desktops" as title on Desktops page

  @Sanity@Regression
  Scenario: User should be able to  navigate to Notebooks page successfully
    Given I am on homepage
    When I mouse hover on computers tab
    And I mouse hover and click on "Notebooks" from computers drop down menu
    Then I should be able to navigate to Notebooks page successfully
    And I should be able to see "Notebooks" as title on Notebooks page

  @Regression
  Scenario: User should be able to  navigate to Software page successfully
    Given I am on homepage
    When I mouse hover on computers tab
    And I mouse hover and click on "Software" from computers drop down menu
    Then I should be able to navigate to Software page successfully
    And I should be able to see "Software" as title on Software page
