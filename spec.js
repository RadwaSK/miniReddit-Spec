describe('open Reddit', function() {
  it('should have a title', function() {
    browser.get('http://localhost:4200/');
    expect(browser.getTitle()).toEqual('Reddit');
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
