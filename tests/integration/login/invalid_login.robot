*** Settings ***
Documentation    Invalid login tests
Suite Setup       Open Browser To Login Page
Suite Teardown    Close Browser Clear Login Counter
Test Template    Invalid Login Attempt
Resource         resource.robot
Resource         ../database/database.robot

*** Test Cases ***
Invalid username    invalid         ${VALID PASSWORD}    ${LOGIN FAIL MSG}
Invalid password    ${VALID USER}   invalid              ${LOGIN FAIL MSG}
Both invalid        invalid         invalid              ${LOGIN FAIL MSG}
Empty password      ${VALID USER}   ${EMPTY}             ${INVALID VALUE}
Empty username      ${EMPTY}        ${VALID PASSWORD}    ${INVALID VALUE}
Both empty          ${EMPTY}        ${EMPTY}             ${INVALID VALUE}