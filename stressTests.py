from locust import HttpLocust, TaskSet

#needed heards
headers3 = json={"Accept": "application/json","Authorization": "Bearer: {token}","Content-Type":"application/json"}
headers1 = json={"Content-Type":"application/json"}
headers2 = json={"Accept": "application/json","Authorization": "Bearer: {token}"}

#sign requests
def signUp(l):
    l.client.post("api/unauth/signUp", json={"username":"ASDXR","password":"pass","password_confirmation":"pass","email":"email@email.com"})

def signOut(l):
	l.client.post('api/auth/signOut',  {})

def signIn(l):
	l.client.post('api/auth/signOut', json={"username":"ASDXR", "password":"pass"})

#communities reuests
def createCommunity(l):
	l.client.post('api/auth/createCommunity', json={'community_name': 'comm name'})

def editCommunity(l):
	l.client.patch('api/auth/editCommunity', json={'community_name': 'comm name', 'rules_content': 'this is a content',
		'des_content': 'another content', 'banner': 'A BANNER', 'logo': 'this is a logo'})

def deleteCommunity(l):
	l.client.post('api/auth/removeCommunity', json={'community_id': 1})

def addModerator(l):
	l.client.post('api/auth/addModerator', json={'community_id': 1, 'moderator_username':'Moderator'})

def removeModerator(l):
	l.client.post('api/auth/removeModerator', json={'community_id':1, 'moderator_username':'Moderator'})

def subscribeCommunity(l):
	l.client.post('api/auth/subscribeCommunity', json={'community_id': 1})

def unSubscribeCommunity(l):
	l.client.post('api/auth/unSubscribeCommunity', json={'community_id': 1})

def viewUserCommunities(l):
	l.client.get('api/unauth/viewUserCommunities', json={'username': 'ASDXR'})

def communityInformation(l):
	l.client.get('api/unauth/communityInformation', json={'community_id': 1})

#Interactive requests
def saveLink(l):
	l.client.post('api/auth/saveLink', json={'link_id': 1})

def unSaveLink(l):	#THIS END POINT IS YET TO BE CHANGED IN API DOC!!
	l.client.post('api/auth/unsaveLink', json={'link_id': 1})

def addLink(l):
	l.client.post('api/auth/addLink', json={'post_content': 'this is post content', 'parent_link_id': 1,
	'post_title': 'POST TITLE', 'community_id': 1, 'image_path':'image/path.png', 'video_url':'video/path.mp4'})

def pinPost(l):
	l.client.patch('api/auth/pinPost', json={'post_id': 1})

def removeLink(l):
	l.client.post('api/auth/removeLink', json={'link_id': 1})

def hidePost(l):
	l.client.post('api/auth/hidePost', json={'post_id': 1})

def unhidePost(l):
	l.client.post('api/auth/unhidePost', json={'post_id': 1})

def editPost(l):
	l.client.pacth('api/auth/editPost', json={'post_id': 1, 'new_title': 'New Post Title',
		'new_content': 'New content', 'new_image':'image/path/new.png'})

def editComment(l):
	l.client.pacth('api/auth/editComment', json={'comment_id': 1, 'new_content': 'new content'})

def upvoteLink(l):
	l.client.post('api/auth/upvoteLink', json={'link_id': 1})

def downvoteLink(l):
	l.client.post('api/auth/downvoteLink', json={'link_id': 1})

def viewUpOrDownvotedPosts(l):
	l.client.get('api/auth/viewUpOrDownvotedPosts', json={'type': 1})

def viewOverview(l):
	l.client.get('api/auth/viewOverview', json={'username': 'ASDXR'})

def viewSavedLinks(l):
	l.client.get('api/auth/viewSavedLinks',  {})

def giveReward(l):
	l.client.post('api/auth/giveReward', json={'username': 'ASDXR'})

def uploadImage(l):
	l.client.post('api/auth/uploadImage', json={'uploaded_image': 'a file'})

def ViewPosts(l):
	l.client.get('api/unauth/ViewPosts', json={'page_type': 1, 'username': 'ASDXR', 'community_id': 1})

def viewComments(l):
	l.client.get('api/unauth/viewComments', json={'username': 'ASDXR'})

def viewCommentsReplies(l):
	l.client.get('api/unauth/viewCommentsReplies', json={'link_id': 1})

def viewSinglePost(l):
	l.client.get('api/unauth/viewSinglePost', json={'post_id': 1})

#Abdelrahman's part

def deleteacc(l):
    l.client.post("api/auth/delete/account", json={"password":"Gyc3OG9bxQWxUgDw"})

def updateDisplayName(l):
    l.client.patch("api/auth/updateDisplayName", json={"name":"AR2tyzpiwn8eiz3e"})

def updateAbout(l):
    l.client.patch("api/auth/pdateAbout", json={"about":"kvQwJ1LWb29MsKrE"})

def updateProfileImage(l):
    l.client.post("api/auth/updateProfileImage", json={"profile_image":"V0ob5EHSVKOWsCIf"})

def resetPassword(l):
    l.client.post("api/unauth/resetPassword", json={"new_password":"RGnbPynnIml9yH4E","confirm_new_password":"zv4vBECFcFniu6Qm"})

def forgetPassword(l):
    l.client.post("api/unauth/forgetPassword", json={"email":"nnAMMCaANYSq3iN2"})

def changepass(l):
    l.client.patch("api/auth/change/password",json={"password":"578TE6nVVUgn2aR1","new_password":"z37cePBon8jgaAWI","confirm_new_password":"ZARuvSj7BnT68dqg"})

def viewmess(l):
	l.client.get("api/auth/viewUserMessage", json={"message_id":7})

def followers(l):
	l.client.get("api/auth/followers", json={"username":"rpdbhcCJU9FwASo9"})

def following(l):
	l.client.get("api/auth/following",json={"username":"rpdbhcCJU9FwASo9"})

def follow(l):
	l.client.post("api/auth/follow", json={"username":"rpdbhcCJU9FwASo9"})

def unfollow(l):
	l.client.post("api/auth/unfollow", json={"username":"rpdbhcCJU9FwASo9"})

def viewmess(l):
	l.client.get("api/auth/viewUserMessage", json={"message_id":7})

def viewUserSentMessages(l):
	l.client.get("api/auth/viewUserSentMessages")

def viewUserInboxMessages(l):
	l.client.get("api/auth/viewUserInboxMessages", json={"state":18})

def sendMessage(l):
	l.client.post("api/auth/sendMessage", json={"rec_username":"JxyO4x36Za0TXti4","msg_content":"ggKAUMW3FDLFvwc6"})

def notification_check(l):
	l.client.get("api/auth/notification/check")

def notification_push(l):
	l.client.get("api/auth/notification/push")

def blockedUsers(l):
	l.client.get("api/auth/blockedUsers")

def blockUser(l):
	l.client.post("api/auth/blockUser",json={"username":"UqU3rejVS5MaGfaG"})

def unblockUser(l):
	l.client.post("api/auth/unblockUser",json={"username":"UqU3rejVS5MaGfaG"})

def search(l):
	l.client.get("api/unauth/search",json={"search_content":"john"})

def viewPrivateUserInfo(l):
	l.client.get("api/auth/viewPrivateUserInfo")

def getUsername(l):
	l.client.get("api/auth/getUsername")

def viewPublicUserInfo(l):
	l.client.get("api/unauth/viewPublicUserInfo",json={"username":"L2wY3EuWoaWo3Ja8"})


#CLASSES
class tasksManager(TaskSet):
	tasks = {createCommunity: 1, editCommunity: 2, deleteCommunity: 3, addModerator: 4, removeModerator: 5,
	subscribeCommunity: 6, unSubscribeCommunity: 7, viewUserCommunities: 8, communityInformation: 9,
	addLink: 10, saveLink: 11, unSaveLink: 12, pinPost: 13, hidePost: 14, unhidePost: 15,
	editPost: 16, editComment: 17, upvoteLink: 18, downvoteLink: 19, viewUpOrDownvotedPosts: 20,
	viewOverview: 21, viewSavedLinks: 22, giveReward: 23, uploadImage: 24, ViewPosts: 25,
	viewComments: 26, viewCommentsReplies: 27, viewSinglePost: 28, removeLink: 29}

	def on_start(self):
		signUp(self)
		signIn(self)

	def on_stop(self):
		signOut(self)

class WebsiteUser(HttpLocust):
	task_set = tasksManager
	
	min_wait = 3000
	max_wait = 5000
	host = 'http://35.204.169.121/'