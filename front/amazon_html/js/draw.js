/* 初尝ECharts折线图和柱状图 */

/* 
使用说明：
1. 动态渲染的时候，改变 DATA 内部的相应内容即可更新数据；
2. 各 option 设置成了静态内容；
3. Grade 是综合其他各项计算得出的得分，可以按需修改其计算的方法（例如应用为“建议标价suggested bid”），详见 calculate( )
 */


/* 绘图配置 */
var CONFIG = {
    COLOR: ['#01579b','#039be5','#0277bd','#FFC107','#0288d1','#0091ea','#00b0ff'],
    NAME: ['impression','bid','rank','Acos(%)'],/* “系列”的名称信息 */
}


/* 专门存放数据 */
var DATA = {
	/* 此数据用于block2 */
	// BLOCK2: {
	// 	CATEGORY: ["10/29/2018","10/30/2018","11/1/2018","11/2/2018","11/3/2018","11/4/2018"],/* X轴的文字描述信息（可以改为日期数组） */

	// 	/* 下面是对应于 NAME[] 的详细数据 */
	// 	IMPRESSION:[56,123,89,12,47,512],
	// 	SPEND:[11,55,33,44,22,77],
	// 	SALES:[89,154,222,333,111,99],
	// 	ACOS:[80,56,77,45,35,91],
	// 	RANK:[46,123,356,145,253,444],
	// 	VALUE:[355,244,488,189,444,333],

	// 	KEYWORD: "(default keyword)",

	// 	countMonthGrade:function(){
	// 		var rt = [];

	// 		for (var i = 0; i < CONFIG.NAME.length - 1; i++) {
	// 			result = calculate( this.IMPRESSION[i], this.SPEND[i], this.SALES[i], this.ACOS[i], this.RANK[i], this.VALUE[i]);
	// 			rt.push(result);
	// 		}

	// 		return rt;
	// 	}
	// },

    /* 用于测试的假数据 */
    FAKE: {
        CurrentIndex: 0,
        KEYWORD_NAME: ['hello'],
        KEYWORD_DATA: [
            /* 内容需根据模板FAKE_FORMAT在方法 initFake() 生成 */
        ],
        /* 若后端接口没有Acos，需要通过此计算函数来获取Acos[] */
        getAcosGroupByKeywordIndex:function(index){
            var rt = [];
            var item = this.KEYWORD_DATA[index];
            for (var i = 0; i < item.date.length; i++) { /* 以日期数组的长度为Acos数组的长度 */
                result = calculate(item.spend[i], item.sales[i], item.cpc[i], item.order[i]);
                rt.push(result);
            }

            return rt;
        }
    }
};
/* TODO 计算Acos的公式 */
var calculate = function(spend, sales, cpc, order){
	return Math.floor(( spend + sales + cpc + order )/2);
};

/* 这是数据的模板 */
var FAKE_FORMAT = {
    date: [],
    impression: [],
    bid: [],
    rank: [],
    spend: [],
    sales: [],
    cpc: [],
    order:[],
    /* 若后端接口有Acos，则存放与此处，不再通过计算函数进行计算 */
    Acos: [],
    volume: 0,
    sbidLow: 0,
    sbidMedian: 1.2,
    sbidHigh: 1.6
}
var DAY_MS = 86400000;
/* 生成假数据 */
var initFake = function(){
    DATA.FAKE.KEYWORD_DATA = [];
    DATA.FAKE.CurrentIndex = 0;
    var now = Date.parse(new Date());
    for (var i = 0; i < DATA.FAKE.KEYWORD_NAME.length; i++) {
        var temp = {
            date: [],
            impression: [],
            bid: [],
            rank: [],
            spend: [],
            sales: [],
            cpc: [],
            order:[],
            /* 若后端接口有Acos，则存放与此处，不再通过计算函数进行计算 */
            Acos: [],
            volume: 0,
            sbidLow: 0,
		    sbidMedian: 1.2,
		    sbidHigh: 1.4,
		    matchType: "EXACT"
        };
        for (var j = 0; j < 7; j++) {
            temp.date.push( timestampToTime(now - DAY_MS*j) );
            temp.impression.push(Math.floor(Math.random()*800));
            temp.bid.push(Math.floor(Math.random()*800));
            temp.rank.push(Math.floor(Math.random()*20+20));
            temp.spend.push(Math.floor(Math.random()*800));
            temp.sales.push(Math.floor(Math.random()*800));
            temp.cpc.push(Math.floor(Math.random()*800));
            temp.order.push(Math.floor(Math.random()*800));
            
            temp.Acos.push(Math.floor(Math.random()*20 + 60));
        }
        console.log(temp.Acos)
        // console.log("temp = " + temp);
        DATA.FAKE.KEYWORD_DATA.push(temp);
//      DATA.FAKE.KEYWORD_DATA[i].Acos = DATA.FAKE.getAcosGroupByKeywordIndex(i);
    }
    // console.log("FAKE.KEYWORD_DATA = " + DATA.FAKE.KEYWORD_DATA);
    
}

/**
 * 
 * @param {Object} totalList
 */
var getTotalChartData = function(totalList){
	DATA.FAKE.KEYWORD_NAME = [];
	DATA.FAKE.KEYWORD_DATA = [];
    DATA.FAKE.CurrentIndex = 0;
    
    var totalData = null;
    var temp = null;
    for(var t in totalList){
    	totalData = totalList[t];
    	temp = getSingleChartData(totalData);
    	
    	DATA.FAKE.KEYWORD_NAME.push(totalData.id);
		DATA.FAKE.KEYWORD_DATA.push(temp);
    }
}

/**
 * 获取单个关键词图表数据
 * @param {Object} totalData
 */
var getSingleChartData = function(totalData){
	var detailData = totalData.detailList;
	var rankData = totalData.rankList;
	var latestDetail = totalData.latestDetail;
//	console.log(totalData)
//  var now = Date.parse(new Date());
    
    var temp = {
    	threshold: [],
        date: [],
//      dateRank: [],
        impression: [],
        bid: [],
        rank: [],
        spend: [],
        sales: [],
        cpc: [],
        order:[],
        /* 若后端接口有Acos，则存放与此处，不再通过计算函数进行计算 */
        Acos: [],
        sbidLow: 0,
	    sbidMedian: 0,
	    sbidHigh: 0,
	    name: totalData.name,
	    volume: totalData.volume,
	    matchType: totalData.matchType
    };
    if(latestDetail){
    	temp.sbidLow = latestDetail.sbidLow;
    	temp.sbidMedian = latestDetail.sbidMedian;
    	temp.sbidHigh = latestDetail.sbidHigh;
    }
    
    
	var formatObj = formatData(detailData, rankData);
	temp.threshold = formatObj.threshold;
	timeObj = formatObj.timeObj;
	timeArr = formatObj.timeArr;
	
	var oldAcos = formatObj.oldValue.Acos;
	var oldRank = formatObj.oldValue.rank;
	
	for(var t in timeArr){
		timeStamp = timeArr[t];
		timeItem = timeObj[timeStamp];
		console.log(timeItem)
		temp.date.push( timestampToTime(timeStamp) );
		if(timeItem.type == "detail"){
			temp.impression.push(timeItem.item.impression);
        	temp.bid.push(timeItem.item.keywordBid);
        	temp.spend.push(timeItem.item.spend);
        	temp.sales.push(timeItem.item.sales);
        	temp.order.push(timeItem.item.orders);
        
        	if(!timeItem.item.acos) timeItem.item.acos = 0;
        	temp.Acos.push(timeItem.item.acos);
        	
        	oldAcos = timeItem.item.acos;
        	
        	if(timeItem.item.keywordRank){
        		temp.rank.push(timeItem.item.keywordRank);
        		oldRank = timeItem.item.keywordRank;
        	}else{
        		temp.rank.push(oldRank);
        	}
		}else{
			temp.impression.push("-");
        	temp.bid.push("-");
        	temp.spend.push("-");
        	temp.sales.push("-");
        	temp.order.push("-");
        	temp.Acos.push(oldAcos);
        	temp.rank.push(timeItem.item.keywordRank);
        	oldRank = timeItem.item.keywordRank;
		}
		
	}
//	console.log(temp)
	return temp;
}

/**
 * 处理单个关键词图表数据
 * @param {Object} detailData
 * @param {Object} rankData
 */
function formatData(detailData, rankData){
	var impressionArr = [];
    var bidArr = [];
    var rankArr = [];
    var AcosArr = []; 
    
    var timeArr = [];
    var timeObj = {};
    var timeStamp = null;
	var timeItem = null;
    
    var detailItem = null;
	for(var d in detailData){
		detailItem = detailData[d];
		
		timeStamp = detailItem.createTime;
		timeArr.push(timeStamp);
		timeObj[timeStamp] = {
			"type": "detail",
			"item": detailItem
		}
		
        impressionArr.push(detailItem.impression);
        bidArr.push(detailItem.keywordBid);
        
        if(!detailItem.acos) detailItem.acos = 0;
        AcosArr.push(detailItem.acos);
	}
	
	var rankItem = null;
	for(var r in rankData){
		rankItem = rankData[r];
		
		timeStamp = rankItem.createTime;
		detailItem = timeObj[timeStamp];
		if(!detailItem){
			timeArr.push(timeStamp);
			timeObj[timeStamp] = {
				"type": "rank",
				"item": rankItem
			}
		}else{
			detailItem.item.rank = rankItem.keywordRank;
		}
		
		rankArr.push(rankItem.keywordRank);
	}
	console.log(timeArr)
	console.log(timeObj)
	
	var oldValue = {
		"Acos": AcosArr[0],
		"rank": rankArr[0]
	}
	var thresholdArr = [];
	thresholdArr.push(getThreshold(impressionArr, 1))
	thresholdArr.push(getThreshold(bidArr, 1))
	thresholdArr.push(getThreshold(rankArr, 2))
	thresholdArr.push(getThreshold(AcosArr, 3))
	
	timeArr.sort(function(a, b){
		return a - b
	});
	var formatObj = {
		"timeArr": timeArr,
		"timeObj": timeObj,
		"threshold": thresholdArr,
		"oldValue": oldValue
	}
	console.log(formatObj);
	return formatObj;
}

/**
 * 获取阈值
 * @param {Object} arr
 * @param {Object} type
 */
function getThreshold(arr, type){
	arr.sort(function(a, b){
		return a - b
	});
	var max = arr[arr.length - 1];
	var min = arr[0];
	if(min > 0) min = 0;
	
	var diff = (max - min) * 1.5;
	if(type == 1){
		max += diff * 2;
	}else if(type == 2){
		min -= diff * 0.8;
		max += diff;
	}else if(type == 3){
		max += 20;
		min -= 80;
	}
	
	var threshold = {"max": Math.floor(max), "min": Math.floor(min)};
	console.log(threshold);
	return threshold;
}

/* 时间戳转字符串 */
function timestampToTime(timestamp) {
    // var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var date = new Date(timestamp);
    Y = date.getFullYear() + '/';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
    D = date.getDate() ;
   	h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
   	m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
   	s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
    return Y + M + D + " " + h + m + s;
}

/* style 设置 */
var ITEM_STYLE_1 = {
    normal: {
        label: {
            show: true, 
            position: 'top',
            formatter:"{c}"
        }
    }
};
var ITEM_STYLE_4 = {
    normal: {
        label: {
            show: true, 
            position: 'top',
            formatter:"${c}"
        }
    }
};
var ITEM_STYLE_2 = {
    normal: {
        label: {
            show: true, 
            position: 'top',
            formatter:"{c}"
        },
        lineStyle: {
            width: 3,
            type: 'solid'
        }
    }
};
/* 专门用于Acos曲线的样式 */
var ITEM_STYLE_3 = {
    normal: {
    	color: '#FFC107',
        label : {
            show: true, 
            position: 'top',
            distance: 10,
            color: '#000',
            offset: [-50, 0],
            align: 'left',
            formatter:function(params){
            	var index = params.dataIndex; /* 当前对应横坐标的下标 */
                var p = DATA.FAKE.CurrentIndex;
            	var order = DATA.FAKE.KEYWORD_DATA[p].order[index];
            	if(order == "-") return "";
            	
            	var rt = "";
            	console.log('p = '+p+"\nparams = "+params);
            	
            	rt += 'order：' + order +
            		'\nsales：$' + DATA.FAKE.KEYWORD_DATA[p].sales[index] + 
            		'\nspend：$' + DATA.FAKE.KEYWORD_DATA[p].spend[index] +
            		'\n\n' + DATA.FAKE.KEYWORD_DATA[p].Acos[index] + "%Acos";
            	
            	return rt;
            }
        },

        lineStyle: {
            width: 4,
            type: 'solid',
            shadowColor: 'rgba(0,0,0,0.25)',
            shadowBlur: 10,
            shadowOffsetY: 10
        }
    }
};


/* CONFIG.NAME: ['impression','bid','rank','Acos(%)'] */
var getMapOptionByIndex = function(index){
    var option_block = {
        /* 全局调色 */
        color : CONFIG.COLOR,
        backgroundColor: '#F0F4F7',
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
        grid: {
            x:95,
            y:105,
            x2:160,
            y2:80,
            borderWidth:1
        },
        legend: {
            /*
            解读： 
            1. 这个是分类的说明（如不同的颜色）
            2. 类似主键的作用，与下方的数据对象有关联 
            */
            data: CONFIG.NAME,
            padding: [
                15,  // 上
                0, // 右
                0,  // 下
                0, // 左
            ]
        },
        xAxis : [
            {
                /* 这个是横坐标的相关设置（主要是名称）*/
                type : 'category',
                data : DATA.FAKE.KEYWORD_DATA[index].date,
                splitLine: {
                    show: false
                }
            },{
                /* 这个是横坐标的相关设置（主要是名称）*/
                type : 'time',
                position: 'top',
                data : DATA.FAKE.KEYWORD_DATA[index].dateRank,
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: 'Impression',
                min: DATA.FAKE.KEYWORD_DATA[index].threshold[0].min,
                max: DATA.FAKE.KEYWORD_DATA[index].threshold[0].max,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: CONFIG.COLOR[1]
                    }
                },
                splitLine: {
                    show: false
                }
            },
            {
                type : 'value',
                name: 'Bid',
                min: DATA.FAKE.KEYWORD_DATA[index].threshold[1].min,
                max: DATA.FAKE.KEYWORD_DATA[index].threshold[1].max,
				offset: 50,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: CONFIG.COLOR[1]
                    }
                },
                splitLine: {
                    show: false
                }
            },
            {
                type : 'value',
                name: 'Rank',
               	min: DATA.FAKE.KEYWORD_DATA[index].threshold[2].min,
                max: DATA.FAKE.KEYWORD_DATA[index].threshold[2].max,
                position: 'right',
                offset: 0,
                axisLine: {
                    lineStyle: {
                        color: CONFIG.COLOR[2]
                    }
                },
                axisLabel: {
                    formatter: 'No.{value}'
                }
            },
            {
                type: 'value',
                name: 'Acos(%)',
                min: DATA.FAKE.KEYWORD_DATA[index].threshold[3].min,
                max: DATA.FAKE.KEYWORD_DATA[index].threshold[3].max,
                position: 'right',
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: CONFIG.COLOR[3]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],

        /* 这里是设置多种图表类型的地方 */
        series : [
            {
                "name":CONFIG.NAME[0],
                "type":"bar",
                "yAxisIndex":0,
                "data":DATA.FAKE.KEYWORD_DATA[index].impression,
                "itemStyle":ITEM_STYLE_1
            },
            {
                "name":CONFIG.NAME[1],
                "type":"bar",
                "yAxisIndex":1,
                "data":DATA.FAKE.KEYWORD_DATA[index].bid,
                "itemStyle":ITEM_STYLE_4
            },
            {
                "name":CONFIG.NAME[2],
                "yAxisIndex":2,
                "type":"line",
                "data":DATA.FAKE.KEYWORD_DATA[index].rank,
                "itemStyle":ITEM_STYLE_2
            },
            {
                "name":CONFIG.NAME[3],
                "yAxisIndex":3,
                "type":"line",
                "data":DATA.FAKE.KEYWORD_DATA[index].Acos,
                "itemStyle":ITEM_STYLE_3
            }
        ]
    };
    return option_block;
}
	
// 使用
//initFake();
//getChartData();
// var block2 = echarts.init(document.getElementById('block2'));
// // 为echarts对象加载数据 
// block2.setOption(option_block2);

