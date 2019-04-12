from lust import Httplust, TaskSet

def signIn(l):
	l.client.post('/api/unauth/signIn', {'username':'MISSING STRING', 'password':'MISSING STRING'})

def signOut(l):
	l.client.post('/api/auth/signOut', {})

#communities reuests
def createCommunity(l):
	l.client.post('/api/auth/createCommunity', {'community_name': 'MISSING STRING'})

def editCommunity(l):
	l.client.patch('/api/auth/editCommunity', {'community_name': 'MISSING STRING', 'rules_content': 'MISSING STRING',
		'des_content': 'MISSING STRING', 'banner': 'MISSING STRING', 'logo': 'MISSING STRING'})

def deleteCommunity(l):
	l.client.post('/api/auth/removeCommunity', {'community_id': 'MISSING INT'})

def addModerator(l):
	l.client.post('/api/auth/addModerator', {'community_id': 'MISSING INT', 'moderator_username':'MISSING STRING'})

def removeModerator(l):		#WHY DO YOU SEND MODER. NAME IN REQUEST?!!
	l.client.post('/api/auth/removeModerator', {'community_id':'MISSING INT', 'moderator_username':'MISSING STRING'})

def subscribeCommunity(l):
	l.client.post('/api/auth/subscribeCommunity', {'community_id': 'MISSING INT'})

def unSubscribeCommunity(l):
	l.client.post('/api/auth/unSubscribeCommunity', {'community_id': 'MISSING INT'})

def viewUserCommunities(l):
	l.client.get('/api/unauth/viewUserCommunities', {'username': 'MISSING STRING'})

def communityInformation(l):
	l.client.get('/api/unauth/communityInformation', {'community_id': 'MISSING INT'})

#Interactive requests
def saveLink(l):
	l.client.post('/api/auth/saveLink', {'link_id': 'MISSING INT'})

def unSaveLink(l):	#THIS END POINT IS YET TO BE CHANGED IN API DOC!!
	l.client.post('/api/auth/unsaveLink', {'link_id': 'MISSING INT'})

def addLink(l):
	l.client.post('/api/auth/addLink', {'post_content': 'MISSING STRING', 'parent_link_id': 'MISSING INT',
	'post_title': 'MISSING STRING', 'community_id': 'MISSING INT', 'image_path':'MISSING STRING', 'video_url':'MISSING STRING'})

def pinPost(l):
	l.client.patch('/api/auth/pinPost', {'post_id': 'MISSING INT'})

def removeLink(l):
	l.client.post('/api/auth/removeLink', {'link_id': 'MISSING INT'})

def hidePost(l):
	l.client.post('/api/auth/hidePost', {'post_id': 'MISSING INT'})

def unhidePost(l):
	l.client.post('/api/auth/unhidePost', {'post_id': 'MISSING INT'})

def editPost(l):
	l.client.pacth('/api/auth/editPost', {'post_id': 'MISSING INT', 'new_title': 'MISSING STRING',
		'new_content': 'MISSING STRING', 'new_image':'MISSING STRING'})

def editComment(l):
	l.client.pacth('/api/auth/editComment', {'comment_id': 'MISSING INT', 'new_content': 'MISSING STRING'})

def upvoteLink(l):
	l.client.post('/api/auth/upvoteLink', {'link_id': 'MISSING INT'})

def downvoteLink(l):
	l.client.post('/api/auth/downvoteLink', {'link_id': 'MISSING INT'})

def viewUpOrDownvotedPosts(l):
	l.client.get('/api/auth/viewUpOrDownvotedPosts', {'type': 'MISSING INT'})

def viewOverview(l):
	l.client.get('/api/auth/viewOverview', {'username': 'MISSING STRING'})

def viewSavedLinks(l):
	l.client.get('/api/auth/viewSavedLinks', {})

def giveReward(l):
	l.client.post('/api/auth/giveReward', {'username': 'MISSING STRING'})

def uploadImage(l):
	l.client.post('/api/auth/uploadImage', {'uploaded_image': 'MISSING FILE?'})

def ViewPosts(l):
	l.client.get('/api/unauth/ViewPosts', {'page_type': 'MISSING INT', 'username': 'MISSING STRING', 'community_id': 'MISSING INT'})

def viewComments(l):
	l.client.get('/api/unauth/viewComments', {'username': 'MISSING STRING'})

def viewCommentsReplies(l):
	l.client.get('/api/unauth/viewCommentsReplies', {'link_id': 'MISSING INT'})

def viewSinglePost(l):
	l.client.get('/api/unauth/viewSinglePost', {'post_id': 'MISSING INT'})

#CLASSES
class tasksManager(TaskSet):
	tasks = {createCommunity: 1, editCommunity: 2, deleteCommunity: 3, addModerator: 4, removeModerator: 5,
	subscribeCommunity: 6, unSubscribeCommunity: 7, viewUserCommunities: 8, communityInformation: 9,
	addLink: 10, saveLink: 11, unSaveLink: 12, pinPost: 13, hidePost: 14, unhidePost: 15,
	editPost: 16, editComment: 17, upvoteLink: 18, downvoteLink: 19, viewUpOrDownvotedPosts: 20,
	viewOverview: 21, viewSavedLinks: 22, giveReward: 23, uploadImage: 24, ViewPosts: 25,
	viewComments: 26, viewCommentsReplies: 27, viewSinglePost: 28, removeLink: 29}

	def on_start(self):
		signIn(self)

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