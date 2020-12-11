# Frontend for my personal homepage
Personal homepage for actual use and practicing web development.

Frontend is written in TypeScript using *React*, *Redux*, *React router*
and *Bootstrap* among others.

## Running integration tests
Running integration tests depend on having an instance of my backend
running. It is also needed to install

- Python
- RobotFramework
- SeleniumLibrary for RobotFramework
- DatabaseLibrary for RobotFramework
- psycopg2 for DatabaseLibrary
  - easiest to install psycopg2-binary

A config file named db.cfg should be created in *tests/integration/database*
with content:

```
[default]
dbapiModuleName=psycopg2
dbName=[yourdb]
dbUsername=[yourusername]
dbPassword=[yourpassword]
dbHost=localhost
dbPort=[yourport]
```

### Login tests
A *user_account* row and a *login_counter* row for that account need to
exist in the database. Valid username and password for the account must be
defined in *tests/integration/login/resource.robot* variables section.

## Maintaining testability
- Add id-attribute to the top element of a component if it is not supposed
to be multiplied on the page.
- Element locators in tests are to be written starting from the closest
(parent) element that has an id attribute.