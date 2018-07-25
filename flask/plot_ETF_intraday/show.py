from flask import Flask,url_for,render_template,request
import csv
import os
import codecs
import re
import numpy as np
import glob

app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def main():
    if request.method == 'GET':
        return render_template('main.html')
    else:
        indexcode = request.form.get('indexcode')
        date = request.form.get('date')
        data_add="js/d_"+str(indexcode)+"_"+str(date)+".js"
        print(data_add)
        return render_template('data.html',name=data_add)


if __name__=='__main__':
    app.run(port=80,debug=True)





