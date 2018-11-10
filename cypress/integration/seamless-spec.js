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


describe('Check search functionality on delivery', ()=>{
	//types in zipcode to find food bar and submits
	beforeEach(()=>{
		cy.visit('https://www.seamless.com/lets-eat');
		cy.get('.addressInput-textInput').
		click().type('07726{enter}');
		//cy.get('.s-form-inline').submit();
	});
	it('Should see filters', ()=>{
		cy.get('.facetList-content').should('be.visible');
	});

	//mobile
	describe('check same functionality of search on 320x568 display',()=>{
		beforeEach(()=>{
			cy.viewport(320,568);
		});


		//uh-oh! fails because the layout is different on mobile! great way to debug your test cases :)
		it('Should see filters', ()=>{
			cy.get('.facetList-content').should('be.visible');
		});



	});
});