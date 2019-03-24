describe('miniReddit Sign Up test:', () => {
	var url = 'http://localhost:4200/';
	browser.get(url);

	it('Home page should have a title', () =>{
		expect(browser.getTitle()).toEqual('Reddit');
	});

	it('It should open sign-up pop-up', () => {
		element(by.id('sign-up')).click();
		browser.sleep(3000);
		element(by.css('formcontrolname="email"')).sendKeys('blabla@email.com');
		element(by.buttonText('Next')).click();
	});

});