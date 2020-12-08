*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${SERVER}        localhost:3000
${BROWSER}       Firefox
${DELAY}         0
${TIMEOUT}       2 seconds
${LOGIN URL}     http://${SERVER}/login
${HOME URL}      http://${SERVER}/home
${LOGIN FAIL MSG}    Invalid username or password
${INVALID VALUE}    Invalid value
${VALID USER}    testuser
${VALID PASSWORD}    testpassword

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Timeout    ${TIMEOUT}

Clear Login Form
    Clear Element Text    login-username-input
    Clear Element Text    login-password-input