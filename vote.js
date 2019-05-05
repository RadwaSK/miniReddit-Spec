describe('Voteing', function() {
  it('should upvote', function() {
    browser.get('http://localhost:4200/');
     element(by.id('upVote')).click();
     expect(element(by.id('voteNum')).getText()).toEqual('6');
 });
it('should upvote 3 times', function() {
    browser.get('http://localhost:4200/');
     element(by.id('upVote')).click();
     element(by.id('upVote')).click();
     element(by.id('upVote')).click();
     expect(element(by.id('voteNum')).getText()).toEqual('6');
  
 });
it('should downvoting', function() {
    browser.get('http://localhost:4200/');
     element(by.id('downVote')).click();
     expect(element(by.id('voteNum')).getText()).toEqual('4');
 });

it('should downvoting twice', function() {
    browser.get('http://localhost:4200/');
     element(by.id('downVote')).click();
     element(by.id('downVote')).click();
     expect(element(by.id('voteNum')).getText()).toEqual('5');
  
 });
it('should upvote and downvote second post', function() {
    browser.get('http://localhost:4200/');
    element(by.id('downVote1')).click();
    element(by.id('upVote1')).click();
    expect(element(by.id('voteNum1')).getText()).toEqual('13');
 });
it('should upvote and downvote first post', function() {
    browser.get('http://localhost:4200/');
    element(by.id('downVote')).click();
    element(by.id('upVote')).click();
    expect(element(by.id('voteNum')).getText()).toEqual('5');
  
 });
it('should upvote and downvote for more than post', function() {
    browser.get('http://localhost:4200/');
   
    element(by.id('upVote2')).click();
    element(by.id('downVote1')).click();
    element(by.id('downVote')).click();


    expect(element(by.id('voteNum')).getText()).toEqual('4');
    expect(element(by.id('voteNum1')).getText()).toEqual('12');
    expect(element(by.id('voteNum2')).getText()).toEqual('6');
  
 });

});
