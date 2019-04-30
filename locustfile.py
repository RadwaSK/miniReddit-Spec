from locust import HttpLocust, TaskSet
import json
import requests
#needed heards
token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zNS4yMDQuMTY5LjEyMVwvYXBpXC91bmF1dGhcL3NpZ25JbiIsImlhdCI6MTU1NTE1MzQ2MSwiZXhwIjoxNTU1NzU4MjYxLCJuYmYiOjE1NTUxNTM0NjEsImp0aSI6IlZLQVF5cExlWTdQRXhtUHEiLCJzdWIiOiJBU0RYUiIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.rrUod7gNvChBtyuvHZ0zJSavFvo6O4S8DfZ8GVy6nHs'
headers1 = {"Content-Type":"application/json"}
headers2 = {"Accept": "application/json","Authorization": "Bearer " + token}
headers3 = {"Accept": "application/json","Authorization": "Bearer: {"+ token +"}", "Content-Type":"application/json"}

#sign requests
def signUp(l):
    l.client.post("api/unauth/signUp", json={"username":"ASDXR","password":"pass","password_confirmation":"pass","email":"email@email.com"})

def signOut(l):
    l.client.post('api/auth/signOut')
def signIn(l):
    response = l.client.post('api/unauth/signIn', json={"username":"mini-reddit", "password":"mini-reddit"})
    temp = response.json()
    l.token = temp['token']


def unfollow(l):
	l.client.post("api/auth/follow", 
		headers={"Accept": "application/json","Authorization": "Bearer: "+ l.token, "Content-Type":"application/json"}, 
		json={"username":"amro"})


def search(l):
    response = l.client.get("api/unauth/search/?search_content=john")
    print(response.status_code)


def ViewPosts(l):
    l.client.get('api/unauth/ViewPosts', json={'page_type': 1, 'username': 'ASDXR', 'community_id': 1})




class tasksManager(TaskSet):
    tasks = {unfollow:3,search:0,ViewPosts:0}


    def on_start(self):
        signIn(self)
        
    def on_stop(self):
        signOut(self)

class WebsiteUser(HttpLocust):
    task_set = tasksManager
    
    min_wait = 3000
    max_wait = 5000
    host = 'http://35.204.169.121/'




