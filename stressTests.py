from lust import Httplust, TaskSet

def signUp(l):
    l.client.post("/api/unauth/signUp", {"username":"ASDXR","password":"pass","password_confirmation":"pass","email":"email@email.com"})

def signOut(l):
	l.client.post('/api/auth/signOut', {})

#communities reuests
def createCommunity(l):
	l.client.post('/api/auth/createCommunity', {'community_name': 'comm name'})

def editCommunity(l):
	l.client.patch('/api/auth/editCommunity', {'community_name': 'comm name', 'rules_content': 'this is a content',
		'des_content': 'another content', 'banner': 'A BANNER', 'logo': 'this is a logo'})

def deleteCommunity(l):
	l.client.post('/api/auth/removeCommunity', {'community_id': 1})

def addModerator(l):
	l.client.post('/api/auth/addModerator', {'community_id': 1, 'moderator_username':'Moderator'})

def removeModerator(l):
	l.client.post('/api/auth/removeModerator', {'community_id':1, 'moderator_username':'Moderator'})

def subscribeCommunity(l):
	l.client.post('/api/auth/subscribeCommunity', {'community_id': 1})

def unSubscribeCommunity(l):
	l.client.post('/api/auth/unSubscribeCommunity', {'community_id': 1})

def viewUserCommunities(l):
	l.client.get('/api/unauth/viewUserCommunities', {'username': 'ASDXR'})

def communityInformation(l):
	l.client.get('/api/unauth/communityInformation', {'community_id': 1})

#Interactive requests
def saveLink(l):
	l.client.post('/api/auth/saveLink', {'link_id': 1})

def unSaveLink(l):	#THIS END POINT IS YET TO BE CHANGED IN API DOC!!
	l.client.post('/api/auth/unsaveLink', {'link_id': 1})

def addLink(l):
	l.client.post('/api/auth/addLink', {'post_content': 'this is post content', 'parent_link_id': 1,
	'post_title': 'POST TITLE', 'community_id': 1, 'image_path':'image/path.png', 'video_url':'video/path.mp4'})

def pinPost(l):
	l.client.patch('/api/auth/pinPost', {'post_id': 1})

def removeLink(l):
	l.client.post('/api/auth/removeLink', {'link_id': 1})

def hidePost(l):
	l.client.post('/api/auth/hidePost', {'post_id': 1})

def unhidePost(l):
	l.client.post('/api/auth/unhidePost', {'post_id': 1})

def editPost(l):
	l.client.pacth('/api/auth/editPost', {'post_id': 1, 'new_title': 'New Post Title',
		'new_content': 'New content', 'new_image':'image/path/new.png'})

def editComment(l):
	l.client.pacth('/api/auth/editComment', {'comment_id': 1, 'new_content': 'new content'})

def upvoteLink(l):
	l.client.post('/api/auth/upvoteLink', {'link_id': 1})

def downvoteLink(l):
	l.client.post('/api/auth/downvoteLink', {'link_id': 1})

def viewUpOrDownvotedPosts(l):
	l.client.get('/api/auth/viewUpOrDownvotedPosts', {'type': 1})

def viewOverview(l):
	l.client.get('/api/auth/viewOverview', {'username': 'ASDXR'})

def viewSavedLinks(l):
	l.client.get('/api/auth/viewSavedLinks', {})

def giveReward(l):
	l.client.post('/api/auth/giveReward', {'username': 'ASDXR'})

def uploadImage(l):
	l.client.post('/api/auth/uploadImage', {'uploaded_image': 'a file'})

def ViewPosts(l):
	l.client.get('/api/unauth/ViewPosts', {'page_type': 1, 'username': 'ASDXR', 'community_id': 1})

def viewComments(l):
	l.client.get('/api/unauth/viewComments', {'username': 'ASDXR'})

def viewCommentsReplies(l):
	l.client.get('/api/unauth/viewCommentsReplies', {'link_id': 1})

def viewSinglePost(l):
	l.client.get('/api/unauth/viewSinglePost', {'post_id': 1})

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

	def on_stop(self):
		signOut(self)

class WebsiteUser(Httplust):
	#default name, points to TaskSet class
	task_set = tasksManager
	#default names .. this time is in milliseconds
	#this wait time is to be waited between executing TaskSets tasks
	#Actual time waited is randomly between min & max
	min_wait = 3000
	max_wait = 5000
	host = 'http://lalhost:8081'