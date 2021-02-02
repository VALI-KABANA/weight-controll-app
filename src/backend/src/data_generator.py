import names
from bson.json_util import dumps
import json
import requests
import random
from pymongo import MongoClient
from datetime import datetime

mongo_client = MongoClient('localhost', 27017)
db = mongo_client['weight-app']
weights = db['weights']
users = db['users']
sessions = db['sessions']

def gen_logins():
    for i in range(50):
        login = names.get_last_name()
        password = names.get_full_name()
        request = "http://127.0.0.1:5000/users/add/?login={login}&password={password}".format(login=login, password=password)
        print(request)
        response = requests.get(request)
        print(response.json())
        request = "http://127.0.0.1:5000/users/authorize/?login={login}&password={password}".format(login=login, password=password)
        response = requests.get(request)
        print(response.json())

def gen_weights():
    users_list = list(map(lambda x: x['login'], list(users.find({}))))
    for user in users_list:
        count = random.randint(0, 10)
        for i in range (count):
            token = sessions.find_one({'login': user})['login']
            # TODO randomize start end; debug :D
            request = "http://127.0.0.1:5000/weights/find/?login={login}&start={start}&end={end}&token={token}".format(login=user, token=token,
                                                                                                                       start=:D, end=:D)
            # print(request)


def gen_date():
    gen_weights()
if __name__ == "__main__":
    gen_date()
