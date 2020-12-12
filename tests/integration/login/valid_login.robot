*** Settings ***
Documentation    Valid login tests
Library          Collections
Suite Setup       Open Browser To Login Page
Suite Teardown    Close Browser
Resource         ../resources/resource.robot

*** Test Cases ***
Valid login
    ${cookies}    Get Cookies    True
    Dictionary Should Not Contain Key    ${cookies}    login
    Login Attempt    ${VALID USER}    ${VALID PASSWORD}
    Wait Until Location Is    ${HOME URL}
    ${cookies}    Get Cookies    True
    Dictionary Should Contain Key    ${cookies}    login

Logout
    Click Link    user-menu
    Click Link    user-menu-logout-btn
    Wait Until Location Is    ${LOGIN URL}
    ${cookies}    Get Cookies    True
    Dictionary Should Not Contain Key    ${cookies}    login
