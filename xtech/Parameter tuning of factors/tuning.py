from definition import *
import copy
import pandas as pd
import numpy as np
import os
import shutil
import multiprocessing
from random import random, randint, choice
from copy import deepcopy
def calculate_revenue(tree,maxgen,data):
    #给初值
    #global data
    paramnode_list = get_paramnode(tree)
    for leaf in paramnode_list:
        leaf.data =data[leaf.name]
    #获取常数
    constnode_list = get_constnode(tree)
    constnode_num = len(constnode_list)
    print("There are %d parameters to be finetuned." % constnode_num)
    count = 0
    num = 0
    init_value = constnode_list[0].name
    init_IC=0
    pre_IC=100
    cur_IC=-100
    #print(maxgen)
    while(num < maxgen):
        print("%dth finetuning" % num)
        for k in range(len(constnode_list)):
            count += 1
            tree_list = []
            new_tree=copy.deepcopy(tree)
            tree_list.append(new_tree)
            const_list=[]
            const_list.append(constnode_list[k].name)
            for i in range(10,121,10):
                constnode_list[k].change_value(i)
                new_tree = copy.deepcopy(tree)
                tree_list.append(new_tree)
                const_list.append(i)
            for bbb in tree_list:
                print(tree_to_formula(bbb))
            pool = multiprocessing.Pool(processes=6)
            results = []
            score_population = []
            length=len(tree_list)
            for i in range(length):
                results.append(pool.apply_async(adjust_const, (tree_list[i],const_list[i],data )))
            pool.close()
            pool.join()
            pool.terminate()
            for res in results:
                score_population.append(res.get())
            score_population.sort(key=lambda score_population: score_population[1], reverse=True)
            constnode_list[k].change_value(score_population[0][2])
            #记录初始值IC
            if num ==0 :
                for j in range(len(score_population)):
                    if score_population[j][2]== init_value:
                        init_IC=score_population[j][1]    
            for i in range(len(score_population)):
                print(tree_to_formula(score_population[i][0]))
                print(score_population[i][1])
            #-------------------second round--------------------#

            best_return=score_population[0][1]
            value=score_population[0][2]
            results = []
            score_population = []
            new_tree=copy.deepcopy(tree)
            score_population.append([new_tree,best_return,value])
            tree_list = []
            const_list=[]
            for i in range(value-7,value):
                if i<=0:
                    i=1
                constnode_list[k].change_value(i)
                new_tree = copy.deepcopy(tree)
                tree_list.append(new_tree)
                const_list.append(i)
              
            for i in range(value+1,value+8):
                constnode_list[k].change_value(i)
                new_tree = copy.deepcopy(tree)
                tree_list.append(new_tree)
                const_list.append(i)
            length=len(tree_list)
            pool = multiprocessing.Pool(processes=6)
            for i in range(length):
                results.append(pool.apply_async(adjust_const, (tree_list[i],const_list[i],data )))
            pool.close()
            pool.join()
            pool.terminate()
            for res in results:
                score_population.append(res.get())
            score_population.sort(key=lambda score_population: score_population[1], reverse=True)
            constnode_list[k].change_value(score_population[0][2])
            for i in range(len(score_population)):
                print(tree_to_formula(score_population[i][0]))
                print(score_population[i][1])
        pre_IC=cur_IC
        cur_IC=score_population[0][1]
        if ((cur_IC - pre_IC)<0.005):
            print("close to stable")
            return [tree_to_formula(tree),tree,cur_IC,init_IC]
        num +=1
    return [tree_to_formula(tree),tree,cur_IC,init_IC]
        
def adjust_const(tree,const_value,data):
    #计算因子值
    if tree.data is None:
        tree.data = do_calculation(tree)
    tree.data=pd.DataFrame(tree.data)
    tree.data.index=data['ret'].index
    tree.data.columns=data['ret'].columns
    tem_tree_data=tree.data[:-1]
    #print(tem_ret_df)
    #如果只是取ret_df[1:]的话，Index没办法变，还是会对应算corr，必须如果直接减的话，又因为不是datatime而有麻烦
    #tem_ret_df=pd.DataFrame(ret_df[1:].values)
    #在日期index上做了移动
    #tem_ret_df.index=ret_df.index[:-1]
    train_revenue=np.mean(tem_tree_data.corrwith(data['tem_ret'],axis=1))
    if train_revenue != train_revenue:
        train_revenue = 0
    if train_revenue < 0:
        train_revenue *=-1
    return [tree,train_revenue,const_value]


    
def evolve(pc, popsize,maxgen,data):
    population = popsize
    import xlwt
    book = xlwt.Workbook(encoding='utf-8', style_compression=0)
    sheet = book.add_sheet('result_data', cell_overwrite_ok=True)
    count=0
    for tree in population:
        print(count)
        final_formula,final_tree,final_IC,init_IC=calculate_revenue(tree,maxgen,data)
        #book.save(r'formula_score.xls')
        print(final_formula)
        f= open("result_formula.txt","a")
        f.write("\n "+final_formula)
        f2=open("new_formula.txt","a")
        f2.write("\n "+final_formula)
        k=open("result.txt","a")
        k.write("\n"+final_formula+' final IC : '+ str(final_IC)+' init IC : '+str(init_IC))
        count +=1
        #if final_tree.data is None:
        #    final_tree.data = do_calculation(final_tree)
        #final_tree.data=pd.DataFrame(final_tree.data)
        #tree.data.index=ret_df.index
        #tree.data.columns=ret_df.columns
       
def load_data(begin_time,end_time):
    high_df=pd.read_csv('../data/ownfactor/highestPrice.csv')
    high_df=high_df.set_index("Unnamed: 0")
    low_df=pd.read_csv('../data/ownfactor/lowestPrice.csv')
    
    turnoverVol_df=pd.read_csv('../data/ownfactor/turnoverVol.csv')
    turnoverValue_df=pd.read_csv('../data/ownfactor/turnoverValue.csv')
    open_df=pd.read_csv('../data/ownfactor/openPrice.csv')
    close_df=pd.read_csv('../data/ownfactor/closePrice.csv')
    vwap_df=pd.read_csv('../data/ownfactor/vwap.csv')
    ret_df=pd.read_csv('../data/ownfactor/ret.csv')
    low_df=low_df.set_index("Unnamed: 0")
    turnoverVol_df=turnoverVol_df.set_index("Unnamed: 0")
    turnoverValue_df=turnoverValue_df.set_index("Unnamed: 0")
    open_df=open_df.set_index("Unnamed: 0")
    close_df=close_df.set_index("Unnamed: 0")
    ret_df=ret_df.set_index("Unnamed: 0")
    vwap_df=vwap_df.set_index("Unnamed: 0")
    ret_df=ret_df-1
    #如果只是取ret_df[1:]的话，Index没办法变，还是会对应算corr，必须如果直接减的话，又因为不是datatime而有麻烦
    tem_ret_df=pd.DataFrame(ret_df[1:].values)
    #在日期index上做了移动
    tem_ret_df.index=ret_df.index[:-1]
    tem_ret_df.columns=ret_df.columns
    data={'open':open_df, 'high':high_df, 'low':low_df, 'close':close_df, 'vwap':vwap_df, 'volume':turnoverVol_df, 'amount':turnoverValue_df,  'ret':ret_df,'tem_ret':tem_ret_df}
    for key in data:
        data[key]=data[key][(data[key].index>begin_time)&(data[key].index<end_time)]
    return data

'''
with open('mysel.txt', 'r') as f:
    formulas = f.readlines()
#formulas=formulas[39:59]
trees=[]
for formula in formulas:
    print(formula)
    tree=formula_to_tree(formula)
    trees.append(tree)
    #paramnode_list =get_paramnode(tree) 
    #for leaf in paramnode_list:
    #    leaf.data =data[leaf.name]

   # do_calculation(tree)
print(evolve(8,trees,3))
'''



