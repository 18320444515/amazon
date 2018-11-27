/* 初尝ECharts折线图和柱状图 */

/* 
使用说明：
1. 动态渲染的时候，改变 DATA 内部的相应内容即可更新数据；
2. 各 option 设置成了静态内容；
3. Grade 是综合其他各项计算得出的得分，可以按需修改其计算的方法（例如应用为“建议标价suggested bid”），详见 calculate( )
 */

/* 专门存放数据 */
var DATA = {
	/* 此数据用于block2 */
	BLOCK2: {
		COLOR: ['#01579b','#0277bd','#0288d1','#039be5','#0091ea','#00b0ff'],
		NAME: ['impression','spend','sales','Acos(%)','rank','value','Grade'],/* “系列”的名称信息 */
		CATEGORY: ["10/29/2018","10/30/2018","11/1/2018","11/2/2018","11/3/2018","11/4/2018"],/* X轴的文字描述信息（可以改为日期数组） */


		/* 下面是对应于 NAME[] 的详细数据 */
		IMPRESSION:[56,123,89,12,47,512],
		SPEND:[11,55,33,44,22,77],
		SALES:[89,154,222,333,111,99],
		ACOS:[80,56,77,45,35,91],
		RANK:[46,123,356,145,253,444],
		VALUE:[355,244,488,189,444,333],

		KEYWORD: "(default keyword)",

		countMonthGrade:function(){
			var rt = [];

			for (var i = 0; i < this.NAME.length - 1; i++) {
				result = calculate( this.IMPRESSION[i], this.SPEND[i], this.SALES[i], this.ACOS[i], this.RANK[i], this.VALUE[i]);
				rt.push(result);
			}

			return rt;
		}
	}
};

var calculate = function(impression, spend, sales, Acos, rank, value){
	return 3*(impression + spend + sales + Acos + rank + value)/6;
};


/* style 设置 */
var ITEM_STYLE_1 = {
    normal: {
        label: {
            show: true, 
            position: 'top',
            formatter:"{a}: {c}"
        }
    }
};
/* 专门用于评分曲线的样式 */
var ITEM_STYLE_3 = {
    normal: {
    	color: '#FFC107',
        label : {
            show: true, 
            position: 'top',
            formatter:function(params){
            	var rt = params.name + '\n';

            	var index = params.seriesIndex; /* 当前对应横坐标的下标 */
            	console.log(params);
            	
            	rt += 'Grade: ' + params.value + 
            		'\nimpression: ' + DATA.BLOCK2.IMPRESSION[index] + 
            		'\nspend: ' + DATA.BLOCK2.SPEND[index] + 
            		'\nsales: ' + DATA.BLOCK2.SALES[index] +
            		'\nAcos(%): ' + DATA.BLOCK2.ACOS[index] +
            		'\nrank: ' + DATA.BLOCK2.RANK[index] + 
            		'\nvalue: ' + DATA.BLOCK2.VALUE[index] ;
            	
            	return rt;
            }
        },

        lineStyle: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.25)',
            shadowBlur: 10,
            shadowOffsetY: 10
        }
    }
};

/* block2 专用 */
var option_block2 = {
	/* 全局调色 */
	color : DATA.BLOCK2.COLOR,
	backgroundColor: '#e1f5fe',
    tooltip: {
        // show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    legend: {
    	/*
    	解读： 
    	1. 这个是分类的说明（如不同的颜色）
    	2. 类似主键的作用，与下方的数据对象有关联 
    	*/
        data: DATA.BLOCK2.NAME
    },
    xAxis : [
        {
        	/* 这个是横坐标的相关设置（主要是名称）*/
            type : 'category',
            data : DATA.BLOCK2.CATEGORY,
            splitLine: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false
            }
        },
        {
            type : 'value',
        }
    ],

    /* 这里是设置多种图表类型的地方 */
    series : [
        {
            "name":DATA.BLOCK2.NAME[0],
            "type":"bar",
            "data":DATA.BLOCK2.IMPRESSION,
            "itemStyle":ITEM_STYLE_1
        },
        {
            "name":DATA.BLOCK2.NAME[1],
            "type":"bar",
            "data":DATA.BLOCK2.SPEND,
            "itemStyle":ITEM_STYLE_1
        },
        {
            "name":DATA.BLOCK2.NAME[2],
            "type":"bar",
            "data":DATA.BLOCK2.SALES,
            "itemStyle":ITEM_STYLE_1
        },
        {
            "name":DATA.BLOCK2.NAME[3],
            "yAxisIndex":1,
            "type":"line",
            "data":DATA.BLOCK2.ACOS,
            "itemStyle":ITEM_STYLE_1
        },
        {
            "name":DATA.BLOCK2.NAME[4],
            "type":"line",
            "data":DATA.BLOCK2.RANK,
            "itemStyle":ITEM_STYLE_1
        },
        {
            "name":DATA.BLOCK2.NAME[5],
            "type":"line",
            "data":DATA.BLOCK2.VALUE,
            "itemStyle":ITEM_STYLE_1
        },
        {
            "name":DATA.BLOCK2.NAME[6],
            "type":"line",
            "data":DATA.BLOCK2.countMonthGrade(),
            "itemStyle":ITEM_STYLE_3
        }
    ]
};
	
// // 使用
var block2 = echarts.init(document.getElementById('block2'));
// 为echarts对象加载数据 
block2.setOption(option_block2);
