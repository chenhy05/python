var indexCode = 159928; 
var tdate = '2018-06-12'; 
var time_e = ['9:30:00', '9:40:00', '9:45:00', '9:50:00', '9:55:00', '9:60:00', '10:05:00', '10:10:00', '10:15:00', '10:20:00', '10:25:00', '10:30:00', '10:35:00', '10:40:00', '10:45:00', '10:50:00', '10:55:00', '10:60:00', '11:05:00', '11:10:00', '11:15:00', '11:20:00', '11:25:00', '11:30:00', '13:05:00', '13:10:00', '13:15:00', '13:20:00', '13:25:00', '13:30:00', '13:35:00', '13:40:00', '13:45:00', '13:50:00', '13:55:00', '13:60:00', '14:05:00', '14:10:00', '14:15:00', '14:20:00', '14:25:00', '14:30:00', '14:35:00', '14:40:00', '14:45:00', '14:50:00', '14:55:00', '14:60:00', '15:05:00']; 
var oi = [45032516.4, 1645803.33, -50607397.82, 139570099.28, 247926859.35, 127583863.04, -69843892.05, -126657715.98, -64941235.16, -138733764.75, 46979868.3, 121465775.78, 130757378.01, 199379086.14, 103581653.91, -5685799.15, 33155729.44, 275602011.34, 9857840.34, 81684918.31, 142520012.13, 191342606.27, 199763233.99, 128837986.33, 75415566.95, 143475593.32, 67890786.22, 14497262.3, -74157571.69, -29670017.86, 15633899.19, 49202750.15, 10148132.16, 3128614.28, -41790017.85, 8168722.49, 116185562.56, 29860259.34, 27644769.81, -25835924.07, -12528278.4, 79297764.51, 130694442.82, -20270255.03, -38969645.93, -46023706.16, -34199152.96, 47472678.25, 33638482.21]; 
var oi_cum = [45032516.4, 46678319.73, -3929078.09, 135641021.19, 383567880.54, 511151743.58, 441307851.53, 314650135.55, 249708900.39, 110975135.64, 157955003.94, 279420779.72, 410178157.73, 609557243.87, 713138897.78, 707453098.63, 740608828.07, 1016210839.41, 1026068679.75, 1107753598.06, 1250273610.19, 1441616216.46, 1641379450.45, 1770217436.78, 1845633003.73, 1989108597.05, 2056999383.27, 2071496645.57, 1997339073.88, 1967669056.02, 1983302955.21, 2032505705.36, 2042653837.52, 2045782451.8, 2003992433.95, 2012161156.44, 2128346719, 2158206978.34, 2185851748.15, 2160015824.08, 2147487545.68, 2226785310.19, 2357479753.01, 2337209497.98, 2298239852.05, 2252216145.89, 2218016992.93, 2265489671.18, 2299128153.39]; 
var value_B = [77156607.53, 41366066.09, 251002737.72, 506785353.57, 646551597.94, 512864713.66, 295767853.36, 202809705.09, 223562001.69, 241074374.24, 207107024.76, 287907571.42, 270579892.95, 448201960.98, 264143199.24, 147305262.17, 143478853.69, 403651172.02, 206994499.88, 206653393.65, 318860253.84, 370080957.1, 337217896.37, 298731135.57, 281371868.21, 275854725.31, 213679031.43, 186580368.51, 173158828.16, 166110032.49, 167454037.55, 187597749.82, 145371785.05, 167132043.96, 112332093.5, 173983743.48, 270533627.35, 189778557.05, 179597403.02, 128906580.03, 123751590.64, 249543254.44, 272324729.23, 132908747.16, 184176438.38, 199334042.28, 297036168.9, 287169686.89, 81467084.3]; 
var value_S = [32124091.13, 39720262.76, 301610135.54, 367215254.29, 398624738.59, 385280850.62, 365611745.41, 329467421.07, 288503236.85, 379808138.99, 160127156.46, 166441795.64, 139822514.94, 248822874.84, 160561545.33, 152991061.32, 110323124.25, 128049160.68, 197136659.54, 124968475.34, 176340241.71, 178738350.83, 137454662.38, 169893149.24, 205956301.26, 132379131.99, 145788245.21, 172083106.21, 247316399.85, 195780050.35, 151820138.36, 138394999.67, 135223652.89, 164003429.68, 154122111.35, 165815020.99, 154348064.79, 159918297.71, 151952633.21, 154742504.1, 136279869.04, 170245489.93, 141630286.41, 153179002.19, 223146084.31, 245357748.44, 331235321.86, 239697008.64, 47828602.09]; 
var avgPrice_B = [1419.33, 1000.956, 2318.912, 2320.76, 2328.948, 2336.003, 2329.431, 2321.556, 2312.374, 2305.086, 2313.589, 2318.51, 2324.656, 2333.454, 2337.321, 2334.823, 2332.681, 2338.321, 2342.204, 2341.871, 2346.11, 2349.859, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; 
var avgPrice_S = [null, 1000.405, 2317.588, 2319.022, 2328.079, 2334.341, 2328.738, 2320.518, 2311.686, 2303.484, 2312.273, 2317.522, 2323.535, 2333.344, 2336.219, 2333.686, 2331.694, 2337.031, 2340.51, 2340.453, 2345.11, 2348.332, 2353.504, 2355.712, 2358.68, 2359.949, 2361.3, 2359.616, 2353.472, 2351.868, 2351.306, 2355.916, 2358.799, 2360.641, 2359.306, 2358.686, 2362.629, 2365.044, 2367.093, 2366.615, 2365.844, 2365.822, 1568.704, 1567.419, 1567.661, 2367.911, 2367.189, 2367.259, null]; 
var volumes = [5591091, 2748495, 21962462, 26888765, 37058985, 27764878, 21277549, 18560438, 19591146, 22964460, 11764152, 14010167, 10895044, 18262522, 13819171, 10237049, 9296080, 14283907, 12214824, 9972092, 18280274, 17241275, 16189092, 15218165, 13431850, 11525580, 11922201, 12416802, 12263357, 11278583, 10703940, 11689262, 10640704, 11766910, 8778984, 11146566, 14858678, 13563030, 12124879, 10117271, 9976559, 15769897, 17759431, 11689666, 16956790, 16877148, 20092905, 17872430, 3944043]; 
