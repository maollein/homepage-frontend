*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${SERVER}        localhost:3000
${BROWSER}       Firefox
${DELAY}         0
${TIMEOUT}       2 seconds
${LOGIN URL}     http://${SERVER}/login
${HOME URL}      http://${SERVER}/home
${WRITER URL}      http://${SERVER}/writer
${BLOG URL}    http://${SERVER}/blog

*** Keywords ***
Open Browser To Login Page
  Open Browser    ${LOGIN URL}    ${BROWSER}
  Maximize Browser Window
  Set Selenium Timeout    ${TIMEOUT}

Open Browser To Home Page
  Open Browser    ${HOME URL}    ${BROWSER}
  Maximize Browser Window
  Set Selenium Timeout    ${TIMEOUT}

Open Browser To Writer Page
  Open Browser    ${WRITER URL}    ${BROWSER}
  Maximize Browser Window
  Set Selenium Timeout    ${TIMEOUT}

Open Browser To Blog Page
  Open Browser    ${BLOG URL}    ${BROWSER}
  Set Selenium Timeout    ${TIMEOUT}

Get Element Display Value
  # Mainly to replace Should Be Visible and Should Not Be Visible
  # They seem unreliable in some cases for some reason. Might have something to do
  # with bootstrap breakpoints, not clear.
  [Arguments]    ${ELEMENT GETTER}
  ${DISPLAY VALUE}    Execute Javascript  return window.getComputedStyle(${ELEMENT GETTER}).getPropertyValue('display');
  [Return]    ${DISPLAY VALUE}