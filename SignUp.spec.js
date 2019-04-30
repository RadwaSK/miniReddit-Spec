describe('miniReddit Sign Up test:', () => {
	var url = 'http://35.204.169.121/Reddit/';
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


describe('Sign Up Reddit', function() {
  it('Open Sign up form', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    expect(element(by.id('ff')).getText()).toEqual('Join the worldwide conversation.');
  });

 it('Open Sign up form and check it is empty', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    expect(user.getAttribute('value')).toEqual('');
  });
    it('Open Sign up form and valid enter email', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.com');
    element(by.buttonText('Next')).click();
  });
    it('Open Sign up form and invalid enter email', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.con');
    element(by.buttonText('Next')).click();
  });
    it('Open Sign up form and close it open again then enter data then close then open and check for clearing data', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    element(by.css('[aria-label="Close"]')).click();
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.com');
    element(by.css('[aria-label="Close"]')).click();
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    expect(user.getAttribute('value')).toEqual('');
  });
   
});
