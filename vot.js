describe('Profile', function() {
   




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