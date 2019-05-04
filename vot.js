
var EC = protractor.ExpectedConditions;

describe('Profile', function() {
	it('check loged in ', function() {
     browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='menna'; var pass='123456789';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.id('signin')).click();
    browser.sleep(3000);
    expect(element(by.id('UserName')).getText()).toEqual(user);
  });

it('should upvote 3 times', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
     element(by.id('posts')).click();
     browser.sleep(3000);
     var vote=(element(by.id('voteNum7')).getText());
      console.log(vote);
     var integer = parseInt(vote, 10);
     console.log(integer);
    element(by.id('upVote7')).click();
     browser.sleep(3000);
    expect(element(by.id('voteNum7')).getText()).toEqual('1');
  
 });

 });