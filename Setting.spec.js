describe('setting', function() {
    var EC = protractor.ExpectedConditions;
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
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
     element(by.linkText('Account')).click();
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
it('rechange password ', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Account')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/account-setting'); 
    element(by.className('container')).element(by.id('chng')).click();
    browser.wait(EC.presenceOf(element(by.buttonText('SAVE'))), 1000);
    var pass='reddit'; var newpass='mini-reddit';
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

it('change display name and about', function() {
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Profile')).click();
    expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/profile-setting');
    var name ='Abdelrahman'; var about= 'computer engineering student';
    element(by.css('[formcontrolname="displayname"]')).sendKeys(name);
    element(by.css('[formcontrolname="about"]')).sendKeys(about);
    browser.get('http://35.204.169.121/Reddit/');
    element(by.id('right-dropdown')).click();
    element(by.linkText('User settings')).click();
    browser.sleep(3000);
    element(by.linkText('Profile')).click();
    expect(element(by.css('[formcontrolname="displayname"]')).getAttribute('value')).toEqual(name);
    expect(element(by.css('[formcontrolname="about"]')).getAttribute('value')).toEqual(about);
 });


/*var path = require('E:\photo\Anime ♡');

it(' upload a Avater image', function() {
    var fileToUpload = '../FB_IMG_1486545449838.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);

    element(by.id('fileToUpload')).sendKeys(absolutePath);    

});
it(' upload a Avater bannar', function() {
    var fileToUpload = '../FB_IMG_1482000194926.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.id('fileToUploadbannar')).sendKeys(absolutePath);    

});*/
});