var indexCode = 159915; 
var tdate = '2018-06-12'; 
var time_e = ['9:30:00', '9:40:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00', '15:05:00']; 
var oi = [13831577.91, -1094604.12, -101888272.42, 26994788.24, 85301828.14, -23971394.5, -133806866.84, -143937396.84, -158555116.05, -151624619.46, 8618065.09, 111302480, -26013881.56, 103591810.49, 67559460.55, -31523772.6, -13188702.4, 56172490.28, -48895561.4, 61347254, 13575129.65, 127602436.69, 106980813.13, 69989659.3, 2644315.99, 22587769.24, 5288721.3, 31144306.94, -29627206.19, -42566116.82, -291407.6, 10267508.96, 141859605.81, 86827915.74, 9014871.14, 197018579.86, 62527265.42, 50589995.97, 57071332.5, -2366875.05, -13970648.5, 67409546.46, 70600702.69, 41597083.47, 40550975.97, 63139398.23, -60919374.35, 10803232.73, -2929591.9]; 
var oi_cum = [13831577.91, 12736973.79, -89151298.63, -62156510.39, 23145317.75, -826076.75, -134632943.59, -278570340.43, -437125456.48, -588750075.94, -580132010.85, -468829530.85, -494843412.41, -391251601.92, -323692141.37, -355215913.97, -368404616.37, -312232126.09, -361127687.49, -299780433.49, -286205303.84, -158602867.15, -51622054.02, 18367605.28, 21011921.27, 43599690.51, 48888411.81, 80032718.75, 50405512.56, 7839395.74, 7547988.14, 17815497.1, 159675102.91, 246503018.65, 255517889.79, 452536469.65, 515063735.07, 565653731.04, 622725063.54, 620358188.49, 606387539.99, 673797086.45, 744397789.14, 785994872.61, 826545848.58, 889685246.81, 828765872.46, 839569105.19, 836639513.29]; 
var value_B = [64190177.25, 62477002.18, 314219828.46, 336470251.16, 341064489.13, 286170689.39, 201044432.56, 196657326.83, 252922806.9, 344949406.05, 193319990.09, 295290718.38, 166595378.75, 254880892.01, 199019324.71, 103282232.94, 96189846.41, 170302459.25, 111055881.57, 163651050.09, 118477364.78, 236109534.08, 231846584.43, 167410613.06, 138843124.96, 113267033.1, 118790460.89, 139665331.32, 99815548.49, 110493264.35, 126797641.59, 124477184.64, 267031022.39, 231153934.6, 165417399.03, 354311153.02, 247874948.99, 236347296.37, 230791028.51, 144223873.91, 137073797.27, 204462792.67, 222176062.4, 235096753.21, 239580638.49, 277976660.99, 269823688.88, 134092352.61, 113562778.5]; 
var value_S = [50358599.34, 63571606.3, 416108100.88, 309475462.92, 255762660.99, 310142083.89, 334851299.4, 340594723.67, 411477922.95, 496574025.51, 184701925, 183988238.38, 192609260.31, 151289081.52, 131459864.16, 134806005.54, 109378548.81, 114129968.97, 159951442.97, 102303796.09, 104902235.13, 108507097.39, 124865771.3, 97420953.76, 136198808.97, 90679263.86, 113501739.59, 108521024.38, 129442754.68, 153059381.17, 127089049.19, 114209675.68, 125171416.58, 144326018.86, 156402527.89, 157292573.16, 185347683.57, 185757300.4, 173719696.01, 146590748.96, 151044445.77, 137053246.21, 151575359.71, 193499669.74, 199029662.52, 214837262.76, 330743063.23, 123289119.88, 116492370.4]; 
var avgPrice_B = [2043.18, 2146.739, 2140.297, null, null, null, null, null, 2115.92, 2108.574, null, 2119.066, 2121.053, 2124.493, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; 
var avgPrice_S = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; 
var volumes = [8352433, 9217515, 53371964, 40952700, 37832999, 40208652, 33988107, 33902207, 45361501, 59456882, 23522825, 33979415, 26380299, 28472634, 21571720, 14736510, 14348141, 17176409, 17415029, 17983040, 14243835, 22977756, 23704930, 17696696, 18479748, 12755857, 14311654, 15984652, 14959046, 17627466, 15471689, 15093975, 22951647, 22136395, 18966122, 34722436, 28101415, 26554588, 25770078, 19627996, 18028467, 22125140, 24485873, 28630082, 26908497, 32263794, 39833805, 17590791, 14998039]; 