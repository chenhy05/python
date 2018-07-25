import pandas as pd
import numpy as np
import os
import shutil
from random import random, randint, choice

var_names = ['open', 'high', 'low', 'close', 'vwap', 'volume', 'amount', 'ret']

unary_list = ['rank','abs', 'log', 'sign', 'sqrt', 'square', 'relu', 'sigmoid', 'sumac', 'prodac']

ts_list = ['sum', 'wma', 'tsmax', 'tsmin', 'delay', 'std', 'delta', 'tsrank', 'median',
           'highday', 'lowday', 'mean', 'decaylinear', 'var', 'ema']

binary_list = ['min', 'max', '+', '-', '*', '/', '>', '<', '==', '>=', '<=', '&', '||', '^']

bi_ts_list = ['corr', 'covariance', '?', 'sma']

all_func_list = unary_list + ts_list + binary_list + bi_ts_list

func_op_num = {'rank':1,'abs': 1, 'log': 1, 'sign': 1, 'sqrt': 1, 'square': 1, 'cube': 1, 'indneutralize': 1,
               'relu': 1, 'sigmoid': 1, 'sumac': 1, 'prodac': 1, '&': 2, '^': 2, '||': 2,
               'median': 2, 'sum': 2, 'ma': 2, 'wma': 2, 'tsmax': 2, 'tsmin': 2, 'delay': 2,
               'tsrank': 2, 'prod': 2, 'std': 2, 'delta': 2, 'highday': 2, 'lowday': 2, 'mean': 2,
               'decaylinear': 2, 'var': 2, 'ema': 2,
               'min': 2, 'max': 2, '+': 2, '-': 2, '*': 2, '/': 2,
               '>': 2, '<': 2, '==': 2, '>=': 2, '<=': 2,
               'corr': 3, 'covariance': 3, 'regbeta': 3, 'regresi': 3, '?': 3, 'sma': 3}

class fwrapper:
    def __init__(self, childcount, name):
        self.childcount = childcount
        self.name = name

class node:
    def __init__(self, fw, children):
        self.name = fw.name
        self.children = children
        self.data = None

    # def __del__(self):
    #     del self.data
    #     for child in self.children:
    #         del child

    def evaluate(self, inp):
        results = [n.evaluate(inp) for n in self.children]
        return self.function(results)

    def display(self, indent=0):
        print((' ' * indent) + self.name)
        for c in self.children:
            c.display(indent + 1)

class paramnode:
    __var_names = ['open', 'high', 'low', 'close', 'vwap', 'volume', 'amount',  'ret']

    def __init__(self, idx):
        self.idx = idx
        self.name = self.__var_names[self.idx]
        self.data = None

    # def __del__(self):
    #     del self.data

    # idx is the location in the parameters tuple
    def evaluate(self, inp):
        return inp[self.idx]

    # print the index of parameters
    def display(self, indent=0):
        print('%s%s' % (' ' * indent, self.name))

class constnode:
    def __init__(self, v):
        self.name = v
        self.data = self.name

    # def __del__(self):
    #     del self.data

    def evaluate(self, inp):
        return self.name

    def change_value(self, value):
        self.name = value
        self.data = value

    def display(self, indent=0):
        print('%s%d' % (' ' * indent, self.name))
def do_calculation(tree):
        for child in tree.children:
            if child.data is None:
                child.data = do_calculation(child)

        if tree.name == 'abs':
            return tree.children[0].data.abs()

        #新加
        elif tree.name == 'rank':
            shapes = tree.children[0].data.shape
            final_df=pd.DataFrame(np.zeros((shapes[0],shapes[1])))
            for i in range(1,shapes[0]):
                final_df.iloc[i]=np.array(tree.children[0].data.iloc[i-1].rank(ascending=True))             
            final_df=pd.DataFrame(final_df.values)
            final_df.index=tree.children[0].data.index
            final_df.columns=tree.children[0].data.columns
            return final_df
                                  
        elif tree.name == 'log':
            tree.children[0].data[tree.children[0].data<=0]=-(1/tree.children[0].data)
            return np.log(np.abs(tree.children[0].data))

        elif tree.name == 'sign':
            return np.sign(tree.children[0].data)

        elif tree.name == 'sqrt':
            return np.sqrt(np.abs(tree.children[0].data))

        elif tree.name == 'square':
            return np.square(tree.children[0].data)

        elif tree.name == 'cube':
            return np.power(tree.children[0].data, 3)

        elif tree.name == 'indneutralize':
            data = copy.copy(tree.children[0].data)
            for i in range(len(self.industry_code)):
                if len(self.industry_code[i]) == 1:
                    continue
                avg = tree.children[0].data.loc[:, self.industry_code[i]].mean(axis=1, numeric_only=True)
                data.loc[:, self.industry_code[i]] = tree.children[0].data.loc[:, self.industry_code[i]].sub(avg,
                                                                                                             axis='index')
            return data

        elif tree.name == 'sigmoid':
            return 1 / (1 + np.exp(-tree.children[0].data))

        elif tree.name == 'relu':
            data_tem = tree.children[0].data
            data_tem[data_tem < 0] = 0
            return data_tem



        # -----------------ts_list--------------------#
        elif tree.name == 'sum':
            window = tree.children[1].data
            if window<0:
                window=1
                tree.children[1].data=1
            return tree.children[0].data.rolling(window).sum()
        

        elif tree.name == 'wma':
            window = tree.children[1].data
            weight = np.power(0.9, np.arange(start=window, stop=0, step=-1))
            _wma = lambda x: np.nansum(x * weight)
            return tree.children[0].data.rolling(window).apply(_wma)

        elif tree.name == 'tsmax':
            window = tree.children[1].data
            return tree.children[0].data.rolling(window).max()

        elif tree.name == 'tsmin':
            window = tree.children[1].data
            return tree.children[0].data.rolling(window).min()

        elif tree.name == 'delay':
            window = tree.children[1].data
            return tree.children[0].data.shift(window)

        elif tree.name == 'std':
            window = tree.children[1].data
            return tree.children[0].data.rolling(window).std()

        elif tree.name == 'delta':
            window = tree.children[1].data
            return tree.children[0].data - tree.children[0].data.shift(window)

        elif tree.name == 'tsrank':
            window = tree.children[1].data
            _rank = lambda x: (x <= (np.array(x))[-1]).sum() / float(x.shape[0])
            return tree.children[0].data.rolling(window).apply(_rank)

        elif tree.name == 'highday':
            window = tree.children[1].data
            def rolling_highday(df):
                return window - 1 - np.argmax(df)

            return tree.children[0].data.rolling(window).apply(rolling_highday)

        elif tree.name == 'lowday':
            window = tree.children[1].data
            def rolling_highday(df):
                return window - 1 - np.argmin(df)

            return tree.children[0].data.rolling(window).apply(rolling_highday)

        elif tree.name == 'mean':
            window = tree.children[1].data
            return tree.children[0].data.rolling(window).mean()

        elif tree.name == 'decaylinear':
            window = tree.children[1].data
            dividend = window * (window + 1) / 2
            weights = (np.arange(window) + 1) / dividend

            def _decay_linear_avg(df):
                return np.nansum(df * weights)

            return tree.children[0].data.rolling(window).apply(_decay_linear_avg)

        elif tree.name == 'median':
            window = tree.children[1].data
            return tree.children[0].data.rolling(window).median()

        elif tree.name == 'var':
            window = tree.children[1].data
            return tree.children[0].data.rolling(window).var()

        # ------------------------binary_list-----------------------------#
        elif tree.name == 'max':
            return np.maximum(tree.children[0].data, tree.children[1].data)

        elif tree.name == 'min':
            return np.minimum(tree.children[0].data, tree.children[1].data)
        #新加
        elif tree.name== '<':
            return tree.children[0].data < tree.children[1].data
        elif tree.name== '<=':
            return tree.children[0].data <= tree.children[1].data
        elif tree.name== '>':
            return tree.children[0].data > tree.children[1].data
        elif tree.name== '>=':
            return tree.children[0].data >= tree.children[1].data
        elif tree.name== '==':
            return tree.children[0].data == tree.children[1].data

        elif tree.name == '+':
            return tree.children[0].data + tree.children[1].data

        elif tree.name == '-':
            return tree.children[0].data - tree.children[1].data

        elif tree.name == '*':
            return tree.children[0].data * tree.children[1].data

        elif tree.name == '/':
            return tree.children[0].data / tree.children[1].data
        elif tree.name == '^':
            return tree.children[0].data ** tree.children[1].data
      
        elif tree.name == '||':
            return (tree.children[0].data | tree.children[1].data)
        
        elif tree.name == '&':
            return (tree.children[0].data & tree.children[1].data)

        # -------------------------bi_ts_list------------------------#
        elif tree.name == 'corr':
            window = tree.children[2].data
            return tree.children[0].data.rolling(window).corr(tree.children[1].data)

        elif tree.name == 'covariance':
            window = tree.children[2].data
            return tree.children[0].data.rolling(window).cov(tree.children[1].data)
        elif tree.name=='sma':
            n=tree.children[1].data          
            m=tree.children[2].data
            #不加的话nan,inf会逐渐累积造成算corr时出现nan
            tree.children[0].data=tree.children[0].data.fillna(0)
            tree.children[0].data=tree.children[0].data.replace(np.inf,0)
            tree.children[0].data=tree.children[0].data.replace(-np.inf,0)
            shapes=tree.children[0].data.shape
            final_df=pd.DataFrame(np.zeros((shapes[0],shapes[1])))
            for i in range(1,shapes[0]):
                final_df.iloc[i]=(np.array(m*tree.children[0].data.iloc[i-1])+np.array((n-m)*final_df.iloc[i-1]))/n
            return final_df
        elif tree.name=='?':
            tree.children[0].data[tree.children[0].data==True]=tree.children[1].data
            tree.children[0].data[tree.children[0].data==False]=tree.children[2].data
            return tree.children[0].data
        else:
            print("Cannot recognize tree name", tree.name)
            exit()
def tree_to_formula(tree):
    if isinstance(tree, node):
        if tree.name in ['||','&','+', '-', '*', '/', '>', '<', '==', '>=', '<=', '^']:
            string_1 = tree_to_formula(tree.children[0])
            string_2 = tree_to_formula(tree.children[1])
            return str('(' + string_1 + tree.name + string_2 + ')')
        elif tree.name == '?':
            result = [tree_to_formula(tree.children[0]), '?', tree_to_formula(tree.children[1]), ':',
                      tree_to_formula(tree.children[2])]
            return ''.join(result)
        else:
            result = [tree.name, '(']
            for i in range(len(tree.children)):
                string_i = tree_to_formula(tree.children[i])
                result.append(string_i)
                result.append(',')
            result.pop()
            result.append(')')
            return ''.join(result)
    elif isinstance(tree, paramnode):
        return str(tree.name)
    else:
        return str(tree.name)

def check_sanity(formula):
    count = 0
    for i in range(len(formula)):
        if formula[i] == '(':
            count += 1
        if formula[i] == ')':
            count -= 1
        if count < 0:
            return 0
    if count != 0:
        return 0
    return 1

def formula_to_tree(formula):
    formula = formula.replace('*-1', '*(0-1)')
    formula = formula.replace('(-1', '((0-1)')
    while(1):
        if formula[0] == '(':
            if check_sanity(formula[1:-1]):
                formula = formula[1:-1]
            else:
                break
        else:
            break
    if formula in var_names:
        return paramnode(var_names.index(formula))
    elif formula.isdigit():
        return constnode(int(formula))
    elif formula[0] == '0' and formula[1] == '.' and len(formula) < 5:
        return constnode(float(formula))
    var_stack = []
    op_stack = []
    count = 0
    pointer = 0
    k = 0
    while k < len(formula):
        if formula[k] == '(' and count == 0:
            for i in range(k, len(formula)):
                if formula[i] == '(': count += 1
                elif formula[i] == ')': count -= 1
                if count == 0: break
            index = i  # index points at ')'
            tree_k = formula_to_tree(formula[k:index+1])
            var_stack.append(tree_k)
            if i == len(formula) - 1:
                k = i
                pointer = i
            else:
                k = i
                pointer = i+1
        if formula[k] in ['+', '-', '*', '/', '?', '>', '&', '^']:
            op = formula[k]
            for func in func_list:
                if func.name == op:
                    fw_k = func
                    break
            op_stack.append(fw_k)
            pointer = k+1
        elif formula[k] == ':':
            pointer = k+1
            count = 0
            flag = 0
            for i in range(k+1, len(formula)):
                if formula[i] == '(':
                    count += 1
                    flag = 1
                elif formula[i] == ')':
                    count -= 1
                if count == 0 and flag == 1:
                    # i points at ')'
                    var_stack.append(formula_to_tree(formula[pointer:i+1]))
                    if i+1 == len(formula):
                        pointer = i
                    else:
                        pointer = i+1
                    k = pointer
                    break
                elif count < 0 and flag == 0:
                    var_stack.append(formula_to_tree(formula[pointer:i]))
                    pointer = i
                    break
        elif formula[pointer:k+1] in unary_list:
            cnt_tem = 0
            op = formula[pointer:k+1]
            for func in func_list:
                if func.name == op:
                    fw = func
                    break
            for i in range(k+1, len(formula)):
                if formula[i] == '(':
                    cnt_tem += 1
                if formula[i] == ')':
                    cnt_tem -= 1
                if cnt_tem == 0:
                    children = [formula_to_tree(formula[k+1:i+1])]
                    tree_k = node(fw, children)
                    var_stack.append(tree_k)
                    break
            k = i
            pointer = k+1
        elif formula[pointer:k+1] in ['==', '<', '>=', '<=', '||']:
            op = formula[pointer:k+1]
            for func in func_list:
                if func.name == op:
                    fw_k = func
                    break
            op_stack.append(fw_k)
            pointer = k+1
        elif (formula[pointer:k+1] in ts_list or formula[pointer:k+1] in binary_list) and formula[k+1] == '(':
            children = []
            cnt_tem = 0
            op = formula[pointer:k+1]
            for func in func_list:
                if func.name == op:
                    fw = func
                    break
            for i in range(k+1, len(formula)):
                if formula[i] == '(':
                    cnt_tem += 1
                if formula[i] == ')':
                    cnt_tem -= 1
                if formula[i] == ',' and cnt_tem == 1:
                    index = i
                if cnt_tem == 0:
                    children.append(formula_to_tree(formula[k+2:index]))
                    children.append(formula_to_tree(formula[index+1:i]))
                    tree_k = node(fw, children)
                    var_stack.append(tree_k)
                    break
            k = i
            pointer = k+1
        elif formula[pointer:k+1] in bi_ts_list:
            cnt_tem = 0
            idx_list = []
            children = []
            op = formula[pointer:k+1]
            for func in func_list:
                if func.name == op:
                    fw = func
                    break
            for i in range(k+1, len(formula)):
                if formula[i] == '(':
                    cnt_tem += 1
                if formula[i] == ')':
                    cnt_tem -= 1
                if formula[i] == ',' and cnt_tem == 1:
                    idx_i = i
                    idx_list.append(idx_i)
                if cnt_tem == 0:
                    children.append(formula_to_tree(formula[k+2:idx_list[0]]))
                    children.append(formula_to_tree(formula[idx_list[0]+1:idx_list[1]]))
                    children.append(formula_to_tree(formula[idx_list[1]+1:i+1]))
                    tree_k = node(fw, children)
                    var_stack.append(tree_k)
                    break
            k = i
            pointer = k+1
        elif formula[pointer:k+1] in var_names and (k+1 == len(formula) or not formula[k+1].isalpha()):
            var_stack.append(paramnode(var_names.index(formula[pointer:k+1])))
            pointer = k+1
        elif formula[pointer:k+1].isdigit() and (k+1 == len(formula) or formula[k+1] not in '.0123456789'):
            var_stack.append(constnode(int(formula[pointer:k+1])))
            pointer = k+1
        elif formula[pointer] == '0' and (k+1 == len(formula) or formula[k+1] not in '.0123456789'):
            var_stack.append(constnode(float(formula[pointer:k+1])))
            pointer = k+1
        # elif '.' in formula[pointer:k+1] and (k+1 == len(formula) or formula[k+1] not in '0123456789'):
        #     var_stack.append(constnode)
        k += 1
        if len(op_stack) > 0:
            while op_stack[-1].name == '?':
                if len(var_stack) < 3:
                    break
                else:
                    fw = op_stack.pop()
                    rchild = var_stack.pop()
                    mchild = var_stack.pop()
                    lchild = var_stack.pop()
                    children = [lchild, mchild, rchild]
                    tree_k = node(fw, children)
                    var_stack.append(tree_k)
                if len(op_stack) == 0:
                    break
            while len(var_stack) >= 2 and op_stack[-1].name != '?':
                try:
                    fw = op_stack.pop()
                    rchild = var_stack.pop()
                    lchild = var_stack.pop()
                    children = [lchild, rchild]
                    tree_k = node(fw, children)  # k here is to avoid duplicate
                    var_stack.append(tree_k)
                except:
                    for item in var_stack:
                        if isinstance(item, constnode):print(item.name)
                        else:print(item.name)
                    raise NotImplementedError
    if len(var_stack) != 1 or len(op_stack) != 0:
        print("There's an error!")
        raise NotImplementedError
    return var_stack[0]

def get_paramnode(tree):
    list = []
    if isinstance(tree, paramnode):
        return [tree]
    elif isinstance(tree, constnode):
        return []
    elif isinstance(tree, node):
        for child in tree.children:
            result = get_paramnode(child)
            list.extend(result)
    return list
def get_constnode(tree):
    list = []
    if isinstance(tree, constnode):
        if tree.data < 1:
            return []
        else:
            return [tree]
    elif isinstance(tree, paramnode):
        return []
    else:
        for children in tree.children:
            result = get_constnode(children)
            list.extend(result)
        return list

func_list = []

for i, func in enumerate(all_func_list):
    func_i = fwrapper(func_op_num[func], str(func))
    func_list.append(func_i)
                                                                                                                    
