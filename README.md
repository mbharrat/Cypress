
# Testing with Cypress.js
## Install instructions
1. install cypress in your project
	- npm install --save-dev cypress
2. Cypress expects IT to be in in cypress/integration found in the project root
	- mkdir cypress
	- mkdir cypress/integration
3. My file for testing is called sample-spec.js
	- inside cypress/integration run touch sample-spec.js
4. Describe function
	- describe('description stuff', function() {});
	- this is for organizing tests and describes the set of tests
5. nested inside describe are It()
	- it('contains "what should this test show', function() {});
	- these tests are the actual assertiosn, the string describes the assertions
6. 
....
10. To Run cypress, if its not installed globally
	- $(npm bin)/cypress open
	- npx cypress open

## Information about Cypress

Cypress is an automated test software that uses Mocha under the hood. This means you can use describe, it, and beforeEach methods as well as all other Mocha methods!


## UT vs IT vs E2E
### UT
- testing of the smallest unit of code
	- an example is testing that the add functions actually adds
	- in terms of Cypress you can test JUST the search function of a page
### IT
- individual units are combined and tested as a group
	- the purpose is to test defects in interfaces and interactions between integrated components or systems
### E2E
- smallest subgroup of tests
- should be flow of a function example: signing a user up
- imitates real world use

## Types of Testing Frameworks

### Test Runners
	- creates a fake server, and spins up tests in various browsers using data derived from fake servers
	- all testing software takes place within a test runner
	- example: Karma
### Testing Framework
	-level lower then test runner
	- hard to decipher whats framework and whats an assertion library, so anytging outside the it block is defined in the framework and anything inside is defined by assertion library
	- example: Mocha (has beforeEach, describe, context, it, specify etc) btw in Cypress context and describe are the same and specify and it are exactly the same
### Assertion Library
	- plugs into Testing Framework
	- actually runs the specs and determines whether a condition is valid or not
	- example: Chai (has expect, equal, and exist)
### Testing Plugin
	- hooks into Assertion library which gives MORE tests
	- example: Sinon (create mocks, stubs, and fake servers)

## Some Important Cypress Concepts

### Best Practices
#### Organizing Tests, Logging In, Controlling State
- Test specs in isolation, programmatically log into your application, and take control of your application’s state
	- What does this mean?
	- to be added
### Selecting Elements
- use data-* attributes to provide context to your selectors and insulate them from CSS or JS changes
	- What does this mean?
	- avoid using selectors that could change
	- '''javascript
	<button id="main" class="btn btn-large" data-cy="submit">Submit</button>
	'''
	 | test table | description |
| --- | --- |
| does this work | description test |


### To be added...examples to be added:
## Hooks, stubs, etc.




