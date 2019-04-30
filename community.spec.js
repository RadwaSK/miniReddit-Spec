describe('Community', () => {
	beforeEach( () => {
		browser.get('http://35.204.169.121/Reddit/community/1');
	});

	it('should be able to return to homepage', () => {
		element(by.id('logo')).click();
    	expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/');
	});

	it('should subscribe', () => {
		var button = element(by.id('mat-button-toggle-0-button'))
		expect(button.getText()).toEqual('SUBSCRIBE');
		element(by.id('mat-button-toggle-0-button')).click();
		expect(button.getText()).toEqual('SUBSCRIBED');
	});

	it('should have create post button', ()=>{
		element(by.className('btn btn-primary btn-lg CreatePost')).click();
		expect(element(by.className('btn btn-primary btn-lg CreatePost')).getText()).toEqual('CREATE POST');
	});

	it('should redirect to Edit Community on clicking its button', ()=>{
		element(by.buttonText('EDIT COMMUNITY')).click();
		browser.sleep(2000);
		expect(browser.getCurrentUrl()).toBe('http://35.204.169.121/Reddit/community/community/Edit_community');
	});
	

});