from pymongo import MongoClient
from flask import jsonify
import time
from dbLogger import CommandLogger
from hasher import are_similar, get_hash

MONGO_CONNECTION_PORT = 27017


class DatabaseController:

    def __init__(self):
        self.mongo_client = MongoClient('localhost', MONGO_CONNECTION_PORT, event_listeners=[CommandLogger()])
        self.db = self.mongo_client['weight-app']
        self.weights = self.db['weights']
        self.users = self.db['users']
        self.sessions = self.db['sessions']

    def authorize(self, login, password):
        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login'
            )
        found_user = self.users.find({
            'login': login
        })
        if(are_similar(password, found_user[0]['hash'])):
            token = int(time.time())
            self.sessions.insert_one({
                'login': login,
                'token': token
            })
            return jsonify(
                result='ok',
                description='user successfully found, authorization completed',
            token=token)

        else:
            return jsonify(
            result='error',
            description='login or password incorrect'
        )

    def add_user(self, login, password):
        if self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='User already exists'
            )
        hashed_password = get_hash(password)
        self.users.insert_one({
            'login': login,
            'hash': hashed_password
        })
        return jsonify(
            result='ok',
            desctiption='user added successfully'
        )

    def delete_user(self, login):
        if (self.users.delete_one({
            'login': login
        }).deleted_count > 0):
            return jsonify(
                result='ok',
                desctiption='user deleted successfully'
            )
        else:
            return jsonify(
                result='error',
                desctiprion='Error occurred, no users deleted'
            )

    def change_login(self, login, new_login, token):
        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login, no login was changed'
            )

        elif not self.is_token_correct(login, token):
            return jsonify(
                result='error',
                description='That users has no such authorized sessions'
            )

        else:
            self.users.update_one({
                    'login': login},
                {'$set': {
                    'login': new_login
                }})
            return jsonify(
                result='ok',
                desctiption='login changed successfully'
            )

    def change_password(self, login, new_password):
        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login, no password was changed'
            )
        else:
            self.users.update_one({
                    'login': login},
                {'$set': {
                    'hash': get_hash(new_password)
                }})
            return jsonify(
                result='ok',
                desctiption='password changed successfully'
            )

    def does_user_exist(self, login):
        return bool(self.users.find_one({
            'login': login
        }))

    def is_token_correct(self, login, token):
        return bool(self.sessions.find({
            'login': login,
            'token': token}))

    def add_weight(self, login, date, value, token):

        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login, cant add weight'
            )
        if not self.is_token_correct(login, token):
            return jsonify(
                result='error',
                description='That users has no such authorized sessions'
            )
        elif bool(self.weights.find_one({
            'login': login,
            'date': date,
        })):
            return jsonify(
                result='error',
                desctiption='current user already has a value for that date'
            )
        else:
            self.weights.insert_one({
                'login': login,
                'date': date,
                'value': value
            })
            return jsonify(
                result='ok',
                desctiption='weight added to database'
            )

    # TODO implement
    def find_weight(self, login, start, end, token):
        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login, cant add weight'
            )
        if not self.is_token_correct(login, token):
            return jsonify(
                result='error',
                description='That users has no such authorized sessions'
            )

        pass
