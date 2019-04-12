from locust import HttpLocust, TaskSet

headers={"Accept": "application/json","Authorization": "Bearer: {token}","Content-Type":"application/json"}
headersin={"Content-Type":"application/json"}
lheaders={"Accept": "application/json","Authorization": "Bearer: {token}"}

def login(l):
    l.client.post("/api/unauth/signIn", headers=headersin, {"username":"6JVGvUEBzxTcjY8G","password":"nY50uHfpaTQOhBbA"})

def logout(l):
    l.client.post("/api/auth/signOut",headers=lheaders,{})

def deleteacc(l):
    l.client.post("/api/auth/delete/account", headers=headers,{"password":"Gyc3OG9bxQWxUgDw"})

def updateDisplayName(l):
    l.client.patch("/api/auth/updateDisplayName",headers=headers,{"name":"AR2tyzpiwn8eiz3e"})

def updateAbout(l):
    l.client.patch("/api/auth/pdateAbout",headers=headers,{"about":"kvQwJ1LWb29MsKrE"})

def updateProfileImage(l):
    l.client.post("/api/auth/updateProfileImage",headers=headers, {"profile_image":"V0ob5EHSVKOWsCIf"})

def signUp(l):
    l.client.post("/api/unauth/signUp",headers=headersin, {"username":"Fz2AJ82v9uJd2stv","password":"Q5uYfJrBfYawNV0X","password_confirmation":"cwbDEBsxS8muCqfs","email":"90HvAknvfn5D8wpq"})

def resetPassword(l):
    l.client.post("/api/unauth/resetPassword",headers=headersin, {"new_password":"RGnbPynnIml9yH4E","confirm_new_password":"zv4vBECFcFniu6Qm"})

def forgetPassword(l):
    l.client.post("/api/unauth/forgetPassword",headers=headersin, {"email":"nnAMMCaANYSq3iN2"})

def changepass(l):
    l.client.patch("/api/auth/change/password",headers=headers,{"password":"578TE6nVVUgn2aR1","new_password":"z37cePBon8jgaAWI","confirm_new_password":"ZARuvSj7BnT68dqg"})

def viewmess(l):
	l.client.get("/api/auth/viewUserMessage",headers=headers,{"message_id":7})

def followers(l):
	l.client.get("/api/auth/followers",headers=headers,{"username":"rpdbhcCJU9FwASo9"})

def following(l):
	l.client.get("/api/auth/following",headers=headers,{"username":"rpdbhcCJU9FwASo9"})

def follow(l):
	l.client.post("/api/auth/follow",headers=headers,{"username":"rpdbhcCJU9FwASo9"})

def unfollow(l):
	l.client.post("/api/auth/unfollow",headers=headers,{"username":"rpdbhcCJU9FwASo9"})

def viewmess(l):
	l.client.get("/api/auth/viewUserMessage",headers=headers,{"message_id":7})

def viewUserSentMessages(l):
	l.client.get("/api/auth/viewUserSentMessages",headers=lheaders,{})

def viewUserInboxMessages(l):
	l.client.get("/api/auth/viewUserInboxMessages",headers=headers,{"state":18})

def sendMessage(l):
	l.client.post("/api/auth/sendMessage",headers=headers,{"rec_username":"JxyO4x36Za0TXti4","msg_content":"ggKAUMW3FDLFvwc6"})


def notification_check(l):
	l.client.get("/api/auth/notification/check",headers=lheaders,{})


def notification_push(l):
	l.client.get("/api/auth/notification/push",headers=lheaders,{})

def blockedUsers(l):
	l.client.get("/api/auth/blockedUsers",headers=lheaders,{})

def blockUser(l):
	l.client.post("/api/auth/blockUser",headers=headers,{"username":"UqU3rejVS5MaGfaG"})

def unblockUser(l):
	l.client.post("/api/auth/unblockUser",headers=headers,{"username":"UqU3rejVS5MaGfaG"})

def search(l):
	l.client.get("api/unauth/search",headers=headersin,{"search_content":"john"})

def viewPrivateUserInfo(l):
	l.client.get("api/auth/viewPrivateUserInfo",headers=lheaders,{})

def getUsername(l):
	l.client.get("api/auth/getUsername",headers=lheaders,{})


def viewPublicUserInfo(l):
	l.client.get("api/unauth/viewPublicUserInfo",headers=headersin,{"username":"L2wY3EuWoaWo3Ja8"})


class UserBehavior(TaskSet):
    tasks = {deleteacc: 1, changepass: 2, viewmess:5}

    def on_start(self):
        login(self)

    def on_stop(self):
        logout(self)





class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 5000
    max_wait = 9000