import csv
import os
import codecs
import re
import pandas as pd
from config4csv2mongodb import *   # 引入 config.py 里面的所有变量
import pymongo

client = pymongo.MongoClient(MONGO_URL)
db = client[MONGO_DB]   #链接到 MONGODB

def Read_CSV():
    #filename = os.path.join(os.getcwd(), csvname)
    with open('../code/data.csv', 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        i=0
        for item in reader:
            if i >=1:
                factor = {
                    'formula': item[0],
                    'direction': item[1],
                    'annual_return': item[2],
                    'max_dd': item[3],
                    'risk_return_ratio': item[4],
                    'sharpe': item[5],
                    'sortino': item[6],
                    'finalIC': item[7],
                    'initIC': item[8],
                    'ID':item[9]
                }
                print(factor)
                save_to_mongo(factor)
            i+=1
def func(input_string):
    result=input_string.replace('-','')
    result=int(result)
    return result

def my_csv():
    df=pd.read_csv("../result/positive/rankdeltahighlow102vwap08401/stat_top20_equalfunds_rankdeltahighlow102vwap08401_trans0.0_whole.csv")
    for col in df.columns:
        if col == "index":
            datelist=df[col].values.tolist()
            values=[func(v) for v in datelist]
            save_to_mongo(values,col)
        else :save_to_mongo(df[col].values.tolist(),col)
    #db.newfactor.update({"ID":"alpha4"},{"$push":{"IC":df["IC"].values.tolist()}})


def save_to_mongo(values,col):  # 定义保存到 MONGODB 的函数，传入 result
    try:  # 错误判断
        if db.newfactor.update({"ID":"alpha9"},{"$push":{col:values}}):
            print('保存到 MONGO_DB成功')
    except Exception:  #如果出错就答应下面的文字+ result(result 是 product)
        print('存储到mongodb 错误')

def main():
    #Read_CSV()
    my_csv()


if __name__ == '__main__':
    main()

