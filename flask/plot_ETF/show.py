from flask import Flask,url_for,render_template
import csv
import os
import codecs
import re

import numpy as np
import glob

app=Flask(__name__)

@app.route('/')
def factor():
    lst=glob.glob("./static/js/data*.js")
    lst=np.sort([i[12:-3] for i in lst]).tolist()
    return render_template('main.html',user=lst)

@app.route('/<yid>')
def show(yid):
    lst=glob.glob("./static/js/data*.js")
    lst=np.sort([i[12:-3] for i in lst]).tolist()
    add='js/'+str(yid)+'.js'
    return render_template('data.html',user=lst,name=add)


if __name__=='__main__':
    app.run(port=80,debug=True)





