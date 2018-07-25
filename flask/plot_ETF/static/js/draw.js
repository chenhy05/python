//定义涨跌颜色
var upColor = '#00da3c';
var downColor = '#ec0000';

// var kday = ['2017-01-03', '2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09']; 
// var kdata = [[1965.041, 1971.914, 1959.139, 1963.255], [1963.024, 1992.759, 1959.574, 1991.565], [1990.696, 1993.709, 1983.84, 1983.971], [1980.84, 1982.4, 1963.323, 1965.03], [1962.205, 1968.87, 1951.486, 1961.619]]; 
// var volumes = [732799660, 996683958, 766451070, 796877211, 712730047]; 
// var fvalue = [-0.111026868001628, 0.453166247686209, -0.207466632743483, -0.675159674109412, -0.175406423276194]; 

// var kday = ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'];
// var kdata = [
            // [20, 30, 10, 35],
            // [40, 35, 30, 55],
            // [33, 38, 33, 40],
            // [40, 40, 32, 42]
        // ];
// var volumes = [86160000,79330000,102600000,104890000];
// var fvalue = [0.75,-0.65,0.35,0.22];

// for (var i=0;i < orderImb_all.length;i++)
// {
	// if(isNaN(orderImb_all[i]))
	// {
		// orderImb_all[i] = null;
	// }  
// }



var Kchart1 = echarts.init(document.getElementById('Kchart1'));
Kchart1.setOption(option = {
    title: {
        left: 'center',
        text: 'Order Imbalance'
    },
    backgroundColor: '#fff',
    animation: false,
    legend: {
        top: 30,
        left: 'center',
		selected:{
			'daybar': true,
			'orderImb_ALL': true,
			'orderImb_SMALL': false,
			'orderImb_MEDIUM': false,
			'orderImb_BIG': false,
			'orderImb_SUPER': false,
			'volume': true,
		}
    },
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
//        position: function (pos, params, dom, rect, size) {
//            var obj = {top: 60};
//            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
//            return obj;
//                  // extraCssText: 'width: 170px'
//                  
//        }
    },
//    visualMap: {
//        show: true,
//        seriesIndex: 2,
//        dimension: 2,
//        pieces: [{
//            value: 1,
//            color: downColor
//        }, {
//            value: -1,
//            color: upColor
//        }]
//    },
                  
    axisPointer: {
        link: {xAxisIndex: 'all'},
        label: {
            backgroundColor: '#777'
        }
    },
                  
                  
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            brush: {
                type: ['lineX', 'clear']
            }
        }
    },
                  
                  
    brush: {
        xAxisIndex: 'all',
        brushLink: 'all',
        outOfBrush: {
            colorAlpha: 0.1
        }
    },
                  
    grid:[
        {
          left: '10%',
          right: '8%',
          height: '50%'
        },
        {
          left: '10%',
          right: '8%',
          top: '73%',
          height: '15%'
        }
    ], 
	xAxis: [
        {
            type: 'category',
            data: kday,
            scale: true,
//            boundaryGap : false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
            axisPointer: {
                z: 100
            }
        },
        {
            type: 'category',
            gridIndex: 1,
            data: kday,
            scale:true,
//            boundaryGap : false,
            axisLine: {onZero: false},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        }
    ],
    yAxis: [
        {
            scale:true,
            splitArea: {
                show: true
            }
        },
        {
//            gridIndex:1,
            scale:true,
            splitNumber: 2,
//            axisLabel: {show: false},
//            axisLine: {show: false},
//            axisTick: {show: false},
//            splitLine: {show: false},
        },
        {
            gridIndex:1,
            scale:true,
            splitNumber: 2,
//            axisLabel: {show: false},
//            axisLine: {show: false},
//            axisTick: {show: false},
//            splitLine: {show: false},
        },
    ],
    dataZoom: [
        {
            type: 'inside',
            xAxisIndex: [0, 1],
            start: 70,
            end: 100
        },
        {
            show: true,
            xAxisIndex: [0, 1],
            type: 'slider',
            top: '95%',
            start: 0,
            end: 100
        }
    ],
                  
    series: [
        {
             name:'daybar',
             type: 'k',
             data: kdata,
             itemStyle: {
				color: downColor,
				color0: upColor,
				borderColor: downColor,
				borderColor0: upColor	
             }
        },
        {
             name: 'orderImb_ALL',
             type: 'line',
             data: orderImb_all,
             yAxisIndex:1,
             smooth: false,
             lineStyle: {
                opacity: 0.9,
				color: "#070000" 
             },
             markLine: {
				symbol: NaN,
				label:{
					show: false
				},
				lineStyle: {
						opacity: 0.8,
						color: "#070000" 
					 },
                data: [
                    {
						name: 'base',
						yAxis: 0
					},
                ]
             }
        },
		{
             name: 'orderImb_SMALL',
             type: 'line',
             data: orderImb_small,
             yAxisIndex:1,
             smooth: false,
             lineStyle: {
                opacity: 0.5,
				color: "red" 
             }
        },
		{
             name: 'orderImb_MEDIUM',
             type: 'line',
             data: orderImb_med,
             yAxisIndex:1,
			 silent: true,
             smooth: false,		
             lineStyle: {
                opacity: 0.5,
				color: "green" 
             }
        },
        {
             name: 'orderImb_BIG',
             type: 'line',
             data: orderImb_big,
             yAxisIndex:1,
             smooth: false,
             lineStyle: {
                opacity: 0.5,
				color: "blue" 
             }
        },
		{
             name: 'orderImb_SUPER',
             type: 'line',
             data: orderImb_super,
             yAxisIndex:1,
             smooth: false,
             lineStyle: {
                opacity: 0.5,
				color: "#DF01D7" 
             }
        },
        {
             name: 'volume',
             type: 'bar',
             xAxisIndex: 1,
             yAxisIndex: 2,
             data: volumes,
             itemStyle: {
				  normal: {
					  color: function(params) {
						  var colorList;
						  if (kdata[params.dataIndex][1] > kdata[params.dataIndex][0]) {
							  colorList = '#ef232a';
						  } else {
							  colorList = '#14b143';
						  }
						  return colorList;
					  },
				  }
			  }
        },
    ]
},true);

//
//Kchart1.dispatchAction({
//    type: 'brush',
//    areas: [
//        {
//            brushType: 'lineX',
//            coordRange: ['2017-08-04', '2017-09-18'],
//            xAxisIndex: 0
//        }
//    ]
//});
//
//











