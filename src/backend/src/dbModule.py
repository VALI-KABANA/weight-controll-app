from pymongo import MongoClient
from flask import jsonify
import time
from datetime import datetime
from dbLogger import CommandLogger
from hasher import are_similar, get_hash
import json

MONGO_CONNECTION_PORT = 27017


class DatabaseController:

    def __init__(self):
        self.mongo_client = MongoClient('localhost', MONGO_CONNECTION_PORT, event_listeners=[CommandLogger()])
        self.db = self.mongo_client['weight-app']
        self.weights = self.db['weights']
        self.users = self.db['users']

    def authorize(self, login, password):
        if not self.does_user_exist(login):
            return jsonify(
                status=False,
                desctiprion='No users matched chosen login'
            )
        found_user = self.users.find({
            'login': login
        })
        if(are_similar(password, found_user[0]['hash'])):
            return jsonify(
                status=True,
                description='user successfully found, authorization completed')

        else:
            return jsonify(
            status=False,
            description='login or password incorrect'
        )

    def add_user(self, login, password):
        if self.does_user_exist(login):
            return jsonify(
                status=False,
                desctiprion='User already exists'
            )
        hashed_password = get_hash(password)
        self.users.insert_one({
            'login': login,
            'hash': hashed_password
        })
        return jsonify(
            status=True,
            desctiption='user added successfully'
        )

    def delete_user(self, login):
        if (self.users.delete_one({
            'login': login
        }).deleted_count > 0):
            return jsonify(
                status=True,
                desctiption='user deleted successfully'
            )
        else:
            return jsonify(
                status=False,
                desctiprion='Error occurred, no users deleted'
            )

    def change_login(self, login, new_login):
        if not self.does_user_exist(login):
            return jsonify(
                status=False,
                desctiprion='No users matched chosen login, no login was changed'
            )
        else:
            self.users.update_one({
                    'login': login},
                {'$set': {
                    'login': new_login
                }})
            return jsonify(
                status=True,
                desctiption='login changed successfully'
            )

    def change_password(self, login, new_password):
        if not self.does_user_exist(login):
            return jsonify(
                status=False,
                desctiprion='No users matched chosen login, no password was changed'
            )
        else:
            self.users.update_one({
                    'login': login},
                {'$set': {
                    'hash': get_hash(new_password)
                }})
            return jsonify(
                status=True,
                desctiption='password changed successfully'
            )

    def does_user_exist(self, login):
        return bool(self.users.find_one({
            'login': login
        }))

    def add_weight(self, login, date, value):

        if not self.does_user_exist(login):
            return jsonify(
                status=False,
                desctiprion='No users matched chosen login, cant add weight'
            )
        elif bool(self.weights.find_one({
            'login': login,
            'date': date,
        })):
            return jsonify(
                status=False,
                desctiption='current user already has a value for that date'
            )
        else:
            self.weights.insert_one({
                'login': login,
                'date' : datetime.strptime(date, '%a, %d %b %Y %H:%M:%S').isoformat(),
                'value': value
            })
            return jsonify(
                status=True,
                desctiption='weight added to database'
            )

    def find_weight(self, login, start, end):
        if not self.does_user_exist(login):
            return jsonify(
                status=False,
                desctiprion='No users matched chosen login, cant add weight'
            )
        in_needed_time_segment = list(filter(lambda weight: weight.date >= start and weight.date <= end),  map(lambda weight: type('obj', (object,), {'date': datetime.fromisoformat(weight['date']).strptime("%Y-%m-%d"), 'value' : weight['value']}), list(self.weights.find({'login': login}))))
        if(in_needed_time_segment):
            return jsonify(
                status=True,
                description='weight records in the [start, end] period',
               result=json.dump(in_needed_time_segment)
            )
        else:
            return jsonify(
                status=False,
                description='That user has no weight record in [start, end] time period'
            )

