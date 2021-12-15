Feature: Sign In on Login Page
  As a user I want to login in to automationpractice.com Website
@Regression @Smoke
  Scenario: User Should navigate to login page successfully
    Given I am on HomePage
    When I Click on Sign in link
    Then I verify that "AUTHENTICATION" message is displayed
@Regression @Smoke
  Scenario Outline: User should get Error Message with Invalid Credentials
    Given I am on HomePage
    When  I Click on Sign in link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on Sign In Button
    Then I should see error message "<message>"
    Examples:
      | email          | password | message                    |
      |                | abc123   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | abc123   | Invalid email address.     |
      | abcd@gmail.com | abc123   | Authentication failed.     |
@Regression @Sanity
  Scenario: User should login with Valid Credentials
    Given I am on HomePage
    When  I Click on Sign in link
    And I enter email "Samirsingh@gmail.com"
    And I enter password "acd12345"
    And I click on Sign In Button
    Then Sign out link is displayed
@Regression @Sanity
  Scenario: User should LogOut SuccessFully
    Given I am on HomePage
    When  I Click on Sign in link
    And I enter email "Samirsingh@gmail.com"
    And I enter password "acd12345"
    And I click on Sign In Button
    And I Click on Sign out Link
    Then  Sign In Link displayed