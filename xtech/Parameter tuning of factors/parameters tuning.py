from definition import *
from adjust import *
import copy
import shutil
import multiprocessing
from random import random, randint, choice
from copy import deepcopy
import statsmodels.api as sm
import numpy as np
from pathos.multiprocessing import ProcessingPool as Pool
import os
import shutil
import pandas as pd
import glob
def main_test(factor_formula):
    print(factor_formula)
    tree=formula_to_tree(factor_formula)
    replace_list=['.','^','||','&','(',')',',','<','<=','>','>=','==','?',':','/','*','+','-','']
    for i in replace_list:
        factor_formula=factor_formula.replace(i,'') 
    paramnode_list = get_paramnode(tree)
    for leaf in paramnode_list:
        leaf.data =data[leaf.name]
    if tree.data is None:
        tree.data = do_calculation(tree)
    tree.data = pd.DataFrame(tree.data)
   
    tree.data.index=data['ret'].index
    tree.data.columns=data['ret'].columns
    transform(tree.data,factor_formula)
    os.makedirs("../result/positive/"+factor_formula)
    os.makedirs("../result/negitive/"+factor_formula)
    time_interval=['0']
    for i in time_interval:
        factor_list=double_test(factor_formula,i)
    #delfile(factor_formula)
    return factor_list

def double_test(factor_name,time_interval):
  print(factor_name+' begin test')
  os.system('./backtest -i ../data/collected_factor/positive/'+factor_name+'.csv -o ../result/positive/'+factor_name+' --transaction=0')
  list_pos=calcu_index(factor_name,'positive')
  os.system('./backtest -i ../data/collected_factor/negitive/'+factor_name+'.csv -o ../result/negitive/'+factor_name+' --transaction=0')
  list_neg=calcu_index(factor_name,'negitive')
  if list_pos[0]>list_neg[0]:
    return ['pos']+list_pos
  else:
    return ['neg']+list_neg

def transform(test_df,formula):
    length=len(test_df)
    col=len(test_df.columns)
    date=[0]*length*col
    proba=[0]*length*col
    ticker=[0]*length*col
    for i in range(length):
        begin=i*col
        end=(i+1)*col
        proba[begin:end]=test_df.iloc[i].values
        ticker[begin:end]=test_df.iloc[i].index
        date[begin:end]=col*[test_df.iloc[i].name]
    df=pd.DataFrame({'date':date,'ticker':ticker,'proba':proba},columns=['date','ticker','proba'])
    df=df.dropna()
    df.to_csv('../data/collected_factor/positive/'+formula+'.csv')
    neg_df=df
    neg_df['proba']=neg_df['proba']*(-1)
    print(formula)
    neg_df.to_csv('../data/collected_factor/negitive/'+formula+'.csv') 
    return

def calcu_index(factor,st):
    if st=='positive':
      position_df=pd.read_csv('../result/'+st+'/'+factor+'/stat_top20_equalfunds_'+factor+'_trans0.0_whole.csv')
    else:
      position_df=pd.read_csv('../result/'+st+'/'+factor+'/stat_top20_equalfunds_'+factor+'_trans0.0_whole.csv')
    #注意这里还没改
    time_len=len(data['ret'])
    year=float(time_len)/252
    annual_return=(position_df['wealth'].values[-1]/position_df['wealth'].values[0])**(1/year)-1
    annual_return_std=np.std(position_df['wealth'].shift(-1)/position_df['wealth'])*np.sqrt(252)
    max_dd=100*(1 - (position_df['wealth'] / position_df['wealth'].rolling(10000, min_periods=1).max()).min())
    risk_return_ratio=annual_return/max_dd
    sharpe_ratio=annual_return/annual_return_std
    everyday_return=np.array(position_df['wealth'].values[1:]/position_df['wealth'][:-1])
    mask=everyday_return>0
    everyday_return=everyday_return*mask
    sortino_ratio=(np.sum(np.power(everyday_return,2))/time_len)**0.5
    IC=np.mean(position_df['IC'].values)
    IR=IC/np.std(position_df['IC'].values)
    return [annual_return,max_dd,risk_return_ratio,sharpe_ratio,sortino_ratio,IC,IR]

def delfile(factor_name):
  choose=['positive','negitive']
  for i in choose:
    path = '../result/'+i+'/'+factor_name
    shutil.rmtree(path)

import multiprocessing

with open('adjusted.txt', 'r') as f:
    formulas = f.readlines()
for i in range(len(formulas)):
   formulas[i]=formulas[i][:-1]

trees=[]
for formula in formulas:
    tree=formula_to_tree(formula)
    trees.append(tree)
data=load_data(20140101,20180123)
print(formulas)
#print(data)
#evolve(8,trees,3,data)
pool = multiprocessing.Pool(processes=1)
results = []
score_population = []
length=len(formulas)
for i in range(length):
    results.append(pool.apply_async(main_test, (formulas[i], )))
pool.close()
pool.join()
pool.terminate()
for res in results:
    score_population.append(res.get())

result_df=pd.DataFrame(score_population)
result_df.columns=['dir','annual_return','max_dd','risk_return_ratio','sharpe_ratio','sortino_ratio','IC','IR']
result_df.index=formulas
result_df.to_csv("adjust9.csv")
'''
with open('gpu_new_formula.txt', 'r') as f:
    formulas = f.readlines()
for i in range(len(formulas)):
   formulas[i]=formulas[i][:-1]
formulas=formulas[30:45]
#formulas=formulas[:2]
data=load_data(20090301,20180123)
pool = multiprocessing.Pool(processes=15)
results = []
score_population = []
length=len(formulas)
for i in range(length):
    results.append(pool.apply_async(main_test, (formulas[i], )))
pool.close()
pool.join()
pool.terminate()
for res in results:
    score_population.append(res.get())

result_df=pd.DataFrame(score_population)
result_df.columns=['dir','annual_return','max_dd','risk_return_ratio','sharpe_ratio','sortino_ratio','IC','IR']
result_df.index=formulas
result_df.to_csv("adjust8.csv")


with open('new_formula.txt', 'r') as f:
    formulas = f.readlines()
for i in range(len(formulas)):
    formulas[i]=formulas[i][:-1]
formulas=formulas[24:48]
pool = multiprocessing.Pool(processes=24)
results = []
score_population = []
length=len(formulas)
for i in range(length):
    results.append(pool.apply_async(main_test, (formulas[i], )))
pool.close()
pool.join()
pool.terminate()
for res in results:
    score_population.append(res.get())

result_df=pd.DataFrame(score_population)
result_df.columns=['dir','annual_return','max_dd','risk_return_ratio','sharpe_ratio','sortino_ratio','IC','IR']
result_df.index=formulas
result_df.to_csv("adjust2.csv")



result=main_test('mean(close,4)')
print(result)
result_df=pd.DataFrame(result)
result_df.index='mean(close,4)'
result_df.columns=['dir','annual_return','max_dd','risk_return_ratio','sharpe_ratio','sortino_ratio','IC','IR']
result_df.to_csv("result.csv")
'''
