describe('open Reddit', function() {
  it('should have a title', function() {
    browser.get('http://localhost:4200/');
    expect(browser.getTitle()).toEqual('Reddit');
  });

   it('should return home after click on logo', function() {
    browser.get('http://localhost:4200/');
    element(by.id('logo')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
  });
});


describe('Log In Reddit', function() {

  it('should open login window', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    expect(element(by.id('ssinn')).getText()).toEqual('Sign in');
  });

  it('should open login window then enter valid username and password', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    element(by.css('[formcontrolname="username"]')).sendKeys('Badr');
    element(by.css('[formcontrolname="password"]')).sendKeys('1234');
    element(by.id('signin')).click();
  });
 

    
  it('should open login window then enter valid username and invalid password', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    element(by.css('[formcontrolname="username"]')).sendKeys('Badr');
    element(by.css('[formcontrolname="password"]')).sendKeys('1sdfds');
    element(by.id('signin')).click();
  });


  it('should open login window then enter invalid username and password', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    element(by.css('[formcontrolname="username"]')).sendKeys('Badr');
    element(by.css('[formcontrolname="password"]')).sendKeys('1234');
    element(by.id('signin')).click();
  });

   it('should open login window then enter valid username then login', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    element(by.css('[formcontrolname="username"]')).sendKeys('Badr');
    element(by.id('signin')).click();
  });

  it('should open login window then close', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
   element(by.className('close pull-right')).click();
  });

  it('should open login window then check for data to be empty', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);

    var user=element(by.css('[formcontrolname="username"]'));
    var pass=element(by.css('[formcontrolname="password"]'));

    expect(user.getAttribute('value')).toEqual('');
    expect(pass.getAttribute('value')).toEqual('');   
  });

 it('should open login window then close enter values then close and open again check for data', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);

     element(by.css('[formcontrolname="username"]')).sendKeys('Badr');
    element(by.css('[formcontrolname="password"]')).sendKeys('1234');
   element(by.className('close pull-right')).click();
    element(by.id('log-in')).click();
    browser.sleep(3000);

    var user=element(by.css('[formcontrolname="username"]'));
    var pass=element(by.css('[formcontrolname="password"]'));

    expect(user.getAttribute('value')).toEqual('');
    expect(pass.getAttribute('value')).toEqual('');   
  });

 it('should open login window then press Sign up', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    element(by.linkText('SIGN UP')).click();
     expect(element(by.id('ff')).getText()).toEqual('Join the worldwide conversation.');
  });

});


describe('Sign Up Reddit', function() {
  it('Open Sign up form', function() {
    browser.get('http://localhost:4200/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    expect(element(by.id('ff')).getText()).toEqual('Join the worldwide conversation.');
  });

 it('Open Sign up form and check it is empty', function() {
    browser.get('http://localhost:4200/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    expect(user.getAttribute('value')).toEqual('');
  });
    it('Open Sign up form and valid enter email', function() {
    browser.get('http://localhost:4200/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.com');
    element(by.buttonText('Next')).click();
  });
    it('Open Sign up form and invalid enter email', function() {
    browser.get('http://localhost:4200/');
    element(by.id('sign-up')).click();
    browser.sleep(3000);
    var user=element(by.css('[formcontrolname="email"]'));
    user.sendKeys('Badr@gmail.con');
    element(by.buttonText('Next')).click();
  });
    it('Open Sign up form and close it open again then enter data then close then open and check for clearing data', function() {
    browser.get('http://localhost:4200/');
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




