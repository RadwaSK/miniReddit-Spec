describe('Toolbar', () => {
	var EC = protractor.ExpectedConditions;
	beforeEach( () => {
		browser.get('http://localhost:4200/');
	});

	it('should have login button that opens a pop-up', ()=>{
		element(by.id('log-in')).click();
		browser.wait(EC.presenceOf(element(by.buttonText('SIGN IN'))), 1000);
	});

	it('should have sign up button that opens a pop-up', ()=>{
		element(by.id('sign-up')).click();
		browser.wait(EC.presenceOf(element(by.buttonText('Next'))), 1000);
	});

	it('should have sign up button that opens a pop-up', ()=>{
		element(by.id('right-dropdown')).click();
		browser.wait(EC.presenceOf(element(by.id('dropdown-menu-right'))), 1000);
	});
	
});