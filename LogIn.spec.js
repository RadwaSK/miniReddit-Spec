describe('open Reddit', function() {
  it('should have a title', function() {
    browser.get('http://35.204.169.121/Reddit/');
    expect(browser.getTitle()).toEqual('Reddit');
  });

   it('should return home after click on logo', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('logo')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/');
  });
});


describe('Log In Reddit', function() {

  it('should open login window', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    expect(element(by.id('ssinn')).getText()).toEqual('Sign in');
  });
    
  it('should open login window then enter valid username and invalid password', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='mini-reddit'; var pass='mini-reddit0';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.id('signin')).click();
    expect(element(by.id('ssinn')).getText()).toEqual('Sign in');
  });


  it('should open login window then enter invalid username and password', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='Badr'; var pass='1224';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.id('signin')).click();
    expect(element(by.id('ssinn')).getText()).toEqual('Sign in');
  });

   it('should open login window then enter valid username then login', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='mini-reddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.id('signin')).click();
    expect(element(by.id('ssinn')).getText()).toEqual('Sign in');
  });

  it('should open login window then close', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
   element(by.className('close pull-right')).click();
  });

  it('should open login window then check for data to be empty', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);

    var user=element(by.css('[formcontrolname="username"]'));
    var pass=element(by.css('[formcontrolname="password"]'));

    expect(user.getAttribute('value')).toEqual('');
    expect(pass.getAttribute('value')).toEqual('');   
  });

 it('should open login window then close enter values then close and open again check for data', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
  var user='mini-reddit'; var pass='mini-reddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
   element(by.className('close pull-right')).click();
    element(by.id('log-in')).click();
    browser.sleep(3000);

    var user=element(by.css('[formcontrolname="username"]'));
    var pass=element(by.css('[formcontrolname="password"]'));

    expect(user.getAttribute('value')).toEqual('');
    expect(pass.getAttribute('value')).toEqual('');   
  });
 it('should open login window then press sign up', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    element(by.linkText('SIGN UP')).click();
    browser.sleep(1000);
    expect(element(by.id('ff')).getText()).toEqual('Join the worldwide conversation.');
  });

 it('should open login window then press forget username then enter valid mail', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(1000);
    element(by.linkText('Forgot username')).click();
    browser.sleep(1000);
    expect(element(by.id('tit')).getText()).toEqual('Recover your username');
    var mail='elnagmy45@gmail.com';
    element(by.css('[formcontrolname="email"]')).sendKeys(mail);
    element(by.buttonText('EMAIL ME')).click();

  });

 
  
  it('should open login window then enter valid username and password', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='mini-reddit'; var pass='mini-reddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.id('signin')).click();
    browser.sleep(3000);
    expect(element(by.id('UserName')).getText()).toEqual(user);
  });
 
 it('should log out', function() {

    element(by.id('right-dropdown')).click();
    element(by.linkText('Log Out')).click();
    browser.sleep(3000);
    expect(element(by.id('log-in')).getText()).toEqual('Log in');
  });
});





