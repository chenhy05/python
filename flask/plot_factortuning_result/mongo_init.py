from flask import Flask
from flask.ext.pymongo import PyMongo
 
app = Flask(__name__)
'''
app.config.update(
    MONGO_HOST='localhost',
    MONGO_PORT=27017,
    MONGO_USERNAME='bjhee',
    MONGO_PASSWORD='111111',
    MONGO_DBNAME='flask'
)
''' 
mongo = PyMongo(app)
