from flask import Flask, request, jsonify
from dbModule import DatabaseController
app = Flask(__name__)

db = DatabaseController()


@app.route("/users/authorize/")
def authorize_user():
    login = request.args["login"]
    password = request.args["password"]
    if db.authorize(login, password):
        return jsonify(
            result='ok',
            description='user successfully found, authorization complete'
        )
    else:
        return jsonify(
            result='error',
            description='login or password incorrect'
        )


@app.route("/users/add/")
def add_user():
    login = request.args["login"]
    password = request.args["password"]
    return db.add_user(login, password)


@app.route("/users/delete/")
def delete_user():
    login = request.args["login"]
    return db.delete_user(login)


@app.route("/users/find/")
def find_user():
    login = request.args["login"]
    if db.does_user_exist(login):
        return jsonify(
            result='ok',
            description='user successfully found'
        )
    else:
        return jsonify(
            result='error',
            description='user not found'
        )


@app.route("/users/change_login/", methods=['PUT'])
def change_login():
    login = request.args["login"]
    new_login = request.args["new_login"]
    return db.change_login(login, new_login)


@app.route("/users/change_password/")
def change_password():
    login = request.args["login"]
    new_password = request.args["new_password"]
    return db.change_password(login, new_password)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/weights/add/")
def add_weight():
    login = request.args["login"]
    date = request.args["date"]
    value = request.args["value"]
    return db.add_weight(login, date, value)


@app.route("/weights/find/")
def find_weights():
    login = request.args["login"]
    start = request.args["start"]
    end = request.args["end"]
    return db.find_weight(login, start, end)


if __name__ == "__main__":

    app.run()
