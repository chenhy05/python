var indexCode = 510020; 
var tdate = '2018-06-12'; 
var time_e = ['9:35:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00']; 
var oi = [19608833.42, -64518323.31, 100589266.29, 84592275.13, 67945996.02, -75848635.34, -104907233.35, -103047083.3, -127827370.8, -15285731.9, 47262794.23, -7042102.33, 143680548.09, 231538570.68, 26734672.07, -36367261.43, 96230329.29, -22574469.31, 49391964.29, 53024138.87, 201911612.55, 265780710.13, 148723798.62, 40051058.91, 179564139.55, 90408832.12, 25807965.97, -39526191.38, -49007316.4, 27798600.68, 28250352.28, 56466563.27, 29070848.72, -36913205.54, -8976014.34, 78675511.86, 80590844.02, 103964107.5, -18766884.45, 15837239.81, 83973546.29, 179970438.28, -45687360.62, 68091700.76, 43460334.54, -55031504.91, 13476271.23]; 
var oi_cum = [19608833.42, -44909489.89, 55679776.4, 140272051.53, 208218047.55, 132369412.21, 27462178.86, -75584904.44, -203412275.24, -218698007.14, -171435212.91, -178477315.24, -34796767.15, 196741803.53, 223476475.6, 187109214.17, 283339543.46, 260765074.15, 310157038.44, 363181177.31, 565092789.86, 830873499.99, 979597298.61, 1019648357.52, 1199212497.07, 1289621329.19, 1315429295.16, 1275903103.78, 1226895787.38, 1254694388.06, 1282944740.34, 1339411303.61, 1368482152.33, 1331568946.79, 1322592932.45, 1401268444.31, 1481859288.33, 1585823395.83, 1567056511.38, 1582893751.19, 1666867297.48, 1846837735.76, 1801150375.14, 1869242075.9, 1912702410.44, 1857670905.53, 1871147176.76]; 
var value_B = [76445370.42, 130246555.84, 314579242.94, 291640621.23, 283200403.66, 179358537.98, 139694681.74, 133701479.01, 178768383.31, 133946801.97, 197005048.37, 118954855.26, 344772039.69, 408088966.6, 204222029.64, 113680515.17, 232561023.32, 125718893.99, 145543197.74, 183429771.29, 315518161.82, 388875241.31, 310016826.34, 251487933.18, 360320186.4, 254837766.5, 190964170.38, 167246706.48, 142191709.72, 170878109.35, 159280891.69, 190340943.85, 211369841.19, 127483284.21, 121364820.54, 208195243.66, 224246347.99, 231779565.82, 146475317.44, 154303982.19, 240860853.51, 335383118.25, 175695184.76, 217477855.32, 229085330.33, 280280129.47, 333839554.84]; 
var value_S = [56836537, 194764879.15, 213989976.65, 207048346.1, 215254407.64, 255207173.32, 244601915.09, 236748562.31, 306595754.11, 149232533.87, 149742254.14, 125996957.59, 201091491.6, 176550395.92, 177487357.57, 150047776.6, 136330694.03, 148293363.3, 96151233.45, 130405632.42, 113606549.27, 123094531.18, 161293027.72, 211436874.27, 180756046.85, 164428934.38, 165156204.41, 206772897.86, 191199026.12, 143079508.67, 131030539.41, 133874380.58, 182298992.47, 164396489.75, 130340834.88, 129519731.8, 143655503.97, 127815458.32, 165242201.89, 138466742.38, 156887307.22, 155412679.97, 221382545.38, 149386154.56, 185624995.79, 335311634.38, 320363283.61]; 
var avgPrice_B = [1262.105, 1263.774, 1266.231, 1270.281, 1273.012, 1269.944, 1266.59, 1262.751, 1260.129, 1263.854, 1265.522, 1267.298, 1271.252, 1273.504, 1272.844, 1271.587, 1273.854, 1275.576, 1274.876, 1277.501, 1279.982, 1281.659, 1283.712, 1284.704, 1284.901, 1285.325, 1284.502, 1282.755, 1282.394, 1282.922, 1284.851, 1285.542, 1286.12, 1284.811, 1284.786, 1285.923, 1286.563, 1287.795, 1287.787, 1287.484, 1287.36, 488.879, 488.304, 488.26, 1288.418, 1287.071, 1286.51]; 
var avgPrice_S = [1261.45, 1263.363, 1265.418, 1269.795, 1272.222, 1269.558, 1266.197, 1262.519, 1259.247, 1263.377, 1265.104, 1266.906, 1271.47, 1273.081, 1272.384, 1271.204, 1273.324, 1274.812, 1274.274, 1277.092, 1279.224, 1281.061, 1282.989, 1284.018, 1284.426, 1284.899, 1284.049, 1282.258, 1281.971, 1282.275, 1284.324, 1285.27, 1285.681, 1284.452, 1284.448, 1285.495, 1286.15, 1287.559, 1287.423, 1287.05, 1287.077, 488.527, 487.957, 487.949, 1288.075, 1286.562, 1286.133]; 
var volumes = [5644360, 16970570, 24016923, 22472472, 21235054, 21479481, 21996203, 22251226, 28868222, 15165485, 16833694, 12521631, 19292093, 21861729, 18849147, 12717735, 15021373, 11653838, 12043815, 13175730, 16423760, 19082295, 19506648, 23096421, 16623265, 18679101, 16912968, 11505445, 16104941, 18583832, 12991488, 14363018, 17188092, 15314435, 10659628, 18638920, 17408040, 20417504, 18248199, 16041382, 20251863, 31870631, 20585596, 26485162, 29754991, 36616521, 35756299]; 
