from flask.ext.pymongo import PyMongo
import csv
import os
import codecs
import re
from config4csv2mongodb import *   # 引入 config.py 里面的所有变量
import pymongo

from flask import Flask,url_for,render_template

client = pymongo.MongoClient(MONGO_URL)
db = client[MONGO_DB]   #链接到 MONGODB
#uri="mongodb://demo:DEMOALPHA@175.25.50.115:32789/demo?authMechanism=SCRAM-SHA-1"
#client = pymongo.MongoClient(uri)
#db = client['demo']

#print(mongo.db.find())
#print(mongo.db.collection_names())
def get_all_colls(db):
#获得一个数据库中的所有集合名称
    print(db.collection_names())
     
    collection=db.newfactor.find()
    #print(collection)
    
    for document in collection:
        print(document)
    
get_all_colls(db)
db.newfactor.update({"ID":"alpha3"},{"$push":{"date":[20140101,20150101,20160101,20170101,20180101],'IC':[0.02,0.03,0.05,0.01,-0.005],'capital':[100,110,150,80,30]}})
