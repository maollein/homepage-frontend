*** Settings ***
Documentation    Test writer properties
...              SeleniumLibrary visibility checks seem unreliable here
...              so we use our own.
Suite Setup    Open Browser To Blog Page
Suite Teardown    Close Browser
Resource    ./resources/resource.robot

*** Test Cases ***
Blog navigation visible in large window
  ${NAV VISIBILITY}    Get Element Display Value  window.document.getElementById('blog-nav')
  Should Be Equal    ${NAV VISIBILITY}  block

Togglable blog navigation hidden in large window
  ${TOGGLABLE NAV VISIBILITY}    Get Element Display Value   window.document.getElementsByClassName('togglable-blog-nav')[0]
  Should Be Equal    ${TOGGLABLE NAV VISIBILITY}  none

Togglable blog navigation hidden in smaller window
  Set Window Size     1000  1080
  ${TOGGLABLE NAV VISIBILITY}    Get Element Display Value   window.document.getElementsByClassName('togglable-blog-nav')[0]
  Should Be Equal    ${TOGGLABLE NAV VISIBILITY}  none

Blog navigation not visible in smaller window
  ${NAV VISIBILITY}    Get Element Display Value    window.document.getElementById('blog-nav')
  Should Be Equal    ${NAV VISIBILITY}  none

Togglable blog navigation toggle open
  Click Button    //div[@id="blog"]//div[2]//button
  Sleep    0.81
  ${NAV OPEN}    Execute Javascript    return window.document.getElementsByClassName('togglable-blog-nav')[0].getBoundingClientRect();
  ${ROOT}    Execute Javascript    return window.document.getElementById("root").getBoundingClientRect();
  Should Be Equal    ${NAV OPEN}[right]    ${ROOT}[right]

Togglable blog navigation toggle closed
  Click Button    //div[@id="blog"]//div[2]//button
  Sleep    0.81
  ${NAV OPEN}    Execute Javascript    return window.document.getElementsByClassName('togglable-blog-nav')[0].getBoundingClientRect();
  ${ROOT}    Execute Javascript    return window.document.getElementById("root").getBoundingClientRect();
  Should Be Equal    ${NAV OPEN}[left]    ${ROOT}[right]

Togglable blog navigation hidden after refresh
  Reload Page
  Wait Until Page Contains Element    //div[@id="blog"]//div[3]
  ${lol}    Get Element Display Value   window.document.getElementsByClassName('togglable-blog-nav')[0]
  Should Be Equal    ${lol}  none

Correct visibility of navigation after screen expanded
  Wait Until Page Contains Element    //div[@id="blog"]//div[2]//button
  Click Button    //div[@id="blog"]//div[2]//button  # Let's open togglable nav
  Maximize Browser Window
  ${NAV VISIBILITY}    Get Element Display Value  window.document.getElementById('blog-nav')
  Should Be Equal    ${NAV VISIBILITY}  block
  ${TOGGLABLE NAV VISIBILITY}    Get Element Display Value   window.document.getElementsByClassName('togglable-blog-nav')[0]
  Should Be Equal    ${TOGGLABLE NAV VISIBILITY}  none