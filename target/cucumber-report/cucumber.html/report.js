$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/1registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "\r\nAs a user I want to register my account on nopcommerce website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8697236300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to register with valid inputs to all mandatory field",
  "description": "",
  "id": "registration-test;user-should-able-to-register-with-valid-inputs-to-all-mandatory-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter first name \"Rajendra\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter email \"rkpatel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter password \"xyz1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter confirm password \"xyz1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able to register",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should be able to see \"Your registration completed\" message",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 318858800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1766604600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajendra",
      "offset": 20
    }
  ],
  "location": "RegistrationStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1264333300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegistrationStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 1220855600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rkpatel@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1303462700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1234",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1239670400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1234",
      "offset": 26
    }
  ],
  "location": "RegistrationStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1216663400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 12510350200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iShouldBeAbleToRegister()"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 25
    }
  ],
  "location": "RegistrationStepdefs.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 87419600,
  "status": "passed"
});
formatter.after({
  "duration": 809475200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "User should not be able to register with any empty mandatory field",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Sanity"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should be able to see \"\u003cerrorMessage\u003e\" under first name field",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword",
        "errorMessage"
      ],
      "line": 37,
      "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;1"
    },
    {
      "cells": [
        "",
        "Patel",
        "rkpatel@gmail.com",
        "xyz1234",
        "xyz1234",
        "First name is required."
      ],
      "line": 38,
      "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6249671100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User should not be able to register with any empty mandatory field",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Sanity"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter first name \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter last name \"Patel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"rkpatel@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"xyz1234\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"xyz1234\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should be able to see \"First name is required.\" under first name field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 55400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1671547600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "RegistrationStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1171365000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegistrationStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 1214584500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rkpatel@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1245259900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1234",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1199116800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1234",
      "offset": 26
    }
  ],
  "location": "RegistrationStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1209710400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 185179200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 25
    }
  ],
  "location": "RegistrationStepdefs.iShouldBeAbleToSeeUnderFirstNameField(String)"
});
formatter.result({
  "duration": 89465500,
  "status": "passed"
});
formatter.after({
  "duration": 831141100,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/2login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4549107400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1488508000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 61700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 25
    }
  ],
  "location": "LoginStepdefs.iShouldBeAbleToSee(String)"
});
formatter.result({
  "duration": 107142700,
  "status": "passed"
});
formatter.after({
  "duration": 1156426000,
  "status": "passed"
});
formatter.before({
  "duration": 4458226000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter email \"rkpatel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"xyz1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see \"Log out\" option",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1518168700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rkpatel@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1218978900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1234",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1187673500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12697341800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 25
    }
  ],
  "location": "LoginStepdefs.iShouldBeAbleToSeeOption(String)"
});
formatter.result({
  "duration": 89202900,
  "status": "passed"
});
formatter.after({
  "duration": 1243419900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 33,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "ruyt@gmail.com",
        "xyz1234",
        "Login was unsuccessful."
      ],
      "line": 34,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "tusj@yahoo.com",
        "ert12345",
        "Login was unsuccessful."
      ],
      "line": 35,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "oam@gmail.com",
        "ruyo123",
        "Login was unsuccessful."
      ],
      "line": 36,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4522575000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"ruyt@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"xyz1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 927326600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ruyt@gmail.com",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1216028200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1234",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1200701200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 666860200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 92942800,
  "status": "passed"
});
formatter.after({
  "duration": 1244528900,
  "status": "passed"
});
formatter.before({
  "duration": 4714937600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"tusj@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"ert12345\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1427278100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tusj@yahoo.com",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1200799600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ert12345",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1220399300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1256694000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 86168400,
  "status": "passed"
});
formatter.after({
  "duration": 1057040900,
  "status": "passed"
});
formatter.before({
  "duration": 4494986000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"oam@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"ruyo123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 64100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1445344400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oam@gmail.com",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1210566500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ruyo123",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1183194100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1268400200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 90252900,
  "status": "passed"
});
formatter.after({
  "duration": 1050539900,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/3computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "\r\nAs a user I want to navigate to computer page and its all related products page on nopcommerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4495158100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to navigate to computer page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to computers page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should able to see \"Computers\" as title on computers page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnComputersTab()"
});
formatter.result({
  "duration": 2512299300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 22
    }
  ],
  "location": "ComputersStepdefs.iShouldAbleToSeeAsTitleOnComputersPage(String)"
});
formatter.result({
  "duration": 91429700,
  "status": "passed"
});
formatter.after({
  "duration": 1274787000,
  "status": "passed"
});
formatter.before({
  "duration": 3720822800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to  navigate to desktop page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to--navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover and click on \"Desktops\" from computers drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to navigate to Desktops page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see \"Desktops\" as title on Desktops page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 225765900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 28
    }
  ],
  "location": "ComputersStepdefs.iMouseHoverAndClickOnFromComputersDropDownMenu(String)"
});
formatter.result({
  "duration": 2057856000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 25
    }
  ],
  "location": "ComputersStepdefs.iShouldBeAbleToSeeAsTitleOnDesktopsPage(String)"
});
formatter.result({
  "duration": 110024200,
  "status": "passed"
});
formatter.after({
  "duration": 1183055000,
  "status": "passed"
});
formatter.before({
  "duration": 4452539900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to  navigate to Notebooks page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to--navigate-to-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    },
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I mouse hover on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover and click on \"Notebooks\" from computers drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to navigate to Notebooks page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should be able to see \"Notebooks\" as title on Notebooks page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 230545300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 28
    }
  ],
  "location": "ComputersStepdefs.iMouseHoverAndClickOnFromComputersDropDownMenu(String)"
});
formatter.result({
  "duration": 2851037400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToNotebooksPageSuccessfully()"
});
formatter.result({
  "duration": 42800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 25
    }
  ],
  "location": "ComputersStepdefs.iShouldBeAbleToSeeAsTitleOnNotebooksPage(String)"
});
formatter.result({
  "duration": 91885600,
  "status": "passed"
});
formatter.after({
  "duration": 1236980800,
  "status": "passed"
});
formatter.before({
  "duration": 4999406400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should be able to  navigate to Software page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to--navigate-to-software-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I mouse hover on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I mouse hover and click on \"Software\" from computers drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to navigate to Software page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see \"Software\" as title on Software page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 203596500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 28
    }
  ],
  "location": "ComputersStepdefs.iMouseHoverAndClickOnFromComputersDropDownMenu(String)"
});
formatter.result({
  "duration": 2678451900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToSoftwarePageSuccessfully()"
});
formatter.result({
  "duration": 41600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 25
    }
  ],
  "location": "ComputersStepdefs.iShouldBeAbleToSeeAsTitleOnSoftwarePage(String)"
});
formatter.result({
  "duration": 88190900,
  "status": "passed"
});
formatter.after({
  "duration": 1320881500,
  "status": "passed"
});
});