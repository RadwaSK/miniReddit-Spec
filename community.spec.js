describe('Community Page ', () => {
	var EC = protractor.ExpectedConditions;

	//first I'll run tests when I'm not logged in
	// it('should open the community without logging in', () => {
	// 	browser.get('http://35.204.169.121/Reddit/community/2');
	// 	browser.sleep(4000);
	// 	var toolbarExistance = element(by.id('left-dropdown')).isPresent();
	// 	expect(toolbarExistance).toBe(true);
	// });

	// it('should open sign-up pop-up if I try to subscribe or create post', ()=>{
	// 	var createPost = element(by.buttonText('CREATE POST'));
	// 	createPost.click();
	// 	var signUp = element(by.buttonText('Next')).isPresent();
	// 	expect(signUp).toBe(true);
	// 	var Subscribe = element(by.buttonText('SUBSCRIBE'));
	// 	Subscribe.click();
	// 	signUp = element(by.buttonText('Next')).isPresent();
	// 	expect(signUp).toBe(true);
	// });

	//second tests after logging in
	//I'll start at home page, log in to an account and open a community

	browser.sleep(4000);
	browser.get('http://35.204.169.121/Reddit/');
	element(by.id('log-in')).click();
	var user='amro'; var pass='123456789';
	element(by.css('[formcontrolname="username"]')).sendKeys(user);
    element(by.css('[formcontrolname="password"]')).sendKeys(pass);
    browser.sleep(500); 
    element(by.buttonText('SIGN IN')).click();
    browser.sleep(4000);
    element(by.id('left-dropdown')).click();
    browser.sleep(5000);
    element(by.partialLinkText('r/')).click();
    browser.sleep(4000);
    var commName = element(by.className('Name'))['value_'].getText();
    commName = commName.then( (text) => {return text.substr(2);})
    var userName = element(by.id('UserName'));
    var isModerator;
    var subscribers;

	it('should have title of community as r/community name', () => {
		var commName2 = element(by.className('Namei'))['value_'].getText();
		console.log(commName2);
		expect(commName2).toContain('r/');
		var commName2 = commName2.then( (text) => {return text.substr(3);});
		expect(commName2).toEqual(commName);
	});

	it('should have name of community in toolbar not Popular', ()=>{
		var dropdownName = element(by.id('dropdown-left-name'));
		expect(dropdownName).toEqual(commName);
	});

	it('should have one post at least', () => {
		var post = element(by.className('post-container')).isPresent();
		expect(post).toBe(true);
	});

	it('should have one moderator at least', ()=>{
		var mod = element(by.className('text-of-moderator')).isPresent();
		expect(mod).toBe(true);
	});

	it('should be able to open all moderators', ()=>{
		var viewAllMod = element(by.className('viewMod')).isPresent();
		expect(viewAllMod).toBe(true);
		viewAllMod.click();
		var modUrl = browser.getCurrentUrl();
		
		var userMod = element(by.partialLinkText('u/' + userName));
		if (userMod)
			isModerator = true;
		else
			isModerator = false;
		browser.sleep(500);
		expect(modUrl).toEqual('http://35.204.169.121/Reddit/community/2/Moderators');
		browser.navigate().back();
		browser.sleep(500);
	});

	it('should have an about', () => {
		var about = element(by.className('Bio')).isPresent();
		expect(about).toBe(true);
	});

	it('should have non-negative number of subscribers', ()=>{
		subscribers = element(by.className('subscribersCnt')).getText();
		subscribers = parseInt(subscribers, 10);
		if (subscribers < 0)
			expect(1).toEqual(0);
	});

	it('should have non-negative number of online subscribers', ()=>{
		var online = element(by.className('OnlineCnt')).getText();
		online = parseInt(OnlineCnt, 10);
		if (online < 0)
			expect(1).toEqual(0);
	});

	it('should be able to unsubscribe', ()=>{
		var button = element(by.buttonText("SUBSCRIBED")).isPresent();
		expect(button).toBe(true);
		button.click();
		button = element(by.buttonText("SUBSCRIBE")).isPresent();
		expect(button).toBe(true);
		var newSubscribers = element(by.className('subscribersCnt')).getText();
		newSubscribers = parseInt(newSubscribers, 10);
		expect(newSubscribers).toEqual(subscribers-1);
	});

	it('should be able to subscribe', ()=>{
		var button = element(by.buttonText("SUBSCRIBE")).isPresent();
		expect(button).toBe(true);
		button.click();
		button = element(by.buttonText("SUBSCRIBED")).isPresent();
		expect(button).toBe(true);
		var newSubscribers = element(by.className('subscribersCnt')).getText();
		newSubscribers = parseInt(newSubscribers, 10);
		expect(newSubscribers).toEqual(subscribers);
	});

	it('should be able to create post', ()=>{
		var button = element(by.buttonText("CREATE POST")).isPresent();
		expect(button).toBe(true);
		button.click();
		browser.sleep(1000);
		var newUrl = browser.getCurrentUrl();
		if (newUrl == 'http://35.204.169.121/Reddit/community/2')
			expect(1).toEqual(0);
		else
			browser.navigate().back();	
		browser.sleep(1000);
	});

	it('should see Edit Community button only if this account is in moderators list', ()=>{
		if (isModerator){
			var editComm = element(by.buttonText('EDIT COMMUNITY')).isPresent();
			expect(editComm).toBe(true);
			element(by.buttonText('EDIT COMMUNITY')).click();
			browser.sleep(1000);
			var newUrl = browser.getCurrentUrl();
			expect(newUrl).toEqual('http://35.204.169.121/Reddit/community/2/Edit_community');
		}
		else{
			var editComm = element(by.buttonText('EDIT COMMUNITY')).isPresent();
			expect(editComm).toBe(false);
		}
	});

	it('should be able to sort posts', ()=>{
		var sorter = element(by.buttonText('Sort')).isPresent();
		expect(sorter).toBe(true);
	});

	it('should be able to log-out and remain on same page', ()=>{
		element(by.id('right-dropdown')).click();
		element(by.partialLinkText('Log Out')).click();
		browser.sleep(1000);
		var newUrl = browser.getCurrentUrl();
		expect(newUrl).toEqual('http://35.204.169.121/Reddit/community/2');
	});

});