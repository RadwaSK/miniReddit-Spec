describe('Edit Community Page ', () => {
	browser.get('http://35.204.169.121/Reddit/');
	browser.sleep(5000);
	element(by.id('onesignal-popover-allow-button')).click();
	browser.sleep(2000);
	element(by.id('log-in')).click();
	var user='amro'; var pass='123456789';
	element(by.css('[formcontrolname="username"]')).sendKeys(user);
	element(by.css('[formcontrolname="password"]')).sendKeys(pass);
	browser.sleep(1000); 
	element(by.buttonText('SIGN IN')).click();
	browser.sleep(4000);
	element(by.id('left-dropdown')).click();
	browser.sleep(5000);
	element(by.partialLinkText('r/')).click();
	browser.sleep(5000);

	it('should have Edit Post button', ()=>{
		
	});

	it('shouldnt have Edit button clickable at first', ()=>{

	});

	it('should have community name be same as in community itself', ()=>{

	});

	it('should have about be same as in community itself', ()=>{

	});

	it('should change the demo appearance name when I change what is in the form', ()=>{

	});

	it('should change the demo appearance about when I change what is in the form', ()=>{

	});

	it('should have a way to upload avatar and banner', ()=>{

	});

	it('should have change avatar appearance on changing it in form', ()=>{

	});	

	it('should have change banner appearance on changing it in form', ()=>{

	});	

	it('should have change avatar appearance on changing it in form', ()=>{

	});

	it('should be able to click edit and redirect to community', ()=>{

	});	

	it('should have the updated data', ()=> {

	});

	it('should be able to remove community and redirect to home page', () =>{

	})

});
