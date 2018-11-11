describe('Homepage of Seamless', ()=>{
	beforeEach(()=>{
		cy.visit('https://www.seamless.com/lets-eat');
	});
	it('check the title on Seamless home is "Seamless | Food Delivery from Restaurants Near You ~ Order Online"', ()=>{
		cy.title().should('contain','Seamless | Food Delivery from Restaurants Near You ~ Order Online');
	});
	it('check to make sure that Nav Bar is visible in desktop',()=>{
		cy.get('ghs-main-nav').should('be.visible');
	});

	describe('Homepage of Seamless in Mobile 320x568', ()=>{
		beforeEach(()=>{
			cy.viewport(320,568);
		});
		it('check to make sure that Nav bar is visible in mobile',()=>{
			cy.get('ghs-main-nav').should('be.visible');
		});
		it('check to make sure title is correct in mobile', ()=>{
			cy.title().should('contain','Seamless | Food Delivery from Restaurants Near You ~ Order Online');
		});
	});

});


describe('Check search functionality delivery on desktop', ()=>{
	//types in zipcode to find food bar and submits
	beforeEach(()=>{
		cy.visit('https://www.seamless.com/lets-eat');
		cy.get('.addressInput-textInput').
		click().type('07726{enter}');
		//cy.get('.s-form-inline').submit();
	});
	it('Should see filter column after entering zipcode in desktop search', ()=>{
		cy.get('.facetList-content').should('be.visible');
	});
});

	//mobile
	
describe('check search functionality of search delivery on 320x568 display',()=>{
	beforeEach(()=>{
		cy.viewport(320,568);
		cy.visit('https://www.seamless.com/lets-eat');
		cy.get('.addressInput-textInput').
		click().type('07726{enter}');
	});

	it('Should see filters column after entering zipcode in mobile search', ()=>{
		cy.get('.cuisineRibbon-wrapper').should('be.visible');
	});

});
	


//sample stub

describe('Test out stubs', () => {

  it('responds with the stub', () => {
    cy.server();
    cy.route({
    	method: 'POST',
    	url: "https://api-gtm.grubhub.com/auth",
    	form: true,
    	body: {
    		brand: "SEAMLESS",
			client_id: "beta_seamless_ayNyuFxxVQYefSAhFYCryvXBPQc",
			device_id: 1035200866,
			email: "mbharrat@gmail.com",
			password: "RutgersCS2016"
    	},
    	headers: {}
    	
    }).as('getDummy');
    cy.visit('https://www.seamless.com/lets-eat');         // the url to visit in your app
    cy.wait('@getDummy').its('responseBody')
      .should('be.an', 'object');
  });

});






