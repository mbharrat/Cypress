#Testing with Cypress.js
##Install instructions
1. install cypress in your project
	-npm install --save-dev cypress
2. Cypress expects IT to be in in cypress/integration found in the project root
	-mkdir cypress
	-mkdir cypress/integration
3. My file for testing is called sample-spec.js
	-inside cypress/integration run touch sample-spec.js
4. Describe function
	-describe('description stuff', function() {});
	-this is for organizing tests and describes the set of tests
5. nested inside describe are It()
	-it('contains "what should this test show', function() {});
	-these tests are the actual assertiosn, the string describes the assertions
6. 
....
10. To Run cypress, if its not installed globally
	-$(npm bin)/cypress open




##UT vs IT vs E2E
###UT
-testing of the smallest unit of code
	-an example is testing that the add functions actually adds
	-in terms of Cypress you can test JUST the search function of a page
###IT
-
