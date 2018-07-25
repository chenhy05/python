var indexCode = 159936; 
var tdate = '2018-06-12'; 
var time_e = ['9:30:00', '9:40:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00', '15:05:00']; 
var oi = [-20734625.82, -13133140.09, -97942945.51, 92414707.24, 158344370.97, -13469121.57, -188194613.86, -210938186.56, -192732298.28, -336321013.69, 6021060.56, 105114756.74, 18241096.18, 209669173.84, 151739870.42, 23369727.71, -3153507.9, 163139659.06, 33102013.7, 217045470.7, 188118465.03, 262137482.22, 371619987.18, 254184702.33, 150549711.75, 165263165.92, 104307976.3, 87916587.91, 12068259.56, -43728975.24, 37551065.2, 258456257.95, 159478713.16, 47713491.71, -56268967.65, 147846404.31, 234054301.97, 230494163.52, 222184497.4, -42527611.1, -19478486.32, 96616451.42, 196678959.73, -34348001.84, 91596683.65, 103720125, -82582250.68, 49282772.98, 73378044.38]; 
var oi_cum = [-20734625.82, -33867765.91, -131810711.42, -39396004.18, 118948366.79, 105479245.22, -82715368.64, -293653555.2, -486385853.48, -822706867.17, -816685806.61, -711571049.87, -693329953.69, -483660779.85, -331920909.43, -308551181.72, -311704689.62, -148565030.56, -115463016.86, 101582453.84, 289700918.87, 551838401.09, 923458388.27, 1177643090.6, 1328192802.35, 1493455968.27, 1597763944.57, 1685680532.48, 1697748792.04, 1654019816.8, 1691570882, 1950027139.95, 2109505853.11, 2157219344.82, 2100950377.17, 2248796781.48, 2482851083.45, 2713345246.97, 2935529744.37, 2893002133.27, 2873523646.95, 2970140098.37, 3166819058.1, 3132471056.26, 3224067739.91, 3327787864.91, 3245205614.23, 3294488387.21, 3367866431.59]; 
var value_B = [179883002.42, 71934473.79, 531971008.42, 698464630.88, 737783200.29, 730055168.61, 506009298.32, 444100201.22, 464593038.6, 548117861.08, 351006361.04, 383678005.35, 279254672.28, 471915794.73, 404720016.99, 265945644.8, 224776785.62, 362099191.09, 277526865.85, 423084884.37, 409202593.96, 485353934.92, 622626422.89, 516541707.95, 449490171.31, 386896897.42, 385710156.06, 370721277.42, 286248475.7, 276050654.24, 326601687.71, 541978350.77, 513000216.67, 371356906.93, 290995160.42, 458255235.77, 511653586.61, 513291882.29, 569076153.52, 305753780.2, 293924065.31, 408141937.39, 515775858.05, 355736604.93, 492642324.03, 551753689.57, 495865908.04, 482821875.21, 203191345.88]; 
var value_S = [200617628.24, 85067613.88, 629913953.93, 606049923.64, 579438829.32, 743524290.18, 694203912.18, 655038387.78, 657325336.88, 884438874.77, 344985300.48, 278563248.61, 261013576.1, 262246620.89, 252980146.57, 242575917.09, 227930293.52, 198959532.03, 244424852.15, 206039413.67, 221084128.93, 223216452.7, 251006435.71, 262357005.62, 298940459.56, 221633731.5, 281402179.76, 282804689.51, 274180216.14, 319779629.48, 289050622.51, 283522092.82, 353521503.51, 323643415.22, 347264128.07, 310408831.46, 277599284.64, 282797718.77, 346891656.12, 348281391.3, 313402551.63, 311525485.97, 319096898.32, 390084606.77, 401045640.38, 448033564.57, 578448158.72, 433539102.23, 129813301.5]; 
var avgPrice_B = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; 
var avgPrice_S = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; 
var volumes = [29984751, 10876828, 91763691, 92980317, 80973800, 95149490, 80075272, 75321220, 82640947, 109128476, 51193243, 49215753, 38983705, 47781684, 42157603, 32384928, 29719613, 36597387, 31847017, 31571696, 32838921, 40398893, 54188318, 42047618, 53240496, 34572673, 38110417, 40900245, 34783515, 35021715, 37763397, 48193975, 56244767, 46611468, 45730235, 57268773, 58357206, 54714419, 65613750, 47074687, 39939087, 46617886, 52809638, 49478303, 55707507, 74095699, 84082635, 64702308, 29576790]; 