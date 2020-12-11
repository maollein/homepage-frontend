*** Settings ***
Documentation    Valid login tests
Library          Collections
Test Setup       Open Browser To Login Page
Test Teardown    Close Browser
Resource         ../resources/resource.robot
Resource         ../database/database.robot

*** Test Cases ***
Valid login
    ${cookies}    Get Cookies    True
    Dictionary Should Not Contain Key    ${cookies}    login
    Login Attempt    ${VALID USER}    ${VALID PASSWORD}
    Wait Until Location Is    ${HOME URL}
    ${cookies}    Get Cookies    True
    Dictionary Should Contain Key    ${cookies}    login

Logout
    Login Attempt    ${VALID USER}    ${VALID PASSWORD}
    Wait Until Location Is    ${HOME URL}
    Click Link    user-menu
    Click Link    user-menu-logout-btn
    Wait Until Location Is    ${LOGIN URL}
    ${cookies}    Get Cookies    True
    Dictionary Should Not Contain Key    ${cookies}    login
