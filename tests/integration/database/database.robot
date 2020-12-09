*** Settings ***
Library    DatabaseLibrary

*** Keywords ***
User id query
  [Arguments]  ${username}
  [Return]    (SELECT id FROM user_account WHERE username = '${username}')

Connect
  Connect To Database     dbConfigFile=${CURDIR}/db.cfg

Clear Login Counter
  [Arguments]    ${username}
  ${id query}  User id query  ${username}
  Connect
  Execute Sql String    UPDATE login_counter SET login_count = 0, locked_until = NULL WHERE user_id = ${id query};
  Disconnect From Database

Select Login Count
  [Arguments]    ${username}
  ${id query}  User id query  ${username}
  Connect
  @{result}  Query  SELECT * FROM login_counter WHERE user_id = ${id query};
  ${result_dict}  Create Dictionary  user_id  ${result}[0][0]  login_count  ${result}[0][1]  locked_until  ${result}[0][2]
  [Return]    ${result_dict}
  Disconnect From Database