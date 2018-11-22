//run tests on Chanel Website
//this is needed because jQuery error in application
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Make sure Homepage(US) is functioning correctly', ()=>{
	beforeEach(()=>{
		cy.visit('https://www.chanel.com/us/');
	});
	it('Make sure title is "CHANEL Official Website: Fashion, Fragrance, Beauty, Watches, Fine Jewelry | CHANEL"', ()=>{
		cy.title().should('contain','CHANEL Official Website: Fashion, Fragrance, Beauty, Watches, Fine Jewelry | CHANEL');
	});
	it('Check if Nav Bar is visible in desktop', ()=>{
		cy.get('.header.js-header').should('be.visible');
	});
	it('Check if Nav items are properly displayed in nav bar in desktop', ()=>{
		cy.get('.nav-left.nav-left-one').should('be.visible');
		cy.get('.nav-center').should('be.visible');
		cy.get('.nav-right').should('be.visible');

	});
	//check to make sure body is rendering correctly
	it('Check to make sure at least two body items are shown in desktop', ()=>{
		cy.get('.sliding-hero__item.is-contrasted.none-gradient')
		.its('length')
		.should('be.gt',1);
	});
	

	//footer is correct
	it('Is footer visible and rendered correctly in desktop', ()=>{
		//@TODO
		//network problems prevent testing
		cy.get('.js-footer')
		.should('be.visible');
	});
	//check hover in footer
});









