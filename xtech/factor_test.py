import statsmodels.api as sm
import numpy as np
import os
import shutil
import pandas as pd
import glob

def import_data(path):
#os.system('./backtest -i ../data/collected_factor/aaa.csv -o../result/')
  factor_data=pd.read_csv(path)
  factor_name=path[-13:-4]
  missing_value_ratio=len(factor_data)/2707787
  return factor_data,factor_name,missing_value_ratio

def part_time_interval(factor_data,begin_time,end_time):
  part_data=factor_data[factor_data['date']<end_time]
  part_data=part_data[part_data['date']>=begin_time]
  
  return part_data
def test_data(factor_data):
  os.system('./backtest -i ../data/collected_factor/'+factor_name+'.csv -o '+researve_path)
#position_df=pd.read_csv('../result/stat_top20_equalfunds_aaa_low_whole.csv')
def calcu_preference(factor_data):
  market_value=pd.read_csv('../data/MyFactors/preference/marketValue.csv')
  neg_value=pd.read_csv('../data/MyFactors/preference/negMarketValue.csv')
  date=market_value.columns[1:]
  tvalues1=[]
  tvalues2=[]
  for i in date:
    cur_date=int(i)
    tmp_market_value=market_value[['ticker',i]]
    tmp_market_value=tmp_market_value.dropna()
    tmp_negmarket_value=neg_value[['ticker',i]]
    tmp_negmarket_value=tmp_negmarket_value.dropna()
    tmp_factor_data=factor_data[factor_data['date']==cur_date]
    tmp_factor_data=tmp_factor_data.dropna()
    result = pd.merge(tmp_market_value,tmp_factor_data, on='ticker',how='inner')
    result2 = pd.merge(result,tmp_negmarket_value, on='ticker',how='inner')
    result2 = result2.dropna()
    x=i+'_x'
    y=i+'_y'
    x_train= np.array(result2[x].values)
    x_train=(x_train-x_train.mean())/x_train.std()
    another_x_train=np.array(result2[y].values)
    another_x_train=(another_x_train-another_x_train.mean())/another_x_train.std()
    y_train =np.array(result2['proba'].values)
    y_train=(y_train-y_train.mean())/y_train.std()
    model1 = sm.OLS(y_train, x_train)
    results1 = model1.fit()
    tvalues1.append(results1.tvalues[0])
    model2 = sm.OLS(y_train, another_x_train)
    results2 = model2.fit()
    tvalues2.append(results2.tvalues[0])
  market_preference=np.mean(tvalues1)
  negmarket_preference=np.mean(tvalues2)  
  return market_preference,negmarket_preference

from pathos.multiprocessing import ProcessingPool as Pool
def main_test(factor_name):
  print(factor_name)
  os.makedirs("../result/positive/"+factor_name)
  os.makedirs("../result/negitive/"+factor_name)
  time_interval=['0','1','2','3']
  factor_list=[]
  for i in time_interval:
    test_list=double_test(factor_name,i)
    factor_list +=test_list
  delfile(factor_name)
  return factor_list

def double_test(factor_name,time_interval):
  os.system('./backtest -i ../data/collected_factor/'+factor_name+'/'+time_interval+'.csv -o ../result/positive/'+factor_name+' --transaction=0')
  list_pos=calcu_index(factor_name,'positive',time_interval)
  os.system('./backtest -i ../data/collected_factor/'+factor_name+'/0'+time_interval+'.csv -o ../result/negitive/'+factor_name+' --transaction=0')
  list_neg=calcu_index(factor_name,'negitive',time_interval)
  if list_pos[0]>list_neg[0]:
    return ['pos']+list_pos
  else:
    return ['neg']+list_neg

def calcu_index(factor,st,time):
  if st=='positive':
    position_df=pd.read_csv('../result/'+st+'/'+factor+'/stat_top20_equalfunds_'+time+'_trans0.0_whole.csv')
  else:
    position_df=pd.read_csv('../result/'+st+'/'+factor+'/stat_top20_equalfunds_0'+time+'_trans0.0_whole.csv')
  if time=='0':
    time_len=901
  if time=='1':
    time_len=262
  if time=='2':
    time_len=154
  if time=='3':
    time_len=485
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
    os.remove(path+'figure_top20_equalfunds_'+factor_name+'_trans0.0_whole.pdf')
    os.remove(path+'position_top20_equalfunds_'+factor_name+'_trans0.0_whole.csv')
    os.remove(path+'record_top20_equalfunds_'+factor_name+'_trans0.0_whole.csv')
    os.remove(path+'stat_top20_equalfunds_'+factor_name+'_trans0.0_whole.csv')

#print(main_test('walpha001'))
pathDir =  os.listdir('../data/collected_factor/')
factor_name_list=[]
for i in pathDir:
  factor_name_list.append(i)
factor_name_list.sort()
pool = Pool(20)
result=pool.map(main_test,factor_name_list[50:100])
result_df=pd.DataFrame(result)
result_df.index=factor_name_list[50:100]
result_df.to_csv("gwresult1.csv")
result=pool.map(main_test,factor_name_list[100:150])
result_df=pd.DataFrame(result)
result_df.index=factor_name_list[100:150]
result_df.to_csv("gwresult2.csv")
result=pool.map(main_test,factor_name_list[150:])
result_df=pd.DataFrame(result)
result_df.index=factor_name_list[150:]
result_df.to_csv("gwresult3.csv")



lst = glob.glob("../data/collected_factor/*.csv")
lst.sort()
'''
import sys
from openpyxl.workbook import Workbook

for i in lst[199:]:
  factor_data,factor_name,missing_ratio=import_data(i)
  missing_ratio=1-missing_ratio
  print(factor_name+' begin test')
  os.makedirs("../store/"+factor_name)
  researve_path='../store/'+factor_name+'/'
  os.system('./backtest -i ../data/collected_factor/'+factor_name+'.csv -o '+researve_path)
  market_preference,negmarket_preference=calcu_preference(factor_data)
  annual_return,max_dd,risk_return_ratio,sharpe_ratio,sortino_ratio=calcu_index(factor_name,researve_path)
  
  result_list=[annual_return,risk_return_ratio,sharpe_ratio,max_dd,sortino_ratio,missing_ratio,market_preference,negmarket_preference]
  print(result_list) 
 #df = DataFrame(columns=['annual_return','risk_return_ratio','sharpe_ratio','max_dd','sortino_ratio','missing_ratio','market_preference','negmarket_preference'])
  if lst.index(i)==199:
    final_df =pd.DataFrame(columns=['annual_return','risk_return_ratio','sharpe_ratio','max_dd','sortino_ratio','missing_ratio','market_preference','negmarket_preference'])
    final_df.loc[factor_name] = result_list
    final_df.to_csv('final_result4.csv')

  else :
    #final_df=pd.read_csv('final_result.csv')
    final_df.loc[factor_name] =result_list
    final_df.to_csv('final_result4.csv')

   
for j in range(len(result_list)):
    ws.writer(i,j,result_list[j])
w.save('final_result.csv')    
'''
