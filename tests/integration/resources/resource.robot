*** Settings ***
Library  SeleniumLibrary
Resource  ${CURDIR}/database.robot

*** Variables ***
${SERVER}        localhost:3000
${BROWSER}       Firefox
${DELAY}         0
${TIMEOUT}       2 seconds
${LOGIN URL}     http://${SERVER}/login
${HOME URL}      http://${SERVER}/home
${WRITER URL}      http://${SERVER}/writer
${BLOG URL}    http://${SERVER}/blog
${LOGIN FAIL MSG}    Invalid username or password
${INVALID VALUE}    Invalid value
${VALID USER}    testuser
${VALID PASSWORD}    testpassword

*** Keywords ***
Open Browser To Login Page
  Open Browser    ${LOGIN URL}    ${BROWSER}
  Maximize Browser Window
  Set Selenium Timeout    ${TIMEOUT}

Open Browser To Home Page
  Open Browser    ${HOME URL}    ${BROWSER}
  Maximize Browser Window
  Set Selenium Timeout    ${TIMEOUT}

Open Browser And Login
  Open Browser To Login Page
  Login Valid User

Clear Login Form
  Clear Element Text    login-username-input
  Clear Element Text    login-password-input

Close Browser Clear Login Counter
  Close Browser
  Clear Login Counter  ${VALID USER}

Login Attempt
  [Arguments]     ${username}             ${password}
  Input Text      login-username-input    ${username}
  Input Password      login-password-input    ${password}
  Click Button    login-btn

Invalid Login Attempt
  [Arguments]      ${username}  ${password}  ${message}
  Login Attempt    ${username}     ${password}
  Alert Should Be Present    ${message}    ACCEPT
  Clear Login Form

Login Valid User
  Login Attempt    ${VALID USER}  ${VALID PASSWORD}
  Wait Until Location Is    ${HOME URL}