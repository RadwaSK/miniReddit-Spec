describe('open Reddit', function() {
  it('should have a title', function() {
    browser.get('http://localhost:4200/');
    expect(browser.getTitle()).toEqual('Reddit');
  });
});



describe('Home', function() {
  it('should return home after click on logo', function() {
    browser.get('http://localhost:4200/');
    element(by.id('logo')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
  });
});



describe('Log In Reddit', function() {
  it('should open login window then enter valid username and password', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    element(by.css('[formcontrolname="my_username"]')).sendKeys('Badr');
    element(by.css('[formcontrolname="password"]')).sendKeys('1234');
    element(by.id('signin')).click();
  });
});

describe('Log In Reddit', function() {
  it('should open login window then close', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
   element(by.className('close pull-right')).click();
  });
});


describe('Log In Reddit', function() {
  it('should open login window then close enter values then close and open again check for data', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);

    var user=element(by.css('[formcontrolname="my_username"]'));
    var pass=element(by.css('[formcontrolname="password"]'));

    expect(user.getAttribute('value')).toEqual('');
     expect(pass.getAttribute('value')).toEqual('');   
  });

});

describe('Log In Reddit', function() {
  it('should open login window then close enter values then close and open again check for data', function() {
    browser.get('http://localhost:4200/');
    element(by.id('log-in')).click();
    browser.sleep(3000);

     element(by.css('[formcontrolname="my_username"]')).sendKeys('Badr');
    element(by.css('[formcontrolname="password"]')).sendKeys('1234');
   element(by.className('close pull-right')).click();
    element(by.id('log-in')).click();
    browser.sleep(3000);

    var user=element(by.css('[formcontrolname="my_username"]'));
    var pass=element(by.css('[formcontrolname="password"]'));

    expect(user.getAttribute('value')).toEqual('');
     expect(pass.getAttribute('value')).toEqual('');   
  });

});





