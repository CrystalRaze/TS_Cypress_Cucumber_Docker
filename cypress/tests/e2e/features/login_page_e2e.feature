Feature: Login page E2E

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user navigates to the 'Login' page
        Then A user will see all the required page's elements
    Scenario: Login with empty inputs
        When A a user clicks on the 'Login' button with empty inputs
        Then A user will see errors on both inputs
    Scenario: Login with empty 'Password' input
        When A user enters only the username "invalidUser" and clicks on the 'Login' button
        Then A user will see only the "Please enter your password." error message under the 'Password input'
    Scenario: Login with empty 'Username' input
        When A user enters only the password "invalidPassword" and clicks on the 'Login' button
        Then A user will see only the "Please enter username." error message under the 'Username input'
    Scenario: Login with invalid credentials
        When A user enters invalid credentials and clicks on the 'Login' button
            | username        | password        |
            | invalidUsername | invalidPassword |
        Then A user will see the "No account found with that username." error message
    Scenario: Login with valid credentials
        When A user enters valid credentials and clicks on the 'Login' button
        Then A user will be redirected to the 'Dashboard' page

