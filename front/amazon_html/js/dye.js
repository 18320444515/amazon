
// console.log("The original data is: "+CONFIG.COLOR);

/* 注意，在使用result对象的时候不需要写data，直接写result.map_items即可获取到map_items的内容 */
var vm = null;
console.log(vm)

var df = {
	"page": 1,
	"rows": 30,
	"totalFlag": false,
	"refreshFlag": false,
	"asinIndex": 0,
	"groupId": null
}

var initDom = function(){
	/** jQuery效果 **/
	$(document).ready(function(){
//		console.log($("#total_button"))
	
		$('#filter_button').click(function(){
			// $('.hidden_div').attr('style','display:block');
			$('.hidden_div').show();
			console.log("Dsds")
		});
	
		$('.map').hover(function(){
			DATA.FAKE.CurrentIndex = $(this).attr("mapid");
		});

		$('#shadow').click(function(){
			$('.hidden_div').hide();
		});
		
		$("#excel_button").click(function(){
			updateExcel();
		});
		
		$("#total_button").click(function(){
			console.log("dsd")
			if(df.totalFlag){
				df.totalFlag = false;
				$(this).removeClass("active");
			}else{
				df.totalFlag = true;
				$(this).addClass("active");
			}
			updateChart();
		});
		
		$("#delete_button").click(function(){
			if(confirm('确定要删除全部数据吗'))
			ajaxObj.sendAjax("deleteAllData", null, function(data){
        		if(data == "ok"){ 
        			alert("删除成功！");
        			window.location.reload();
        		}
		  	});
		});
		
//		$('.more-btn').click(function(){
//			addPageData()
//		});
		
	})
}

var initVue = function(){
	if(!vm){
		vm = new Vue({
		    el:'.all',
		    data: {
		    	asin_items: DATA.ASIN,
		    	group_items: DATA.ASIN[df.asinIndex].groupList,
		    	map_names:DATA.FAKE.KEYWORD_NAME,
		        map_items:DATA.FAKE.KEYWORD_DATA,
		        group_id: df.groupId
		    },
		    methods: {
	            "updateChart": _.debounce(e => {
	            	var $this = $(e.target);
	            	if($this.hasClass("no-more")) return;
	            	console.log($this);
	            	addPageData();
	            }, 1000),
	            "changeAsin": e => {
	            	var $this = $(e.target);
	            	df.asinIndex = $this.attr("asinIndex");
	            	df.groupId = null;
	            	vm.group_id = df.groupId;
	            	$(".top-bar-section>ul>li").eq(0).addClass("active").siblings().removeClass("active");
	            	
	            	vm.group_items = DATA.ASIN[df.asinIndex].groupList
	            	
	            	$this.addClass("active").siblings().removeClass("active");
	            	addPageData(true);
	            },
	            "updateExcel": function(){
	            	updateExcel();
	            },
	            "totalClick": e => {
	            	var $this = $(e.target);
	            	if(df.totalFlag){
						df.totalFlag = false;
						$this.removeClass("active");
					}else{
						df.totalFlag = true;
						$this.addClass("active");
					}
					updateChart();
	            },
	            "deleteAll": function(){
	            	
	            },
	            "deleteGroup": function(){
	            	if(confirm('确定要此分组吗？'))
	            	ajaxObj.sendAjax("deleteGroup", {"id":df.groupId}, function(data){
	            		if(data == "ok"){ 
		        			alert("删除成功！");
		        			window.location.reload();
		        		}
				  	});
	            },
	            "addGroup": function(){
//	            	alert("添加分组")
	            	var name = prompt("请输入新的分组名字","");
	            	if (name != null && name != ""){
	            		// 添加分组API
	            		ajaxObj.sendAjax("insertGroup", {"asinId":vm.asin_items[df.asinIndex].id,"name": name}, function(data){
			        		if(data != 0) {
			        			alert("添加分组成功");
			        			window.location.reload();
				        		// 设置分组到页面
				        		// vm.group_items.push({"id": data, "name": name});
			        		}else{
			        			alert("添加分组失败");
			            	}
					  	});
	            	}
	            },
	            "changeGroup": e => {
	            	var $this = $(e.target).parent();
	            	console.log($this)
	            	df.groupId = $this.attr("groupId");
	            	if(df.groupId == 0) {
	            		df.groupId = null;
	            		vm.group_id = df.groupId;
	            	}else{
	            		vm.group_id = df.groupId;
	            	}
//	            	console.log(df.groupId)
	            	
	            	$this.addClass("active").siblings().removeClass("active");
	            	addPageData(true);
	            },
	            "chooseGroup": e => {
	            	console.log("choose");
	            	$(e.target).siblings(".group-list").toggleClass("active");
	            },
	            "confirmGroup": e => {
	            	var $this = $(e.target);
	            	var $parent = $this.parent();
	            	
	            	var id = DATA.FAKE.KEYWORD_NAME[DATA.FAKE.CurrentIndex];
	            	var groupid = $this.attr("groupid");
	            	console.log("id: "+id+", confirm "+groupid);
	            	$parent.siblings(".group-value").html($this.html());
	            	$parent.removeClass("active");

	      //       	改变分组
	            	ajaxObj.sendAjax("changeGroup", {"id":id, "groupId":groupid}, function(data){
	            		// console.log(data);
				  	});
	            }
	        }
		});
	}
}

var initChart = function(){
	initVue();
	df.page = 1;
	updateChart();
}

var addPageData = function(refresh){
	if(refresh){
		df.page = 1;
		$(".more-btn").removeClass("no-more").html("加载更多");
		$("body").scrollTop(0);
	}else{
		df.page++;
	}
	var asinId = DATA.ASIN[df.asinIndex].id;
	if (df.groupId==0) {
		var groupId = null;
	}else{
		var groupId = df.groupId;
	}
	
	var params = {
		"dayFlag": 1,
		"page": df.page,
		"rows": df.rows,
		"asinId": asinId
	}
	if(groupId) params.groupId = groupId;
	ajaxObj.sendAjax("queryKeywordList", params, function(data){
//		console.log(data)
    	getTotalChartData(data, refresh);
  	});
}

var addAsinData = function(){
	ajaxObj.sendAjax("queryAsinList", null, function(data){
		// console.log(data)
		if(data.length > 0){
			DATA.ASIN = [];
			for(var d in data){
				DATA.ASIN.push(data[d]);
			}
			addPageData(true);
		}
		initDom();
//  	getTotalChartData(data, refresh);
  	});
}

/* 解释： */
var refresh = function(){
	addAsinData();
//	addPageData(true);
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
	if(totalList.length < df.rows){
		$(".more-btn").addClass("no-more").html("没有更多了");
	}
	
	if(refresh){
		DATA.FAKE.KEYWORD_NAME = [];
		DATA.FAKE.KEYWORD_DATA = [];
	    DATA.FAKE.CurrentIndex = 0;
	}
	
	if(totalList.length == 0){
		vm.map_names = DATA.FAKE.KEYWORD_NAME;
    	vm.map_items = DATA.FAKE.KEYWORD_DATA;
		return false;
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
    	initChart();
    }else{
    	updateChart(df.page);
    }
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

var updateChart = function(page){
//	console.log(DATA.FAKE.KEYWORD_NAME)
//	console.log(DATA.FAKE.KEYWORD_DATA)
	vm.map_names = DATA.FAKE.KEYWORD_NAME;
    vm.map_items = DATA.FAKE.KEYWORD_DATA;
//	console.log(vm.map_names);
	var start = 0
	var end = DATA.FAKE.KEYWORD_NAME.length;
	if(page){
		start = (page - 1) * df.rows;
		end = page * df.rows;
	}
	DATA.FAKE.CurrentIndex = start;
	console.log(page + "--" + start + "--" + end)
	
//	console.log("mapid_" + DATA.FAKE.KEYWORD_NAME[start])
	var dom = document.getElementById("mapid_"+DATA.FAKE.KEYWORD_NAME[end - 1]);
	
	if(!dom){
		setTimeout(function(){
			console.log("ww")
			updateChart(page)
		}, 200);
		return;
	}
	
//	console.log(dom)
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
		
//		if(!page) continue;
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

