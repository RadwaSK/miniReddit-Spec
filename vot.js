describe('Profile', function() {
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
   element(by.id('onesignal-popover-cancel-button')).click();
    browser.sleep(2000);
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
    var vote=element(by.id('voteNum7')).getText();
    var vote1 = toNumber(vote);
    vote1 = vote1.then( (num) => { return num+1; })
    
    element(by.id('upVote7')).click();
    browser.sleep(1000);
    var vote2=toNumber(element(by.id('voteNum7')).getText());
    
    browser.sleep(3000);
    if(true){
        expect(vote1).toEqual(vote2)
    }
        else{expect('1').toEqual('0')}
  });

});