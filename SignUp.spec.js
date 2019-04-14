describe('miniReddit Sign Up test:', () => {
	var url = 'http://localhost:4200/';
	var EC = protractor.ExpectedConditions;
	browser.get(url);

	it('Home page should have a title', () =>{
		expect(browser.getTitle()).toEqual('Reddit');
	});

	it('It should open sign-up pop-up', () => {
		element(by.id('sign-up')).click();
		browser.wait(EC.presenceOf(element(by.buttonText('Next'))), 1000);
		element(by.name('email')).sendKeys('blabla@email.com');
		element(by.buttonText('Next')).click();
	});

	it('should open another pop-up for username & password', ()=>{
		browser.wait(EC.presenceOf(element(by.css('placeholder="Password"'))), 1000);
		element(by.css('formcontrolname="username"')).sendKeys('blabla');
		element(by.css('formcontrolname="password"')).sendKeys('blabla');
	});
});