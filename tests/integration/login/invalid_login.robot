*** Settings ***
Documentation    Invalid login tests
Suite Setup       Open Browser To Login Page
Suite Teardown    Close Browser Clear DB
Test Template    Invalid login attempt
Resource         resource.robot
Resource         ../database/database.robot

*** Test Cases ***
Invalid username    invalid         ${VALID PASSWORD}    ${LOGIN FAIL MSG}
Invalid password    ${VALID USER}   invalid              ${LOGIN FAIL MSG}
Both invalid        invalid         invalid              ${LOGIN FAIL MSG}
Empty password      ${VALID USER}   ${EMPTY}             ${INVALID VALUE}
Empty username      ${EMPTY}        ${VALID PASSWORD}    ${INVALID VALUE}
Both empty          ${EMPTY}        ${EMPTY}             ${INVALID VALUE}

*** Keywords ***
Invalid login attempt
    [Arguments]     ${username}             ${password}    ${message}
    Input Text      login-username-input    ${username}
    Input Text      login-password-input    ${password}
    Click Button    login-btn
    Alert Should Be Present    ${message}    ACCEPT
    Clear Login Form

Close Browser Clear DB
    Close Browser
    Clear Login Counter  ${VALID USER}