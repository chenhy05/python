var indexCode = 510300; 
var tdate = '2018-06-12'; 
var time_e = ['9:30:00', '9:35:00', '9:40:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00', '15:05:00']; 
var oi = [297410350.45, 34747285.76, -17787433.34, -574299130.4, 134163764.27, 594357438.54, 172734372.62, -530786205.6, -609814182.14, -468809289.2, -886511709.59, -23557903.1, 481749034.31, 87444033.51, 743453158.68, 668464391.8, -21301955.89, 7203081.78, 464233147.62, -87087519.41, 394117559.47, 318980684.59, 656794849.55, 1079628979.68, 647013856.29, 408689152.45, 634959924.02, 391894770.35, 336798543.6, -66436247.08, -198613143.55, 104652606.76, 285139436.21, 649546546.64, 422703614.26, -43887031.67, 315971299.06, 530609255.27, 779896100.32, 402701301.47, -98134331.14, -124605869.5, 278078054.34, 558245288.88, -322909781.63, 295992731.25, 132514971.5, -266652673.8, 80907418.02, 143952719.77]; 
var oi_cum = [297410350.45, 332157636.21, 314370202.87, -259928927.53, -125765163.26, 468592275.28, 641326647.9, 110540442.3, -499273739.84, -968083029.04, -1854594738.63, -1878152641.73, -1396403607.42, -1308959573.91, -565506415.23, 102957976.57, 81656020.68, 88859102.46, 553092250.08, 466004730.67, 860122290.14, 1179102974.73, 1835897824.28, 2915526803.96, 3562540660.25, 3971229812.7, 4606189736.72, 4998084507.07, 5334883050.67, 5268446803.59, 5069833660.04, 5174486266.8, 5459625703.01, 6109172249.65, 6531875863.91, 6487988832.24, 6803960131.3, 7334569386.57, 8114465486.89, 8517166788.36, 8419032457.22, 8294426587.72, 8572504642.06, 9130749930.94, 8807840149.31, 9103832880.56, 9236347852.06, 8969695178.26, 9050602596.28, 9194555316.05]; 
var value_B = [384146833.31, 215070792.45, 120841542.11, 1028522245.69, 1643287320.57, 1927898807.09, 1644437703.73, 1109350150.24, 1075398711.53, 1058757807.7, 1309119731.88, 846425747.48, 1292893607.8, 893154800.88, 1598582196.53, 1442204624.57, 798203774.76, 675701290.38, 1113837846.57, 725709056.66, 951620075.09, 924790568.88, 1254496731.02, 1745784761.49, 1326522000.93, 1358689845.28, 1330811166.86, 1220184791.6, 1204744860.46, 848211044.55, 748856953.45, 807548375.07, 1009422814.76, 1429440290.21, 1298145997.74, 906554798.03, 1129753583.43, 1302454817.3, 1712155611.86, 1383716465.14, 931924471.15, 953420913.45, 1215179279.56, 1480629907.08, 1109193956.72, 1442436645.39, 1431002791.66, 1465615039.12, 1512139246.53, 361233430.5]; 
var value_S = [86736482.86, 180323506.69, 138628975.45, 1602821376.09, 1509123556.3, 1333541368.55, 1471703331.11, 1640136355.84, 1685212893.67, 1527567096.9, 2195631441.47, 869983650.58, 811144573.49, 805710767.37, 855129037.85, 773740232.77, 819505730.65, 668498208.6, 649604698.95, 812796576.07, 557502515.62, 605809884.29, 597701881.47, 666155781.81, 679508144.64, 950000692.83, 695851242.84, 828290021.25, 867946316.86, 914647291.63, 947470097, 702895768.31, 724283378.55, 779893743.57, 875442383.48, 950441829.7, 813782284.37, 771845562.03, 932259511.54, 981015163.67, 1030058802.29, 1078026782.95, 937101225.22, 922384618.2, 1432103738.35, 1146443914.14, 1298487820.16, 1732267712.92, 1431231828.51, 217280710.73]; 
var avgPrice_B = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6743.671, null, null]; 
var avgPrice_S = [null, null, null, 6649.913, 6647.275, 6659.335, 6666.545, 6652.75, 6637.467, 6622.816, 6605.686, 6622.017, 6629.096, 6637.233, 6653.897, 6662.115, 6660.025, 6652.61, 6659.871, 6661.72, 6661.648, 6670.666, 6676.662, 6689.359, 6695.905, 6701.055, 6702.075, 6705.32, 6708.634, 6703.297, 6701.283, 6698.448, 6704.221, 6711.049, 6719.047, 6715.805, 6714.831, 6724.617, 6732.278, 6737.817, 6732.41, 6732.502, 6732.943, 5941.436, 5940.168, 5942.576, 6743.858, 6739.934, 6738.721, null]; 
var volumes = [26748875, 27724620, 14153629, 170268292, 193789535, 192614732, 182377354, 172226336, 208917670, 192095848, 261203875, 118553581, 151716001, 109715241, 147623887, 127433535, 104918176, 85888697, 98588141, 94022621, 91824144, 88765954, 101586334, 165167017, 118731401, 155567130, 108356128, 136863237, 132458307, 107616442, 121944488, 98680352, 101860391, 147293915, 142099923, 153196451, 124015424, 133142742, 190772376, 153843875, 131669029, 148683004, 135985113, 152686346, 169069774, 170317911, 188785101, 227935960, 206606408, 37486054]; 
