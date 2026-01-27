# HSAutomationAssignment
A cypress automation framework with JavaScript with Page Object Model deisgn pattern.

INSTALLATION

1. Clone the repository to your machine
-Navigate to the directory where you want the project:
```bash
cd path/to/your-folder
```
2. Create a folder with all the files in it
```bash
git clone https://github.com/MarkoArg20/HSAutomationAssignment
```
RUN THE TESTS:

1. Install Cypress
```bash
npm install cypress --save-dev
```
2. Create a .cypress.env.json file in the root of the project with the content bellow and add it in the .gitignore so it wont be pushed on github
"BASEURL" : "https://www.saucedemo.com/"
"STANDARD_USER" : ,
"PROBLEM_USER" : ,
"LOCKED_USER" : ,
"ERROR_USER" : ,
"USER_PASSWORD" : 
(this is the best practice for storing all the endpoints, usernames, password etc but I skipped this step and pushed my .env so you can run the code without needing to create file)

3. Run the tests
```bash
npx cypress open
OR
npx cypress run --spec "cypress/tests/testCases.js" 
```
If you choose the first option: click on E2E testing - choose browser - Start testing - click the file testCases.js


