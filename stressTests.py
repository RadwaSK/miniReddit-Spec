from lust import Httplust, TaskSet

#needed heards
headers3 = {"Accept": "application/json","Authorization": "Bearer: {token}","Content-Type":"application/json"}
headers1 = {"Content-Type":"application/json"}
headers2 = {"Accept": "application/json","Authorization": "Bearer: {token}"}

#sign requests
def signUp(l):
    l.client.post("/api/unauth/signUp", headers=headers1, {"username":"ASDXR","password":"pass","password_confirmation":"pass","email":"email@email.com"})

def signOut(l):
	l.client.post('/api/auth/signOut', headers=headers2 {})

def signIn(l):
	l.client.post('/api/auth/signOut', headers=headers1 {"username":"ASDXR", "password":"pass"})

#communities reuests
def createCommunity(l):
	l.client.post('/api/auth/createCommunity', headers=headers3, {'community_name': 'comm name'})

def editCommunity(l):
	l.client.patch('/api/auth/editCommunity', headers=headers3, {'community_name': 'comm name', 'rules_content': 'this is a content',
		'des_content': 'another content', 'banner': 'A BANNER', 'logo': 'this is a logo'})

def deleteCommunity(l):
	l.client.post('/api/auth/removeCommunity', headers=headers3, {'community_id': 1})

def addModerator(l):
	l.client.post('/api/auth/addModerator', headers=headers3, {'community_id': 1, 'moderator_username':'Moderator'})

def removeModerator(l):
	l.client.post('/api/auth/removeModerator', headers=headers3, {'community_id':1, 'moderator_username':'Moderator'})

def subscribeCommunity(l):
	l.client.post('/api/auth/subscribeCommunity', headers=headers3, {'community_id': 1})

def unSubscribeCommunity(l):
	l.client.post('/api/auth/unSubscribeCommunity', headers=headers3, {'community_id': 1})

def viewUserCommunities(l):
	l.client.get('/api/unauth/viewUserCommunities', headers=headers1, {'username': 'ASDXR'})

def communityInformation(l):
	l.client.get('/api/unauth/communityInformation', headers=headers1, {'community_id': 1})

#Interactive requests
def saveLink(l):
	l.client.post('/api/auth/saveLink', headers=headers3, {'link_id': 1})

def unSaveLink(l):	#THIS END POINT IS YET TO BE CHANGED IN API DOC!!
	l.client.post('/api/auth/unsaveLink', headers=headers3, {'link_id': 1})

def addLink(l):
	l.client.post('/api/auth/addLink', headers=headers3, {'post_content': 'this is post content', 'parent_link_id': 1,
	'post_title': 'POST TITLE', 'community_id': 1, 'image_path':'image/path.png', 'video_url':'video/path.mp4'})

def pinPost(l):
	l.client.patch('/api/auth/pinPost', headers=headers3, {'post_id': 1})

def removeLink(l):
	l.client.post('/api/auth/removeLink', headers=headers3, {'link_id': 1})

def hidePost(l):
	l.client.post('/api/auth/hidePost', headers=headers3, {'post_id': 1})

def unhidePost(l):
	l.client.post('/api/auth/unhidePost', headers=headers3, {'post_id': 1})

def editPost(l):
	l.client.pacth('/api/auth/editPost', headers=headers3, {'post_id': 1, 'new_title': 'New Post Title',
		'new_content': 'New content', 'new_image':'image/path/new.png'})

def editComment(l):
	l.client.pacth('/api/auth/editComment', headers=headers3, {'comment_id': 1, 'new_content': 'new content'})

def upvoteLink(l):
	l.client.post('/api/auth/upvoteLink', headers=headers3, {'link_id': 1})

def downvoteLink(l):
	l.client.post('/api/auth/downvoteLink', headers=headers3, {'link_id': 1})

def viewUpOrDownvotedPosts(l):
	l.client.get('/api/auth/viewUpOrDownvotedPosts', headers=headers3, {'type': 1})

def viewOverview(l):
	l.client.get('/api/auth/viewOverview', headers=headers3, {'username': 'ASDXR'})

def viewSavedLinks(l):
	l.client.get('/api/auth/viewSavedLinks', headers=headers2, {})

def giveReward(l):
	l.client.post('/api/auth/giveReward', headers=headers3, {'username': 'ASDXR'})

def uploadImage(l):
	l.client.post('/api/auth/uploadImage', headers=headers3, {'uploaded_image': 'a file'})

def ViewPosts(l):
	l.client.get('/api/unauth/ViewPosts', headers=headers1, {'page_type': 1, 'username': 'ASDXR', 'community_id': 1})

def viewComments(l):
	l.client.get('/api/unauth/viewComments', headers=headers1, {'username': 'ASDXR'})

def viewCommentsReplies(l):
	l.client.get('/api/unauth/viewCommentsReplies', headers=headers1, {'link_id': 1})

def viewSinglePost(l):
	l.client.get('/api/unauth/viewSinglePost', headers=headers1, {'post_id': 1})

#Abdelrahman's part

def deleteacc(l):
    l.client.post("/api/auth/delete/account", headers=headers3,{"password":"Gyc3OG9bxQWxUgDw"})

def updateDisplayName(l):
    l.client.patch("/api/auth/updateDisplayName",headers=headers3,{"name":"AR2tyzpiwn8eiz3e"})

def updateAbout(l):
    l.client.patch("/api/auth/pdateAbout",headers=headers3,{"about":"kvQwJ1LWb29MsKrE"})

def updateProfileImage(l):
    l.client.post("/api/auth/updateProfileImage",headers=headers3, {"profile_image":"V0ob5EHSVKOWsCIf"})

def resetPassword(l):
    l.client.post("/api/unauth/resetPassword",headers=headers1, {"new_password":"RGnbPynnIml9yH4E","confirm_new_password":"zv4vBECFcFniu6Qm"})

def forgetPassword(l):
    l.client.post("/api/unauth/forgetPassword",headers=headers1, {"email":"nnAMMCaANYSq3iN2"})

def changepass(l):
    l.client.patch("/api/auth/change/password",headers=headers3,{"password":"578TE6nVVUgn2aR1","new_password":"z37cePBon8jgaAWI","confirm_new_password":"ZARuvSj7BnT68dqg"})

def viewmess(l):
	l.client.get("/api/auth/viewUserMessage",headers=headers3,{"message_id":7})

def followers(l):
	l.client.get("/api/auth/followers",headers=headers3,{"username":"rpdbhcCJU9FwASo9"})

def following(l):
	l.client.get("/api/auth/following",headers=headers3,{"username":"rpdbhcCJU9FwASo9"})

def follow(l):
	l.client.post("/api/auth/follow",headers=headers3,{"username":"rpdbhcCJU9FwASo9"})

def unfollow(l):
	l.client.post("/api/auth/unfollow",headers=headers3,{"username":"rpdbhcCJU9FwASo9"})

def viewmess(l):
	l.client.get("/api/auth/viewUserMessage",headers=headers3,{"message_id":7})

def viewUserSentMessages(l):
	l.client.get("/api/auth/viewUserSentMessages",headers=headers2,{})

def viewUserInboxMessages(l):
	l.client.get("/api/auth/viewUserInboxMessages",headers=headers3,{"state":18})

def sendMessage(l):
	l.client.post("/api/auth/sendMessage",headers=headers3,{"rec_username":"JxyO4x36Za0TXti4","msg_content":"ggKAUMW3FDLFvwc6"})

def notification_check(l):
	l.client.get("/api/auth/notification/check",headers=headers2,{})

def notification_push(l):
	l.client.get("/api/auth/notification/push",headers=headers2,{})

def blockedUsers(l):
	l.client.get("/api/auth/blockedUsers",headers=headers2,{})

def blockUser(l):
	l.client.post("/api/auth/blockUser",headers=headers3,{"username":"UqU3rejVS5MaGfaG"})

def unblockUser(l):
	l.client.post("/api/auth/unblockUser",headers=headers3,{"username":"UqU3rejVS5MaGfaG"})

def search(l):
	l.client.get("api/unauth/search",headers=headers1,{"search_content":"john"})

def viewPrivateUserInfo(l):
	l.client.get("api/auth/viewPrivateUserInfo",headers=headers2,{})

def getUsername(l):
	l.client.get("api/auth/getUsername",headers=headers2,{})

def viewPublicUserInfo(l):
	l.client.get("api/unauth/viewPublicUserInfo",headers=headers1,{"username":"L2wY3EuWoaWo3Ja8"})


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

class WebsiteUser(Httplust):
	task_set = tasksManager
	
	min_wait = 3000
	max_wait = 5000
	host = 'http://lalhost:8081'