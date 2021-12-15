$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create an Account",
  "description": "As a user i want to create an account.",
  "id": "create-an-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9147072400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Create Account Successfully",
  "description": "",
  "id": "create-an-account;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Create an Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter FirstName \"Samir\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName \"Sinha\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Password \"Samir1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Address line \"1 Red Building\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter City \"Maryland\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select state  \"Ohio\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter zipcode \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Mobile number \"01234567893\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Address Alias \"main home\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify message \"My account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 200270200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2118591900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterEmail()"
});
formatter.result({
  "duration": 275944700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 117488700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samir",
      "offset": 19
    }
  ],
  "location": "CreateAccount.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1292049700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sinha",
      "offset": 18
    }
  ],
  "location": "CreateAccount.iEnterLastName(String)"
});
formatter.result({
  "duration": 121274000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samir1234",
      "offset": 18
    }
  ],
  "location": "CreateAccount.iEnterPassword(String)"
});
formatter.result({
  "duration": 151179500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Red Building",
      "offset": 22
    }
  ],
  "location": "CreateAccount.iEnterAddressLine(String)"
});
formatter.result({
  "duration": 143447400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maryland",
      "offset": 14
    }
  ],
  "location": "CreateAccount.iEnterCity(String)"
});
formatter.result({
  "duration": 221409600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ohio",
      "offset": 17
    }
  ],
  "location": "CreateAccount.iSelectState(String)"
});
formatter.result({
  "duration": 123280600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 17
    }
  ],
  "location": "CreateAccount.iEnterZipcode(String)"
});
formatter.result({
  "duration": 107238800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 17
    }
  ],
  "location": "CreateAccount.iEnterCountry(String)"
});
formatter.result({
  "duration": 81766300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01234567893",
      "offset": 23
    }
  ],
  "location": "CreateAccount.iEnterMobileNumber(String)"
});
formatter.result({
  "duration": 159747200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "main home",
      "offset": 23
    }
  ],
  "location": "CreateAccount.iEnterAddressAlias(String)"
});
formatter.result({
  "duration": 159893400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1663110800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 16
    }
  ],
  "location": "CreateAccount.verifyMessage(String)"
});
formatter.result({
  "duration": 55475000,
  "status": "passed"
});
formatter.after({
  "duration": 783940300,
  "status": "passed"
});
formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "Sign In on Login Page",
  "description": "As a user I want to login in to automationpractice.com Website",
  "id": "sign-in-on-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6129128200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should navigate to login page successfully",
  "description": "",
  "id": "sign-in-on-login-page;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that \"AUTHENTICATION\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2438651300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyThatMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 86776900,
  "status": "passed"
});
formatter.after({
  "duration": 817328000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    },
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message"
      ],
      "line": 17,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "abc123",
        "An email address required."
      ],
      "line": 18,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "abc123",
        "Invalid email address."
      ],
      "line": 20,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "abc123",
        "Authentication failed."
      ],
      "line": 21,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5692703000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 119500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1614839700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 143717800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 176008700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1818535900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22094919300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027AVYAS1-E6430S\u0027, ip: \u0027192.168.0.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e50ee069098a51e27d4134b3a5a2ea12, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MIS~1.AVY\\AppData\\...}, goog:chromeOptions: {debuggerAddress: localhost:52492}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52492/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e50ee069098a51e27d4134b3a5a2ea12\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.getVerifyAuthenticationFailedMessage(SignInPage.java:84)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iShouldSeeErrorMessage(LoginTestPage.java:47)\r\n\tat ✽.Then I should see error message \"An email address required.\"(signIn.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1186321000,
  "status": "passed"
});
formatter.before({
  "duration": 5278655000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 111400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1396193000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 182982400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 137823300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1437703500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22062695200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027AVYAS1-E6430S\u0027, ip: \u0027192.168.0.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0565a8cc8a1b53f8e59e3ce17fe2d351, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MIS~1.AVY\\AppData\\...}, goog:chromeOptions: {debuggerAddress: localhost:52713}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52713/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0565a8cc8a1b53f8e59e3ce17fe2d351\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.getVerifyAuthenticationFailedMessage(SignInPage.java:84)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iShouldSeeErrorMessage(LoginTestPage.java:47)\r\n\tat ✽.Then I should see error message \"Password is required.\"(signIn.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 972043600,
  "status": "passed"
});
formatter.before({
  "duration": 5420722300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 95100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1654842200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 168435300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 197382100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1217923400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22056020300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027AVYAS1-E6430S\u0027, ip: \u0027192.168.0.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3b12e6f2f2ccaed6b6fac83ace55a7c5, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MIS~1.AVY\\AppData\\...}, goog:chromeOptions: {debuggerAddress: localhost:52768}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52768/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3b12e6f2f2ccaed6b6fac83ace55a7c5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.getVerifyAuthenticationFailedMessage(SignInPage.java:84)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iShouldSeeErrorMessage(LoginTestPage.java:47)\r\n\tat ✽.Then I should see error message \"Invalid email address.\"(signIn.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1089226000,
  "status": "passed"
});
formatter.before({
  "duration": 5788125100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 100900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2525460400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 159159300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 122644300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1485020000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
