from flask import Flask,url_for,render_template
import config
import csv
import os
import codecs
import re
from config4csv2mongodb import *   # 引入 config.py 里面的所有变量
import pymongo
import numpy as np
client = pymongo.MongoClient(MONGO_URL)
db = client[MONGO_DB]   #链接到 MONGODB

#app=Flask(__name__)
#app.config.from_object(config)



documents = db.true_result.find({"index": "alpha83"})
result=[]
for document in documents:
    result.append(round(document['adjusted_return'],4))
    result.append(round(document['adjusted_max_dd'],2))
    result.append(round(document['adjusted_risk_return_ratio'],4))
    result.append(round(document['adjusted_sharpe'],4))
    result.append(0)
    print(result)
'''
result=[]

for document in documents:
    if document['index']=='alpha85':
        result.append(round(document['adjusted_return'],4))
        result.append(round(document['adjusted_max_dd'],2))
        result.append(round(document['adjusted_risk_return_ratio'],4))
        result.append(round(document['adjusted_sharpe'],4))
        result.append(round(document['adjusted_sortino'],4))
        result.append(round(document['adjusted_IC'],4))
        result.append(round(document['adjusted_IR'],4))
        result.append(round(document['init_return'],4))
        result.append(round(document['init_max_dd'],2))
        result.append(round(document['init_risk_return_ratio'],4))
        result.append(round(document['init_sharpe'],4))
        result.append(round(document['init_sortino'],4))
        result.append(round(document['init_IC'],4))
        result.append(round(document['init_IR'],4))

        print(result)  
        #result.append(document['adjusted_ic_record'][(document['adjusted_wealth_record']==document['adjusted_wealth_record'])&(document['adjusted_ic_record']==document['adjusted_ic_record'])])

        #print(np.isnan(np.array(document['adjusted_wealth_record'])))
        #print(np.isnan(np.array(document['adjusted_ic_record'])))
        #print(len(document['adjusted_date']))
 

    result=[]
    result.append(document['formula'])
    result.append(document['direction'])
    result.append(document['annual_return'])
print(result)

    #result.append(document)
'''
