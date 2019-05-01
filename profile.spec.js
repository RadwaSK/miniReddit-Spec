
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
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
    element(by.id('share3')).click();
    expect(element(by.id('share3')).getAttribute('aria-expanded')).toBe('true');
 });

it('Try to save ', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
    element(by.id('save2')).click();
    browser.sleep(2000);
 });

it('Try to Hide ', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
    element(by.id('hide1')).click();
    browser.sleep(2000);
 });

it('open list of posts i was commented on', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
     element(by.id('comments')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/comments');
 });

it('open list of My posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
   element(by.id('posts')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/posts');
 });

it('open list of My Saved posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
   element(by.id('saved')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/saved');
 });

it('open list of My Hidden posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
   element(by.id('hidden')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/hidden');
 });
it('open list of My Upvoted posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
   element(by.id('upvoted')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/upvoted');
 });
it('open list of My Downvoted posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
   element(by.id('downvoted')).click();
    browser.sleep(3000);
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/downvoted');
 });
it('open list of My Gilded', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    browser.sleep(3000);
   element(by.className('dropdown-toggle')).click();
   element(by.linkText('Gilded (legacy)')).click();
   expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/user/mini-reddit/gilded');
 });

it('check list of My posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit/posts');
    browser.sleep(3000);
    expect(element(by.tagName('span')).getText()).toBe('mini-reddit');
 });

it('check list of My Hidden posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit/hidden');
    browser.sleep(3000);
    element(by.id('unHide1')).click();
    browser.sleep(2000);
 });

it('check list of My Saved posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit/saved');
    browser.sleep(3000);
    element(by.id('unsave2')).click();
    browser.sleep(2000);
 });

it('check list of My Upvoted posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit/upvoted');
    browser.sleep(3000);
    expect(element(by.id('voteNum1')).getCssValue('color')).toBe('red');
    
 });

it('check list of My Downvoted posts', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit/downvoted');
    browser.sleep(3000);
    expect(element(by.id('voteNum2')).getCssValue('color')).toBe('blue');
   
 });
 it('should log out', function() {

    element(by.id('right-dropdown')).click();
    element(by.linkText('Log Out')).click();
    browser.sleep(3000);
    expect(element(by.id('log-in')).getText()).toEqual('Log in');
  });

});


describe('setting', function() {
it('check loged in ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='mini-reddit'; var pass='mini-reddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.id('signin')).click();
    browser.sleep(5000);
    expect(element(by.id('UserName')).getText()).toEqual(user);
  });
it('Go to the setting ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/settings');  
 });

it('Go to the Profile setting ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Profile')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/profile-setting');  
 });


it('Go to the Account setting ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting');  
 });
it('change email with valid email', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('box')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    var newmail='elnagmy@gmail.com'; var pass='mini-reddit';
    element(by.css('[formcontrolname="email"]')).sendKeys(newmail);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.buttonText('SAVE')).click();
    expect(element(by.id('myemail')).getText()).toBe(newmail);
    
 });
it('change email with invalid password', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('box')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    var newmail='elnagmy@gmail.com'; var pass='reddit';
    element(by.css('[formcontrolname="email"]')).sendKeys(newmail);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.buttonText('SAVE')).click();
    var savebutton = element(by.buttonText('SAVE'));
    savebutton.isPresent().then(function(result) {
    if ( result ) {
        expect('1').toEqual('1');
    } else {
        expect("1").toEqual('0');
    }

   });
    
 });
it('change email invalid ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('box')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    var newmail='elnagmy'; var pass='mini-reddit';
    element(by.css('[formcontrolname="email"]')).sendKeys(newmail);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    element(by.buttonText('SAVE')).click();
    var savebutton = element(by.buttonText('SAVE'));
    savebutton.isPresent().then(function(result) {
    if ( result ) {
        expect('1').toEqual('1');
    } else {
        expect("1").toEqual('0');
    }

   });
    
 });
 it('deactive account with invalid username ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('deactivate')).click();
    browser.wait(EC.presenceOf(element(by.css('[placeholder="(OPTIONAL) FEEDBACK"]'))), 1000);  
    var feedback='never mind why';
    var username='minireddit'; var password='mini-reddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(username);
    element(by.css('[formcontrolname="password"]')).sendKeys(password);
    element(by.css('[formcontrolname="about"]')).sendKeys(feedback);
    element(by.css('[value="accept"]')).click();
    element(by.id('dective')).click();
     var decbutton = element(by.id('dective'));
    decbutton.isPresent().then(function(result) {
    if ( result ) {
        expect('1').toEqual('1');
    } else {
        expect("1").toEqual('0');
        //do nothing
    }

   }); 
    
});
  it('deactive account with invalid password ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('deactivate')).click();
    browser.wait(EC.presenceOf(element(by.css('[placeholder="(OPTIONAL) FEEDBACK"]'))), 1000);  
    var feedback='never mind why';
    var username='mini-reddit'; var password='minireddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(username);
    element(by.css('[formcontrolname="password"]')).sendKeys(password);
    element(by.css('[formcontrolname="about"]')).sendKeys(feedback);
    element(by.css('[value="accept"]')).click();
    element(by.id('dective')).click();
     var decbutton = element(by.id('dective'));
    decbutton.isPresent().then(function(result) {
    if ( result ) {
        expect('1').toEqual('1');
    } else {
        expect("1").toEqual('0');
        //do nothing
    }

   }); 
    
});
  it('deactive account without check the checkbox', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('deactivate')).click();
    browser.wait(EC.presenceOf(element(by.css('[placeholder="(OPTIONAL) FEEDBACK"]'))), 1000);  
    var feedback='never mind why';
    var username='mini-reddit'; var password='minireddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(username);
    element(by.css('[formcontrolname="password"]')).sendKeys(password);
    element(by.css('[formcontrolname="about"]')).sendKeys(feedback);
    element(by.id('dective')).click();
     var decbutton = element(by.id('dective'));
    decbutton.isPresent().then(function(result) {
    if ( result ) {
        expect('1').toEqual('1');
    } else {
        expect("1").toEqual('0');
        //do nothing
    }

   }); 
    
});
 it('deactive account ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('deactivate')).click();
    browser.wait(EC.presenceOf(element(by.css('[placeholder="(OPTIONAL) FEEDBACK"]'))), 1000);  
    var feedback='never mind why';
    var username='mini-reddit'; var password='mini-reddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(username);
    element(by.css('[formcontrolname="password"]')).sendKeys(password);
    element(by.css('[formcontrolname="about"]')).sendKeys(feedback);
    element(by.css('[value="accept"]')).click();
    element(by.id('dective')).click();
    browser.sleep(3000);
    expect(element(by.id('log-in')).getText()).toEqual('Log in');

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
it('change password ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.className('container')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    var newpass='reddit'; var pass='mini-reddit';
    element(by.css('[placeholder="OLD PASSWORD"]')).sendKeys(pass);
    element(by.css('[placeholder="NEW PASSWORD"]')).sendKeys(newpass);
    element(by.css('[placeholder="CONFIRM NEW PASSWORD"]')).sendKeys(newpass);
    element(by.buttonText('SAVE')).click();
    element(by.id('right-dropdown')).click();
    element(by.linkText('Log Out')).click();
    browser.sleep(3000);
    expect(element(by.id('log-in')).getText()).toEqual('Log in');

    element(by.id('log-in')).click();
    browser.sleep(3000);
    var user='mini-reddit';
    element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(newpass);
    element(by.id('signin')).click();
    browser.sleep(3000);
    expect(element(by.id('UserName')).getText()).toEqual(user);
    
 });
it('change password with wrong password less than 6 character', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('changepass')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    var newpass='reddi'; var pass='mini-reddit';
    element(by.css('[placeholder="OLD PASSWORD"]')).sendKeys(pass);
    element(by.css('[placeholder="NEW PASSWORD"]')).sendKeys(newpass);
    element(by.css('[placeholder="CONFIRM NEW PASSWORD"]')).sendKeys(newpass);
    element(by.buttonText('SAVE')).click();
    var savebutton = element(by.buttonText('SAVE'));
    savebutton.isPresent().then(function(result) {
    if ( result ) {
        expect('1').toEqual('1');
    } else {
        expect("1").toEqual('0');
        //do nothing
    }

   });  
 });
it('change password with wrong confirm password', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('changepass')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);

    var newpass='reddit'; var pass='mini-reddit';var newp='redditt';
    element(by.css('[placeholder="CONFIRM NEW PASSWORD"]')).sendKeys(newp);
    element(by.css('[placeholder="OLD PASSWORD"]')).sendKeys(pass);
    element(by.css('[placeholder="NEW PASSWORD"]')).sendKeys(newpass);
    
    element(by.buttonText('SAVE')).click();
    var savebutton = element(by.buttonText('SAVE'));
    savebutton.isPresent().then(function(result) {
    if ( result ) {
        expect('1').toEqual('1');
    } else {
        expect("1").toEqual('0');
        //do nothing
    }

   }); 
 });
it('open and close change password', function() {
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.id('changepass')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    element(by.buttonText('CANCEL')).click();
    var savebutton = element(by.buttonText('SAVE'));
    savebutton.isPresent().then(function(result) {
    if ( result ) {
        expect("1").toEqual('0');
    } else {
        //do nothing
    }

   });
    element(by.id('box')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    element(by.className('close pull-right')).click();
    var savebutton = element(by.buttonText('SAVE'));
    savebutton.isPresent().then(function(result) {
    if ( result ) {
        expect("1").toEqual('0');
    } else {
        //do nothing
    }
   });
 });

});

describe('Voteing in Profile', function() {
  it('should upvote', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
     element(by.id('upVote1')).click();
     expect(element(by.id('voteNum1')).getText()).toEqual('4');
 });
it('should upvote 3 times', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
     element(by.id('upVote1')).click();
     element(by.id('upVote1')).click();
     element(by.id('upVote1')).click();
     expect(element(by.id('voteNum1')).getText()).toEqual('4');
  
 });
it('should downvoting', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
     element(by.id('downVote1')).click();
     expect(element(by.id('voteNum1')).getText()).toEqual('3');
 });

it('should downvoting twice', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
     element(by.id('downVote2')).click();
     element(by.id('downVote2')).click();
     expect(element(by.id('voteNum2')).getText()).toEqual('1');
  
 });
it('should upvote and downvote second post', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');
    element(by.id('downVote3')).click();
    element(by.id('upVote3')).click();
    expect(element(by.id('voteNum3')).getText()).toEqual('2');
 });

it('should upvote and downvote for more than post', function() {
    browser.get('http://35.204.169.121/Reddit/user/mini-reddit');

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
