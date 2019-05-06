describe('Community Page ', () => {
	
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

	//first I'll run tests when I'm not logged in
	it('should open the community without logging in', () => {
		browser.get('http://35.204.169.121:4300/community/2');
		browser.sleep(6000);
		var toolbarExistance = element(by.id('left-dropdown-button')).isPresent();
		expect(toolbarExistance).toBe(true);
	});

	it('should open sign-up pop-up if I try to subscribe or create post', ()=>{
		var createPost = element(by.id('CreatePost'));
		createPost.click();
		browser.sleep(4000);
		var signUp = element(by.buttonText('Next')).isPresent();
		expect(signUp).toBe(true);
		var subscribe = element(by.buttonText('SUBSCRIBE'));
		subscribe.click();
		browser.sleep(2000);
		signUp = element(by.buttonText('Next')).isPresent();
		expect(signUp).toBe(true);
	});

	var commNameInList;
	var commName;
	var userName;
	var isModerator;
	var subscribers;

	//second tests after logging in
	//I'll start at home page, log in to an account and open a community
	it('should do nothing here', ()=> {
		browser.get('http://35.204.169.121:4300/');
		browser.sleep(5000);
		//element(by.id('onesignal-popover-cancel-button')).click();
		//browser.sleep(2000);
		element(by.id('log-in')).click();
		browser.sleep(2000);
		var user='amro'; var pass='123456789';
		element(by.css('[formcontrolname="username"]')).sendKeys(user);
		element(by.css('[formcontrolname="password"]')).sendKeys(pass);
		element(by.id('signin')).click();
		browser.sleep(4000);
		element(by.id('left-dropdown-button')).click();
		browser.sleep(5000);

		commNameInList = element(by.partialLinkText('r/')).getText();
		browser.sleep(2000);
		commNameInList = commNameInList.then( (text) => {return text.substr(2);});
		element(by.partialLinkText('r/')).click();
		browser.sleep(5000);
		commName = element(by.className('Name')).getText();
		commName = commName.then( (text) => {return text.substr(2);});
		userName = element(by.id('UserName')).getText();
		browser.sleep(5000);
		expect(1).toEqual(1);
	});
	
	it('should have title of community as r/community name', () => {
		var commName2 = element(by.className('Namei')).getText();
		expect(commName2).toContain('r/');
	});

	it('should have similar community name in droplist, header and info', ()=>{
		var commName2 = element(by.className('Namei')).getText();
		browser.sleep(4000);
		commName2 = commName2.then( (text) => {return text.substr(3);});
		expect(commName2).toEqual(commName);
		expect(commName2).toEqual(commNameInList);
	})

	it('should have name of community in toolbar not Popular', ()=>{
		var dropdownName = element(by.id('dropdown-left-name')).getText();
		commName2 = commName2.then( (text) => {return text.substr(2);});
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
		element(by.className('viewMod')).click();
		browser.sleep(4000);
		var modUrl = browser.getCurrentUrl();
		
		var userMod = element(by.partialLinkText('u/' + userName)).isPresent();
		if (userMod)
			isModerator = true;
		else
			isModerator = false;
		browser.sleep(500);

		expect(modUrl).toEqual('http://35.204.169.121:4300/community/2/Moderators');
		browser.navigate().back();
		browser.sleep(3000);
	});

	it('should have an about', () => {
		var about = element(by.className('Bio')).isPresent();
		expect(about).toBe(true);
	});

	it('should have non-negative number of subscribers', ()=>{
		var subscribersText = element(by.className('subscribersCnt')).getText();
		subscribers = toNumber(subscribersText);
		if (subscribers < 0)
			expect(subscribers).toBe('non-negative number');
	});

	it('should have non-negative number of online subscribers', ()=>{
		var online = element(by.className('OnlineCnt')).getText();
		var onlineNum = toNumber(online);
		if (onlineNum < 0)
			expect(onlineNum).toEqual('non-negative number');
	});

	it('should be able to unsubscribe', ()=>{
		var button = element(by.buttonText("SUBSCRIBED")).isPresent();
		expect(button).toBe(true);
		element(by.buttonText("SUBSCRIBED")).click();
		browser.sleep(3000);
		button = element(by.buttonText("SUBSCRIBE")).isPresent();
		expect(button).toBe(true);
		var newSubscribersText = element(by.className('subscribersCnt')).getText();
		var newSubscribers = toNumber(newSubscribersText);
		browser.refresh();
		browser.sleep(4000);
		subscribers = subscribers.then( (num) => { return num-1; });
		expect(newSubscribers).toEqual(subscribers);
	});

	it('should be able to subscribe', ()=>{
		var button = element(by.buttonText("SUBSCRIBE")).isPresent();
		expect(button).toBe(true);
		element(by.buttonText("SUBSCRIBE")).click();
		browser.sleep(3000);
		button = element(by.buttonText("SUBSCRIBED")).isPresent();
		expect(button).toBe(true);
		var newSubscribersText = element(by.className('subscribersCnt')).getText();
		newSubscribers = toNumber(newSubscribersText);
		browser.refresh();
		browser.sleep(4000);
		subscribers = subscribers.then( (num) => { return num+1; });
		expect(newSubscribers).toEqual(subscribers);
	});

	it('should be able to create post', ()=>{
		var button = element(by.id("CreatePost")).isPresent();
		expect(button).toBe(true);
		element(by.id("CreatePost")).click();
		browser.sleep(1000);
		var newUrl = browser.getCurrentUrl();
		if (newUrl == 'http://35.204.169.121:4300/community/2')
			expect('url').toBe('changed');
		else
			browser.navigate().back();	
		browser.sleep(3000);
	});

	it('should see Edit Community button only if this account is in moderators list', ()=>{
		if (isModerator){
			var editComm = element(by.id('editCommunityBtn')).isPresent();
			expect(editComm).toBe(true);
			element(by.id('editCommunityBtn')).click();
			browser.sleep(3000);
			var newUrl = browser.getCurrentUrl();
			expect(newUrl).toEqual('http://35.204.169.121:4300/community/2/Edit_community');
		}
		else{
			var editComm = element(by.id('editCommunityBtn')).isPresent();
			expect(editComm).toBe(false);
		}
	});

	it('should be able to sort posts', ()=>{
		var sorter = element(by.buttonText('Sort')).isPresent();
		expect(sorter).toBe(true);
	});

	it('should be able to log-out and remain on same page', ()=>{
		element(by.id('right-dropdown')).click();
		browser.sleep(2000);
		element(by.partialLinkText('Log Out')).click();
		browser.sleep(2000);
		var newUrl = browser.getCurrentUrl();
		expect(newUrl).toEqual('http://35.204.169.121:4300/community/2');
	});

});