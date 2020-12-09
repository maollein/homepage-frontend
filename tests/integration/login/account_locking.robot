*** Settings ***
Documentation     Account locking tests
Suite Setup       Open Browser To Login Page
Suite Teardown    Close Browser Clear Login Counter
Test Setup        Clear Login Counter    ${VALID USER}
Resource          resource.robot
Resource          ../database/database.robot

*** Test Cases ***
Login counter is incremented after invalid password input
  Invalid Login Attempt    ${VALID USER}    invalid    ${LOGIN FAIL MSG}
  ${login count}    Select Login Count    ${VALID USER}
  Should Be Equal    ${login count}[login_count]    ${1}

Account is locked after 10 wrong password inputs
  Repeat Keyword    10 times    Invalid Login Attempt    ${VALID USER}    invalid    ${LOGIN FAIL MSG}
  Login Attempt    ${VALID USER}    ${VALID PASSWORD}
  Alert Should Be Present    ${LOGIN FAIL MSG}

Login counter is reset after valid password input
  Invalid Login Attempt    ${VALID USER}    invalid    ${LOGIN FAIL MSG}
  Login Attempt    ${VALID USER}    ${VALID PASSWORD}
  Wait Until Location Is    ${HOME URL}
  ${login count}    Select Login Count    ${VALID USER}
  Should Be Equal    ${login count}[login_count]    ${0}