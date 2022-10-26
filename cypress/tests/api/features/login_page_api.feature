Feature: Login page API

    Feature Login API will work depending on the request type and users credentials

    Scenario: GET to the Login page
        When A user sends a GET request to the 'Login' page
        Then A user recieves a responce with code status 200
        Then A user recieves a responce with "text/html" content-type
    Scenario: POST with valid credentials to the Login page
        When A user sends a POST request to the 'Login' page with valid credentials
        Then A user recieves a responce with code status 200
        Then A user recieves a responce with "text/html" content-type
    Scenario: GET to the wrong end-point
        When A user sends a "GET" request to the "https://www.pecodesoftware.com/r/registerlogin.php" end-point
        Then A user recieves a responce with code status 404
        Then A user recieves a responce with "text/html" content-type

