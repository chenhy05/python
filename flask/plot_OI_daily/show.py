#encoding: utf-8
from flask import Flask,url_for,render_template,request
import csv
import os
import codecs
import re
import numpy as np
import glob

app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def stock():
    if request.method == 'GET':
        lst=glob.glob("./static/js/d_*.js")
        lst=np.sort([i[12:-3] for i in lst]).tolist()
        add=''
        return render_template('main.html',user=lst,name=add)
    else:
        lst=glob.glob("./static/js/d_*.js")
        lst=np.sort([i[12:-3] for i in lst]).tolist()
        indexcode = request.form.get('indexcode')
        data_add="js/stock/d_"+str(indexcode)+"_STOCK.js"
        return render_template('stock.html',user=lst,name=data_add)

@app.route('/<yid>')
def etf(yid):
    lst=glob.glob("./static/js/d_*.js")
    lst=np.sort([i[12:-3] for i in lst]).tolist()
    add='js/'+str(yid)+'.js'
    return render_template('main.html',user=lst,name=add)
   


if __name__=='__main__':
    app.run(host='0.0.0.0', port=80,debug=True)
    #app.run(debug=True)





