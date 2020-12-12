*** Settings ***
Documentation    Test writer properties
Suite Setup    Open Browser To Writer Page
Suite Teardown    Close Browser
Test Teardown    Empty Writer
Resource    ./resources/resource.robot

*** Test Cases ***
Empty title and content disables publishing/saving
  Element Should Be Disabled    //form[@id="writer-form"]//button[1]

Empty title disables publishing/saving
  Input Text    //form[@id="writer-form"]//textarea  Test
  Element Should Be Disabled    //form[@id="writer-form"]//button[1]

Empty content disables publishing/saving
  Input Text    //form[@id="writer-form"]//input  Test
  Element Should Be Disabled    //form[@id="writer-form"]//button[1]

*** Keywords ***
Empty Writer
  Input Text    //form[@id="writer-form"]//textarea  ${EMPTY}
  Input Text    //form[@id="writer-form"]//input  ${EMPTY}