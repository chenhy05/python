from flask import Flask,url_for,render_template
import config
import csv
import os
import codecs
import re
from config4csv2mongodb import *   # 引入 config.py 里面的所有变量
import pymongo
import logging
import numpy as np

#uri="mongodb://demo:DEMOALPHA@175.25.50.115:32789/demo?authMechanism=SCRAM-SHA-1"
#client = pymongo.MongoClient(uri)
#db = client['demo']

client = pymongo.MongoClient(MONGO_URL)
db = client[MONGO_DB]   #链接到 MONGODB

app=Flask(__name__)
app.config.from_object(config)

#logging.basicConfig(filename=os.path.join(os.getcwd(),'log.txt'),
 #                  level=logging.DEBUG,
  #                  filemode='a',
  #                  format='%(asctime)s - %(levelname)s: %(message)s')

@app.route('/')
def hello():
    collection=db.true_result.find()
    #print(collection)
    formula_list=[]
    for document in collection:
        num=int(document['index'][5:])
        ic=round(np.mean(document['adjusted_ic_record'][-30:]),4)
        formula=document['adjusted_formula'] 
        formula_list.append([document['index'],num,formula,ic])
    context=sorted(formula_list,key=lambda formula_list:formula_list[1])
    return render_template('factor_for.html',user=context)

@app.route('/stat')
def stat():
    collection=db.true_result.find()
    #print(collection)
    formula_list={}
    ic_list=[]
    annual_list=[]
    num_list = []
    for document in collection:
        num=int(document['index'][5:])
        ic_change=round((document['adjusted_IC']-document['init_IC']),4)
        annual_change=round((document['adjusted_return']-document['init_return']),4)
        if (ic_change == ic_change) and (annual_change==annual_change): 
            ic_list.append(ic_change)
            annual_list.append(annual_change)
            num_list.append(num)
    formula_list['ic']=ic_list
    formula_list['annual']=annual_list
    formula_list['index'] = num_list
    #formula_list=sorted(formula_list.item(),key=lambda item:item[])
    return render_template('factor_sta.html',user=formula_list)

@app.route('/<yid>')
def factor(yid):

    documents = db.true_result.find({"index": yid})
    result=[0]*23
    for document in documents:
        result[]document['adjusted_formula']) 
        result.append(document['init_formula']) 
        result.append(document['direction'])
        ad_date=np.array(document['adjusted_date'])
        ad_ic=np.array(document['adjusted_ic_record'])
        ad_w=np.array(document['adjusted_wealth_record'])
        drop_date=ad_date[(ad_w==ad_w)&(ad_ic==ad_ic)].tolist()
        result.append(drop_date)
        result.append(round(document['adjusted_return'],4))
        result.append(round(document['adjusted_max_dd'],2))
        result.append(round(document['adjusted_risk_return_ratio'],4))
        result.append(round(document['adjusted_sharpe'],4))
        result.append(round(document['adjusted_sortino'],4))
        if document['adjusted_IC'] == document['adjusted_IC']:
            result.append(round(document['adjusted_IC'],4))
            result.append(round(document['adjusted_IR'],4))
        else:
            print(result)
            #result.append(0).append(0)
        drop_w=ad_w[(ad_w==ad_w)&(ad_ic==ad_ic)].tolist()
        result.append(drop_w)
        drop_ic=ad_ic[(ad_w==ad_w)&(ad_ic==ad_ic)].tolist()
        result.append(drop_ic)
        result.append(round(document['init_return'],4))
        result.append(round(document['init_max_dd'],2))
        result.append(round(document['init_risk_return_ratio'],4))
        result.append(round(document['init_sharpe'],4))
        result.append(round(document['init_sortino'],4))
        if document['init_IC'] == document['init_IC']:
            result.append(round(document['init_IC'],4))
            result.append(round(document['init_IR'],4))
        else:
            print(result)
            #result.append(0).append(0)
        in_date=np.array(document['init_date'])
        in_ic=np.array(document['init_ic_record'])
        in_w=np.array(document['init_wealth_record'])
        drop_in_date=in_date[(in_w==in_w)&(in_ic==in_ic)].tolist()
        drop_in_w=in_w[(in_w==in_w)&(in_ic==in_ic)].tolist()
        drop_in_ic=in_ic[(in_w==in_w)&(in_ic==in_ic)].tolist()
        result.append(drop_in_date)
        result.append(drop_in_w)
        result.append(drop_in_ic)
        #print(result)
    return render_template('factor_table.html',user=result)

if __name__=='__main__':
    app.run()
