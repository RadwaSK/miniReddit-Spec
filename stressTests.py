from locust import HttpLocust, TaskSet
import json, random, string
from random import randint

#random string generator function
def randstr(len):
	all_chars = string.ascii_lowercase
	result = str()
	for i in range(len):
		result += random.choice(all_chars)
	return (result)


#needed headers
headers1 = {"Content-Type": "application/json"}
def headers2(token):
	return {"Accept": "application/json","Authorization": "Bearer " + token}
def headers3(token):
	return {"Accept": "application/json","Authorization": 'Bearer ' + token, "Content-Type":"application/json"}

########################################################################################################################################

#user requests

def signUp(l):
	user = randstr(8)
	password = randstr(10)
	email = user + '@email.com'
	fakeUser = {"username": user, "password": password, "password_confirmation": password, "email": email}
	l.users.append({"username": user, "password": password})
	response = l.client.post("api/v1/unauth/signUp",  headers=headers1, json=fakeUser)
	dataJSON = response.json()
	l.token = dataJSON['token']

def deleteMyAccount(l):
	i = randint(0, len(l.users)-1)
	while l.users[i]['username'] == 'ASDXR':
		i = randint(0, len(l.users)-1)
	user = l.users[i]
	password = user['password']
	l.client.post("api/v1/auth/deleteMyAccount",
    	headers=headers3(l.token),
    	json={"password": password})

#on_start
def signIn(l):
	i = randint(0, len(l.users)-1)
	response = l.client.post('api/v1/unauth/signIn', 
		json=l.users[i],
		headers=headers1)
	dataJSON = response.json()
	l.token = dataJSON['token']

#on_stop
def signOut(l):
	l.client.post('api/v1/auth/signOut',
		headers=headers2(l.token))

########################################################################################################################################
#communities reuests
def createCommunity(l):
	commName = randstr(8)
	commID = max(l.communityIDs)+1
	l.communityIDs.append(commID)
	l.client.post('api/v1/auth/createCommunity',
		headers=headers3(l.token),
		json={'community_name': commName})

def editCommunity(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	randomData = {'community_id': commID, 'rules_content': randstr(10),
		'des_content': randstr(10), 'banner': randstr(5), 'logo': randstr(5)}
	l.client.post('api/v1/auth/editCommunity',
		headers=headers3(l.token),
		json=randomData)

def removeCommunity(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	l.communityIDs.remove(commID)
	l.client.post('api/v1/auth/removeCommunity',
		headers=headers3(l.token),
		json={"community_id": commID})

def addModerator(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	modName = randstr(8)
	l.client.post('api/v1/auth/addModerator',
		headers=headers3(l.token),
		json={'community_id': commID, 'moderator_username':modName})

def removeModerator(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	i = randint(0, len(l.users)-1)
	moderator = users[i]
	modName = moderator['username']
	l.client.post('api/v1/auth/removeModerator',
		headers=headers3(l.token),
		json={'community_id':commID, 'moderator_username':modName})

def viewModerators(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	l.client.get('api/v1/unauth/viewModerators',
		headers=headers1,
		json={'community_id':commID})

def subscribeCommunity(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	l.client.post('api/v1/auth/subscribeCommunity',
		headers=headers3(l.token),
		json={'community_id': commID})

def unSubscribeCommunity(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	l.client.post('api/v1/auth/unSubscribeCommunity',
		headers=headers3(l.token),
		json={'community_id': commID})

def viewUserCommunities(l):
	i = randint(0, len(l.users)-1)
	user = users[i]
	name = moderator['username']
	l.client.get('api/v1/unauth/viewUserCommunities',
		headers=headers1,
		json={'username': name})

def communityInformation(l):
	commID = l.communityIDs[randint(0, len(l.communityIDs)-1)]
	l.client.get('api/v1/unauth/communityInformation',
		headers=headers1,
		json={'community_id': commID})

########################################################################################################################################
#Interactive requests
def saveLink(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	
	l.savedLinks.append(linkID)

	l.client.post('api/v1/auth/saveLink',
		headers=headers3(l.token),
		json={'link_id': link})

def unSaveLink(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	
	l.savedLinks.remove(linkID)
	
	l.client.post('api/v1/auth/unsaveLink',
		headers=headers3(l.token),
		json={'link_id': linkID})

def addLink(l):
	case = randint(0,1)
	if case == 0:
		#post
		postContent = randstr(15)
		postTitle = randstr(10)
		postID = max(l.postsID)+1
		l.postsID.append(postID)
		l.client.post('api/v1/auth/addLink',
			headers=headers3(l.token),
			json={'post_content':postContent, 'post_title': postTitle});

	else:
		commentContent = randstr(10)
		parentID = l.postsID[randint(0, len(l.postsID)-1)]
		l.commentsID.append(max(l.commentsID)+1)
		l.client.post('api/v1/auth/addLink',
			headers=headers3(l.token),
			json={'post_content':commentContent, 'parent_link_id': parentID});


def pinPost(l):
	i = randint(0, len(l.postsID)-1)
	postID = l.postsID[i]
	if postID in l.pinnedPosts:
		l.pinnedPosts.remove(postID)
	else:
		l.pinnedPosts.append(postID)

	l.client.patch('api/v1/auth/pinPost',
		headers=headers3(l.token),
		json={'post_id': postID})

def removeLink(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	l.postsID.remove(linkID)
	l.client.post('api/v1/auth/removeLink',
		headers=headers3(l.token),
		json={'link_id': linkID})
	

def hidePost(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	l.hiddenPosts.append(linkID)
	l.client.post('api/v1/auth/hidePost',
		headers=headers3(l.token),
		json={'post_id': linkID})

def unhidePost(l):
	i = randint(0, len(l.hiddenPosts)-1)
	linkID = l.hiddenPosts[i]
	l.hiddenPosts.remove(linkID)
	l.client.post('api/v1/auth/unhidePost',
		headers=headers3(l.token),
		json={'post_id': linkID})


def editPost(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	fakePost = {"post_id": linkID}
	l.client.patch('api/v1/auth/editPost',
		headers=headers3(l.token),
		json=fakePost)


def editComment(l):
	i = randint(0, len(l.commentsID)-1)
	commentID = l.commentsID[i]
	randContent = randstr(10)
	l.client.patch('api/v1/auth/editComment',
		headers=headers3(l.token),
		json={'comment_id': commentID, 'new_content': randContent})

def upvoteLink(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	l.client.post('api/v1/auth/upvoteLink',
		headers=headers3(l.token),
		json={'link_id': linkID})

def downvoteLink(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	l.client.post('api/v1/auth/downvoteLink',
		headers=headers3(l.token),
		json={'link_id': linkID})

def viewUpOrDownvotedPosts(l):
	boolean = randint(0,1)
	l.client.get('api/v1/auth/viewUpOrDownvotedPosts',
		headers=headers3(l.token),
		json={'type': boolean})

def viewHiddenPosts(l):
	l.client.get('api/v1/auth/viewHiddenPosts',
		headers=headers2(l.token))

def viewOverview(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.client.get('api/v1/auth/viewOverview',
	headers=headers3(l.token),
	json={'username': name})

def viewSavedLinks(l):
	l.client.get('api/v1/auth/viewSavedLinks',
		headers=headers2(l.token))

def giveReward(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.client.post('api/v1/auth/giveReward',
		headers=headers3(l.token),
		json={'username': name})

def uploadImage(l):
	randImage = randstr(5)
	l.client.post('api/v1/auth/uploadImage',
		headers=headers3(l.token),
		json={'uploaded_image': 'a file'})

def ViewPosts(l):
	index = [-1, 1]
	i = randint(0,1)
	pageType = index[i]
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	i = randint(0, len(l.communityIDs)-1)
	commID = l.communityIDs[i]
	l.client.get('api/v1/unauth/ViewPosts',
		headers=headers1,
		json={'page_type': pageType, 'username': name, 'community_id': commID})

def viewComments(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.client.get('api/v1/unauth/viewComments',
		headers=headers1,
		json={'username': name})


def viewCommentsReplies(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	l.client.get('api/v1/unauth/viewCommentsReplies',
		headers=headers1,
		json={'link_id': linkID})

def viewSinglePost(l):
	i = randint(0, len(l.postsID)-1)
	linkID = l.postsID[i]
	l.client.get('api/v1/unauth/viewSinglePost',
	headers=headers1,
	json={'post_id': linkID})

def updateDisplayName(l):
	name = randstr(7)
	l.client.patch("api/v1/auth/updateDisplayName",
    headers=headers3(l.token),
    json={"name":name})

def updateAbout(l):
	about = randstr(10)
	l.client.patch("api/v1/auth/pdateAbout",
    	headers=headers3(l.token),
    	json={"about":"kvQwJ1LWb29MsKrE"})

def updateCoverAndProfileImage(l):
	image = randstr(5)
	i = randint(1, 2)
	l.client.post("api/v1/auth/updateCoverAndProfileImage",
    headers=headers3(l.token),
    json={"profile_image":"image", "profile_or_cover":i})

def forgetPassword(l):
	email = randstr(5) + '@email.com'
	l.client.post("api/v1/unauth/forgetPassword",
    headers=headers1,
    json={"email":email})

def changePass(l):
	i = randint(0, len(l.users)-1)
	oldPass = users[i]['password']
	newPass = randstr(8)
	users[i]['password'] = newPass
	l.client.patch("api/v1/auth/change/password",
    	headers=headers3(l.token),
    	json={"password":oldPass, "new_password": newPass, "confirm_new_password":newPass})

########################################################################################################################################
#messages requests

def sendMessage(l):
	msgID = max(l.messages)+1
	l.messages.append(msgID)
	i = randint(0, len(l.users)-1)
	recUSer = l.users[i]['username']
	randContent = randstr(10)
	l.client.post("api/v1/auth/sendMessage",
	headers=headers3(l.token),
	json={"rec_username":recUser, "msg_content": randContent})

def viewUserMessages(l):
	i = randint(0, len(l.messages)-1)
	msgID = l.messages[i]
	l.client.get("api/v1/auth/viewUserMessage",
	headers=headers3(l.token),
	json={"message_id": msgID})

def viewUserSentMessages(l):
	l.client.get("api/v1/auth/viewUserSentMessages",
		headers=headers2(l.token))

def viewUserInboxMessages(l):
	i = randint(1, 3)
	l.client.get("api/v1/auth/viewUserInboxMessages",
	headers=headers3(l.token),
	json={"state": i})

########################################################################################################################################
#ing requests

def followers(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.client.get("api/v1/auth/followers",
		headers=headers3(l.token),
		json={"username":name})

def following(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.client.get("api/v1/auth/following",
		headers=headers3(l.token),
		json={"username":name})

def follow(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.followedUsersList.append(name)
	l.client.post("api/v1/auth/follow",
		headers=headers3(l.token),
		json={"username":name})

def unfollow(l):
	i = randint(0, len(l.followedUsersList)-1)
	name = l.followedUsersList[i]
	l.followedUsersList.remove(name)
	l.client.post("api/v1/auth/unfollow",
		headers=headers3(l.token),
		json={"username":name})

########################################################################################################################################
#notifications requests

def checkNotification(l):
	l.client.get("api/v1/auth/checkNotification",
		headers=headers2(l.token))

def pushNotification(l):
	l.client.get("api/v1/auth/pushNotification",
		headers=headers2(l.token))

def blockedUsers(l):
	l.client.get("api/v1/auth/blockedUsers",
		headers=headers2(l.token))

def blockUser(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.blockedUsersList.append(name)
	l.client.post("api/v1/auth/blockUser",
		headers=headers3(l.token),
		json={"username": name})

def unblockUser(l):
	i = randint(0, len(l.blockedUsersList)-1)
	name = l.blockedUsersList[i]
	l.blockedUsersList.remove(name)
	l.client.post("api/v1/auth/unblockUser",
		headers=headers3(l.token),
		json={"username": name})

def search(l):
	randContent = randstr(10)
	l.client.get("api/v1/unauth/search",
		headers=headers1,
		json={"search_content":randContent})

def viewPrivateUserInfo(l):
	l.client.get("api/v1/auth/viewPrivateUserInfo",
		headers=headers2(l.token))

def getUsername(l):
	l.client.get("api/v1/auth/getUsername",
		headers=headers2(l.token))

def viewPublicUserInfo(l):
	i = randint(0, len(l.users)-1)
	user = l.users[i]
	name = user['username']
	l.client.get("api/v1/unauth/viewPublicUserInfo",
		headers=headers1,
		json={"username":name})

########################################################################################################################################

#CLASSES
class tasksManager(TaskSet):
	users = [{"username": "ASDXR", "password": "passpasspass"}]
	communityIDs = [1]
	postsID = [1]
	commentsID = [1]
	hiddenPosts = [1]
	messages = [1]
	savedLinks = [1]
	pinnedPosts = [1]
	blockedUsersList = ["nour"]
	followedUsersList = ["menna"]
	token = ""
	

	tasks = {signUp: 3, follow: 3, unfollow: 2, following: 4, followers: 4, saveLink: 3, unSaveLink: 2, editPost: 3,
	blockedUsers: 4, blockUser: 3, unblockUser: 3, upvoteLink: 3, addLink: 4, downvoteLink: 3, communityInformation: 3,
	ViewPosts: 4, viewUpOrDownvotedPosts: 4, viewComments: 4, viewSavedLinks: 4, viewOverview: 4, viewModerators: 4,
	viewCommentsReplies: 4, viewUserCommunities: 4, subscribeCommunity: 3, unSubscribeCommunity: 3, addModerator: 2,
	createCommunity: 2, editCommunity: 4, editComment: 3, removeCommunity: 2, getUsername: 4, pinPost: 3, removeLink:4,
	hidePost: 3, unhidePost: 3, viewUserMessages: 4, viewUserSentMessages: 3, removeModerator: 2,
	sendMessage: 4, search: 3, viewPrivateUserInfo: 3, viewPublicUserInfo: 3, changePass: 1, updateDisplayName: 3,
	updateAbout: 3, updateCoverAndProfileImage: 3, deleteMyAccount: 1, forgetPassword: 4, viewHiddenPosts: 3,
	giveReward: 3, uploadImage: 2, viewSinglePost: 3, viewUserInboxMessages: 3, checkNotification: 4, pushNotification: 3}

	def on_start(self):
		signIn(self)
		
	def on_stop(self):
		signOut(self)

class WebsiteUser(HttpLocust):
	task_set = tasksManager
	
	min_wait = 3000
	max_wait = 5000
	host = 'http://35.204.169.121/'