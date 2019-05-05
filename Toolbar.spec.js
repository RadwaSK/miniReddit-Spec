describe('Toolbar', () => {
	var EC = protractor.ExpectedConditions;
	beforeEach( () => {
		browser.get('http://35.204.169.121/Reddit/');
	});

	it('should have login button that opens a pop-up', ()=>{
		element(by.id('log-in')).click();
		browser.wait(EC.presenceOf(element(by.buttonText('SIGN IN'))), 1000);
	});

	it('should have sign up button that opens a pop-up', ()=>{
		element(by.id('sign-up')).click();
		browser.wait(EC.presenceOf(element(by.buttonText('Next'))), 1000);
	});
	 var EC = protractor.ExpectedConditions;
    it('check loged in ', function() {
     browser.get('http://35.204.169.121/Reddit/');
     browser.wait(EC.urlIs('http://35.204.169.121/Reddit/'), 5000); 
     browser.sleep(5000);
    browser.wait(EC.presenceOf(element(by.id('onesignal-popover-container')).element(by.id('onesignal-popover-cancel-button'))), 5000);
    element(by.id('onesignal-popover-container')).element(by.id('onesignal-popover-cancel-button')).isPresent().then(function(result) {
    if ( result ) {
         element(by.id('onesignal-popover-container')).element(by.id('onesignal-popover-cancel-button')).click();
    } else {
        //do nothing
    }

   });
   
  
    browser.sleep(5000);
    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='menna'; var pass='123456789';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.id('signin')).click();
    browser.sleep(3000);
    expect(element(by.id('UserName')).getText()).toEqual(user);
  });

	it('should go to user setting', ()=>{
		element(by.id('left-dropdown-button')).click();
		element(by.linkText('User Settings')).click();
		 browser.sleep(3000);
		expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/settings'); 
	});
});