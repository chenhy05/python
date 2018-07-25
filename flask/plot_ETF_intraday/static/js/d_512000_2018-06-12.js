var indexCode = 512000; 
var tdate = '2018-06-12'; 
var time_e = ['9:30:00', '9:40:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00', '15:05:00']; 
var oi = [11105319.18, -5127742.76, -58192663.46, -28004186.05, 181641.57, 17975832.93, -48315683.02, -43045748, -50708431.7, -91372971.69, 945166.5, 30199391.06, 16294180.82, 97941698.7, 66719418.58, -9953258.02, -11379818.81, 9609331.14, -4584663.47, -278573.96, 11342165.98, 20934582.65, 85950709.14, 48631570.46, 7168774.08, 2528260.4, -8927834.52, 1695614.58, -11191149.1, -17420320.16, -7688217.39, -11634354.75, 9828379.8, 7923204.6, -19117369.35, -2867433.93, 25246697.93, 16091439.67, 19096184.74, -16151887.32, -8001475.18, 8465877.88, 24241824.07, -6984622.39, 8094192.48, 3470761.09, -18130214.41, 12388309.57, 5863123.88]; 
var oi_cum = [11105319.18, 5977576.42, -52215087.04, -80219273.09, -80037631.52, -62061798.59, -110377481.61, -153423229.61, -204131661.31, -295504633, -294559466.5, -264360075.44, -248065894.62, -150124195.92, -83404777.34, -93358035.36, -104737854.17, -95128523.03, -99713186.5, -99991760.46, -88649594.48, -67715011.83, 18235697.31, 66867267.77, 74036041.85, 76564302.25, 67636467.73, 69332082.31, 58140933.21, 40720613.05, 33032395.66, 21398040.91, 31226420.71, 39149625.31, 20032255.96, 17164822.03, 42411519.96, 58502959.63, 77599144.37, 61447257.05, 53445781.87, 61911659.75, 86153483.82, 79168861.43, 87263053.91, 90733815, 72603600.59, 84991910.16, 90855034.04]; 
var value_B = [14939015.12, 3685112.8, 54636544.35, 76574922.92, 59825381.44, 92759573.54, 56815045.02, 46964472.85, 68291403.12, 96266203.23, 52514374.8, 84786058.93, 56896894, 175069083.52, 131919895.59, 47239927.79, 34526905.2, 41053698.59, 33611360.57, 25845180.9, 39817354.82, 45014039.53, 123119477.37, 88780916.64, 49572511.61, 34163569.62, 27852617.07, 48606391.78, 27467194.49, 27484036.29, 46236087.34, 35004213.95, 46686349.93, 58742445.85, 37306223.81, 40496410.84, 61533811.53, 65248153.47, 66848955.24, 41085992.1, 35933697.32, 59585773.38, 69870645.91, 43976355.79, 65409818.51, 82701434.72, 79559365.88, 106605368.07, 19529646.68]; 
var value_S = [3833695.94, 8812855.56, 112829207.81, 104579108.97, 59643739.87, 74783740.61, 105130728.04, 90010220.85, 118999834.82, 187639174.92, 51569208.3, 54586667.87, 40602713.18, 77127384.82, 65200477.01, 57193185.81, 45906724.01, 31444367.45, 38196024.04, 26123754.86, 28475188.84, 24079456.88, 37168768.23, 40149346.18, 42403737.53, 31635309.22, 36780451.59, 46910777.2, 38658343.59, 44904356.45, 53924304.73, 46638568.7, 36857970.13, 50819241.25, 56423593.16, 43363844.77, 36287113.6, 49156713.8, 47752770.5, 57237879.42, 43935172.5, 51119895.5, 45628821.84, 50960978.18, 57315626.03, 79230673.63, 97689580.29, 94217058.5, 13666522.8]; 
var avgPrice_B = [null, null, 535.341, 534.854, 535.219, 536.626, 535.334, 533.412, 530.06, 527.438, 529.401, 530.461, 531.566, 534.505, 536.073, 535.296, 534.349, 534.528, 535.391, 534.692, null, 536.158, 537.645, 538.579, 538.479, 537.758, 537.579, 537.852, 537.329, 536.943, 537.038, 537.071, 537.473, 538.321, 538.18, 538.195, 539.507, 539.981, 539.894, 539.965, 539.628, 539.444, 540.61, 540.075, 540.042, 540.146, 539.882, 540.026, 203.48]; 
var avgPrice_S = [null, null, 534.777, 534.28, 534.609, 536.165, 535.047, 532.936, 529.763, 527.081, 529.005, 529.848, 531.115, 534.589, 535.679, 534.975, 533.931, null, 534.809, 534.222, 535.18, 535.584, 537.363, 538.124, 537.972, 537.333, 537.081, 537.403, 536.859, 536.533, 536.476, 536.619, 537.009, 537.836, 537.724, 537.757, 539.084, 539.542, 539.47, 539.466, 539.193, 539.064, 540.124, 539.62, 539.634, 539.759, 539.523, 539.604, null]; 
var volumes = [1439869, 921272, 14166539, 13588716, 8998074, 11424346, 10780860, 9798218, 12811947, 23719148, 8692353, 12367208, 8856931, 21969971, 15292364, 7689996, 6546244, 6078148, 6153878, 4009930, 5629625, 5354325, 12758690, 9796586, 7697769, 5417142, 5110707, 7911555, 5726478, 5564347, 6423743, 5648082, 6692363, 9959056, 8332960, 6894295, 7338374, 9697521, 8953879, 8353407, 6373099, 8889607, 9649447, 7810147, 9798803, 13774778, 15219801, 15304908, 3803184]; 