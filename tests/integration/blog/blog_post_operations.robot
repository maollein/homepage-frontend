*** Settings ***
Documentation    Blog post writing, editing and deleting
Suite Setup    Open Browser And Login
Suite Teardown    Close Browser
Resource    ../resources/resource.robot

*** Variables ***
${TITLE}    This is a test title
${CONTENT}    This is content for a test post.
${EDIT CONTENT}    ${SPACE}This text is edited later.

*** Test Cases ***
Write a new post
  Write A Post
  Wait Until Element Contains    //div[@id="blog"]//div[1]  ${TITLE}
  Element Should Contain    //div[@id="blog"]//div[1]//div[1]  ${CONTENT}

Edit a post in blog feed
  Click Button    //div[@id="blog"]//div[1]//div//div[2]//button[2]
  Input Text    //form[@id="writer-form"]//input  ${TITLE}
  Input Text    //form[@id="writer-form"]//textarea  ${EDIT CONTENT}  False
  Click Button    //form[@id="writer-form"]//button[1]
  Wait Until Element Contains    //div[@id="blog"]//div[1]//div[1]  ${CONTENT}${EDIT CONTENT}

Delete a post in blog feed
  Click Button   //div[@id="blog"]//div[1]//div//div[2]//button[1]
  Alert Should Be Present    Delete post permanently?  ACCEPT
  Wait Until Element Does Not Contain    //div[@id="blog"]//div[1]  ${TITLE}

Navigate to post page
  Write A Post
  Click Link    //div[@id="blog"]//div[1]//div[1]//h2//a
  Wait Until Element Contains    //div[@id="blog-post-page"]    ${TITLE}
  Element Should Contain    //div[@id="blog-post-page"]    ${CONTENT}

Edit post on post page
  Click Button    //div[@id="blog-post-page"]//div//div//div//div[2]//button[2]
  Input Text    //form[@id="writer-form"]//textarea  ${EDIT CONTENT}  False
  Click Button    //form[@id="writer-form"]//button[1]
  Wait Until Element Contains    //div[@id="blog-post-page"]//div//div//div//div[1]  ${CONTENT}${EDIT CONTENT}

Delete a post on post page
  Click Button   //div[@id="blog-post-page"]//div//div//div//div[2]//button[1]
  Alert Should Be Present    Delete post permanently?  ACCEPT
  Wait Until Location Is    ${BLOG URL}
  Element Should Not Contain    //div[@id="blog"]//div[1]  ${TITLE}
  

*** Keywords ***
Write A Post
  Click Link    main-nav-writer-link
  Wait Until Location Is    ${WRITER URL}
  Input Text    //form[@id="writer-form"]//input  ${TITLE}
  Input Text    //form[@id="writer-form"]//textarea  ${CONTENT}
  Click Button    //form[@id="writer-form"]//button