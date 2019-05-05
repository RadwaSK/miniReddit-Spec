
var EC = protractor.ExpectedConditions;

describe('Profile', function() {
  it('check loged in ', function() {
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
     var EC = protractor.ExpectedConditions;
    function toNumber(promiseOrValue) {
    // if it is not a promise, then convert a value
        if (!protractor.promise.isPromise(promiseOrValue)) {
            return parseInt(promiseOrValue, 10);
        }
    // if promise - convert result to number
        return promiseOrValue.then(function (stringNumber) {
            return parseInt(stringNumber, 10);
        });
    }
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
 
it('should upvote', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(1000);
     element(by.id('posts')).click();
     browser.sleep(1000);
    var vote=element(by.id('voteNum7')).getText();
    var vote1 = toNumber(vote);
    vote1 = vote1.then( (num) => { return num+1; });
    element(by.id('upVote7')).click();
    browser.sleep(1000);
    var vote2=toNumber(element(by.id('voteNum7')).getText());
    browser.sleep(1000);
    if(true){
        expect(vote1).toEqual(vote2);
    }
        else{expect('1').toEqual('0');}
  });
it('should upvote 3 times', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(1000);
    element(by.id('posts')).click();
     browser.sleep(1000);
    var vote=element(by.id('voteNum7')).getText();
    var vote1 = toNumber(vote);
    vote1 = vote1.then( (num) => { return num+1; });
     element(by.id('upVote7')).click();
    element(by.id('upVote7')).click();
    element(by.id('upVote7')).click();
    browser.sleep(1000);
    var vote2=toNumber(element(by.id('voteNum7')).getText());
    browser.sleep(1000);
    if(true){
        expect(Math.abs(vote1-vote2)).toEqual(1);
    }
        else{expect('1').toEqual('0');}
});
it('should downvoting', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(1000);
    element(by.id('posts')).click();
     browser.sleep(1000);
    var vote=element(by.id('voteNum2')).getText();
    var vote1 = toNumber(vote);
    vote1 = vote1.then( (num) => { return num-1; })
    browser.sleep(1000);
    element(by.id('downVote2')).click();
    var vote2=toNumber(element(by.id('voteNum2')).getText());
    browser.sleep(1000);
    if(true){
        expect(vote1).toEqual(vote2);
    }
        else{expect('1').toEqual('0');
    }   
 });

it('should downvoting twice', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(1000);
    element(by.id('posts')).click();
     browser.sleep(1000);
    var vote=element(by.id('voteNum1')).getText();
    var vote1 = toNumber(vote);
    vote1 = vote1.then( (num) => { return num; })
    browser.sleep(1000);
    element(by.id('downVote1')).click();
    browser.sleep(500);
    element(by.id('downVote1')).click();
    var vote2=toNumber(element(by.id('voteNum1')).getText());
    browser.sleep(1000);
    if(true){
        expect(vote1).toEqual(vote2);
    }
        else{expect('1').toEqual('0');
    } 
  
 });
it('should upvote and downvote second post', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('My profile')).click();
    browser.sleep(1000);
    element(by.id('posts')).click();
    browser.sleep(1000);
    var vote=element(by.id('voteNum5')).getText();
    var vote1 = toNumber(vote);
    vote1 = vote1.then( (num) => { return num; })
    browser.sleep(1000);
    element(by.id('upVote5')).click();
    browser.sleep(500);
   element(by.id('downVote5')).click();
    var vote2=toNumber(element(by.id('voteNum5')).getText());
    browser.sleep(1000);
    if(vote1-vote2==1 ||vote1-vote2==2){
        expect('vote1').toEqual('vote1');
    }
        else{expect('1').toEqual('0');
    } 
 });
it('should log out', function() {

    element(by.id('right-dropdown')).click();
    element(by.linkText('Log Out')).click();
    browser.sleep(3000);
    expect(element(by.id('log-in')).getText()).toEqual('Log in');
  });
});
