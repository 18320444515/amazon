
// console.log("The original data is: "+CONFIG.COLOR);

/* 注意，在使用result对象的时候不需要写data，直接写result.map_items即可获取到map_items的内容 */
var result = null;
console.log(result)

var df = {
	"page": 1,
	"rows": 4,
	"totalFlag": false
}
/* 解释： */
var refresh = function(){
	var params = {
		"dayFlag": 1,
		"page": df.page,
		"rows": df.rows
	}
////	console.log(Date.parse(new Date(2018, 11-1, 10)) + "--" + Date.parse(new Date(2018, 11-1, 11)))
	ajaxObj.sendAjax("queryKeywordList", params, function(data){
//  	console.log(data)
    	getTotalChartData(data, true);
//  	getChartData(data);
    	
    	/** jQuery效果 **/
    	$(document).ready(function(){
		
			$('#filter_button').click(function(){
				// $('.hidden_div').attr('style','display:block');
				$('.hidden_div').show();
				console.log("Dsds")
			});
		
			$('#shadow').click(function(){
				$('.hidden_div').hide();
			});
			
			$("#excel_button").click(function(){
				updateExcel();
			});
			
			$("#total_button").click(function(){
				if(df.totalFlag){
					df.totalFlag = false;
					$(this).removeClass("active");
				}else{
					df.totalFlag = true;
					$(this).addClass("active");
				}
				updateChart();
			});
			
			$('.more-btn').click(function(){
				addPageData()
			});
			
		})
    })
}

refresh();

var updateExcel = function(){
	var $excelBtn = $("#excel_button");
	if($excelBtn.hasClass("loading")) return;
	$excelBtn.addClass("loading").html("正在录入中...");
	
	ajaxObj.sendAjax("updateExcel", null, function(data){
		if(data == "ok"){
			alert("录入完成！");
			$excelBtn.removeClass("loading").html("录入");
		}
	});
}

/**
 * 
 * @param {Object} totalList
 */
var getTotalChartData = function(totalList, refresh){
	if(totalList.length == 0){
		$(".more-btn").html("没有更多了");
		return false;
	}
	if(refresh){
		DATA.FAKE.KEYWORD_NAME = [];
		DATA.FAKE.KEYWORD_DATA = [];
	    DATA.FAKE.CurrentIndex = 0;
	}
	
    var totalData = null;
    var temp = null;
    for(var t in totalList){
    	totalData = totalList[t];
    	temp = getSingleChartData(totalData, {"dayFlag": 1});
    	
    	DATA.FAKE.KEYWORD_NAME.push(totalData.id);
		DATA.FAKE.KEYWORD_DATA.push(temp);
    }
    
    if(refresh){
    	initChart(df.page);
    }else{
    	updateChart(df.page);
    }
}

var addPageData = function(){
	df.page++;
	var params = {
		"dayFlag": 1,
		"page": df.page,
		"rows": df.rows
	}
	ajaxObj.sendAjax("queryKeywordList", params, function(data){
		console.log(data)
    	getTotalChartData(data);
    	updateChart(df.page);
  	});
}

var refreshSingleData = function(dayFlag){
	var params = null;
	var startTime = null;
	var endTime = null;
	var keywordId = DATA.FAKE.KEYWORD_NAME[DATA.FAKE.CurrentIndex];
	
	var dayObj = {
		dayFlag: dayFlag
	}
	if(dayFlag == 0){
		var $timeInput = $("#time_" + keywordId);
		var beginStr = $timeInput.children("input[name='begin']").val();
		var endStr = $timeInput.children("input[name='end']").val();
		
		if(beginStr == "" || endStr == ""){
			alert("请设置筛选时间！！");
			return;
		}
//		console.log(beginStr + "--" + endStr)
//		console.log(getInputDate(beginStr))
		
		startTime = Date.parse(getInputDate(beginStr));
		endTime = Date.parse(getInputDate(endStr));
		if(endTime < (startTime + 1)){
			alert("结束时间需大于起始时间！！");
			return;
		}
		dayObj.startTime = startTime;
		dayObj.endTime = endTime;
	}
	
	params = {
		"id": keywordId,
		"dayFlag": dayFlag
	}
	if(startTime) params.startTime = startTime;
	if(endTime) params.endTime = endTime;
	ajaxObj.sendAjax("queryAllData", params, function(data){
    	console.log(data)
		updateSingleChart(data, dayObj);
   })
}

var updateSingleChart = function(totalData, dayObj){
	var index = DATA.FAKE.CurrentIndex;
	
	DATA.FAKE.KEYWORD_DATA[index] = getSingleChartData(totalData, dayObj);
	
	var chartId = "mapid_"+DATA.FAKE.KEYWORD_NAME[index];
	console.log(chartId)
	var temp = echarts.init(document.getElementById(chartId));
	
//	console.log(DATA.FAKE.KEYWORD_DATA.length)
//	DATA.FAKE.CurrentIndex = 1
	temp.setOption(getMapOptionByIndex(index, df.totalFlag));
}

var initChart = function(page){
	if(result) returns; 
	result = new Vue({
	    el:'.main',
	    data: {
	    	map_names:DATA.FAKE.KEYWORD_NAME,
	        map_items:DATA.FAKE.KEYWORD_DATA
	    },
	    methods: {
            "updateChart": _.debounce(function(){
                updateChart(df.page)
            }, 1000)
        }
	});
	updateChart(page);
}

var updateChart = function(page){
//	console.log(result.map_names);
	var start = 0
	var end = DATA.FAKE.KEYWORD_NAME.length;
	if(page){
		start = (page - 1) * df.rows;
		end = page * df.rows;
	}
	DATA.FAKE.CurrentIndex = start;
	console.log(page + "--" + start + "--" + end)
	
	var dom = document.getElementById("mapid_"+DATA.FAKE.KEYWORD_NAME[start]);
	if(!dom) return;
	
	var temp = null;
	
	var $mapDom = null;
	var $buttonDom = null;
	for (var i = start; i < end; i++) {
//		id = "mapid_"+DATA.FAKE.KEYWORD_NAME[i];
		dom = document.getElementById("mapid_"+DATA.FAKE.KEYWORD_NAME[i]);
		temp = echarts.init(dom);
//		// 为echarts对象加载数据 
		temp.setOption(getMapOptionByIndex(i, df.totalFlag));
    	DATA.FAKE.CurrentIndex = i + 1;
		
		if(!page) continue;
		$mapDom = $(dom).parents(".map");
		$mapDom.hover(function(){
		    DATA.FAKE.CurrentIndex = $(this).attr("mapid");
		});
		
//		console.log($mapDom)
		$buttonDom = $mapDom.find(".map_button>.button-box>button");
//		console.log($buttonDom)
		$buttonDom.click(function(){
			var $this = $(this);
			var dayFlag = $this.data("day");
			refreshSingleData(dayFlag);
			$this.addClass("active").siblings().removeClass("active");
		});
//		console.log(id);
	}
}

var getInputDate = function(str){
	if(str == "") return null;
	var strArr = str.split("-");
	var date = new Date(strArr[0], strArr[1]-1, strArr[2]);
	return date;
}

