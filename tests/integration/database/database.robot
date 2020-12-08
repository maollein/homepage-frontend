*** Settings ***
Library    DatabaseLibrary

*** Keywords ***
Connect
  Connect To Database     dbConfigFile=${CURDIR}/db.cfg

Clear Login Counter
  [Arguments]    ${username}
    Connect
    Execute Sql String    UPDATE login_counter SET login_count = 0, locked_until = NULL WHERE user_id = (SELECT id FROM user_account WHERE username = '${username}');
    Disconnect From Database