from pymongo import MongoClient
from flask import jsonify
from dbLogger import CommandLogger
from datetime import datetime
from hasher import Hasher

MONGO_CONNECTION_PORT = 27017


class DatabaseController:

    def __init__(self):
        self.mongo_client = MongoClient('localhost', MONGO_CONNECTION_PORT, event_listeners=[CommandLogger()])
        self.db = self.mongo_client['weight-app']
        self.weights = self.db['weights']
        self.users = self.db['users']
        self.hasher = Hasher()

    def authorize(self, login, password):
        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login'
            )
        found_user = self.users.find({
            'login': login
        })
        return self.hasher.are_similar(password, found_user[0]['hash'])

    def add_user(self, login, password):
        if self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='User already exists'
            )
        hashed_password = self.hasher.get_hash(password)
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

    def change_login(self, login, new_login):
        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login, no login was changed'
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
                    'hash': self.hasher.get_hash(new_password)
                }})
            return jsonify(
                result='ok',
                desctiption='password changed successfully'
            )

    def does_user_exist(self, login):
        return bool(self.users.find_one({
            'login': login
        }))

    def add_weight(self, login, date, value):
        if not self.does_user_exist(login):
            return jsonify(
                result='error',
                desctiprion='No users matched chosen login, cant add weight'
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
