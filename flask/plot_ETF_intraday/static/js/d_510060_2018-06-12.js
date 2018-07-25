var indexCode = 510060; 
var tdate = '2018-06-12'; 
var time_e = ['9:30:00', '9:35:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00']; 
var oi = [39474603.88, 7350743.27, -75448869.58, 65664053.14, 75170604.44, 18879376.67, -69489784.34, -58076672.24, -86957237.98, -183539866.02, -17301777.81, 91068267.15, -14536090.38, 120382044.65, 172290381.39, -2247609.38, -28302183.97, 31295593.65, -14955698.12, 15995529.99, 28253293.34, 73767042.72, 153554102.16, 85996718.4, 81102889.56, 58648408.76, 57379991.25, 19900379.2, 13429845.85, -25081280.97, 8315897.21, 2048739.41, 67787392.23, 111647873.33, -9062421.11, 35566640.73, 118531931.11, 112658989.9, 125822995.89, -32234237.34, -933263, 44282565.91, 93765871.91, -13642540.11, 83503715.93, 48339710.59, 24903419.81, -13933571.54]; 
var oi_cum = [39474603.88, 46825347.15, -28623522.43, 37040530.71, 112211135.15, 131090511.82, 61600727.48, 3524055.24, -83433182.74, -266973048.76, -284274826.57, -193206559.42, -207742649.8, -87360605.15, 84929776.24, 82682166.86, 54379982.89, 85675576.54, 70719878.42, 86715408.41, 114968701.75, 188735744.47, 342289846.63, 428286565.03, 509389454.59, 568037863.35, 625417854.6, 645318233.8, 658748079.65, 633666798.68, 641982695.89, 644031435.3, 711818827.53, 823466700.86, 814404279.75, 849970920.48, 968502851.59, 1081161841.49, 1206984837.38, 1174750600.04, 1173817337.04, 1218099902.95, 1311865774.86, 1298223234.75, 1381726950.68, 1430066661.27, 1454970081.08, 1441036509.54]; 
var value_B = [39474603.88, 44285013.34, 118135319.6, 243602170.95, 252763347.51, 205675590.18, 160059878.75, 158241815.02, 150445897.91, 185956549.91, 141200597.69, 221078412.91, 114035254.67, 242609031.24, 302893808.64, 151846707.12, 82657820.12, 133035954.83, 108979414.06, 116699234.41, 116558121.03, 152810891.12, 252059916.3, 188852101.08, 224366173.56, 153744274.69, 178404476.48, 159340230.07, 137352594.7, 100004468.79, 122368863.81, 126296894.3, 194241810.6, 242450300.29, 153112563.15, 163906084.81, 216439296.94, 229043730.91, 277597624.54, 138262068.16, 148521339.48, 175586044.58, 232646031.27, 161884935.8, 229363928.25, 237617322.57, 287044970.04, 289071139.43]; 
var value_S = [0, 36934270.07, 193584189.18, 177938117.81, 177592743.07, 186796213.51, 229549663.09, 216318487.26, 237403135.89, 369496415.93, 158502375.5, 130010145.76, 128571345.05, 122226986.59, 130603427.25, 154094316.5, 110960004.09, 101740361.18, 123935112.18, 100703704.42, 88304827.69, 79043848.4, 98505814.14, 102855382.68, 143263284, 95095865.93, 121024485.23, 139439850.87, 123922748.85, 125085749.76, 114052966.6, 124248154.89, 126454418.37, 130802426.96, 162174984.26, 128339444.08, 97907365.83, 116384741.01, 151774628.65, 170496305.5, 149454602.48, 131303478.67, 138880159.36, 175527475.91, 145860212.32, 189277611.98, 262141550.23, 303004710.97]; 
var avgPrice_B = [677.09, 747.66, 745.584, 745.03, 745.993, 747.132, 745.521, 743.633, 740.152, 737.42, 739.403, 740.548, 741.44, 744.388, 746.661, 746.295, 745.344, 745.785, 746.562, 745.886, 746.882, 747.687, 749.613, 750.668, 750.698, 750.582, 750.581, 750.924, 750.061, 750.18, 750.469, 751.066, 751.818, 752.853, 752.56, 752.452, 754.02, 754.474, 755.066, 754.32, 753.816, 753.43, 754.648, 753.93, 753.883, 754.381, 754.23, 753.995]; 
var avgPrice_S = [null, 746.684, 744.987, 744.452, 745.257, 746.505, 745.136, 743.088, 739.635, 736.608, 738.745, 739.876, 740.801, 744.352, 746.156, 745.742, 744.728, 745.063, 745.762, 745.222, 746.314, 746.96, 749.155, 750.118, 750.019, 749.988, 749.891, 750.27, 749.458, 749.593, 749.749, 750.395, 751.258, 752.237, 751.986, 751.948, 753.443, 753.895, 754.541, 753.752, 753.188, 752.904, 754.048, 753.327, 753.286, 753.845, 753.684, 753.395]; 
var volumes = [4555231, 8569671, 29834236, 43449767, 44355293, 39476145, 40639626, 44680765, 40771018, 56494630, 30667354, 38370365, 23951932, 30868346, 33022577, 27735370, 17716978, 20144084, 21034954, 22088587, 21713138, 21905126, 31834305, 29656215, 37789521, 20949095, 34851452, 28642230, 25233429, 20271758, 21061286, 23618609, 25761730, 32395102, 32204379, 24629523, 30599490, 33854231, 37296290, 31143153, 30251363, 28177590, 40440738, 31885986, 37678216, 44769627, 58612842, 58941163]; 