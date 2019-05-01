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

     it('open sign up form and check it is empty', ()=> {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    expect(user.getAttribute('value')).toEqual('');
    });

    it('open sign up form and enter invalid  email', ()=> {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@g.n');
    element(by.buttonText('Next')).click();
    var nextpopup = element(by.id('next'));
    nextpopup.isPresent().then(function(result) {
    if ( result ) {
        expect("1").toEqual('0');
    } else {
        //do nothing
    }
   });
});

    it('open sign up form and click next with no email', ()=> {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    element(by.buttonText('Next')).click();
    var usernamefeild =  element(by.css('[formcontrolname="username"]'));
    usernamefeild.isPresent().then(function(result) {
    if ( result ) {
        expect("1").toEqual('0');
    } else {
        //do nothing
    }
    });

});
    it('open sign up form and close it open again then enter data then close then open and check for clearing data', ()=> {
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
    it('open sign up form and enter email then next then return back again', ()=> {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.com');
    element(by.id('back')).click();
    expect(user.getAttribute('value')).toEqual('Badr@gmail.com');

  });
    it('open log in from sign-up', ()=> {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    element(by.linkText('LOG IN')).click();
    browser.wait(EC.presenceOf(element(by.id('signin'))), 1000);   

  });
    it('open sign up form and enter valid  email', ()=> {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.com');
    element(by.buttonText('Next')).click();
    browser.wait(EC.presenceOf(element(by.id('next'))), 1000);
  });
    it('enter valid username and invalid password', ()=> {
    var user='myreddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    var passwordd='mini-';
    element(by.css('[formcontrolname="password"]')).sendKeys(passwordd);
     element(by.id('next')).click();
    var nextpopup = element(by.id('next'));
    nextpopup.isPresent().then(function(result) {
    if ( result ) {
        expect("0").toEqual('0');
    } else {
        expect("1").toEqual('0');
        
    }
   });
  });
    it('open sign up form and enter valid  email then valid username and password', ()=> {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.com');
    element(by.buttonText('Next')).click();
    browser.wait(EC.presenceOf(element(by.id('next'))), 1000);
    var user='myreddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    var passwordd='mini-123';
    element(by.css('[formcontrolname="password"]')).sendKeys(passwordd);
    element(by.id('next')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('Finish'))), 1000);
  });

});

