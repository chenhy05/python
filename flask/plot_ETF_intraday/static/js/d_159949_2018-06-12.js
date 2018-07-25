var indexCode = 159949; 
var tdate = '2018-06-12'; 
var time_e = ['9:30:00', '9:35:00', '9:40:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00', '15:05:00']; 
var oi = [11606189.07, 2010624.24, -6121942.14, -67814290.04, 44283797.8, 46592289.56, -10171394.49, -60193864.5, -72262363.04, -79979068.57, -69932405.25, 7915746.98, 58627188.18, -6898812.61, 62606767.87, 45295061.57, -15765242.5, 9673088.63, 27821318.97, -25424360.5, 42062941.38, 15453246.54, 86386971.38, 67233002.29, 51194207.33, 7190491.61, 17447915.31, 9337749.01, 30088148.22, -16727268.92, -19469001.17, 11209091.58, 15198371.98, 62374249.29, 58265664.02, -7317118.79, 150329824.3, 62202505.48, 43175763.8, 49684251.73, -11452050.67, -12034657.45, 59339864.65, 63163189.22, 59094262.37, 53209723.84, 62903900.34, -22654901.78, 14018257.02, 5425070.25]; 
var oi_cum = [11606189.07, 13616813.31, 7494871.17, -60319418.87, -16035621.07, 30556668.49, 20385274, -39808590.5, -112070953.54, -192050022.11, -261982427.36, -254066680.38, -195439492.2, -202338304.81, -139731536.94, -94436475.37, -110201717.87, -100528629.24, -72707310.27, -98131670.77, -56068729.39, -40615482.85, 45771488.53, 113004490.82, 164198698.15, 171389189.76, 188837105.07, 198174854.08, 228263002.3, 211535733.38, 192066732.21, 203275823.79, 218474195.77, 280848445.06, 339114109.08, 331796990.29, 482126814.59, 544329320.07, 587505083.87, 637189335.6, 625737284.93, 613702627.48, 673042492.13, 736205681.35, 795299943.72, 848509667.56, 911413567.9, 888758666.12, 902776923.14, 908201993.39]; 
var value_B = [32051114.85, 3180294, 26704006.12, 147586221.92, 189199886.48, 168523698.9, 149558500.17, 111183752.44, 104091206.94, 110517377.82, 180470122.48, 94406553.77, 139639327.62, 72947245.86, 132265813.44, 105379668.12, 50111104.37, 58390975, 75775586.18, 58613141.79, 89755198.49, 58766086.16, 140416984.06, 132515285.35, 99171097.98, 82957870.45, 67323191.87, 67081543.89, 86449874.73, 58521082.65, 55914053.55, 70269674.36, 72641140.69, 127331268.52, 134294046.09, 82055412.59, 222864156.16, 168601361.06, 145273961.88, 154789764.91, 75494861.43, 70923880.07, 129500461.47, 149560450.91, 159660498.58, 151658291.43, 179532171.06, 159335771.67, 79242787.31, 71178147.89]; 
var value_S = [20444925.78, 1169669.76, 32825948.26, 215400511.96, 144916088.68, 121931409.34, 159729894.66, 171377616.94, 176353569.98, 190496446.39, 250402527.73, 86490806.79, 81012139.44, 79846058.47, 69659045.57, 60084606.55, 65876346.87, 48717886.37, 47954267.21, 84037502.29, 47692257.11, 43312839.62, 54030012.68, 65282283.06, 47976890.65, 75767378.84, 49875276.56, 57743794.88, 56361726.51, 75248351.57, 75383054.72, 59060582.78, 57442768.71, 64957019.23, 76028382.07, 89372531.38, 72534331.86, 106398855.58, 102098198.08, 105105513.18, 86946912.1, 82958537.52, 70160596.82, 86397261.69, 100566236.21, 98448567.59, 116628270.72, 181990673.45, 65224530.29, 65753077.64]; 
var avgPrice_B = [1001.11, null, 1000.641, 997.052, 995.902, 997.125, 996.465, 993.611, 991.286, 987.521, 984.211, 987.409, 988.641, 988.766, 990.889, 992.705, 992.79, 991.396, 992.666, 992.057, 991.178, 992.203, 993.608, 996.133, 997.544, 988.072, 988.163, 988.254, 989.153, 988.941, 987.871, 986.586, 987.171, 988.825, 991.308, 991.43, 992.16, 994.561, 995.46, 996.328, 995.112, 994.904, 995.261, 996.243, 995.954, 996.685, 997.432, 996.598, 996.401, 996.36]; 
var avgPrice_S = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; 
var volumes = [4540168, 267212, 4931617, 28637961, 24288283, 21947265, 25636518, 20660166, 20534836, 22432263, 32224959, 12564368, 16013502, 11049092, 14858444, 12196287, 8239029, 7599913, 8867395, 9614290, 9954896, 7102772, 13827297, 14732364, 10809583, 11439322, 7861719, 8798803, 10110773, 10003322, 10951271, 8924010, 8721954, 13015114, 13950541, 11159908, 23462152, 19236458, 16831486, 17401558, 11691555, 11297736, 13881795, 16512401, 18667800, 16936002, 20567419, 24399371, 10808024, 9214465]; 