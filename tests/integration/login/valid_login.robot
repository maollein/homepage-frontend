*** Settings ***
Documentation     Valid login tests
Test Setup       Open Browser To Login Page
Test Teardown    Close Browser
Resource         resource.robot
Resource         ../database/database.robot

*** Test Cases ***
Valid login
    Input Text      login-username-input    ${VALID USER}
    Input Text      login-password-input    ${VALID PASSWORD}
    Click Button    login-btn
    Wait Until Location Is    ${HOME URL}