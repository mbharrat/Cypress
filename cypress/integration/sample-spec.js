describe('Apple home page', function(){
	//set up beforeEach to refresh state basically (clear out searches manipulated state etch)
	beforeEach(function(){
		//you have access to before, afterEach, and after.
		cy.visit('https://www.apple.com/');
	});

	//each it tests one assertion
	it('contains "Apple" in title', function(){
		cy.title().should('contain','Apple');
	});

	it('should be a fail', function(){
		cy.title().should('contain','test');
	})
	//checks that id nav bar exists
	it('check for nav bar in Desktop', function(){
		cy.get('#ac-globalnav').should('be.visible');
	});

	//check actual element
	it('check actual nav bar in element', function(){
		cy.get('nav').should('be.visible');
	});


	//test mobile responsive

	describe('with a 320x568 viewport', function(){
		beforeEach(function(){
			cy.viewport(320,568);
		});

		it('has nav bar in mobile', function(){
			cy.get('#ac-globalnav').should('be.visible');
		});
	});
});
describe('lets test Search', function(){
		beforeEach(function(){
			cy.visit('https://www.apple.com//us/search/iphone?src=globalnav/');
		});

		it('check that search results come back', function(){
			cy.get('#id-tab').should('exist');
		});
});





