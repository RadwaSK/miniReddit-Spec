describe('Profile', function() {
  it('check loged in ', function() {
    browser.get('http://localhost:4200/');
     expect(element(by.id('UserName')).getText()).toEqual('7moda');
 });

it('Go to the Profile ', function() {
    browser.get('http://localhost:4200/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda');  
 });
    
it('Go to the Profile then return to home ', function() {
    browser.get('http://localhost:4200/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(3000);
    element(by.id('logo')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
 });

it('Try to share ', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
    element(by.id('share3')).click();
    expect(element(by.id('share3')).getAttribute('aria-expanded')).toBe('true');
 });

it('Try to save ', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
    element(by.id('save2')).click();
    browser.sleep(2000);
 });

it('Try to Hide ', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
    element(by.id('hide1')).click();
    browser.sleep(2000);
 });

it('open list of posts i was commented on', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
    element(by.cssContainingText('.navbar-item asd2', 'Comments')).click();
  // element(by.linkText('Comments'))
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda/comments');
 });

it('open list of My posts', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
   element(by.linkText('Posts')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda/posts');
 });

it('open list of My Saved posts', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
   element(by.linkText('Saved')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda/saved');
 });

it('open list of My Hidden posts', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
   element(by.linkText('Hidden')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda/hidden');
 });
it('open list of My Upvoted posts', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
   element(by.linkText('Upvoted')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda/upvoted');
 });
it('open list of My Downvoted posts', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
   element(by.linkText('Downvoted')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda/downvoted');
 });
it('open list of My Gilded', function() {
    browser.get('http://localhost:4200/user/7moda');
    browser.sleep(3000);
   element(by.className('dropdown-toggle')).click();
   element(by.linkText('Gilded (legacy)')).click();
   expect(browser.getCurrentUrl()).toBe('http://localhost:4200/user/7moda/gilded');
 });

it('check list of My posts', function() {
    browser.get('http://localhost:4200/user/7moda/posts');
    browser.sleep(3000);
    expect(element(by.tagName('span')).getText()).toBe('7moda');
 });

it('check list of My Hidden posts', function() {
    browser.get('http://localhost:4200/user/7moda/hidden');
    browser.sleep(3000);
    element(by.id('unhide1')).click();
    browser.sleep(2000);
 });

it('check list of My Saved posts', function() {
    browser.get('http://localhost:4200/user/7moda/saved');
    browser.sleep(3000);
    element(by.id('unsave2')).click();
    browser.sleep(2000);
 });

it('check list of My Upvoted posts', function() {
    browser.get('http://localhost:4200/user/7moda/upvoted');
    browser.sleep(3000);
    expect(element(by.id('voteNum1')).getCssValue('color')).toBe('red');
    
 });

it('check list of My Downvoted posts', function() {
    browser.get('http://localhost:4200/user/7moda/downvoted');
    browser.sleep(3000);
    expect(element(by.id('voteNum2')).getCssValue('color')).toBe('blue');
   
 });
});


describe('setting', function() {
it('Go to the setting ', function() {
    browser.get('http://localhost:4200/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/settings');  
 });

it('Go to the Profile setting ', function() {
    browser.get('http://localhost:4200/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Profile')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/profile-setting');  
 });


it('Go to the Account setting ', function() {
    browser.get('http://localhost:4200/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/account-setting');  
 });

});

describe('Voteing in Profile', function() {
  it('should upvote', function() {
    browser.get('http://localhost:4200/user/7moda');
     element(by.id('upVote1')).click();
     expect(element(by.id('voteNum1')).getText()).toEqual('4');
 });
it('should upvote 3 times', function() {
    browser.get('http://localhost:4200/user/7moda');
     element(by.id('upVote1')).click();
     element(by.id('upVote1')).click();
     element(by.id('upVote1')).click();
     expect(element(by.id('voteNum1')).getText()).toEqual('4');
  
 });
it('should downvoting', function() {
    browser.get('http://localhost:4200/user/7moda');
     element(by.id('downVote1')).click();
     expect(element(by.id('voteNum1')).getText()).toEqual('3');
 });

it('should downvoting twice', function() {
    browser.get('http://localhost:4200/user/7moda');
     element(by.id('downVote2')).click();
     element(by.id('downVote2')).click();
     expect(element(by.id('voteNum2')).getText()).toEqual('1');
  
 });
it('should upvote and downvote second post', function() {
    browser.get('http://localhost:4200/user/7moda');
    element(by.id('downVote3')).click();
    element(by.id('upVote3')).click();
    expect(element(by.id('voteNum3')).getText()).toEqual('2');
 });

it('should upvote and downvote for more than post', function() {
    browser.get('http://localhost:4200/user/7moda');

    element(by.id('downVote1')).click();
    element(by.id('upVote2')).click();
    element(by.id('downVote3')).click();


    expect(element(by.id('voteNum1')).getText()).toEqual('3');
    expect(element(by.id('voteNum2')).getText()).toEqual('1');
    expect(element(by.id('voteNum3')).getText()).toEqual('0');
  
 });

});
