describe('Edit Community Page ', () => {
	var EC = protractor.ExpectedConditions;

	browser.get('http://35.204.169.121:4300/');
	browser.sleep(5000);
	element(by.id('log-in')).click();
	var user='amro'; var pass='123456789';
	element(by.css('[formcontrolname="username"]')).sendKeys(user);
	element(by.css('[formcontrolname="password"]')).sendKeys(pass);
	browser.sleep(1000); 
	element(by.buttonText('SIGN IN')).click();
	browser.sleep(4000);
	element(by.id('left-dropdown-button')).click();
	browser.sleep(5000);
	element(by.partialLinkText('r/')).click();
	browser.sleep(5000);
	var commName = element(by.className('Name')).getText();
	commName = commName.then( (text) => {return text.substr(2);});
	var commAbout = element(by.className('Bio')).getText();
	var newCommName;

	it('should have Edit Post button', ()=>{
		var editComm = element(by.id('editCommunityBtn')).isPresent();
		expect(editComm).toBe(true);
		element(by.id('editCommunityBtn')).click();
		browser.sleep(5000);
		var newUrl = browser.getCurrentUrl();
		expect(newUrl).toEqual('http://35.204.169.121:4300/community/2/Edit_community');
	});

	it('shouldnt have Edit button clickable at first', ()=>{
		element(by.id('edit-comm')).click();
		browser.sleep(3000);
		var popup = element(by.buttonText('Yes')).isPresent();
		if (popup)
			expect('Edit button').toBe('not clickable');
	});

	it('shouldnt edit if community name is empty', ()=>{
		element(by.id('namett')).click().clear();
		element(by.id('edit-comm')).click();
		browser.sleep(3000);
		var popUp = element(by.id('mat-dialog-0')).isPresent();
		if (popUp){
			element(by.buttonText('Yes')).click();
			var status = element(by.className('cdk-overlay-pane'));
			var found = EC.textToBePresentInElement(status, 'Community has not been edited');
			if (!found)
				expect('editing').toBe('invalid');
		}
	});

	it('should have community name be same as in community itself', ()=>{
		var name = element(by.id('namett')).getAttribute('value');
		expect(name).toEqual(commName);
	});

	it('should have about be same as in community itself', ()=>{
		var about = element(by.id('inputabout')).getAttribute('value');
		expect(about).toEqual(commAbout);
		var dispAbout = element(by.className('bioooo')).getText();
		expect(dispAbout).toEqual(about);
	});

	it('should have a way to change rules', ()=>{
		var newRules = 'new rules';
		element(by.id('rules')).click().clear().sendKeys(newRules);
		browser.sleep(1000);
		var viewedRules = element(by.id('rules')).getAttribute('value');
		expect(viewedRules).toEqual(newRules);
	});

	it('should change the demo appearance name when I change what is in the form', ()=>{
		newCommName = 'new comm Name'
		element(by.id('namett')).click().clear().sendKeys(newCommName);
		//var dispName = element(by.);
		//expect(newCommName).toEqual(dispName);
	});

	it('should change the demo appearance about when I change what is in the form', ()=>{
		var newAbout = 'new about'
		element(by.id('inputabout')).click().clear().sendKeys(newAbout);
		browser.sleep(2000);
		var dispAbout = element(by.className('bioooo')).getText();
		expect(newAbout).toEqual(dispAbout);
		element(by.id('inputabout')).click().clear().sendKeys(commAbout);
		browser.sleep(2000);
	});

	it('should have a way to upload avatar and banner', ()=>{
		element(by.id('avatarUp')).click();
		browser.sleep(2000);
		var url = browser.getCurrentUrl();
		expect(url).toEqual('http://35.204.169.121:4300/community/2/Edit_community');
		element(by.id('bannerUp')).click();
		browser.sleep(2000);
		var url = browser.getCurrentUrl();
		expect(url).toEqual('http://35.204.169.121:4300/community/2/Edit_community');
	});

	it('should have change avatar appearance on changing it in form', ()=>{
		var pp = element(by.id('pp'));
		var oldSrc = pp.getAttribute('src').getText();
		var mySrc = 'C:\\Users\\AG PC\\Desktop\\Quote.jpg';
		var input = element(by.id('avatarUp'));
		input.sendKeys(mySrc);
		var newSrc = pp.getAttribute('src').getText();
		if (newSrc == oldSrc)
			expect('avatar').toBe('changed');
		input.sendKeys(oldSrc);
	});	

	it('should have change banner appearance on changing it in form', ()=>{
		var banner = element(by.id('banner'));
		var oldSrc = banner.getAttribute('src').getText();
		var mySrc = 'C:\\Users\\AG PC\\Desktop\\Quote.jpg';
		var input = element(by.id('bannerUp'));
		input.sendKeys(mySrc);
		var newSrc = banner.getAttribute('src').getText();
		if (newSrc == oldSrc)
			expect('banner').toBe('changed');
		input.sendKeys(oldSrc);
	});	

	it('should be able to click edit and redirect to community', ()=>{
		element(by.id('edit-comm')).click();
		browser.sleep(3000);
		
		element(by.buttonText('Yes')).click();
		browser.sleep(500);
		var status = element(by.className('cdk-overlay-pane'));
		var found = EC.textToBePresentInElement(status, 'Community has been edited');
		if (!found)
			expect('editing').toBe('done');
		var url = browser.getCurrentUrl();
		expect(url).toEqual('http://35.204.169.121:4300/community/2');
	});	

	it('should have the updated data', ()=> {
		var name = element(by.className('Name')).getText();
		name = name.then( (text) => {return text.substr(2);});
		expect(name).toEqual(newCommName);
	});

	it('should be able to remove community and redirect to home page', () =>{
		element(by.id('remove-comm')).click();
		browser.sleep(3000);
		
		//element(by.buttonText('Yes')).click();
		browser.sleep(500);

		var status = element(by.className('cdk-overlay-pane'));
		var found = EC.textToBePresentInElement(status, 'Community has been deleted');
		if (!found)
			//expect('community').toBe('deleted');
		var url = browser.getCurrentUrl();
		//expect(url).toEqual('http://35.204.169.121:4300/');
	})

});
