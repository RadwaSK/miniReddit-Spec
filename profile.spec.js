
var EC = protractor.ExpectedConditions;

describe('Profile', function() {
  it('check loged in ', function() {
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

it('Go to the Profile ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit');  
 });
    
it('Go to the Profile then return to home ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('logo')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/');
 });

it('Try to share ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('share3')).click();
    expect(element(by.id('share3')).getAttribute('aria-expanded')).toBe('true');
 });

it('Try to save ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('save2')).click();
    browser.sleep(2000);
 });

it('Try to Hide ', function() {
   browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('hide1')).click();
    browser.sleep(2000);
 });

it('open list of posts i was commented on', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
     element(by.id('comments')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/comments');
 });

it('open list of My posts', function() {
   browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
   element(by.id('posts')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/posts');
 });

it('open list of My Saved posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
   element(by.id('saved')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/saved');
 });

it('open list of My Hidden posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
   element(by.id('hidden')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/hidden');
 });
it('open list of My Upvoted posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
   element(by.id('upvoted')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/upvoted');
 });
it('open list of My Downvoted posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
   element(by.id('downvoted')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/downvoted');
 });
it('open list of My Gilded', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
   element(by.className('dropdown-toggle')).click();
   element(by.linkText('Gilded (legacy)')).click();
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/gilded');
 });

it('check list of My posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('posts')).click();
    browser.sleep(3000);
    expect(element(by.tagName('span')).getText()).toBe('mini-reddit');
 });

it('check list of My Hidden posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('hidden')).click();
    browser.sleep(3000);
    element(by.id('unHide1')).click();
    browser.sleep(2000);
 });

it('check list of My Saved posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('saved')).click();
    browser.sleep(3000);
    element(by.id('unsave2')).click();
    browser.sleep(2000);
 });

it('check list of My Upvoted posts', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('upvoted')).click();
    browser.sleep(3000);
    expect(element(by.id('voteNum1')).getCssValue('color')).toBe('red');
    
 });

it('check list of My Downvoted posts', function() {
     browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('downvoted')).click();
    browser.sleep(3000);
    expect(element(by.id('voteNum2')).getCssValue('color')).toBe('blue');
   
 });
it('scroll down and try go to top button', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
    browser.sleep(2000);
    var gotop = element(by.buttonText('BACK TO TOP'));
    gotop.isPresent().then(function(result) {
    if ( result ) {
        gotop.click();
    } else {
        expect("1").toEqual('0');
        //do nothing
    }

   });
});
    

  });
 it('should log out', function() {

    element(by.id('right-dropdown')).click();
    element(by.linkText('Log Out')).click();
    browser.sleep(3000);
    expect(element(by.id('log-in')).getText()).toEqual('Log in');
  });

});


describe('Voteing in Profile', function() {
it('check loged in ', function() {
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
it('should upvote', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
     element(by.id('upVote1')).click();
     expect(element(by.id('voteNum1')).getText()).toEqual('4');
 });
it('should upvote 3 times', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('upVote1')).click();
    element(by.id('upVote1')).click();
    element(by.id('upVote1')).click();
    expect(element(by.id('voteNum1')).getText()).toEqual('4');
  
 });
it('should downvoting', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('downVote1')).click();
    expect(element(by.id('voteNum1')).getText()).toEqual('3');
 });

it('should downvoting twice', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('downVote2')).click();
    element(by.id('downVote2')).click();
    expect(element(by.id('voteNum2')).getText()).toEqual('1');
  
 });
it('should upvote and downvote second post', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('downVote3')).click();
    element(by.id('upVote3')).click();
    expect(element(by.id('voteNum3')).getText()).toEqual('2');
 });

it('should upvote and downvote for more than post', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);

    element(by.id('downVote1')).click();
    element(by.id('upVote2')).click();
    element(by.id('downVote3')).click();


    expect(element(by.id('voteNum1')).getText()).toEqual('3');
    expect(element(by.id('voteNum2')).getText()).toEqual('1');
    expect(element(by.id('voteNum3')).getText()).toEqual('0');
  
 });


it('should log out', function() {

    element(by.id('right-dropdown')).click();
    element(by.linkText('Log Out')).click();
    browser.sleep(3000);
    expect(element(by.id('log-in')).getText()).toEqual('Log in');
  });
});
