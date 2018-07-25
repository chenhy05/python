//定义涨跌颜色
var upColor = '#00da3c';
var downColor = '#ec0000';


var Kchart1 = echarts.init(document.getElementById('Kchart1'));
Kchart1.setOption(option = {
    title: {
        left: 'center',
        text: indexCode + ' : ' + tdate,
		show: true
    },
    backgroundColor: '#fff',
    animation: false,
    legend: {
        // top: 10,
        // left: 'center',
		type: 'scroll',
        orient: 'vertical',
        right: 1,
        top: 40,
        bottom: 20,
		selected:{
		},
		// data: [{
			// name: 'avgPrice_B',
			// icon: 'line',
			// textStyle: {
				// color: "green",
			// }
		// }]
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
          left: '8%',
          right: '15%',
		  top: '5%',
          height: '45%'
        },
		{
          left: '8%',
          right: '15%',
          top: '55%',
          height: '20%'
        },
        {
          left: '8%',
          right: '15%',
          top: '77%',
          height: '16%'
        }
    ], 
	xAxis: [
        {
            type: 'category',
            data: time_e,
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
            data: time_e,
            scale:true,
//            boundaryGap : false,
            axisLine: {onZero: false},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        },
        {
            type: 'category',
            gridIndex: 2,
            data: time_e,
            scale:true,
            axisLine: {onZero: true},
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
            scale:true,
            splitNumber: 2,
        },
        {
            gridIndex:1,
            scale:true,
            splitNumber: 2,
        },
		{
            gridIndex:1,
            scale:true,
            splitNumber: 2,
        },
        {
            gridIndex:2,
            scale:true,
            splitNumber: 2
        }
    ],
    dataZoom: [
        {
            type: 'inside',
            xAxisIndex: [0, 1, 2],
            start: 0,
            end: 100
        },
        {
            show: true,
            xAxisIndex: [0, 1, 2],
            type: 'slider',
            top: '95%',
            start: 0,
            end: 100
        }
    ],
                  
    series: [
		{
             name:'avgPrice_B',
             type: 'line',
			 smooth: false,
             data: avgPrice_B,
             symbol: 'none',
             lineStyle: {
                opacity: 0.8,
				color: "red",
				type: "dotted"
             }
        },
		{
             name:'avgPrice_S',
             type: 'line',
			 smooth: false,
             data: avgPrice_S,
             symbol: 'none',
             lineStyle: {
                opacity: 0.8,
				color: "green",
				type: "dotted"
             }
        },
		{
             name: 'value_B',
             type: 'line',
             yAxisIndex:1,
             data: value_B,
             smooth: false,
			 symbol: 'none',
             lineStyle: {
                opacity: 0.8,
				color: "red",
				type: "solid"
             }
        },
		{
             name: 'value_S',
             type: 'line',
             yAxisIndex:1,
             data: value_S,
             smooth: false,
			 symbol: 'none',
             lineStyle: {
                opacity: 0.8,
				color: "green",
				type: "solid"
             }
        },
        {
             name: 'oi',
             type: 'line',
             data: oi,
             xAxisIndex: 1,
             yAxisIndex: 2,
             smooth: false,
			 symbol: 'none',
             lineStyle: {
                opacity: 0.9,
				color: "black" 
             },
             markLine: {
				symbol: 'none',
				label:{
					show: false
				},
				lineStyle: {
						opacity: 0.5,
						color: "black",
						type: "solid"
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
            name: 'oi_cum',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 3,
            data: oi_cum,
            smooth: false,
			symbol: 'none',
             lineStyle: {
                opacity: 0.8,
				color: "black",
				type: 'dotted'
             },
			markLine: {
				symbol: 'none',
				label:{
					show: false
				},
				lineStyle: {
						opacity: 0.5,
						color: "black",
						type: "solid"
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
             name: 'volumes',
             type: 'bar',
             xAxisIndex: 2,
             yAxisIndex: 4,
             data: volumes,
			 itemStyle: {
				color: 'red'
			 }
        }
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











